import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 10rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;

  & .page-number {
    font: normal normal normal 2.2rem/2.4rem Lato;
    color: var(--blue);
    background: none;
  }
`;

export const SelectedPage = styled.div`
  width: 5.5rem;
  height: 5.5rem;
  padding: .3rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blue);
  border: none;
  border-radius: 50%;

  font: normal normal 1.4rem/1.6rem Abel;
  letter-spacing: 0px;
  color: var(--blue);

  & > button {
    width: 100%;
    height: 100%;
    padding: .5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  
    background-color: var(--blue);
    border: .32rem solid var(--ocean-blue);
    border-radius: 50%;
    
    font: normal normal normal 3rem/3.2em Abel;
    color: var(--ocean-blue);
  }
`;