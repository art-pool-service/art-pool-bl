import { UserSource } from './sources/user.source';
import { UserService } from './services/user.service';
import routes from './routes';
import { appDataSource } from '../../database/data.source';
import { UserController } from './controllers/user.controller';

const userRepository = new UserSource(appDataSource);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

export default {
  routes: routes(userController)
};
