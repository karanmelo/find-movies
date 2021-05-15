import styled from 'styled-components';

import Head from './Head';
import Header from './Header';
import Content from './Content';

const Container = styled.main`
  display: grid;
  overflow: hidden;
`;

const Page: React.FC = ({ children }) => {

  return (
    <Container>
      <Head title="FindMovies" />
      <Header title="Movies" />
      <Content>
        {children}
      </Content>
    </Container>
  )
}

export default Page;

