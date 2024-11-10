import { createContext, useMemo, useState } from "react";
import { IGameContext, IGameItem, IGameProviderProps } from "./index.type";

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider = ({ children }: IGameProviderProps) => {
  const [games, setGames] = useState<IGameItem[]>([]);
  const [selectAll, setSelectAll] = useState(false);
  const [excludedGames, setExcludedGames] = useState<string[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const contextValue = useMemo(
    () => ({
      games,
      setGames,
      selectAll,
      setSelectAll,
      excludedGames,
      setExcludedGames,
      totalCount,
      setTotalCount,
    }),
    [games, selectAll, excludedGames, totalCount]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
