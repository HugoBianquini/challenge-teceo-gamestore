import { createContext, useMemo, useState } from "react";
import { IGameContext, IGameItem, IGameProviderProps } from "./index.type";

export const GameContext = createContext<IGameContext>({} as IGameContext);

export const GameProvider = ({ children }: IGameProviderProps) => {
  const [games, setGames] = useState<IGameItem[]>([]);

  const contextValue = useMemo(
    () => ({
      games,
      setGames,
    }),
    [games]
  );

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};
