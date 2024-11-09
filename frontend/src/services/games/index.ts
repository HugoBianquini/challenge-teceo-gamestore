import { axiosClient } from "..";
import { ICountResponse, IGames, IPaginatedResponse } from "./index.type";

export const getGames = async (page: number, limit: number = 10) => {
  const {
    data: { data },
    status,
  } = await axiosClient.get<IPaginatedResponse>(
    `/games?page=${page}&limit=${limit}`
  );

  return { data, status };
};

export const getGamesCount = async () => {
  const { data, status } = await axiosClient.get<ICountResponse>(
    "/games/count"
  );
  return { data, status };
};

export const updateGame = async (id: string, game: Partial<IGames>) => {
  const { data, status } = await axiosClient.patch<IGames>(`/games/${id}`, {
    ...game,
  });
  return { data, status };
};
