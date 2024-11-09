import { GameContext } from "@/providers/GameProvider";
import { IGames } from "@/services/games/index.type";
import { useCallback, useContext, useMemo } from "react";

export const useGames = () => {
  const { setGames, games } = useContext(GameContext);

  const handleSelectGame = useCallback((index: number) => {
    setGames((prev) => {
      const currentGame = prev[index];
      prev[index] = { ...currentGame, isSelected: !currentGame.isSelected };
      return [...prev];
    });
  }, []);

  const handleUpdateGame = useCallback((index: number, updatedGame: IGames) => {
    setGames((prev) => {
      const currentGame = prev[index];
      prev[index] = { ...currentGame, ...updatedGame };
      return [...prev];
    });
  }, []);

  const selectedGames = useMemo(() => {
    return games.filter((item) => item.isSelected);
  }, [games]);

  return {
    handleSelectGame,
    handleUpdateGame,
    selectedGames,
  };
};
