import userRepository from '../repositories/user.repository';
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

export default {
  async getAll(): Promise<User[]> {
    return userRepository.getAll();
  },
  async getById(id: number): Promise<User | undefined> {
    return userRepository.getById(id);
  },
  async create(data: CreateUserDto): Promise<User> {
    return userRepository.create(data);
  },
  async update(id: number, data: UpdateUserDto): Promise<User | undefined> {
    return userRepository.update(id, data);
  },
  async remove(id: number): Promise<boolean> {
    return userRepository.remove(id);
  },
};