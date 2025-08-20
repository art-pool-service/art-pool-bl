import { DataSource } from 'typeorm';
import dbConfig from '../../config/db.config';


export const AppDataSource = new DataSource({
  type: 'postgres',
  host: dbConfig.host,
  port: dbConfig.port,
  username: dbConfig.username,
  password: dbConfig.password,
  database: dbConfig.database,
  entities: [
    require('../../database/entities/Address').Address,
    require('../../database/entities/Person').Person,
    require('../../database/entities/Role').Role,
    require('../../database/entities/Permission').Permission,
    require('../../database/entities/RolesPermissions').RolesPermissions,
    require('../../database/entities/User').User,
  ],
  synchronize: false,
  migrations: [
    require('../../database/migrations/001_init.sql'),
  ],
});
