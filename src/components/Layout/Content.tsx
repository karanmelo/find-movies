import styled from 'styled-components';

const Section = styled.section`
  width: 100%;
  height: 100%;

  overflow-y: auto;
`;
const Content: React.FC = ({ children }) => (
  <Section>
    {children}
  </Section>
)

export default Content;