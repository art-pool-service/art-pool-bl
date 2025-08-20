import { Router } from 'express';
import { RoleController } from '../controllers/role.controller';

export default (controller: RoleController) => {
  const router = Router();

  router.get('/roles', controller.getAll);
  router.get('/roles/:id', controller.getById);
  router.post('/roles', controller.create);
  router.put('/roles/:id', controller.update);
  router.delete('/roles/:id', controller.remove);

  return router;
};