import { IGameItem } from "@/providers/GameProvider/index.type";

export const gamesMock: IGameItem[] = [
  {
    id: "1",
    title: "Adventure Quest",
    description:
      "Embark on an epic journey through a magical land filled with adventure.",
    category: {
      id: "cat1",
      title: "adventure",
    },
    platform: "pc",
    price: 59.99,
    discount: 10, // 10% de desconto
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    isSelected: false,
  },
  {
    id: "2",
    title: "FIFA 22",
    description:
      "Experience the world's game with FIFA 22, featuring realistic gameplay.",
    category: {
      id: "cat2",
      title: "sports",
    },
    platform: "xbox",
    price: 69.99,
    discount: 5, // 5% de desconto
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString(),
    isSelected: false,
  },
];
