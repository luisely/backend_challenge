import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
  HttpCode,
  HttpStatus,
  ParseFilePipe,
  Put,
} from '@nestjs/common';
import { DepoimentosService } from './depoimentos.service';
import { CreateDepoimentoDto } from './dto/create-depoimento.dto';
import { UpdateDepoimentoDto } from './dto/update-depoimento.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { saveToStorage } from './helpers/image-storage';

@Controller('depoimentos')
export class DepoimentosController {
  constructor(private readonly depoimentosService: DepoimentosService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file', saveToStorage))
  @HttpCode(HttpStatus.NO_CONTENT)
  create(
    @UploadedFile(
      new ParseFilePipe({
        validators: [],
      }),
    )
    file: Express.Multer.File,
    @Body() createDepoimentoDto: CreateDepoimentoDto,
  ) {
    return this.depoimentosService.create(file, createDepoimentoDto);
  }

  @Get()
  findAll() {
    return this.depoimentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.depoimentosService.findOne(id);
  }

  @Put(':id')
  @UseInterceptors(FileInterceptor('file', saveToStorage))
  update(
    @Param('id') id: string,
    @Body() updateDepoimentoDto: UpdateDepoimentoDto,
    @UploadedFile(
      new ParseFilePipe({
        validators: [],
      }),
    )
    file: Express.Multer.File,
  ) {
    return this.depoimentosService.update(id, file, updateDepoimentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.depoimentosService.remove(id);
  }
}
