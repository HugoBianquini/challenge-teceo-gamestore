import GameCard from "../../components/GameCard";
import { Container, Content, Header, TitleContainer, Wrapper } from "./styles";

const Home = () => {
  return (
    <Wrapper>
      <Container>
        <Header>
          <TitleContainer>
            <h1>Bem-vindo à GameStore</h1>
            <span>Confira os games no catálogo</span>
          </TitleContainer>
        </Header>
        <Content>
          <GameCard />
        </Content>
      </Container>
    </Wrapper>
  );
};

export default Home;
