import { Injectable } from '@nestjs/common';
import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';
import { DepoimentosRepository } from 'src/shared/repositories/depoimentos.repositories';

@Injectable()
export class DepoimentosService {
  constructor(private readonly depoimentosRepo: DepoimentosRepository) {}

  create(createDepoimentoDto: CreateDepoimentoDto) {
    return this.depoimentosRepo.create({
      data: createDepoimentoDto,
    });
  }

  findAll() {
    return this.depoimentosRepo.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} depoimento`;
  }

  update(id: number, updateDepoimentoDto: UpdateDepoimentoDto) {
    return `This action updates a #${id} depoimento`;
  }

  remove(id: number) {
    return `This action removes a #${id} depoimento`;
  }
}
