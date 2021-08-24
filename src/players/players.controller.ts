import { Body, Controller, Post } from '@nestjs/common';
import { CreatedPlayerDto } from './dtos/created-player.dto';

@Controller('api/v1/players')
export class PlayersController {
  @Post()
  async createUpdatePlayer(@Body() createdPlayerDto: CreatedPlayerDto) {
    const { email, name } = createdPlayerDto;
    return JSON.stringify(`{
      email: ${email}
      name: ${name}
    }`);
  }
}
