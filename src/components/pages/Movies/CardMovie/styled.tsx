import styled from 'styled-components';
import { mediaQueries } from '../../../../styles/mediaQueries';

export const Card = styled.div`
  width: 100%;
  min-height: auto;

  display: flex;
  flex-direction: column;  
  align-items: center;

  background-color: var(--gray);

  & > img {
    width: 23.3rem;
    height: 100%;
  }

  ${mediaQueries('md')`
    min-height: 35rem;

    flex-direction: row;
  `};
`;

export const MainContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  ${mediaQueries('md')`
    width: calc(100% - 23.3rem);
  `};
`;

export const CardHeader = styled.div`
  position: relative;
  width: 100%;
  height: 8rem;

  display: flex;
  align-items: flex-end;

  background-color: var(--blue);
  color: var(--ocean-blue);

  & .title {
    width: calc(100% - 11rem);
    margin-bottom: .5rem;
    margin-left: 11rem;

    font: normal normal normal 3rem/3.4rem Abel;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
  }

  & .badge {
    position:absolute;
    bottom: -4rem;
    left: 1.5rem;

    z-index: 9;
  }
`;

export const CardContent = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0 3rem;

  display: flex;
  flex-direction: column;

  overflow: hidden;
  overflow-y: auto;

  & .release-date {
    margin-top: .5rem;
    margin-left: 8rem;
  
    font: normal normal 200 2rem/2.2rem Lato;
    color: var(--mediun-gray);
  }

  & .overview {
    margin-top: 3.5rem;

    font: normal normal 400 2rem/2.2rem Lato;
    color: var(--dark-gray);
  }

  & .container-genres {
    margin-top: 1.5rem;
    margin-bottom: 2rem;

    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    gap: 5px;
  }
`;