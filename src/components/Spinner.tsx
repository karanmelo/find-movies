import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  content: '';
  box-sizing: border-box;
  width: 30px;
  height: 30px;
  margin-top: 16px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 50%;
  border: 4px solid #ccc;
  border-top-color: #666666;
  animation: spinner 1s linear infinite;

  @keyframes spinner {
    to {transform: rotate(360deg);}
  }
`;

const Spinner: React.FC = () => (
  <Container />
)

export default Spinner;