import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: TButtonVariant;
}

export type TButtonVariant = "regular" | "error";
