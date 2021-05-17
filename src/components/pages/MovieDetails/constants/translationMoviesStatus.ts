export interface ITranslationMoviesStatus {
  status: string;
  translate: string;
}

export const translationMoviesStatus = [
  {
    "status": "rumored",
    "translate": "Boato"
  },
  {
    "status": "planned",
    "translate": "Planejado"
  },
  {
    "status": "in production",
    "translate": "Em produção"
  },
  {
    "status": "post production",
    "translate": "Pós-produção"
  },
  {
    "status": "released",
    "translate": "Lançado"
  },
  {
    "status": "canceled",
    "translate": "Cancelado"
  }
] as ITranslationMoviesStatus[];