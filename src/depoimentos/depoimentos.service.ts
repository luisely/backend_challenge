import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common'
import { CreateDepoimentoDto } from './dto/create-depoimento.dto'
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto'
import { DepoimentosRepository } from 'src/shared/repositories/depoimentos.repositories'

@Injectable()
export class DepoimentosService {
  constructor(private readonly depoimentosRepo: DepoimentosRepository) {}

  async create(
    file: Express.Multer.File,
    createDepoimentoDto: CreateDepoimentoDto,
  ) {
    if (!file) {
      throw new BadRequestException(
        'invalid file provided, [image files allowed]',
      )
    }

    return this.depoimentosRepo.create({
      data: {
        avatarUrl: file.filename,
        ...createDepoimentoDto,
      },
    })
  }

  findAll() {
    return this.depoimentosRepo.findMany({})
  }

  findOne(id: string) {
    return this.depoimentosRepo.findOne({ where: { id } })
  }

  async update(
    id: string,
    file: Express.Multer.File,
    updateDepoimentoDto: UpdateDepoimentoDto,
  ) {
    const depoimento = await this.findOne(id)

    if (!depoimento) throw new NotFoundException('Depoimento não encontrado')

    return this.depoimentosRepo.update({
      where: { id },
      data: {
        avatarUrl: file.filename,
        ...updateDepoimentoDto,
      },
    })
  }

  remove(id: string) {
    return this.depoimentosRepo.remove({ where: { id } })
  }

  async depoimentosHome() {
    const totalDepoimentosOnDb = await this.depoimentosRepo.count({})
    const skipDepoimentos =
      Math.floor(Math.random() * (totalDepoimentosOnDb - 3)) + 1
    return this.depoimentosRepo.findMany({
      take: 3,
      skip: skipDepoimentos,
      distinct: ['personName'],
    })
  }
}
