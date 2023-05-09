import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const Button = styled.button`
  background: ${p => p.theme.colors.white};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 196px;
  height: 50px;
  border: none;
  margin-bottom: 60px;

  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.SemiBold};
  font-size: ${p => p.theme.fontSizes.s};
  line-height: 1.22;
  text-transform: uppercase;
  color: ${p => p.theme.colors.black};
  transition: 250ms;

  &:hover {
    background-color: rgb(92, 211, 168);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 3px 3px;
  }
`;
