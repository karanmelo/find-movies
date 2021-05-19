<h1>FindMovies</h1> 

<p align="center">
  <img src="https://img.shields.io/static/v1?label=react&message=framework&color=blue&style=for-the-badge&logo=REACT"/>
  <img src="https://img.shields.io/static/v1?label=Next.js&message=framework&color=blue&style=for-the-badge&logo=next-dot-js"/>
  <img src="https://img.shields.io/static/v1?label=Docker%20Build&message=automated&color=blue&style=for-the-badge&logo=docker"/>
  <img src="https://img.shields.io/static/v1?label=Netlify&message=deploy&color=blue&style=for-the-badge&logo=netlify"/>
</p>

> Status do Projeto: :warning:


### Tópicos 

:small_blue_diamond: [Descrição do projeto](#descrição-do-projeto)

:small_blue_diamond: [Funcionalidades](#funcionalidades)

:small_blue_diamond: [Deploy da Aplicação](#deploy-da-aplicação-dash)

:small_blue_diamond: [Pré-requisitos](#pré-requisitos)

:small_blue_diamond: [Como rodar a aplicação](#como-rodar-a-aplicação-arrow_forward)


## Descrição do projeto 

<p align="justify">
  Projeto para busca de filmes por nome ou gênero no catálogo da The Movie Database. 
  PWA (Progressive Web App) desenvolvido com React.js e Netx.js.

  > https://www.themoviedb.org/?language=pt-BR
</p>


## Funcionalidades

:heavy_check_mark: Busca de filmes por nome ou gênero.


## Deploy da Aplicação :dash:

> Link do deploy da aplicação. Exemplo com netlify: https://appfindmovies.netlify.app/


## Pré-requisitos

:warning: [Node](https://nodejs.org/en/download/)


## Como rodar a aplicação :arrow_forward:

No terminal, clone o projeto: 

```
git clone https://github.com/karanmelo/find-movies.git
```
Entre na pasta do projeto:
```
cd find-movies
```
Instale as dependências:
```
yarn install
```
Execute a aplicação em modo de desenvolvimento:
```
yarn dev
```
Build da aplicação:
```
yarn build

yarn export
```
Build com o Docker:
```
yarn docker:prod
```

É necessáiro possuir as variáveis de ambiente local (.env.local) que estão definidas no arquivo next.config.js.

Agora você pode acessar a aplicação no endereço:
> localhost:3000/


## Linguagens, dependencias e libs utilizadas :books:

- [React](https://pt-br.reactjs.org/docs/create-a-new-react-app.html)
- [Next.js](https://nextjs.org/)
- [Typescript](https://www.typescriptlang.org/)
- [styled-components](https://styled-components.com/)


## Tarefas em aberto

:memo:  Implementar um controle de páginas mais sofisticado e que consiga ter um controle maior 
sobre a paginação da API da The Movie Database.