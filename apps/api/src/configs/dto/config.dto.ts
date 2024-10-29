import { IsString, IsNumberString } from 'class-validator'

export class ConfigDto {
  @IsString()
  TYPEORM_HOST: string

  @IsString()
  TYPEORM_USERNAME: string

  @IsString()
  TYPEORM_PASSWORD: string

  @IsString()
  TYPEORM_DATABASE: string

  @IsNumberString()
  TYPEORM_PORT: string

  @IsString()
  TYPEORM_LOGGING: string

  @IsString()
  TYPEORM_USE_SSL: string

  @IsNumberString()
  PORT: string

  @IsString()
  PREFIX: string

  @IsString()
  CORS_ALLOW_ORIGIN: string

  @IsString()
  CORS_ALLOW_HEADERS: string

  @IsString()
  CORS_ALLOW_METHODS: string
}
