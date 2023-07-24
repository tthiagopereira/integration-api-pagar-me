import { IsBoolean, IsNumber, IsOptional, IsString } from 'class-validator';

export class RecipientsPagarmeDto {
  @IsString()
  anticipatable_volume_percentage: string;

  @IsString()
  api_key: string;

  @IsBoolean()
  automatic_anticipation_enabled: boolean;

  @IsOptional()
  bank_account: any;

  @IsNumber()
  transfer_day: number;

  @IsOptional()
  transfer_enabled: boolean;

  @IsString()
  transfer_interval: string;

  @IsString()
  postback_url: string;
}

export class BankAccount {
  @IsNumber()
  bank_code: number;

  @IsNumber()
  agencia: number;

  @IsNumber()
  agencia_dv: number;

  @IsNumber()
  conta: number;

  @IsString()
  type: string;

  @IsNumber()
  conta_dv: number;

  @IsNumber()
  document_number: number;

  @IsString()
  legal_name: string;
}
