import { Injectable } from '@nestjs/common';
import { RecipientsPagarmeDto } from './dto/recipients-pagarme.dto';
import axios from 'axios';
import { CardListDto, CardsPagarmeDto } from './dto/cards-pagarme.dto';

@Injectable()
export class PagarmeService {
  private url = `https://api.pagar.me/1/`;
  async recipients(recipients: RecipientsPagarmeDto) {
    const url = `${this.url}recipients`;
    const response = await axios.post(url, recipients);
    return response.data;
  }

  async cards(cards: CardsPagarmeDto) {
    const url = `${this.url}cards`;
    const response = await axios.post(url, cards);
    return response.data;
  }

  async listCards(cards: CardListDto) {
    const url = `${this.url}cards`;

    const params = {
      api_key: cards.api_key,
      count: cards.count,
    };

    const response = await axios.get(url, { params });
    return response.data;
  }

  async balance(key: string) {
    const url = `${this.url}balance`;

    const params = {
      key,
    };

    console.log(params);

    const response = await axios.get(url, { params });
    return response.data;
  }
}
