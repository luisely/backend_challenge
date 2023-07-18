import { Controller, Get } from '@nestjs/common'
import { DepoimentosService } from './depoimentos.service'

@Controller('depoimentos-home')
export class DepoimentosHomeController {
  constructor(private readonly depoimentosService: DepoimentosService) {}

  @Get()
  depoismentosHome() {
    return this.depoimentosService.depoimentosHome()
  }
}
