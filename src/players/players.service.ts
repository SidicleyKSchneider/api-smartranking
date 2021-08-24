import { Injectable, Logger } from '@nestjs/common';
import { CreatedPlayerDto } from './dtos/created-player.dto';
import { Player } from './interfaces/player.interface';
// import * as uuid from 'uuid/v1';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PlayersService {
  private players: Player[] = [];
  private readonly logger = new Logger(PlayersService.name);

  async createUpdatePlayer(createdPlayerDto: CreatedPlayerDto): Promise<void> {
    await this.create(createdPlayerDto);
  }
  private create(createdPlayerDto: CreatedPlayerDto): void {
    const { name, phoneNumber, email } = createdPlayerDto;
    const player: Player = {
      _id: uuidv4(),
      name,
      phoneNumber,
      email,
      ranking: 'A',
      rankingPosition: 1,
      urlPlayerPicture: 'https://sidicleyschneider.com/img/eu.jpg',
    };
    this.logger.log(`createdPlayerDto: ${JSON.stringify(player)}`);
    this.players.push(player);
  }
}
