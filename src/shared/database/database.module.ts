import { Global, Module } from '@nestjs/common'
import { PrismaService } from './prisma.service'
import { DepoimentosRepository } from '../repositories/depoimentos.repositories'

@Global()
@Module({
  providers: [PrismaService, DepoimentosRepository],
  exports: [DepoimentosRepository],
})
export class DatabaseModule {}
