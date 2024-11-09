import GameCard from "@/components/GameCard";
import { Container, HeaderContainer, ListItem } from "./styles";
import { Virtuoso } from "react-virtuoso";
import { useInfiniteGames } from "@/hooks/useInfiniteGames";

const GameList = () => {
  const { data, hasNextPage, fetchNextPage, totalItems } = useInfiniteGames();

  const Footer = () => {
    if (!hasNextPage) {
      return <></>;
    }
    return <span>Carregando mais itens...</span>;
  };

  const Header = () => {
    return (
      <HeaderContainer>
        <h2>{totalItems} games encontrados</h2>
      </HeaderContainer>
    );
  };

  return (
    <Container>
      <Virtuoso
        className="infinite-list"
        data={data}
        endReached={() => {
          hasNextPage && fetchNextPage();
        }}
        increaseViewportBy={200}
        itemContent={(idx, item) => (
          <GameCard key={`game-${idx}`} index={idx} game={item} />
        )}
        components={{ Footer, Header, List: ListItem }}
      />
    </Container>
  );
};

export default GameList;
