import { ReactNode } from "react";

export interface IModalProps {
  children: ReactNode;
  title: string;
  isOpen: boolean;
  setClose: () => void;
}
