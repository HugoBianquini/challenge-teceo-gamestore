import { IGameItem } from "@/providers/GameProvider/index.type";

export interface IGameCardProps {
  game: IGameItem;
  index: number;
}

export enum ECategory {
  adventure = "Aventura",
  action = "Ação",
  horror = "Terror",
  sports = "Esportes",
  strategy = "Estratégia",
  rpg = "RPG",
}
