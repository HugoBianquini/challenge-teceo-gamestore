import { useGames } from "@/hooks/useGames";
import { Container } from "./styles";
import Button from "@/components/Button";
import { ISelectedSectionProps } from "./index.type";

const SelectedSection = ({ openModal }: ISelectedSectionProps) => {
  const { selectedGames } = useGames();
  return (
    <Container>
      <span>{selectedGames.length} itens selecionados</span>
      <Button onClick={openModal}>Aplicar Desconto</Button>
    </Container>
  );
};

export default SelectedSection;
