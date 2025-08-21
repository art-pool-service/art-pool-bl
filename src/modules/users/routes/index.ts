import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export default (controller: UserController) => {
  const router = Router();

  router.get('/users', (...args) => controller.getAll(...args));
  router.get('/users/:id', (...args) => controller.getById(...args));
  router.post('/users', (...args) => controller.create(...args));
  router.put('/users/:id', (...args) => controller.update(...args));
  router.delete('/users/:id', (...args) => controller.remove(...args));

  return router;
};