import { Router } from 'express';
import { Container } from 'inversify';


import routes from './routes';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { UserService } from '../users/services/user.service';


class AuthModule {
  routes: Router;
  
  constructor(container: Container) {
    container.bind<AuthService>(AuthService).toSelf();
    container.bind<AuthController>(AuthController).toSelf();
    const authController = container.get<AuthController>(AuthController);

    this.routes = routes(authController);
  }
};

export { AuthModule };
