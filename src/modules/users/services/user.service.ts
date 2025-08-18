import { IUserRepository } from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

export class UserService {
  constructor(private repo: IUserRepository) {}

  async getAll(): Promise<User[]> {
    return this.repo.getAll();
  }
  async getById(id: number): Promise<User | undefined> {
    return this.repo.getById(id);
  }
  async create(data: CreateUserDto): Promise<User> {
    return this.repo.create(data);
  }
  async update(id: number, data: UpdateUserDto): Promise<User | undefined> {
    return this.repo.update(id, data);
  }
  async remove(id: number): Promise<boolean> {
    return this.repo.remove(id);
  }
}