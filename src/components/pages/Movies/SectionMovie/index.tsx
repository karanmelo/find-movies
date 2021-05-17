import { NextRouter, useRouter } from 'next/router';

import Badge from '../../../Badge';
import BadgeCircle from '../../../BadgeCircle';

import { useAppContext, IMovie } from '../../../../pages/context/AppContext';

import {
  Section,
  Container,
  Header,
  Content,
} from './styled';

type CardMovieProps = {
  movie: IMovie;
}

const SectionMovie: React.FC<CardMovieProps> = ({ movie }) => {
  const router: NextRouter = useRouter();
  const {
    id,
    title,
    popularity,
    release_date,
    genre_ids,
    overview,
    poster_path
  } = movie;
  const { getGenreName } = useAppContext();

  const _releaseDate: string = release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
  const _posterPath: string = poster_path ? `${process.env.TMDB_IMAGE_URL}${poster_path.replace('/', '')}` : '';
  const _popularity: string = Math.round(popularity).toString().concat('%');

  const handleClickGoToMovieDetails = () => {
    router.push(`movie/${id}`);
  }

  return (
    <Section onClick={() => handleClickGoToMovieDetails()}>
      <img src={_posterPath} alt="" />
      <Container>
        <Header>
          <h1 className="title">
            {title}
          </h1>
          <div className="badge">
            <BadgeCircle title={_popularity} width="8rem" />
          </div>
        </Header>
        <Content>
          <span className="release-date">{_releaseDate}</span>
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
        </Content>
      </Container>
    </Section>
  )
}

export default SectionMovie;