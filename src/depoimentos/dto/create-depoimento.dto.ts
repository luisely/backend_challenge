import { IsString, IsNotEmpty } from 'class-validator'

export class CreateDepoimentoDto {
  @IsString()
  @IsNotEmpty()
  personName: string

  @IsString()
  @IsNotEmpty()
  text: string
}
