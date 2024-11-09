import Modal from "@/components/Modal";
import { Container, DescriptionContainer, Footer, List } from "./styles";
import { Virtuoso } from "react-virtuoso";
import ListItem from "./partials/ListItem";
import { useGames } from "@/hooks/useGames";
import { useInfiniteGames } from "@/hooks/useInfiniteGames";
import Button from "@/components/Button";
import { IModalProps } from "./index.type";

const ModalDiscount = ({ isOpen, closeModal }: IModalProps) => {
  const { selectedGames } = useGames();
  const { data } = useInfiniteGames();

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
          data={data}
          itemContent={(idx, item) => <ListItem game={item} index={idx} />}
          components={{ List }}
        />
        <Footer>
          <h3>{selectedGames.length} Itens para alteração</h3>
          <Button>Confirmar</Button>
        </Footer>
      </Container>
    </Modal>
  );
};

export default ModalDiscount;
