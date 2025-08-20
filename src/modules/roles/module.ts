import { Router } from 'express';

import { AppDataSource } from '../../database/data.source';
import { RoleSource } from './sources/role.source';
import { RoleService } from './services/role.service';
import { RoleController } from './controllers/role.controller';
import routes from './routes';


class RoleModule {
  routes: Router;

  constructor(private appDataSource: AppDataSource) {
    const roleRepository = new RoleSource(appDataSource);
    const roleService = new RoleService(roleRepository);
    const roleController = new RoleController(roleService);

    this.routes = routes(roleController);
  }
};

export { RoleModule };
