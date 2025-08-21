import { Router } from 'express';
import { Container } from 'inversify';

import { RoleSource } from './sources/role.source';
import { RoleService } from './services/role.service';
import { RoleController } from './controllers/role.controller';
import routes from './routes';


class RoleModule {
  routes: Router;

  constructor(container: Container) {
    container.bind<RoleSource>(RoleSource).toSelf();
    container.bind<RoleService>(RoleService).toSelf();
    container.bind<RoleController>(RoleController).toSelf();
    const roleController = container.get<RoleController>(RoleController);

    this.routes = routes(roleController);
  }
};

export { RoleModule };
