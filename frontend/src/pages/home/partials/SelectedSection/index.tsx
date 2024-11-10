import { useGames } from "@/hooks/useGames";
import { Container } from "./styles";
import Button from "@/components/Button";
import { ISelectedSectionProps } from "./index.type";
import { useMemo } from "react";

const SelectedSection = ({ openModal }: ISelectedSectionProps) => {
  const { selectedGames, selectAll, excludedGames, totalCount } = useGames();

  const selectedQuantity = useMemo(() => {
    if (selectAll) {
      return totalCount - excludedGames.length;
    }

    return selectedGames.length;
  }, [selectAll, selectedGames, excludedGames]);

  return (
    <Container>
      <span>{selectedQuantity} itens selecionados</span>
      <Button onClick={openModal}>Aplicar Desconto</Button>
    </Container>
  );
};

export default SelectedSection;
