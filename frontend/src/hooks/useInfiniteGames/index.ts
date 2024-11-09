import { GameContext } from "@/providers/GameProvider";
import { IGameItem } from "@/providers/GameProvider/index.type";
import { getGames, getGamesCount } from "@/services/games";
import { IGames } from "@/services/games/index.type";
import { useCallback, useContext, useEffect, useRef } from "react";

const PAGE_SIZE = 10;

export const useInfiniteGames = () => {
  const { games, setGames } = useContext(GameContext);

  const totalItems = useRef(0);
  const page = useRef(1);

  const fetchGamesCount = async () => {
    const count = await getGamesCount();
    totalItems.current = parseInt(count.data.total);
  };

  const mapGames = (games: IGames[]): IGameItem[] => {
    return games.map((game) => ({
      ...game,
      isSelected: false,
    }));
  };

  const fetchGames = async () => {
    const gamesResponse = await getGames(page.current, PAGE_SIZE);
    setGames((prev) => prev.concat(mapGames(gamesResponse.data)));
  };

  useEffect(() => {
    fetchGamesCount();
    fetchGames();
  }, []);

  const totalPages = totalItems ? Math.ceil(totalItems.current / PAGE_SIZE) : 0;
  const hasNextPage = page.current < totalPages;

  const fetchNextPage = useCallback(() => {
    if (page.current >= totalPages) return;

    page.current = page.current + 1;
    fetchGames();
  }, [totalPages]);

  return {
    data: games,
    hasNextPage,
    page: page.current,
    fetchNextPage,
    totalPages,
    totalItems: totalItems.current,
  };
};
