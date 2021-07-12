import styled from 'styled-components';

import Head from './Head';
import Header from './Header';
import Content from './Content';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Page: React.FC = ({ children }) => {

  return (
    <Container>
      <Head title="Farejador" />
      <Header title="Farejador de Filmes" />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Page;

