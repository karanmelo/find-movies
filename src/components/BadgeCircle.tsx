import styled from 'styled-components';

type ContainerProps = {
  width: string;
}

const Container = styled.div<ContainerProps>`
  width: ${(props: ContainerProps) => props.width};
  height: ${(props: ContainerProps) => props.width};
  padding: .2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--blue);
  border: none;
  border-radius: 50%;

  font: normal normal 1.4rem/1.6rem Abel;
  letter-spacing: 0px;
  color: var(--blue);

  & > span {
    width: 100%;
    height: 100%;
    padding: .5rem;

    display: flex;
    justify-content: center;
    align-items: center;
  
    border: .4rem solid var(--ocean-blue);
    border-radius: 50%;
    
    font: normal normal 2.6rem/2.6em Abel;
    color: var(--ocean-blue);
  }
`;

type BadgeCircleProps = {
  title: string;
  width: string;
}

const BadgeCircle: React.FC<BadgeCircleProps> = ({ title, width }) => (
  <Container width={width}>
    <span>{title}</span>
  </Container>
)

export default BadgeCircle;