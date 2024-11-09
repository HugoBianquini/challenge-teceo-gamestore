import { useGames } from "@/hooks/useGames";
import { Container } from "./styles";
import Button from "@/components/Button";

const SelectedSection = () => {
  const { selectedGames } = useGames();
  return (
    <Container>
      <span>{selectedGames.length} itens selecionados</span>
      <Button>Aplicar Desconto</Button>
    </Container>
  );
};

export default SelectedSection;
