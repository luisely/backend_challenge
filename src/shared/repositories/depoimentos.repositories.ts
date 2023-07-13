import { PrismaService } from '../database/prisma.service';
import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';

@Injectable()
export class DepoimentosRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.DepoimentosCreateArgs) {
    return this.prisma.depoimentos.create(createDto);
  }

  findMany(findMany: Prisma.DepoimentosFindManyArgs) {
    return this.prisma.depoimentos.findMany(findMany);
  }
}
