import React from 'react';
import { useRouter } from 'next/router';

const MovieDetails: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <h1>Movie id: {id}</h1>
  )
}

export default MovieDetails;