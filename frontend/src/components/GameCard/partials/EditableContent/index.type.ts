import { IGameItem } from "@/providers/GameProvider/index.type";

export interface IEditableContentProps {
  setEdit: () => void;
  game: IGameItem;
  index: number;
}
