export type TGamePlatform = "xbox" | "pc" | "ps" | "nintendo";

export type TGameCategoryTitle =
  | "action"
  | "adventure"
  | "strategy"
  | "sports"
  | "rpg"
  | "horror";

export interface IGameCategory {
  id: string;
  title: TGameCategoryTitle;
}

export interface IGames {
  id: string;
  title: string;
  description: string;
  category: IGameCategory;
  platform: TGamePlatform;
  price: number;
  discount: number;
  createdAt: string;
  lastUpdated: string;
}

export interface IPaginatedResponse {
  data: IGames[];
  page: number;
}

export interface ICountResponse {
  total: string;
}

export interface IMassDiscountRequest {
  percentage?: number;
  selectedItens?: string[];
  excludedItens?: string[];
}

export interface IMassDiscountResponse {
  count: number;
}
