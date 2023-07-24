import { Module } from '@nestjs/common';
import { PagarmeService } from './pagarme.service';
import { PagarmeController } from './pagarme.controller';

@Module({
  controllers: [PagarmeController],
  providers: [PagarmeService]
})
export class PagarmeModule {}
