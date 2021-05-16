import Badge from '../../../Badge';
import BadgeCircle from '../../../BadgeCircle';

import { IMovie } from '../../../../pages/context/AppContext';

import {
  Card,
  MainImage,
  MainContent
} from './styled';

type CardMovieProps = {
  movie: IMovie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const { popularity } = movie;

  const _popularity = Math.round(popularity).toString().concat('%');

  return (
    <Card>
      <MainImage />
      <MainContent />
    </Card>
  )
}

export default CardMovie;