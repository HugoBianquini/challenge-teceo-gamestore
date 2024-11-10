import GameCard from "@/components/GameCard";
import { Container, ListItem } from "./styles";
import { Virtuoso } from "react-virtuoso";
import { useInfiniteGames } from "@/hooks/useInfiniteGames";
import ListHeader from "../ListHeader";
import ModalDiscount from "../ModalDiscount";
import { useState } from "react";

const GameList = () => {
  const { data, hasNextPage, fetchNextPage, totalItems } = useInfiniteGames();
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const Footer = () => {
    if (!hasNextPage) {
      return <></>;
    }
    return <span>Carregando mais itens...</span>;
  };

  const Header = () => {
    return <ListHeader totalItems={totalItems} openModal={openModal} />;
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
      <ModalDiscount
        isOpen={isModalOpen}
        closeModal={closeModal}
        fetchNextPage={fetchNextPage}
        games={data}
      />
    </Container>
  );
};

export default GameList;
