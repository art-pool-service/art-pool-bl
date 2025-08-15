import { User } from '../entities/user.entity';
import { CreateUserDto, UpdateUserDto } from '../dto/user.dto';

// Временное хранилище для пользователей
// Будет переписано при подключении к базе данных

let users: User[] = [];
let idCounter = 1;

export default {
  getAll(): User[] {
    return users;
  },
  getById(id: number): User | undefined {
    return users.find(u => u.id === id);
  },
  create(data: CreateUserDto): User {
    const user: User = { id: idCounter++, ...data };
    users.push(user);
    return user;
  },
  update(id: number, data: UpdateUserDto): User | undefined {
    const user = users.find(u => u.id === id);
    if (!user) return undefined;
    Object.assign(user, data);
    return user;
  },
  remove(id: number): boolean {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  },
};