import { Module } from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';
import { DepoimentosController } from './depoimentos.controller';

@Module({
  controllers: [DepoimentosController],
  providers: [DepoimentosService],
})
export class DepoimentosModule {}
