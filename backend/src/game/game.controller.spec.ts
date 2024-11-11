import { Test, TestingModule } from '@nestjs/testing';
import { GameController } from './game.controller';
import { GameModule } from './game.module';
import { GameService } from './game.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

describe('GameController', () => {
  let controller: GameController;
  let service: GameService;

  const gameServiceMock = {
    findAll: jest.fn(),
    count: jest.fn(),
    updateDiscount: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [GameModule],
    }).compile();

    controller = module.get<GameController>(GameController);
    service = gameServiceMock as unknown as GameService;

    controller['gameService'] = service;
  });

  describe('GameController', () => {
    it('should be defined', () => {
      expect(controller).toBeDefined();
      expect(controller['gameService']).toBeDefined();
    });
  });

  describe('findAll', () => {
    it('should return a paginated games', async () => {
      const mockGames = [{ id: '1', name: 'Game 1' }];
      gameServiceMock.findAll.mockResolvedValue({ data: mockGames, page: 1 });

      const result = await controller.findAll('1', '10');

      expect(result.data).toStrictEqual(mockGames);
      expect(result.page).toBe(1);
      expect(gameServiceMock.findAll).toHaveBeenCalledWith(1, 10);
    });
  });

  describe('count', () => {
    it('should return total count of games', async () => {
      gameServiceMock.count.mockResolvedValue({ total: 100 });

      const result = await controller.count();

      expect(result.total).toBe(100);
      expect(gameServiceMock.count).toHaveBeenCalledTimes(1);
    });
  });

  describe('updateDiscount', () => {
    it('should update discount for selected games', async () => {
      const updateDiscountDto: UpdateDiscountDto = {
        percentage: 20,
        selectedItens: ['1', '2'],
      };
      gameServiceMock.updateDiscount.mockResolvedValue({ count: 2 });

      const result = await controller.updateDiscount(updateDiscountDto);

      expect(result.count).toBe(2);
      expect(gameServiceMock.updateDiscount).toHaveBeenCalledWith(
        updateDiscountDto,
      );
    });
  });

  describe('findOne', () => {
    it('should return a game by id', async () => {
      const mockGame = { id: '1', name: 'Game 1' };
      gameServiceMock.findOne.mockResolvedValue(mockGame);

      const result = await controller.findOne('1');

      expect(result).toBe(mockGame);
      expect(gameServiceMock.findOne).toHaveBeenCalledWith('1');
    });
  });

  describe('update', () => {
    it('should update a game', async () => {
      const updateGameDto: UpdateGameDto = { title: 'Updated Game' };
      const mockGame = { id: '1', ...updateGameDto };
      gameServiceMock.update.mockResolvedValue(mockGame);

      const result = await controller.update('1', updateGameDto);

      expect(result).toBe(mockGame);
      expect(gameServiceMock.update).toHaveBeenCalledWith('1', updateGameDto);
    });
  });

  describe('remove', () => {
    it('should delete game', async () => {
      const mockGame = { id: '1', name: 'Game to delete' };
      gameServiceMock.remove.mockResolvedValue(mockGame);

      const result = await controller.remove('1');

      expect(result).toBe(mockGame);
      expect(gameServiceMock.remove).toHaveBeenCalledWith('1');
    });
  });
});
