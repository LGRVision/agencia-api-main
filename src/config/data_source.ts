import { DataSource } from 'typeorm'
import { Pessoa } from '../models/pessoa'

export const AppDataSource = new DataSource({
  type: 'sqlite',
  database: './agenciadb.sqlite',
  synchronize: true,
  entities: [Pessoa],
  subscribers: [],
  migrations: []
})
