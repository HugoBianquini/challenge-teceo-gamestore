import { GamePlatform, GameStatus } from '@prisma/client';

export class GameDto {
  id: string;
  title: string;
  description: string;
  price: number;
  platform: GamePlatform;
  status: GameStatus;
}
