
import styled from 'styled-components';

export const Input = styled.input`
  position: relative;
  width: 100%;
  min-height: 4.8rem;
  padding-left: 3rem;
  padding-right: 3rem;

  font-family: Abel;
  font-size: 1.8rem;

  background: var(--gray) 0% 0% no-repeat padding-box;
  background-position: 1.6rem 1.6rem;
  background-repeat: no-repeat;
  border: none;
  border-radius: 4rem;
  opacity: 1;

  &::placeholder {
    color: var(--light-blue);
    font-weight: bold;
    letter-spacing: 0px;
  }

  &::-webkit-search-cancel-button{
    width: 20px;
    height: 20px;
    right:20px; 

    color: #CCCCCC;
    background: url('https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg') no-repeat 50% 50%;
    background-size: auto;

    cursor: pointer;

    appearance: none;
    -webkit-appearance: none;
  }
`;