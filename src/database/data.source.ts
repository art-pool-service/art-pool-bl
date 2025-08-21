import { DataSource } from 'typeorm';

import { Address, Person, Role, Permission, RolesPermissions, User } from './models';
import { dbConfig } from '../config';
import { injectable } from 'inversify';


@injectable()
export class AppDataSource extends DataSource {
  constructor() {
    super({
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
  }
}

