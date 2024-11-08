import styled, { css } from "styled-components";
import { TButtonVariant } from "./index.type";

export const CustomButton = styled.button<{ variant: TButtonVariant }>`
  ${({ variant, theme }) => css`
    height: 40px;
    min-width: 120px;
    padding: 8px 16px 8px 16px;
    font-size: medium;
    font-family: "Roboto";
    border-radius: 12px;
    cursor: pointer;
    background: ${variant === "regular" ? theme.colors.grey[700] : "darkred"};
    color: ${({ theme }) => theme.colors.light};
    border: none;
    transition: all 0.3s ease;

    &:hover {
      background: ${variant === "regular" ? theme.colors.grey[600] : "darkred"};
    }
  `}
`;
