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
import { useCallback, useMemo, useState } from "react";
import EditableContent from "./partials/EditableContent";
import { ECategory, EImagePlatform, IGameCardProps } from "./index.type";
import { useGames } from "@/hooks/useGames";
import { formatToBRL } from "@/utils/priceFormatter";

const GameCard = ({ game, index }: IGameCardProps) => {
  const { handleSelectGame, selectAll, excludedGames } = useGames();

  const [isEdit, setEdit] = useState(false);

  const { title, description, category, platform, price, discount } = game;

  const onSelect = useCallback(() => {
    handleSelectGame(index);
  }, [index, selectAll, excludedGames]);

  const handleEditButtonClick = useCallback(() => {
    return setEdit((prev) => !prev);
  }, []);

  const gamePrice = useMemo(() => {
    if (discount > 0) {
      return (1 - discount / 100) * price;
    }
    return price;
  }, [price, discount]);

  return (
    <Container>
      <div>
        <Checkbox checked={game.isSelected} onChange={onSelect} />
      </div>
      <Image
        src={EImagePlatform[platform]}
        alt="xbox logo"
        onClick={onSelect}
      />
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
          <PriceText>{formatToBRL(gamePrice)}</PriceText>
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
