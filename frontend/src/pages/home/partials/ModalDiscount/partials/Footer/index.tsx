import { useGames } from "@/hooks/useGames";
import { Footer } from "./styles";
import { useMemo } from "react";
import Button from "@/components/Button";

const ModalFooter = () => {
  const { selectedGames, totalCount, selectAll, excludedGames } = useGames();

  const itensCount = useMemo(() => {
    if (selectAll) {
      return totalCount - excludedGames.length;
    }

    return selectedGames.length;
  }, [selectAll, selectedGames, excludedGames]);

  return (
    <Footer>
      <h3>{itensCount} Itens para alteração</h3>
      <Button>Confirmar</Button>
    </Footer>
  );
};

export default ModalFooter;
