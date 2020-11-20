import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  margin: 0 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media(max-width: 1000px) {
    margin: 0;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 48px;
  text-align: center;
`;

export const HeaderDetails = styled.p`
  color: white;
  font-size: 24px;
  width: 100%;

  > span {
    font-weight: bold;
    text-align: center;
  }
`;

export const HeaderImg = styled.img`
  max-width: 80%;
`;

export const Main = styled.main``;

export const Footer = styled.footer`
  background: rgba(24, 25, 37, 100);
  width: 100%;
  color: grey;
  padding: 20px;

  > span {
    > a:hover {
      color: blue;
    }
  }
`;