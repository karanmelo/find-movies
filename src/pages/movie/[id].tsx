import { useRouter } from 'next/router';
import styled from 'styled-components';

import Movie from '../../components/pages/MovieDetails/';

const PageLost = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    max-width: 60%;
  }
`;

const MovieDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id === 'undefined') return <></>;

  const isNumber = (value: any) => {
    const regex: RegExp = /^[0-9]+$/i;
    return regex.test(value);
  }

  if (!isNumber(id) || typeof id !== 'string' || id === '1') {
    return (
      <PageLost>
        <img src="/404-page-lost.png" alt="Page lost" />
      </PageLost>
    )
  }

  return (
    <Movie id={Number.parseInt(id)} />
  )
}

export default MovieDetails;