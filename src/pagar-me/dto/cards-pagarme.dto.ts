import { IsString } from 'class-validator';

export class CardsPagarmeDto {
  @IsString()
  api_key: string;

  @IsString()
  card_expiration_date: string;

  @IsString()
  card_number: string;

  @IsString()
  card_cvv: string;

  @IsString()
  card_holder_name: string;
}

export class CardListDto {
  @IsString()
  api_key: string;

  @IsString()
  count: string;
}
