import styled from 'styled-components';
import { mediaQueries } from '../../../styles/mediaQueries';

export const Section = styled.div`
  width: 100%;
  min-height: auto;
  margin-top: 4.2rem;

  display: flex;
  flex-direction: column;  
  align-items: center;

  background-color: var(--light-gray);

  ${mediaQueries('md')`
    flex-direction: row-reverse;
  `};
`;

export const SectionContent = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  position: relative;
  width: 100%;
  height: 6.5rem;
  padding: 0 2rem 0 4.5rem;

  display: flex;
  align-items: center;

  background-color: var(--gray);

  & .title {
    width: 100%;

    font: normal normal bold 3rem/3.4rem Abel;
    text-overflow: ellipsis;
    white-space: nowrap;
    color: var(--blue);

    overflow: hidden;
  }

  & .release-date {
    font: normal normal 200 2rem/2.2rem Lato;
    color: var(--mediun-gray);
  }
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: auto;

  display: flex;
  flex-direction: column-reverse;
  align-items: center;

  overflow: hidden;

  & .details {
    position: relative;
    height: 100%;
    padding: 3.3rem 3.5rem 3rem 4.5rem;

    display: flex;
    flex-direction: column;

    overflow-y: auto;
  }

  & > img {
    width: 100%;
    height: 100%;
  }

  ${mediaQueries('sm')`
    & > img {
      width: 50%;
    }
  `};

  ${mediaQueries('md')`
    height: 50.5rem;

    flex-direction: row;

    & > img {
      width: auto;
    }
  `};
`;

export const SectionSynopsis = styled.section`
  display: flex;
  flex-direction: column;
  margin-bottom: 5rem;

  & .synopsis {
    padding-bottom: 1rem;
    margin-bottom: 2rem;

    font: normal normal bold 2.6rem/2.8rem Abel;
    color: var(--blue);
    border-bottom: 3px solid var(--ocean-blue);
  }

  & .overview {
    font: normal normal 400 2rem/2.2rem Lato;
    color: var(--dark-gray);
  }
`;

export const SectionInformations = styled.section`
  display: flex;
  flex-direction: column;

  & .informations {
    width: 100%;
    padding-bottom: 1rem;
    margin-bottom: 2rem;

    font: normal normal bold 2.6rem/2.8rem Abel;
    color: var(--blue);
    border-bottom: 3px solid var(--ocean-blue);
  }

  & .basic-informations {
    margin-bottom: 6rem;
    
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 4rem;

    & > div {
      display: flex;
      flex-direction: column;

      & > span:first-child{
        font: normal normal bold 2.4rem/2.6rem Abel;
        text-align: center;
        color: var(--blue);
      }

      & > span:last-child{
        font: normal normal normal 1.8rem/2rem Lato;
        text-align: center;
        color: var(--dark-gray);
      }
    }
  }

  & .others-informations {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  & .others-informations .container-genres {
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
    gap: 5px;
  }
`;