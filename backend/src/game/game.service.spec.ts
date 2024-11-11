import { GameService } from './game.service';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

describe('GameService', () => {
  let service: GameService;
  let prismaServiceMock: {
    game: {
      findMany: jest.Mock;
      findUnique: jest.Mock;
      count: jest.Mock;
      update: jest.Mock;
      delete: jest.Mock;
      updateMany: jest.Mock;
    };
  };

  beforeEach(async () => {
    prismaServiceMock = {
      game: {
        findMany: jest.fn(),
        findUnique: jest.fn(),
        count: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
        updateMany: jest.fn(),
      },
    };

    service = new GameService(prismaServiceMock as unknown as PrismaService);
  });

  describe('findAll', () => {
    it('should return paginated games', async () => {
      const mockGames = [{ id: '1', name: 'Game 1', category: {} }];
      prismaServiceMock.game.findMany.mockResolvedValue(mockGames);

      const result = await service.findAll(1, 10);

      expect(result.data).toStrictEqual(mockGames);
      expect(result.page).toBe(1);
      expect(prismaServiceMock.game.findMany).toHaveBeenCalledWith({
        skip: 0,
        take: 10,
        include: { category: true },
      });
    });
  });

  describe('findOne', () => {
    it('should return game by id', async () => {
      const mockGame = { id: '1', name: 'Game 1' };
      prismaServiceMock.game.findUnique.mockResolvedValue(mockGame);

      const result = await service.findOne('1');

      expect(result).toBe(mockGame);
      expect(prismaServiceMock.game.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });

    it('should return empty when game not found', async () => {
      prismaServiceMock.game.findUnique.mockResolvedValue(null);

      expect(await service.findOne('1')).toBe(null);
    });
  });

  describe('count', () => {
    it('should return total count of games', async () => {
      prismaServiceMock.game.count.mockResolvedValue(100);

      const result = await service.count();

      expect(result.total).toBe(100);
      expect(prismaServiceMock.game.count).toHaveBeenCalledTimes(1);
    });
  });

  describe('update', () => {
    it('should update a game', async () => {
      const updateGameDto: UpdateGameDto = { title: 'Updated Game' };
      const mockGame = { id: '1', ...updateGameDto };

      prismaServiceMock.game.update.mockResolvedValue(mockGame);

      const result = await service.update('1', updateGameDto);

      expect(result).toBe(mockGame);
      expect(prismaServiceMock.game.update).toHaveBeenCalledWith({
        data: updateGameDto,
        where: { id: '1' },
      });
    });
  });

  describe('remove', () => {
    it('should delete a game', async () => {
      const mockGame = { id: '1', name: 'Game to delete' };

      prismaServiceMock.game.delete.mockResolvedValue(mockGame);

      const result = await service.remove('1');

      expect(result).toBe(mockGame);
      expect(prismaServiceMock.game.delete).toHaveBeenCalledWith({
        where: { id: '1' },
      });
    });
  });

  describe('updateDiscount', () => {
    it('should update discount for selected games', async () => {
      const updateDiscountDto: UpdateDiscountDto = {
        percentage: 20,
        selectedItens: ['1', '2'],
      };

      prismaServiceMock.game.updateMany.mockResolvedValue({ count: 2 });

      const result = await service.updateDiscount(updateDiscountDto);

      expect(result.count).toBe(2);
      expect(prismaServiceMock.game.updateMany).toHaveBeenCalledWith({
        where: { id: { in: ['1', '2'] } },
        data: { discount: 20 },
      });
    });

    it('should update discount excluding certain games', async () => {
      const updateDiscountDto: UpdateDiscountDto = {
        percentage: 20,
        excludedItens: ['3'],
      };

      prismaServiceMock.game.updateMany.mockResolvedValue({ count: 2 });

      const result = await service.updateDiscount(updateDiscountDto);

      expect(result.count).toBe(2);
      expect(prismaServiceMock.game.updateMany).toHaveBeenCalledWith({
        where: { id: { notIn: ['3'] } },
        data: { discount: 20 },
      });
    });
  });
});
