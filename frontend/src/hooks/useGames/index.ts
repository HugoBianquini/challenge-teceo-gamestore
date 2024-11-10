import { GameContext } from "@/providers/GameProvider";
import { IGames } from "@/services/games/index.type";
import { useCallback, useContext, useMemo } from "react";

export const useGames = () => {
  const {
    setGames,
    games,
    setSelectAll,
    selectAll,
    setExcludedGames,
    excludedGames,
    totalCount,
  } = useContext(GameContext);

  const handleSelectGame = useCallback(
    (index: number) => {
      setGames((prev) => {
        const currentGame = prev[index];
        prev[index] = { ...currentGame, isSelected: !currentGame.isSelected };
        return [...prev];
      });

      if (selectAll) {
        handleExcludeGame(games[index].id);
      }
    },
    [selectAll, excludedGames]
  );

  const handleUpdateGame = useCallback((index: number, updatedGame: IGames) => {
    setGames((prev) => {
      const currentGame = prev[index];
      prev[index] = { ...currentGame, ...updatedGame };
      return [...prev];
    });
  }, []);

  const handleSelectAll = useCallback(() => {
    const allSelected = games.map((item) => ({ ...item, isSelected: true }));
    setSelectAll(true);
    setGames(allSelected);
  }, [games]);

  const handleRemoveSelection = useCallback(() => {
    const notSelected = games.map((item) => ({ ...item, isSelected: false }));
    setSelectAll(false);
    setGames(notSelected);
    setExcludedGames([]);
  }, [games]);

  const handleExcludeGame = useCallback(
    (id: string) => {
      if (excludedGames.includes(id)) {
        setExcludedGames((prev) => {
          const updatedArray = prev.filter((item) => item !== id);
          return updatedArray;
        });
      } else {
        setExcludedGames((prev) => prev.concat(id));
      }
    },
    [excludedGames]
  );

  const selectedGames = useMemo(() => {
    return games.filter((item) => item.isSelected);
  }, [games]);

  return {
    handleSelectGame,
    handleUpdateGame,
    handleSelectAll,
    handleRemoveSelection,
    selectAll,
    selectedGames,
    excludedGames,
    setExcludedGames,
    totalCount,
  };
};
