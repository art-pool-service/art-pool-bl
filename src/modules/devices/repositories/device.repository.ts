import { Device } from '../entities/device.entity';
import { CreateDeviceDto, UpdateDeviceDto } from '../dto/device.dto';

export interface IDeviceRepository {
  getAll(): Promise<Device[]>;
  getById(id: number): Promise<Device | undefined>;
  create(data: CreateDeviceDto): Promise<Device>;
  update(id: number, data: UpdateDeviceDto): Promise<Device | undefined>;
  remove(id: number): Promise<boolean>;
}

let devices: Device[] = [];
let idCounter = 1;

export const deviceRepository: IDeviceRepository = {
  async getAll() {
    return devices;
  },
  async getById(id: number) {
    return devices.find(d => d.id === id);
  },
  async create(data: CreateDeviceDto) {
    const device: Device = { id: idCounter++, ...data };
    devices.push(device);
    return device;
  },
  async update(id: number, data: UpdateDeviceDto) {
    const device = devices.find(d => d.id === id);
    if (!device) return undefined;
    Object.assign(device, data);
    return device;
  },
  async remove(id: number) {
    const index = devices.findIndex(d => d.id === id);
    if (index === -1) return false;
    devices.splice(index, 1);
    return true;
  },
};
