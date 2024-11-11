import { render } from "@testing-library/react";
import { useInfiniteGames } from "@/hooks/useInfiniteGames";
import { beforeEach, describe, expect, it, vi } from "vitest";
import GameList from ".";
import { gamesMock } from "@/utils/test/mocks";
import { ThemeProvider } from "styled-components";
import { GameProvider } from "@/providers/GameProvider";
import { theme } from "@/styles/theme";
import { VirtuosoProps } from "react-virtuoso";

vi.mock("@/hooks/useInfiniteGames");

vi.mock("react-virtuoso", async (importOriginal) => {
  const originalModule =
    importOriginal as unknown as typeof import("react-virtuoso");

  function Virtuoso(props: VirtuosoProps<unknown, unknown>) {
    return (
      <>
        {props.data?.map((value, index) =>
          props.itemContent?.(index, value, undefined)
        )}
      </>
    );
  }
  return { ...originalModule, Virtuoso };
});

describe("<GameList />", () => {
  const mockFetchNextPage = vi.fn();

  beforeEach(() => {
    vi.mocked(useInfiniteGames).mockReturnValue({
      data: gamesMock,
      hasNextPage: true,
      fetchNextPage: mockFetchNextPage,
      totalItems: 2,
      totalPages: 2,
      page: 1,
    });
  });

  it("should render games correctly", () => {
    const { getByText } = render(
      <ThemeProvider theme={theme}>
        <GameProvider>
          <GameList />
        </GameProvider>
      </ThemeProvider>
    );

    expect(getByText(gamesMock[0].title)).toBeDefined();
    expect(getByText(gamesMock[1].title)).toBeDefined();
  });
});
