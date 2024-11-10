import Modal from "@/components/Modal";
import { Container, DescriptionContainer, List } from "./styles";
import { Virtuoso } from "react-virtuoso";
import ListItem from "./partials/ListItem";
import { IModalProps } from "./index.type";
import Footer from "./partials/Footer";
import { useMemo } from "react";

const ModalDiscount = ({
  isOpen,
  closeModal,
  fetchNextPage,
  games,
}: IModalProps) => {
  const listData = useMemo(() => {
    return games.filter((item) => item.isSelected);
  }, [games]);

  return (
    <Modal
      isOpen={isOpen}
      setClose={closeModal}
      title="Aplicar Desconto em Massa"
    >
      <Container>
        <DescriptionContainer>
          <p>
            Um desconto de 10% será aplicado para todos os itens selecionados
          </p>
          <p>
            Verifique os itens e confirme a ação para realizar a alteração em
            massa
          </p>
        </DescriptionContainer>
        <Virtuoso
          className="list-selected"
          endReached={fetchNextPage}
          data={listData}
          itemContent={(idx, item) => <ListItem game={item} index={idx} />}
          components={{ List }}
          increaseViewportBy={200}
        />
        <Footer closeModal={closeModal} />
      </Container>
    </Modal>
  );
};

export default ModalDiscount;
