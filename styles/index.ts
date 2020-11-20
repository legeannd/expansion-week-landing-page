import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Header = styled.header`
  margin: 0 120px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  margin-bottom: 50px;
`;

export const HeaderImg = styled.img`
  max-width: 70%;
  height: auto;

  @media(max-width: 1000px) {
    max-width: 100%;
    margin-top: 20px;
  }
`;

export const Main = styled.main`
  display: flex;
  margin: 0 120px;
  flex-direction: column;
  align-items: center;

  @media(max-width: 1000px) {
    margin: 0;
  }
`;

export const MainSubtitle = styled.h2`
  color: white;
  font-size: 30px;
  text-align: center;

  @media(max-width: 1000px){
    font-size: 26px;
    margin: 0 20px;
  }
`;

export const MainText = styled.p`
  width: 60%;
  font-size: 24px;
  color: ${shade(0.1, 'white')};

  @media(max-width: 1000px) {
    width: 80%;
    font-size: 22px;
  }

`;

export const Footer = styled.footer`
  background: ${shade(0.7, '#181925')};
  width: 100%;
  margin-top: 100px;
  color: grey;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;

  > span {
    width: 100%;
    > a:hover {
      color: blue;
    }
  }
`;