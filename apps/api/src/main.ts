import { NestFactory } from '@nestjs/core'
import { ConfigService } from '@nestjs/config'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'

import { Logger } from '@nestjs/common'
import type { ConfigDto } from '@/src/configs'

import { AppModule } from './app.module'

const SERVER_TIME_OUT = 60000

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    rawBody: true,
  })
  const configService = app.get(ConfigService<ConfigDto>)

  const prefix: string = configService.get('PREFIX')
  const port: string = configService.get('PORT')

  app.enableCors({
    allowedHeaders: configService.get('CORS_ALLOW_HEADERS'),
    origin: configService.get('CORS_ALLOW_ORIGIN'),
    methods: configService.get('CORS_ALLOW_METHODS'),
  })
  app.setGlobalPrefix(prefix)

  // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
  app.getHttpServer().setTimeout(SERVER_TIME_OUT)
  const swaggerConfig = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('AWS Cognito Auth API')
    .setVersion('1.0')
    .addTag('AWS Cognito Auth')
    .addBearerAuth()
    .build()
  const document = SwaggerModule.createDocument(app, swaggerConfig)
  SwaggerModule.setup(prefix, app, document)

  await app.listen(port)
  Logger.log(`🚀 Application is running on: http://localhost:${port}/${prefix}`)
}
bootstrap().catch((error: unknown) => {
  console.error('Error starting the application:', error)
})
