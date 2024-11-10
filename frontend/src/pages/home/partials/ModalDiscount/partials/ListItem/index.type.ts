import { IGameItem } from "@/providers/GameProvider/index.type";

export interface IListItem {
  game: IGameItem;
  index: number;
}

export enum EPlatform {
  xbox = "xbox",
  ps = "playstation",
  nintendo = "nintendo",
  pc = "PC",
}
