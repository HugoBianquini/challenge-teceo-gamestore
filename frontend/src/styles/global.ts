import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    max-width: 100vw;
    height: 100vh;
    font-family: 'Roboto';
    background-color: ${theme.colors.light};
    color: ${theme.colors.dark};
    overscroll-behavior-y: none;
  }

  main {
    display: flex;

    height: 100%;

    justify-content: center;
    align-items: center;
  }
`;
