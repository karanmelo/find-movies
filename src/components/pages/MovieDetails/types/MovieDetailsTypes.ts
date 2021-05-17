export interface IMovie {
  id: string;
  title: string;
  release_date: string;
  overview: string;
  popularity: number;
  genres: IGenre[];
  original_language: string;
  poster_path: string;
  video: boolean;
  status: string;
  budget: number; // Orçamento
  runtime: number; // Duração
  revenue: number; // Receita
  profit: number; // Lucro // Campo Fake // Não localizei essa informação na documentação
  spoken_languages: ISpokenLanguage[]; // Linguagens faladas
}

export interface IGenre {
  id: number;
  name: string;
}

export interface ISpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}