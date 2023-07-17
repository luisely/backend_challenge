import { Module } from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';
import { DepoimentosController } from './depoimentos.controller';
import { DepoimentosHomeController } from './depoimentos-home.controller';

@Module({
  controllers: [DepoimentosController, DepoimentosHomeController],
  providers: [DepoimentosService],
})
export class DepoimentosModule {}
