import { Module } from '@nestjs/common'
import { DatabaseModule } from './shared/database/database.module'
import { DepoimentosModule } from './depoimentos/depoimentos.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'

@Module({
  imports: [
    DatabaseModule,
    DepoimentosModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'tmp/images'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
