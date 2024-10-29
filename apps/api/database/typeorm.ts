import { DataSource, type DataSourceOptions } from 'typeorm'
import { resolve } from 'path'

export const getOrmConfig = (): DataSourceOptions => {
  const useSsl = process.env.TYPEORM_USE_SSL === 'true'

  const conf: DataSourceOptions = {
    type: 'postgres',
    host: process.env.TYPEORM_HOST,
    username: process.env.TYPEORM_USERNAME,
    password: process.env.TYPEORM_PASSWORD,
    database: process.env.TYPEORM_DATABASE,
    port: Number(process.env.TYPEORM_PORT),
    schema: 'public',
    entities: [resolve(__dirname, '../src/**/*.entity.{ts,js}')],
    migrations: [resolve(__dirname, '../database/migrations/*.{ts,js}')],
    migrationsTableName: 'migrations',
    logging:
      process.env.TYPEORM_LOGGING === 'true' ? ['error', 'warn', 'schema', 'migration'] : false,
    synchronize: false,
    migrationsRun: true,
    ssl: useSsl,
    extra: useSsl && {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
  return conf
}

const dataSource = new DataSource(getOrmConfig())
export default dataSource
