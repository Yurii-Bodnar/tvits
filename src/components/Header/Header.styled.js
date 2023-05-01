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
  &.active {
    border-bottom: 2px solid ${p => p.theme.colors.white};
  }
`;
