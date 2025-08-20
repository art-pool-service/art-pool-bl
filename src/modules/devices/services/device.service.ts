import { IDeviceRepository } from '../repositories/device.repository';
import { Device } from '../entities/device.entity';
import { CreateDeviceDto, UpdateDeviceDto } from '../dto/device.dto';

export class DeviceService {
  constructor(private repo: IDeviceRepository) {}

  async getAll(): Promise<Device[]> {
    return this.repo.getAll();
  }
  async getById(id: number): Promise<Device | undefined> {
    return this.repo.getById(id);
  }
  async create(data: CreateDeviceDto): Promise<Device> {
    return this.repo.create(data);
  }
  async update(id: number, data: UpdateDeviceDto): Promise<Device | undefined> {
    return this.repo.update(id, data);
  }
  async remove(id: number): Promise<boolean> {
    return this.repo.remove(id);
  }
}
