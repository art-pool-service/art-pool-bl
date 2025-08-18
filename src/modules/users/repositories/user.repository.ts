
import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

export interface IUserRepository {
  getAll(): Promise<User[]>;
  getById(id: number): Promise<User | undefined>;
  create(data: CreateUserDto): Promise<User>;
  update(id: number, data: UpdateUserDto): Promise<User | undefined>;
  remove(id: number): Promise<boolean>;
}

let users: User[] = [];
let idCounter = 1;

export const userRepository: IUserRepository = {
  async getAll() {
    return users;
  },
  async getById(id: number) {
    return users.find(u => u.id === id);
  },
  async create(data: CreateUserDto) {
    // Для регистрации пользователя нужен пароль
    const user: User = {
      id: idCounter++,
      name: data.name,
      phone: data.phone,
      hashedPassword: (data as any).hashedPassword || '',
    };

    users.push(user);
    return user;
  },
  async update(id: number, data: UpdateUserDto) {
    const user = users.find(u => u.id === id);
    if (!user) return undefined;
    Object.assign(user, data);
    return user;
  },
  async remove(id: number) {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
};