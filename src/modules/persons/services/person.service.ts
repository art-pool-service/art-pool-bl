import { PersonSource } from '../sources/person.source';

import { CreatePersonDto, UpdatePersonDto } from '../dto/person.dto';
import { Person } from '../../../database/models';

export class PersonService {
  constructor(private source: PersonSource) {}

  async getAll(): Promise<Person[]> {
    return this.source.getAll();
  }

  async getById(id: number): Promise<Person | null> {
    return this.source.getById(id);
  }

  async create(data: CreatePersonDto): Promise<Person> {
    return this.source.create(data);
  }

  async update(id: number, data: UpdatePersonDto): Promise<Person | null> {
    return this.source.update(id, data);
  }

  async remove(id: number): Promise<boolean> {
    return this.source.remove(id);
  }
}