import { Container, Title } from './styled';

type HeaderProps = {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

export default Header;