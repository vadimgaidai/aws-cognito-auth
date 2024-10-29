import { plainToInstance } from 'class-transformer'
import { validateSync } from 'class-validator'

import { ConfigDto } from '@/src/configs/dto/config.dto'

export const configValidate = (config: Record<string, unknown>) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
  const validatedConfig = plainToInstance(ConfigDto, config, {
    enableImplicitConversion: true,
  })
  const errors = validateSync(validatedConfig, {
    skipMissingProperties: false,
  })

  if (errors.length > 0) {
    console.error('Validation errors:', errors)
    throw new Error(errors.toString())
  }
  return validatedConfig
}
