import GameCard from "@/components/GameCard";
import { Container, ListItem } from "./styles";
import { Virtuoso } from "react-virtuoso";
import { useInfiniteGames } from "@/hooks/useInfiniteGames";
import ListHeader from "../ListHeader";

const GameList = () => {
  const { data, hasNextPage, fetchNextPage, totalItems } = useInfiniteGames();

  const Footer = () => {
    if (!hasNextPage) {
      return <></>;
    }
    return <span>Carregando mais itens...</span>;
  };

  const Header = () => {
    return <ListHeader totalItems={totalItems} />;
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
