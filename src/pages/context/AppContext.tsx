import React, {
  createContext,
  ReactNode,
  useState,
  useContext,
} from 'react';

type ContextValue = {

};

const AppContext = createContext<ContextValue | undefined>(void 0);

type Props = {
  children: ReactNode;
};

export function AppContextProvider(props: Props) {
  const { children } = props;

  const value = {

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