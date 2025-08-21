
import { inject, injectable } from 'inversify';

import { AppDataSource } from '../../../database/data.source';
import { IDataSource } from '../../../shared/interfaces';
import { Role } from '../../../database/models';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';

@injectable()
export class RoleSource implements IDataSource<Role, CreateRoleDto, UpdateRoleDto> {
  constructor(@inject(AppDataSource) private source: AppDataSource) {}

  async getAll(): Promise<Role[]> {
    const repo = this.source.getRepository(Role);
    return repo.find();
  }

  async getById(id: number) {
    const repo = this.source.getRepository(Role);

    return repo.findOneBy({ id });
  }

  async create(data: CreateRoleDto) {
    const repo = this.source.getRepository(Role);
    const role = repo.create(data);

    return repo.save(role);
  }

  async update(id: number, data: UpdateRoleDto) {
    const repo = this.source.getRepository(Role);

    await repo.update(id, data);
    return repo.findOneBy({ id });
  }

  async remove(id: number) {
    const repo = this.source.getRepository(Role);
    const result = await repo.delete(id);

    return result.affected !== undefined &&
      result.affected !== null &&
      result.affected > 0;
  }
};
