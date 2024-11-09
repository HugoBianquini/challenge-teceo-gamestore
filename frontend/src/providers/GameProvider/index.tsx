import { createContext, useMemo, useState } from "react";
import { IGameContext, IGameItem, IGameProviderProps } from "./index.type";

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider = ({ children }: IGameProviderProps) => {
  const [games, setGames] = useState<IGameItem[]>([]);
  const [selectAll, setSelectAll] = useState(false);

  const contextValue = useMemo(
    () => ({
      games,
      setGames,
      selectAll,
      setSelectAll,
    }),
    [games, selectAll]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
