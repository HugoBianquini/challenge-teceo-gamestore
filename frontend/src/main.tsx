import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GlobalStyle } from "./styles/global.ts";
import App from "./App.tsx";
import CustomThemeProvider from "./providers/ThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
      <GlobalStyle />
    </CustomThemeProvider>
  </StrictMode>
);
