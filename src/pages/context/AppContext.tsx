import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
  useCallback,
} from 'react';
import Axios, { CancelTokenSource } from "axios";

import api from '../../services/api';

type ContextValue = {
  genres: IGenre[];
  getGenreName: (genreId: number) => string;
};

const AppContext = createContext<ContextValue | undefined>(void 0);

export interface IMovie {
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
  const [genres, setGenres] = useState<IGenre[]>([]);

  const getGenreName = useCallback((genreId: number): string => {
    const genreName: IGenre | undefined = genres.find((genre: IGenre) => {
      return genreId === genre.id;
    });

    if (!genreName) return '';

    return genreName.name;
  }, [genres]);

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
    getGenreName,
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