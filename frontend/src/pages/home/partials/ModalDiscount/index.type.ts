import { IGameItem } from "@/providers/GameProvider/index.type";

export interface IModalProps {
  games: IGameItem[];
  isOpen: boolean;
  closeModal: () => void;
  fetchNextPage: () => void;
}
