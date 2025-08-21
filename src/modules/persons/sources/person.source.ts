import { inject, injectable } from 'inversify';

import { AppDataSource } from '../../../database/data.source';
import { IDataSource } from '../../../shared/interfaces';
import { Person } from '../../../database/models';
import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';

@injectable()
export class PersonSource implements IDataSource<Person, CreatePersonDto, UpdatePersonDto> {
  constructor(@inject(AppDataSource) private source: AppDataSource) {}

  async getAll(): Promise<Person[]> {
    const repo = this.source.getRepository(Person);
    return repo.find();
  }

  async getById(id: number) {
    const repo = this.source.getRepository(Person);

    return repo.findOneBy({ id });
  }

  async create(data: CreatePersonDto) {
    const repo = this.source.getRepository(Person);
    const person = repo.create(data);

    return repo.save(person);
  }

  async update(id: number, data: UpdatePersonDto) {
    const repo = this.source.getRepository(Person);

    await repo.update(id, data);
    return repo.findOneBy({ id });
  }

  async remove(id: number) {
    const repo = this.source.getRepository(Person);
    const result = await repo.delete(id);

    return result.affected !== undefined &&
      result.affected !== null &&
      result.affected > 0;
  }
};
