import { Router } from 'express';
import { Container } from 'inversify';

import { UserSource } from './sources/user.source';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import routes from './routes';


class UserModule {
  routes: Router;
  
  constructor(container: Container) {
    container.bind<UserSource>(UserSource).toSelf();
    container.bind<UserService>(UserService).toSelf();
    container.bind<UserController>(UserController).toSelf();
    const userController = container.get<UserController>(UserController);

    this.routes = routes(userController);
  }
};

export { UserModule };
