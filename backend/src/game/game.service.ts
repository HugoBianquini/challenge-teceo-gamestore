import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  async findAll(page: number, limit: number) {
    const skip = (page - 1) * limit;

    const games = await this.prisma.game.findMany({
      skip: skip,
      take: limit,
      include: {
        category: true,
      },
    });

    return {
      data: games,
      page,
    };
  }

  findOne(id: string) {
    return this.prisma.game.findUnique({ where: { id } });
  }

  async count() {
    const count = await this.prisma.game.count();
    return { total: count };
  }

  update(id: string, updateEventDto: UpdateGameDto) {
    return this.prisma.game.update({
      data: updateEventDto,
      where: { id },
    });
  }

  remove(id: string) {
    return this.prisma.game.delete({
      where: { id },
    });
  }

  updateDiscount(updateDiscountRequest: UpdateDiscountDto) {
    const {
      percentage,
      excludedItens = [],
      selectedItens = [],
    } = updateDiscountRequest;

    const condition =
      selectedItens.length > 0
        ? { in: selectedItens }
        : { notIn: excludedItens };

    return this.prisma.game.updateMany({
      where: { id: condition },
      data: { discount: percentage },
    });
  }
}
