import { Module } from '@nestjs/common';
import { DatabaseModule } from './shared/database/database.module';
import { DepoimentosModule } from './depoimentos/depoimentos.module';

@Module({
  imports: [DatabaseModule, DepoimentosModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
