import { Module } from '@nestjs/common';
import { PagarmeModule } from './pagar-me/pagarme.module';

@Module({
  imports: [AppModule, PagarmeModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
