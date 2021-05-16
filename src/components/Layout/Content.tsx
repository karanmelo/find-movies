import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 6rem;

  overflow-y: hidden;
`;
const Content: React.FC = ({ children }) => (
  <Section>
    {children}
  </Section>
)

export default Content;