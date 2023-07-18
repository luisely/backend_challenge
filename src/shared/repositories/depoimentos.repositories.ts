import { PrismaService } from '../database/prisma.service'
import { Injectable } from '@nestjs/common'
import { Prisma } from '@prisma/client'

@Injectable()
export class DepoimentosRepository {
  constructor(private readonly prisma: PrismaService) {}

  create(createDto: Prisma.DepoimentosCreateArgs) {
    return this.prisma.depoimentos.create(createDto)
  }

  findMany(findMany: Prisma.DepoimentosFindManyArgs) {
    return this.prisma.depoimentos.findMany(findMany)
  }

  findOne(findOne: Prisma.DepoimentosFindUniqueArgs) {
    return this.prisma.depoimentos.findUnique(findOne)
  }

  remove(deleteOne: Prisma.DepoimentosDeleteArgs) {
    return this.prisma.depoimentos.delete(deleteOne)
  }

  update(updateOne: Prisma.DepoimentosUpdateArgs) {
    return this.prisma.depoimentos.update(updateOne)
  }

  count(count: Prisma.DepoimentosCountArgs) {
    return this.prisma.depoimentos.count(count)
  }
}
