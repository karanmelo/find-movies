import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from 'react';
import Axios, { CancelTokenSource } from "axios";

import api from '../../../services/api';

type ContextValue = {
  genres: IGenre[];
  movies: IMovie[];
  setMovies: Dispatch<SetStateAction<IMovie[]>>;
  getGenreName: (genreId: number) => string;
  getMovieDetails: (id: number) => IMovie | null;
};

const AppContext = createContext<ContextValue | undefined>(void 0);

export interface IMovie {
  id: number;
  title: string;
  release_date: string;
  overview: string;
  popularity: number;
  genre_ids: number[];
  original_language: string;
  poster_path: string;
  video: boolean;
}

export interface IGenre {
  id: number;
  name: string;
}

type Props = {
  children: ReactNode;
};

export function AppContextProvider(props: Props) {
  const { children } = props;
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [genres, setGenres] = useState<IGenre[]>([]);

  const getGenreName = useCallback((genreId: number): string => {
    const genreName: IGenre | undefined = genres.find((genre: IGenre) => {
      return genreId === genre.id;
    });

    if (!genreName) return '';

    return genreName.name;
  }, [genres]);

  const getMovieDetails = useCallback((id: number): IMovie | null => {
    
  alert(id)
  console.log(movies)
    const movie: IMovie | undefined = movies
      .find((movie: IMovie) => {
        return id === movie.id;
      });

    if (!movie) return null;

    return movie;
  }, [movies]);

  useEffect(() => {
    let mounted: boolean = true;
    const currentRequest: CancelTokenSource = Axios.CancelToken.source();

    api
      .get('genre/movie/list',
        {
          cancelToken: currentRequest.token
        }
      )
      .then((value: any) => {
        if (!mounted) return;

        const newGenres: IGenre[] = value.data.genres;
        setGenres(newGenres);
      })
      .catch((reason: any) => {
        if (!mounted) return;

        console.log(`Error: ${reason}`);
        setGenres([]);
      });

    return () => {
      currentRequest.cancel("Operation canceled by the user.");
      mounted = false;
    }
  }, [setGenres])

  const value = {
    genres,
    movies,
    setMovies,
    getGenreName,
    getMovieDetails,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext() {
  const context = useContext(AppContext);

  if (typeof context === 'undefined') {
    throw new Error('useAppContext must be used within an AppContext');
  }

  return context;
}