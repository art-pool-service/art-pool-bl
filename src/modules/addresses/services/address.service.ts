import { inject, injectable } from 'inversify';

import { AddressSource } from '../sources/address.source';
import { CreateAddressDto, UpdateAddressDto } from '../dto/address.dto';
import { Address } from '../../../database/models';

@injectable()
export class AddressService {
  constructor(@inject(AddressSource) private source: AddressSource) {}

  async getAll(): Promise<Address[]> {
    return this.source.getAll();
  }

  async getById(id: number): Promise<Address | null> {
    return this.source.getById(id);
  }

  async create(data: CreateAddressDto): Promise<Address> {
    return this.source.create(data);
  }

  async update(id: number, data: UpdateAddressDto): Promise<Address | null> {
    return this.source.update(id, data);
  }

  async remove(id: number): Promise<boolean> {
    return this.source.remove(id);
  }
}