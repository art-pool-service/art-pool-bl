
import { inject, injectable } from 'inversify';

import { AppDataSource } from '../../../database/data.source';
import { IDataSource } from '../../../shared/interfaces';
import { Address } from '../../../database/models';
import { CreateAddressDto, UpdateAddressDto } from '../dto/address.dto';

@injectable()
export class AddressSource implements IDataSource<Address, CreateAddressDto, UpdateAddressDto> {
  constructor(@inject(AppDataSource) private source: AppDataSource) {}

  async getAll(): Promise<Address[]> {
    const repo = this.source.getRepository(Address);
    return repo.find();
  }

  async getById(id: number) {
    const repo = this.source.getRepository(Address);

    return repo.findOneBy({ id });
  }

  async create(data: CreateAddressDto) {
    const repo = this.source.getRepository(Address);
    const address = repo.create(data);

    return repo.save(address);
  }

  async update(id: number, data: UpdateAddressDto) {
    const repo = this.source.getRepository(Address);

    await repo.update(id, data);
    return repo.findOneBy({ id });
  }

  async remove(id: number) {
    const repo = this.source.getRepository(Address);
    const result = await repo.delete(id);

    return result.affected !== undefined &&
      result.affected !== null &&
      result.affected > 0;
  }
};
