import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderTeg = styled.header`
  background: ${p => p.theme.colors.background};
  display: flex;
  justify-content: space-between;
  padding: 18px;
  align-items: center;
`;
export const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;
export const Link = styled(NavLink)`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.2;
  text-transform: uppercase;
  color: ${p => p.theme.colors.white};
  padding: 5px;
  transition: 250ms;
  &:hover {
    background: rgb(77 44 105);
    color: ${p => p.theme.colors.white};
    border-radius: 10px;
    border: none;
  }
  &.active {
    outline: 2px;
    color: rgb(77 44 155);
    border-radius: 10px;
    background: ${p => p.theme.colors.white};
    border: none;
  }
`;
