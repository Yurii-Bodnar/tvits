import Logo from 'components/Logo/Logo';
import { HeaderTeg, Link, Nav } from './Header.styled';

const Header = () => {
  return (
    <HeaderTeg>
      <Logo />
      <Nav>
        <Link to="/">Home</Link>
        <Link to="/tweets-page">Twits</Link>
      </Nav>
    </HeaderTeg>
  );
};

export default Header;
