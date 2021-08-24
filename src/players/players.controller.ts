import { Body, Controller, Post } from '@nestjs/common';
import { CreatedPlayerDto } from './dtos/created-player.dto';
import { PlayersService } from './players.service';

@Controller('api/v1/players')
export class PlayersController {
  constructor(private readonly playersService: PlayersService) {}

  @Post()
  async createUpdatePlayer(@Body() createdPlayerDto: CreatedPlayerDto) {
    await this.playersService.createUpdatePlayer(createdPlayerDto);
  }
}
