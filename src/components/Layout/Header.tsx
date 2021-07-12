import { useRouter } from 'next/router';
import { Container, Title } from './styles';

type HeaderProps = {
  title: string;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  const router = useRouter();
 
  return (
    <Container>
      <Title onClick={() => router.push('/')}>{title}</Title>
    </Container>
  )
}

export default Header;