import { User } from '../../users/entities/user.entity';

import { userRepository } from '../../users/repositories/user.repository';
import { CreateUserDto } from '../../users/dto/user.dto';

export const authRepository = {
  async findByPhone(phone: string): Promise<User | undefined> {
    return userRepository.getAll().then(users => users.find(u => u.phone === phone));
  },
  async createUser(data: CreateUserDto): Promise<User> {
    return userRepository.create(data);
  },
};