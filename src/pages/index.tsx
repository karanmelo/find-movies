import { NextPage } from 'next';
import Movies from '../components/pages/Movies/';

const Home: NextPage = () => {
  return (
    <Movies />
  )
};

Home.getInitialProps = async (_ctx) => {
  return { id: 0 };
};

export default Home;