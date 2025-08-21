import { UserSource } from '../sources/user.source';

import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { User } from '../../../database/models';
import { inject, injectable } from 'inversify';

@injectable()
export class UserService {
  constructor(@inject(UserSource) private source: UserSource) {}

  async getAll(): Promise<User[]> {
    return this.source.getAll();
  }

  async getById(id: number): Promise<User | null> {
    return this.source.getById(id);
  }

  async getByPhone(phone: string): Promise<User | null> {
    return this.source.getByPhone(phone);
  }

  async create(data: CreateUserDto): Promise<User> {
    return this.source.create(data);
  }
  async update(id: number, data: UpdateUserDto): Promise<User | null> {
    return this.source.update(id, data);
  }
  async remove(id: number): Promise<boolean> {
    return this.source.remove(id);
  }
}