import styled from 'styled-components';

const Container = styled.span`
  width: auto;
  height: max-content;
  padding: .4rem 1rem;
  
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;
  border: .1rem solid var(--blue);
  border-radius: 2rem;

  text-align: center;
  font: normal normal bold 1.4rem/1.6rem Abel;
  letter-spacing: 0px;
  color: var(--blue);
`;

type BadgeProps = {
  title: string;
}

const Badge: React.FC<BadgeProps> = ({ title }) => (
  <Container>
    {title}
  </Container>
)

export default Badge;