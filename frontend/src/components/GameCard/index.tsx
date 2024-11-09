import { Edit } from "lucide-react";
import {
  CategoryContainer,
  Container,
  Content,
  EditIconContainer,
  Image,
  PriceText,
  TextContainer,
} from "./styles";
import Checkbox from "../Checkbox";
import { useCallback, useState } from "react";
import EditableContent from "./partials/EditableContent";
import { ECategory, IGameCardProps } from "./index.type";
import { useGames } from "@/hooks/useGames";
import { formatToBRL } from "@/utils/priceFormatter";

const GameCard = ({ game, index }: IGameCardProps) => {
  const { handleSelectGame } = useGames();

  const [isEdit, setEdit] = useState(false);

  const { title, description, category, price } = game;

  const onSelect = useCallback(() => {
    handleSelectGame(index);
    console.log(game);
  }, [index]);

  const handleEditButtonClick = useCallback(() => {
    return setEdit((prev) => !prev);
  }, []);

  return (
    <Container>
      <div>
        <Checkbox checked={game.isSelected} onChange={onSelect} />
      </div>
      <Image src="/xbox-logo.svg" alt="xbox logo" onClick={onSelect} />
      <Content>
        {isEdit ? (
          <EditableContent
            setEdit={handleEditButtonClick}
            game={game}
            index={index}
          />
        ) : (
          <TextContainer>
            <h2>{title}</h2>
            <span>{description}</span>
          </TextContainer>
        )}
        <div>
          <PriceText>{formatToBRL(price)}</PriceText>
        </div>
      </Content>
      <EditIconContainer onClick={handleEditButtonClick}>
        <Edit />
      </EditIconContainer>
      <CategoryContainer>
        <span>{ECategory[category.title]}</span>
      </CategoryContainer>
    </Container>
  );
};

export default GameCard;
