import { render } from "@testing-library/react";
import Home from ".";
import { describe, expect, it } from "vitest";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GameProvider } from "@/providers/GameProvider";

describe("Home", () => {
  it("renders the home component", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GameProvider>
          <Home />
        </GameProvider>
      </ThemeProvider>
    );

    expect(getByText("Bem-vindo à GameStore")).toBeDefined();
    expect(getByText("Confira os games no catálogo")).toBeDefined();
  });

  it("should render ToastContainer successfully", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <GameProvider>
          <Home />
        </GameProvider>
      </ThemeProvider>
    );

    expect(container.querySelector(".Toastify")).toBeDefined();
  });
});
