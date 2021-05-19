
import { useEffect } from 'react';
import { AppProps } from 'next/app';

import { AppContextProvider } from '../components/pages/context/AppContext';

import Layout from '../components/Layout/Layout';

import GlobalStyles from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  useEffect(() => {
    if("serviceWorker" in navigator) {
      window.addEventListener("load", function () {
       navigator.serviceWorker.register("/service-worker.js").then(
          function (registration) {
            console.log("Service Worker registration successful with scope: ", registration.scope);
          },
          function (err) {
            console.log("Service Worker registration failed: ", err);
          }
        );
      });
    }
  }, [])

  return (
    <>
      <Layout>
        <AppContextProvider>
          <Component {...pageProps} />
        </AppContextProvider>
      </Layout>
      <GlobalStyles />
    </>
  )
};

export default MyApp;
