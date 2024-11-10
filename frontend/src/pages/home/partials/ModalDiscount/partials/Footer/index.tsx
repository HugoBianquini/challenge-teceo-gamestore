import { useGames } from "@/hooks/useGames";
import { Footer } from "./styles";
import { useMemo, useState } from "react";
import Button from "@/components/Button";
import { updateMassDiscount } from "@/services/games";
import { IFooterProps } from "./index.type";

const ModalFooter = ({ closeModal }: IFooterProps) => {
  const {
    selectedGames,
    totalCount,
    selectAll,
    excludedGames,
    handleRemoveSelection,
  } = useGames();

  const [isLoading, setLoading] = useState(false);

  const itensCount = useMemo(() => {
    if (selectAll) {
      return totalCount - excludedGames.length;
    }
    return selectedGames.length;
  }, [selectAll, selectedGames, excludedGames]);

  const handleConfirmClick = async () => {
    const payload = {
      percentage: 10,
      ...(selectAll
        ? { excludedItens: excludedGames }
        : { selectedItens: selectedGames.map((item) => item.id) }),
    };

    setLoading(true);
    await updateMassDiscount(payload);
    setLoading(false);
    handleRemoveSelection();
    closeModal();
  };

  return (
    <Footer>
      <h3>{itensCount} Itens para alteração</h3>
      <Button onClick={handleConfirmClick}>
        {isLoading ? "Carregando..." : "Confirmar"}
      </Button>
    </Footer>
  );
};

export default ModalFooter;
