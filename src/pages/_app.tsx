import { AppProps } from 'next/app';

import Layout from '../components/Layout/Layout'

import GlobalStyles from '../styles/globals';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      <GlobalStyles />
    </>
  )
}

export default MyApp;
