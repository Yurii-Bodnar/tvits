import styled from 'styled-components';
import bg from '../../images/picture.png';

export const Container = styled.div`
  display: flex;
  align-items: start;
  height: 89vh;
  padding: 20px;
  background: url(${bg}) no-repeat;
  background-size: 450px;
  background-position: center;
`;
export const Title = styled.h1`
  color: #4b2a99;
  box-shadow: 1px 9px 17px 7px;
  border-radius: 7px;
  padding: 10px;
`;
