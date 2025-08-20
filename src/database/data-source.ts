import { DataSource } from 'typeorm';

import { Address } from './entities/Address';
import { Person } from './entities/Person';
import { Role } from './entities/Role';
import { Permission } from './entities/Permission';
import { RolesPermissions } from './entities/RolesPermissions';
import { User } from './entities/User';
import dbConfig from '../config/db.config';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [Address, Person, Role, Permission, RolesPermissions, User],
  migrations: ['src/database/migrations/*.ts'],
  synchronize: false,
});
