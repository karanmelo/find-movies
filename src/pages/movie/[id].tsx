import { useRouter } from 'next/router';

import Movie from '../../components/pages/MovieDetails/';

const MovieDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  if (typeof id !== 'string') {
    return <h1>Formato inválido</h1>
  }

  if (id === '1') {
    return <h1>Código inválido</h1>
  }

  return (
    <Movie id={Number.parseInt(id)} />
  )
}

export default MovieDetails;