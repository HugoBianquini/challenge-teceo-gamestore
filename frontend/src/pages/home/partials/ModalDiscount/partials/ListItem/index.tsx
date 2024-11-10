import { formatToBRL } from "@/utils/priceFormatter";
import { EPlatform, IListItem } from "./index.type";
import {
  Container,
  FieldContainer,
  GameTitle,
  PlatformText,
  PriceText,
} from "./styles";

const ListItem = ({ game }: IListItem) => {
  const calculateDiscount = () => {
    return formatToBRL(0.9 * game.price);
  };

  return (
    <Container>
      <FieldContainer>
        <span>Título</span>
        <GameTitle>{game.title}</GameTitle>
      </FieldContainer>

      <FieldContainer>
        <span>Plataforma</span>
        <PlatformText>{EPlatform[game.platform]}</PlatformText>
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
