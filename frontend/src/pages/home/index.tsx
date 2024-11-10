import { ToastContainer } from "react-toastify";
import GameList from "./partials/GameList";
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
          <GameList />
        </Content>
      </Container>
      <ToastContainer />
    </Wrapper>
  );
};

export default Home;
