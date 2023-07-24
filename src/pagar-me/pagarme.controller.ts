import { Body, Controller, Get, Post } from '@nestjs/common';
import { PagarmeService } from './pagarme.service';
import { RecipientsPagarmeDto } from './dto/recipients-pagarme.dto';
import { CardListDto, CardsPagarmeDto } from './dto/cards-pagarme.dto';

@Controller('pagarme')
export class PagarmeController {
  constructor(private readonly pagarmeService: PagarmeService) {}

  @Post('recipients')
  async recipients(@Body() recipients: RecipientsPagarmeDto) {
    return this.pagarmeService.recipients(recipients);
  }

  @Post('cards')
  async cards(@Body() cards: CardsPagarmeDto) {
    return this.pagarmeService.cards(cards);
  }

  @Get('cards')
  async listCards(@Body() cards: CardListDto) {
    return this.pagarmeService.listCards(cards);
  }

  @Get('balance')
  async balance(@Body() api_key: string) {
    return this.pagarmeService.balance(api_key);
  }
}
