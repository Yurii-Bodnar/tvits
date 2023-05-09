import styled from 'styled-components';
import bg from '../../images/picture.png';

export const Container = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  height: 39vh;
  padding: 75px;
  background: url(${bg}) no-repeat 301px 72px / 169px;
`;
export const Title = styled.h1`
  color: #4b2a99;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.5;
  color: rgb(87, 54, 163);
  font-size: 64px;
`;
export const Text = styled.p`
  margin: 0px 0px 16px;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.5;
  color: rgb(55, 55, 55);
`;
