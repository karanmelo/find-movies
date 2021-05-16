import {
  createContext,
  ReactNode,
  useState,
  useContext,
  useEffect,
} from 'react';
import Axios from "axios";

import api from '../../services/api';

type ContextValue = {
  genres: IGenre[];
};

const AppContext = createContext<ContextValue | undefined>(void 0);

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

  useEffect(() => {
    let mounted: boolean = true;
    const currentRequest = Axios.CancelToken.source();

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