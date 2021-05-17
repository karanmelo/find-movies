import { useEffect, useState } from 'react';
import { AxiosResponse } from 'axios';

import api from '../../../services/api';

import SectionInformation from './SectionInformation';
import Spinner from '../../Spinner';

import { translationMoviesStatus, ITranslationMoviesStatus } from './constants/translationMoviesStatus';

import { IMovie, ISpokenLanguage } from './types/MovieDetailsTypes';

import {
  Section,
  SectionContent,
  Header,
  Content,
  SectionSynopsis,
} from './styled';

type MovieDetailsProps = {
  id: number;
}

const MovieDetails: React.FC<MovieDetailsProps> = ({ id }) => {
  const [movieDetails, setMovieDetails] = useState<IMovie | null>(null);

  useEffect(() => {
    let mounted: boolean = true;

    api
      .get(`movie/${id}`, {
      })
      .then((value: AxiosResponse<any>) => {
        const movie: IMovie = value.data;

        if (movie === null) {
          return;
        }

        if (!mounted) return;

        setMovieDetails(movie);
      });

    return () => {
      mounted = false;
    }
  }, [id]);

  if (movieDetails === null) {
    return (
      <div
        style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Spinner />
      </div>
    );
  }

  const {
    title,
    popularity,
    release_date,
    genres,
    overview,
    poster_path,
    status,
    budget,
    revenue,
    runtime,
    original_language,
    spoken_languages,
    profit,
  } = movieDetails;

  const _releaseDate: string = release_date.replace(/(\d{4})-(\d{2})-(\d{2})/, "$3/$2/$1");
  const _posterPath: string = poster_path ? `${process.env.TMDB_IMAGE_URL}${poster_path.replace('/', '')}` : '/no-image-available.jpg';
  const _popularity: string = Math.round(popularity).toString().concat('%');
  const _status: ITranslationMoviesStatus = translationMoviesStatus.find((translate: ITranslationMoviesStatus) => {
    return status.toLowerCase() === translate.status;
  }) || { "status": "no status", "translate": "Sem status" };
  const _runtime: string = `${Math.round(runtime / 60)}h ${runtime % 60}min`;
  const _budget: string = budget.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const _revenue: string = revenue.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });
  const _originalLanguage: ISpokenLanguage = spoken_languages?.find((language: ISpokenLanguage) => {
    return original_language.toLowerCase() === language.iso_639_1;
  }) || { "english_name": "no language", "iso_639_1": "", "name": "Sem indioma" };
  const _profit: string = profit?.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }) || 'Não informado';

  return (
    <Section>
      <SectionContent>
        <Header>
          <h1 className="title">
            {title}
          </h1>
          <span className="release-date">{_releaseDate}</span>
        </Header>
        <Content>
          <div className="details">
            <SectionSynopsis>
              <h2 className="synopsis">Sinopse</h2>
              <p className="overview">{overview}</p>
            </SectionSynopsis>
            <SectionInformation
              budget={_budget}
              genres={genres}
              originalLanguage={_originalLanguage.name}
              popularity={_popularity}
              revenue={_revenue}
              runtime={_runtime}
              status={_status.translate}
              profit={_profit}
            />
          </div>
          <img src={_posterPath} alt={title} />
        </Content>
      </SectionContent>
    </Section>
  )
}

export default MovieDetails;