import Badge from '../../Badge';
import BadgeCircle from '../../BadgeCircle';

import { IGenre } from './types/MovieDetailsTypes';

import {
  SectionInformations,
} from './styles';

type SectionInformationProps = {
  status: string;
  originalLanguage: string;
  runtime: string;
  budget: string;
  revenue: string;
  profit: string;
  genres: IGenre[];
  popularity: string;
}

const SectionInformation: React.FC<SectionInformationProps> = (props: SectionInformationProps) => {
  const {
    status,
    originalLanguage,
    runtime,
    budget,
    revenue,
    profit,
    genres,
    popularity,
  } = props;

  return (
    <SectionInformations>
      <h2 className="informations">Informações</h2>
      <div className="basic-informations">
        <div>
          <span>Situação</span>
          <span>{status}</span>
        </div>
        <div>
          <span>Indioma</span>
          <span>{originalLanguage}</span>
        </div>
        <div>
          <span>Duração</span>
          <span>{runtime}</span>
        </div>
        <div>
          <span>Orçamento</span>
          <span>{budget}</span>
        </div>
        <div>
          <span>Receita</span>
          <span>{revenue}</span>
        </div>
        <div>
          <span>Lucro</span>
          <span>{profit}</span>
        </div>
      </div>
      <div className="others-informations">
        <div className="container-genres">
          {
            genres.map((genre: IGenre, idx: number) =>
              <Badge
                key={idx}
                title={genre.name}
              />
            )
          }
        </div>
        <div className="badge">
          <BadgeCircle title={popularity} width="10rem" />
        </div>
      </div>
    </SectionInformations>
  )
}

export default SectionInformation;