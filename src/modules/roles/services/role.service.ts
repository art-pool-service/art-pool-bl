import { inject, injectable } from 'inversify';

import { RoleSource } from '../sources/role.source';
import { CreateRoleDto, UpdateRoleDto } from '../dto/role.dto';
import { Role } from '../../../database/models';

@injectable()
export class RoleService {
  constructor(@inject(RoleSource) private source: RoleSource) {}

  async getAll(): Promise<Role[]> {
    return this.source.getAll();
  }

  async getById(id: number): Promise<Role | null> {
    return this.source.getById(id);
  }

  async create(data: CreateRoleDto): Promise<Role> {
    return this.source.create(data);
  }

  async update(id: number, data: UpdateRoleDto): Promise<Role | null> {
    return this.source.update(id, data);
  }

  async remove(id: number): Promise<boolean> {
    return this.source.remove(id);
  }
}