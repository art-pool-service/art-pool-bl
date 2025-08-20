import { Router } from 'express';
import { UserController } from '../controllers/user.controller';

export default (controller: UserController) => {
  const router = Router();

  router.get('/users', controller.getAll);
  router.get('/users/:id', controller.getById);
  router.post('/users', controller.create);
  router.put('/users/:id', controller.update);
  router.delete('/users/:id', controller.remove);

  return router;
};