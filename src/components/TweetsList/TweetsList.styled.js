import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  padding: 20px;
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
`;
export const Container = styled.div`
  margin-top: 20px;
`;
export const Link = styled(NavLink)`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.SemiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  transition: 250ms;
  padding-left: 18px;
  color: rgb(77 44 155);
`;
