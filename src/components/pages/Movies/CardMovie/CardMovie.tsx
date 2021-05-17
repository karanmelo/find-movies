
import React from 'react';
import Badge from '../../../Badge';
import BadgeCircle from '../../../BadgeCircle';

import { useAppContext, IGenre, IMovie } from '../../../../pages/context/AppContext';

import {
  Card,
  MainContent,
  CardHeader,
  CardContent,
} from './styled';

type CardMovieProps = {
  movie: IMovie;
}

const CardMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const {
    title,
    popularity,
    release_date,
    genre_ids,
    overview,
    poster_path
  } = movie;
  const { getGenreName } = useAppContext();

  const releaseDate: string = release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
  const _posterPath: string = `${process.env.TMDB_IMAGE_URL}/${poster_path}`;
  const _popularity: string = Math.round(popularity).toString().concat('%');

  return (
    <Card>
      <img src={_posterPath} alt="" />
      <MainContent>
        <CardHeader>
          <h1 className="title">
            {title}
          </h1>
          <div className="badge">
            <BadgeCircle title={_popularity} width="8rem" />
          </div>
        </CardHeader>
        <CardContent>
          <span className="release-date">{releaseDate}</span>
          <p className="overview">{overview}</p>
          <div className="container-genres">
            {
              genre_ids.map((genreId: number, idx: number) =>
                <Badge
                  key={`${title.toLowerCase()}-${idx}`}
                  title={getGenreName(genreId)}
                />
              )
            }
          </div>
        </CardContent>
      </MainContent>
    </Card>
  )
}

export default CardMovie;