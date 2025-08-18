import { userRepository } from './repositories/user.repository';
import { UserService } from './services/user.service';
import routes from './routes';

const userService = new UserService(userRepository);

export default {
  routes: routes(userService),
};