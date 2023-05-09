import styled from 'styled-components';
import bg from '../../images/picture.png';

export const Item = styled.li`
  width: 380px;
  /* height: 460px; */
  position: relative;
  background: ${p => p.theme.colors.background};
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background-repeat: no-repeat;
  /* background-position: 36px 28px; */
`;
export const BoxLogo = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
`;
export const Box = styled.div`
  background: url(${bg}) no-repeat;
  display: flex;
  gap: 26px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 178px;
  background-position: 36px 28px;
  &::before {
    content: '';
    position: absolute;
    width: 380px;
    height: 8px;
    top: 210px;
    background: ${p => p.theme.colors.white};
  }
`;
export const Img = styled.img`
  z-index: 10;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes.m};
  line-height: 1.2;
  text-transform: uppercase;
  text-align: center;
  color: ${p => p.theme.colors.white};
`;

export const Button = styled.button`
  background: ${({ isFollow }) =>
    (!isFollow && '#EBD8FF') || (isFollow && '#5CD3A8')};
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
