import { createGlobalStyle } from 'styled-components';

import { mediaQueries } from './mediaQueries';

export default createGlobalStyle`  
  :root {
    --blue: #116193;
    --light-blue: #b8cbd6;
    --ocean-blue: #00e4e2;
    --gray: #e6e6e6;    
    --light-gray: #f2f2f2;
    --mediun-gray: #919191;
    --dark-gray: #626262;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 45%;

    ${mediaQueries('sm')`
      font-size: 62.5%; 
    `}; // a cada 1rem será considerada 10px
  }

  body {
    min-width: 30rem;
    height: 100vh;
    padding: 0;
    background: #ffffff 0% 0% no-repeat padding-box;
    overflow-y: auto;
  }

  body, input, button {
    font-family: 'Abel', 'Lato', sans-serif;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  } 

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  a {
    text-decoration: none;
    background: none;
    font-weight: 700;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  button {
    cursor: pointer;
    border: 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  ul {
    list-style: none;
    text-align: left;
    padding: 0;
  }
`
