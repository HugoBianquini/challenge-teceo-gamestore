import { formatToBRL } from "@/utils/priceFormatter";
import { IListItem } from "./index.type";
import { Container, FieldContainer, PriceText } from "./styles";

const ListItem = ({ game, index }: IListItem) => {
  const calculateDiscount = () => {
    return formatToBRL(0.9 * game.price);
  };

  return (
    <Container>
      <FieldContainer>
        <span>Título</span>
        <strong>{game.title}</strong>
      </FieldContainer>

      <FieldContainer>
        <span>Plataforma</span>
        <strong>{game.platform}</strong>
      </FieldContainer>

      <FieldContainer>
        <span>Preço original</span>
        <strong>{formatToBRL(game.price)}</strong>
      </FieldContainer>

      <FieldContainer>
        <span>Preço com desconto</span>
        <PriceText>{calculateDiscount()}</PriceText>
      </FieldContainer>
    </Container>
  );
};

export default ListItem;
