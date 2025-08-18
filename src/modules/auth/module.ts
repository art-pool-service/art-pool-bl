import { AuthService } from './services/auth.service';
import routes from './routes';

const authService = new AuthService();

export default {
  routes: routes(authService),
};
