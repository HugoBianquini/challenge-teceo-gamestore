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
import { useState } from "react";

const GameCard = () => {
  const [isSelected, setSelected] = useState(false);

  const onSelect = () => {
    setSelected((prev) => !prev);
  };

  return (
    <Container onClick={onSelect}>
      <div>
        <Checkbox checked={isSelected} onChange={onSelect} />
      </div>
      <Image src="/xbox-logo.svg" alt="xbox logo" />
      <Content>
        <TextContainer>
          <h2>Jogo Bike</h2>
          <span>
            Sursum creator concido aestivus aureus. Usque amiculum compono
            veritas cimentarius casus deorsum.
          </span>
        </TextContainer>
        <div>
          <PriceText>R$ 29,99</PriceText>
        </div>
      </Content>
      <EditIconContainer onClick={(e) => e.stopPropagation()}>
        <Edit />
      </EditIconContainer>
      <CategoryContainer>
        <span>Aventura</span>
      </CategoryContainer>
    </Container>
  );
};

export default GameCard;
