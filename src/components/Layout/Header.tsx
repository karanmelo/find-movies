import { Container, Title } from './styles';

type HeaderProps = {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => (
  <Container>
    <Title>{title}</Title>
  </Container>
)

export default Header;