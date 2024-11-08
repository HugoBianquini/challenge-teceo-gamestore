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

const GameCard = () => {
  const [isSelected, setSelected] = useState(false);
  const [isEdit, setEdit] = useState(false);

  const onSelect = useCallback(() => {
    return setSelected((prev) => !prev);
  }, []);

  const handleEditButtonClick = useCallback(() => {
    return setEdit((prev) => !prev);
  }, []);

  return (
    <Container>
      <div>
        <Checkbox checked={isSelected} onChange={onSelect} />
      </div>
      <Image src="/xbox-logo.svg" alt="xbox logo" onClick={onSelect} />
      <Content>
        {isEdit ? (
          <EditableContent setEdit={handleEditButtonClick} />
        ) : (
          <TextContainer>
            <h2>Jogo Bike</h2>
            <span>
              Sursum creator concido aestivus aureus. Usque amiculum compono
              veritas cimentarius casus deorsum.
            </span>
          </TextContainer>
        )}
        <div>
          <PriceText>R$ 29,99</PriceText>
        </div>
      </Content>
      <EditIconContainer onClick={handleEditButtonClick}>
        <Edit />
      </EditIconContainer>
      <CategoryContainer>
        <span>Aventura</span>
      </CategoryContainer>
    </Container>
  );
};

export default GameCard;
