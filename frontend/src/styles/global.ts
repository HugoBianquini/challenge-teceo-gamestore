import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto';
    background-color: ${theme.colors.grey[900]};
    color: ${theme.colors.white};
    overscroll-behavior-y: none;
  }

  main {
    display: flex;

    height: 100%;

    justify-content: center;
    align-items: center;
  }
`;
