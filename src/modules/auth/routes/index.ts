import { Router } from 'express';
import { AuthService } from '../services/auth.service';
import { authController } from '../controllers/auth.controller';

export default (authService: AuthService) => {
  const controller = authController(authService);
  const router = Router();

  router.post('/login', controller.login);
  router.post('/register', controller.register);

  return router;
};
