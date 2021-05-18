import { useEffect, useState, ChangeEvent, KeyboardEvent} from 'react';

import { useAppContext, IMovie, IGenre } from '../../../pages/context/AppContext';
import api from '../../../services/api';

import SearchBar from './SearchBar';
import SectionMovie from './SectionMovie';

import { Container } from './styled';

const Movies: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [currentMovies, setCurrentMovies] = useState<IMovie[]>([]);
  const [executeSearch, setExecuteSearch] = useState<boolean>(false);
  const [alreadyResearched, setAlreadyResearched] = useState<boolean>(false);
  const { movies, setMovies, genres } = useAppContext();

  const filterGenresToSearch = (): IGenre[] => {
    return genres.filter((value: IGenre, index: number, array: IGenre[]) => {
      return value.name.toUpperCase().indexOf(search.toUpperCase()) > -1;
    })
  }

  const pagination = (page: number, offset: number) => {
    return movies.slice(page * offset, ((page * offset) + offset));
  }

  const generateMovies = (_movies: IMovie[]) => {
    const newMovies: IMovie[] = _movies.filter((newMovie: any) => {
      let filter: boolean = true;

      movies.forEach((movie: any) => {
        if (newMovie.id === movie.id) {
          filter = false;
          return;
        }
      });

      return filter;
    });

    setMovies((curr: IMovie[]) => [...curr, ...newMovies])
  }

  const getDataMovies = async () => {
    let genresToSearch: string = '';

    filterGenresToSearch().map((genre: IGenre) => {
      genresToSearch = genresToSearch.concat(`${genre.id.toString()},`);
    });

    const [moviesByTitle, moviesByGenres] = await Promise.all([
      api
        .get('search/movie', {
          params: {
            "query": search
          }
        }),
      genresToSearch ? api
        .get('discover/movie', {
          params: {
            "with_genres": genresToSearch,
            "include_video": true
          }
        }) : null
    ]);

    if (moviesByTitle.status === 200) {
      const newMovies: IMovie[] = moviesByTitle.data.results
        .filter((movie: IMovie) => {
          const _title: string = movie.title.toUpperCase().replace(/[0-9!@#¨$%^&*)(+=._-]+/g, ' ');
          const _valueToSearch: string = search.toUpperCase().replace(/[0-9!@#¨$%^&*)(+=._-]+/g, ' ');

          return _title.indexOf(_valueToSearch) > -1;
        })
        .map((movie: IMovie): IMovie => {
          return {
            id: movie.id,
            title: movie.title,
            genre_ids: movie.genre_ids,
            original_language: movie.original_language,
            overview: movie.overview,
            popularity: movie.popularity,
            poster_path: movie.poster_path,
            release_date: movie.release_date,
            video: movie.video
          }
        });

      generateMovies(newMovies);

      if (!alreadyResearched) setAlreadyResearched(true);
    }

    if (moviesByGenres !== null) {
      if (moviesByGenres.status === 200) {
        const newMovies: IMovie[] = moviesByGenres.data.results
          .map((movie: IMovie): IMovie => {
            return {
              id: movie.id,
              title: movie.title,
              genre_ids: movie.genre_ids,
              original_language: movie.original_language,
              overview: movie.overview,
              popularity: movie.popularity,
              poster_path: movie.poster_path,
              release_date: movie.release_date,
              video: movie.video
            }
          })

        generateMovies(newMovies);
      }
    }
  }

  useEffect(() => {
    let mounted: boolean = true;

    if (movies.length > 0) {
      if (!mounted) return;

      setCurrentMovies(pagination(0, 5));
      return;
    }

    if (!mounted) return;

    setCurrentMovies([]);

    return () => {
      mounted = false;
    }
  }, [movies]);

  useEffect(() => {
    let mounted: boolean = true;

    if (search === '') {
      if (!mounted) return;

      setMovies([]);

      if (alreadyResearched) setAlreadyResearched(false);
    }

    return () => {
      mounted = false;
    }
  }, [search]);

  useEffect(() => {
    let mounted: boolean = true;

    if (executeSearch && search !== '') {
      if (!mounted) return;
      getDataMovies();
    }

    setExecuteSearch(false);

    return () => {
      mounted = false;
    }
  }, [executeSearch]);

  const handleKeyPressOnSearch = (key: string) => {
    if (key === 'Enter') {
      setMovies([]);
      setExecuteSearch(true);
    }
  }

  return (
    <Container>
      <SearchBar
        autoFocus
        id="search-movies"
        placeholder="Busque um filme por nome ou gênero..."
        value={search}
        onChange={(event: ChangeEvent<HTMLInputElement>) => setSearch(event.target.value)}
        onKeyPress={(event: KeyboardEvent<HTMLInputElement>) => handleKeyPressOnSearch(event.key)}
      />
      {executeSearch && <h1>Buscando Dados</h1>}
      {!executeSearch
        && search.length > 0
        && currentMovies.length === 0
        && alreadyResearched
        &&
        (
          <img
            src="/no-results-found.png"
            alt="No resuts found :("
            style={{ width: "50%", alignSelf: "center" }}
          />
        )
      }
      {!executeSearch && currentMovies.map((movie: IMovie, idx: number) => {
        return (
          <SectionMovie
            key={idx}
            movie={movie}
          />
        )
      })}
    </Container>
  )
}

export default Movies;