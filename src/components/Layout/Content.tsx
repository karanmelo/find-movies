import styled from 'styled-components';

const Container = styled.section`
  width: 100vw;
  height: calc(100vh - 80px);
  display: flex;
`;

const Section = styled.div`
  width: 100%;
  padding: 40px 16.5px 16px 23px;
  overflow-y: auto;
`;

const Content: React.FC = ({ children }) => (
  <Container>
    <Section>
      {children}
    </Section>
  </Container>
)

export default Content;