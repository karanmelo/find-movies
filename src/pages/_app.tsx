import { AppProps } from 'next/app';

import { AppContextProvider } from '../components/pages/context/AppContext';

import Layout from '../components/Layout/Layout';

import GlobalStyles from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => (
  <>
    <Layout>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </Layout>
    <GlobalStyles />
  </>
);

export default MyApp;
