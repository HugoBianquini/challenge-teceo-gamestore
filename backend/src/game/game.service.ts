import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateGameDto } from './dto/update-game.dto';

@Injectable()
export class GameService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.game.findMany();
  }

  findOne(id: string) {
    return this.prisma.game.findUnique({ where: { id } });
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
}
