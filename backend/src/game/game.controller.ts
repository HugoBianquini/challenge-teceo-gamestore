import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  Param,
  Patch,
  Query,
} from '@nestjs/common';
import { GameService } from './game.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { UpdateDiscountDto } from './dto/update-discount.dto';

@Controller('games')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  findAll(
    @Query('page') page: string = '1',
    @Query('limit') limit: string = '10',
  ) {
    const pageNumber = parseInt(page);
    const pageSize = parseInt(limit);
    return this.gameService.findAll(pageNumber, pageSize);
  }

  @Get('count')
  count() {
    return this.gameService.count();
  }

  @Patch('discount')
  updateDiscount(@Body() updateDiscountRequest: UpdateDiscountDto) {
    return this.gameService.updateDiscount(updateDiscountRequest);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gameService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGameRequest: UpdateGameDto) {
    return this.gameService.update(id, updateGameRequest);
  }

  @HttpCode(204)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gameService.remove(id);
  }
}
