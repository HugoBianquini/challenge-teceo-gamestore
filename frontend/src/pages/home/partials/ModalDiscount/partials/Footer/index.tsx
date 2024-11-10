import { useGames } from "@/hooks/useGames";
import { ContainerToast, Footer, SmallButton } from "./styles";
import { useMemo, useState } from "react";
import Button from "@/components/Button";
import { updateMassDiscount } from "@/services/games";
import { IFooterProps } from "./index.type";
import { toast } from "react-toastify";

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

  const showSuccesToast = (count: number) => {
    toast.success(
      <ContainerToast>
        {count} itens atualizados com sucesso!
        <SmallButton
          onClick={() => {
            window.location.reload();
          }}
        >
          Atualizar a página
        </SmallButton>
      </ContainerToast>,
      { autoClose: false }
    );
  };

  const handleConfirmClick = async () => {
    const payload = {
      percentage: 10,
      ...(selectAll
        ? { excludedItens: excludedGames }
        : { selectedItens: selectedGames.map((item) => item.id) }),
    };

    setLoading(true);

    try {
      const response = await updateMassDiscount(payload);
      setLoading(false);
      handleRemoveSelection();
      closeModal();
      showSuccesToast(response.data.count);
    } catch {
      setLoading(false);
      toast.error("Não foi possível realizar a alteração dos itens");
    }
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
