import { NavLink } from 'react-router-dom';
import logo from '../../images/logo-goIT.svg';
import { Svg } from './Logo.styled';

const Logo = () => {
  return (
    <div>
      <NavLink to="/">
        <Svg>
          <use href={logo + '#logo-icon'}></use>
        </Svg>
      </NavLink>
    </div>
  );
};

export default Logo;
