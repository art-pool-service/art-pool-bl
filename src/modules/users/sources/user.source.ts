
import { AppDataSource } from '../../../database/data.source';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';
import { IDataSource } from '../../../shared/interfaces';
import { User } from '../../../database/models';

export class UserSource implements IDataSource<User, CreateUserDto, UpdateUserDto> {
  constructor(private source: AppDataSource) {}

  async getAll(): Promise<User[]> {
    const repo = this.source.getRepository(User);
    return repo.find();
  }

  async getById(id: number) {
    const repo = this.source.getRepository(User);

    return repo.findOneBy({ id });
  }

  getByPhone(phone: string): User | PromiseLike<User | null> | null {
    const repo = this.source.getRepository(User);

    return repo.findOneBy({ phone });
  }

  async create(data: CreateUserDto) {
    const repo = this.source.getRepository(User);
    const user = repo.create(data);

    return repo.save(user);
  }

  async update(id: number, data: UpdateUserDto) {
    const repo = this.source.getRepository(User);

    await repo.update(id, data);
    return repo.findOneBy({ id });
  }

  async remove(id: number) {
    const repo = this.source.getRepository(User);
    const result = await repo.delete(id);

    return result.affected !== undefined &&
      result.affected !== null &&
      result.affected > 0;
  }
};
