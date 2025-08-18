import { Router } from 'express';
import { UserService } from '../services/user.service';
import { userController } from '../controllers/user.controller';

export default (userService: UserService) => {
  const controller = userController(userService);
  const router = Router();

  router.get('/users', controller.getAll);
  router.get('/users/:id', controller.getById);
  router.post('/users', controller.create);
  router.put('/users/:id', controller.update);
  router.delete('/users/:id', controller.remove);

  return router;
};