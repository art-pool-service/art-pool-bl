import { Router } from 'express';

import { AppDataSource } from '../../database/data.source';
import { UserSource } from './sources/user.source';
import { UserService } from './services/user.service';
import { UserController } from './controllers/user.controller';
import routes from './routes';


class UserModule {
  routes: Router;
  
  constructor(private appDataSource: AppDataSource) {
    const userRepository = new UserSource(appDataSource);
    const userService = new UserService(userRepository);
    const userController = new UserController(userService);

    this.routes = routes(userController);
  }
};

export { UserModule };
