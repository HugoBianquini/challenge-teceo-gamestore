import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./styles/global.ts";
import App from "./App.tsx";
import CustomThemeProvider from "./providers/ThemeProvider.tsx";
import { GameProvider } from "./providers/GameProvider/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <GameProvider>
        <App />
        <GlobalStyle />
      </GameProvider>
    </CustomThemeProvider>
  </StrictMode>
);
