import { useEffect, useState } from 'react';
import Axios, { AxiosResponse } from "axios";

import { useAppContext, IGenre } from '../../../pages/context/AppContext';
import api from '../../../services/api';

import SearchBar from './SearchBar';
import CardMovie from './CardMovie/CardMovie';

import { Container } from './styled';

const Movies: React.FC = () => {
  const [movieToSearch, setMovieToSearch] = useState<string>('');
  const [movies, setMovies] = useState<[]>([]);
  const [loadingMovies, setLoadingMovies] = useState<boolean>(false);
  const [executeSearch, setExecuteSearch] = useState<boolean>(false);
  const { genres } = useAppContext();

  const removeDuplicates = (inArray: []) => {
    var arr = inArray.concat();

    for (var i = 0; i < arr.length; ++i) {
      for (var j = i + 1; j < arr.length; ++j) {
        if (arr[i] === arr[j]) {
          arr.splice(j, 1);
        }
      }
    }
    return arr;
  }

  const filterGenresToSearch = (): IGenre[] => {
    return genres.filter((value: IGenre, index: number, array: IGenre[]) => {
      return value.name.toUpperCase().indexOf(movieToSearch.toUpperCase()) > -1;
    })
  }

  useEffect(() => {
    let mounted: boolean = true;
    const currentRequest = Axios.CancelToken.source();

    if (executeSearch && movieToSearch !== '') {
      setLoadingMovies((true));
      api.get('search/movie', {
        params: {
          "query": movieToSearch,
          "append_to_response": "videos"
        },
        cancelToken: currentRequest.token
      })
        .then((value: AxiosResponse<any>) => {
          if (!mounted) return;

          setMovies(value.data.results);
        })
        .catch((reason: any) => {
          if (!mounted) return;

          console.log(`Error: ${reason}`);
          setMovies([]);
        })
        .finally(() => {
          let genresToSearch: string = '';

          filterGenresToSearch().map((genre: IGenre) => {
            genresToSearch = genresToSearch.concat(`${genre.id.toString()},`);
          });

          api.get('discover/movie', {
            params: {
              "with_genres": genresToSearch,
              "include_video": true
            },
            cancelToken: currentRequest.token
          })
            .then((value: AxiosResponse<any>) => {
              if (!mounted) return;

              console.log(value.data.results);
            })
            .catch((reason: any) => {
              if (!mounted) return;

              console.log(`Error: ${reason}`);
              setMovies([]);
            })
            .finally(() => {
              setLoadingMovies(false);
              setExecuteSearch(false);
            });
        });
    }

    return () => {
      currentRequest.cancel("Operation canceled by the user.");
      mounted = false;
    }
  }, [executeSearch]);

  const handleKeyPressOnSearch = (code: string) => {
    if (code === 'Enter') {
      setExecuteSearch(true);
    }
  }

  return (
    <Container>
      <SearchBar
        id="search-movies"
        placeholder="Busque um filme por nome ou gênero..."
        value={movieToSearch}
        onChange={(event) => setMovieToSearch(event.target.value)}
        onKeyPress={(event) => handleKeyPressOnSearch(event.code)}
      />
      {!loadingMovies && movies.map((movie: any, idx: number) => {
        return (
          <CardMovie key={idx} />
        )
      })}
    </Container>
  )
}

export default Movies;