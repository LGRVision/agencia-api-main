import { AppDataSource } from '../config/data_source'
import { Pessoa } from '../models/pessoa'

export class DeletePessaoService {
  async update (id: number, nome: string, email: string, cpf: string): Promise<void> {
    const pessoaRepository = AppDataSource.getRepository(Pessoa)
    await pessoaRepository
      .createQueryBuilder('users')
      .delete()
      .where('id = :id', { id: 1 })
      .execute()
  }
}
