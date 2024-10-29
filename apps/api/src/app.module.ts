import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { TypeOrmModule } from '@nestjs/typeorm'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { resolve } from 'path'

import { configValidate } from '@/src/configs'
import { getOrmConfig } from '@/public/database/typeorm'

import { AppController } from './app.controller'
import { AppService } from './app.service'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: configValidate,
    }),
    TypeOrmModule.forRootAsync({
      // eslint-disable-next-line @typescript-eslint/no-unsafe-return
      useFactory: async () => ({
        autoLoadEntities: true,
        migrationsRun: true,
        synchronize: false,
        ...getOrmConfig(),
        migrations: [resolve('dist/database/migrations/*{.ts,.js}')],
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  constructor(private readonly configService: ConfigService) {}

  configure(consumer: MiddlewareConsumer) {
    const prefix = this.configService.get<string>('PREFIX')
    consumer.apply().forRoutes(prefix)
  }
}
