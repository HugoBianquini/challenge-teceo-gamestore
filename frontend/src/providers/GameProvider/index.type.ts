import { IGames } from "@/services/games/index.type";
import { ReactNode } from "react";

export interface IGameItem extends IGames {
  isSelected: boolean;
}

export interface IGameContext {
  games: IGameItem[];
  setGames: React.Dispatch<React.SetStateAction<IGameItem[]>>;
  selectAll: boolean;
  setSelectAll: React.Dispatch<React.SetStateAction<boolean>>;
  excludedGames: string[];
  setExcludedGames: React.Dispatch<React.SetStateAction<string[]>>;
  totalCount: number;
  setTotalCount: React.Dispatch<React.SetStateAction<number>>;
}

export interface IGameProviderProps {
  children: ReactNode;
}
