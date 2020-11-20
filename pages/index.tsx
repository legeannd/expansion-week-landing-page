import { Container, Footer, Header, HeaderDetails, HeaderImg, Main, MainSubtitle, MainText, Title } from "../styles";
import Image from "next/image";
import React from "react";

const Index = () => {
  return (
    <Container>
      <Header>
        <Title>Você é antifrágil?</Title>
        <HeaderDetails>Saiba AGORA por qual motivo essa é uma das <strong>soft skills mais importantes</strong> na carreira de um dev!</HeaderDetails>
        <HeaderImg src="/assets/banner.jpg" alt="Frase motivacional"/>
      </Header>
      
      <Main>
        <MainSubtitle>Antifragilidade é transceder o comportamento de evitar riscos</MainSubtitle>
        <MainText>
          Muita gente conhece o conceito de resiliência, que consiste basicamente na capacidade de passar pelas mais variadas adversidades sem que isso lhe abale.
        </MainText>
        <MainText>
          No entanto, talvez mais importante do que conseguir voltar ao estado anterior após uma adversidade, é conseguir usar essa pedra no caminho como um <strong>impulso para evoluir.</strong>
        </MainText>
        <MainSubtitle>Uma mente que se expande para uma nova ideia, nunca mais volta ao seu tamanho original</MainSubtitle>
        <HeaderImg src="/assets/main-1.jpg" alt="Fluxo de trabalho" width="50%"/>
        <MainText>
          É muito comum que durante a nossa carreira, encontremos toda sorte de desafios e problemas, e o nosso trabalho consiste em passar por eles.
        </MainText>
        <MainText>
          Uma pessoa antifrágil consegue correr o risco indo em novas experiências e ainda pegar ensinamentos nessas situações, o que é muito importante para que a sua <strong>evolução seja contínua.</strong> 
        </MainText>
        <MainText>
          Veja, se você vai a uma entrevista de emprego e recebe um não, não é motivo para ficar revoltado e desistir de tentar. Muito pelo contrário,
          você pode aproveitar essa oportunidade para entender quais as habilidades que você ainda não domina, e se preparar para as próximas entrevistas.
        </MainText>
        <MainSubtitle>
          Você não escolhe o que vai te atingir, mas escolhe como vai reagir a isso
        </MainSubtitle>
        <MainText>
          Sendo antifrágil, você se torna <strong>capaz de lidar</strong> com os problemas e desafios que aparecem, e sair cada vez mais forte deles. Com isso, 
          fica cada vez mais difícil se encontrar em uma situação ruim, de difícil resolução, pois você sabe que a unica opção é seguir em frente, 
          passar por isso e <strong>aprender</strong> o que deve ser feito da próxima vez.
        </MainText>
      </Main>

      <Footer>
        <span>Photo 1 by <a href="https://unsplash.com/@theblowup?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">the blowup</a> on <a href="https://unsplash.com/t/business-work?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
        <span>Photo 2 by <a href="https://unsplash.com/@sigmund?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Sigmund</a> on <a href="https://unsplash.com/t/business-work?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>
      </Footer>
    </Container>
  )
}

export default Index;