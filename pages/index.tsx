import { Container, Footer, Header, HeaderDetails, HeaderImg, Title } from "../styles";
import Image from "next/image";

const Index = () => {
  return (
    <Container>
      <Header>
        <Title>Você é antifrágil?</Title>
        <HeaderDetails>Saiba AGORA por qual motivo essa é uma das <span>soft skills mais importantes</span> na carreira de um dev!</HeaderDetails>
        <HeaderImg src="/assets/banner.jpg" alt="Frase motivacional"/>
      </Header>

      <Footer>
        <span>Photo by <a href="https://unsplash.com/@theblowup?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">the blowup</a> on <a href="https://unsplash.com/t/business-work?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      </Footer>
    </Container>
  )
}

export default Index;