import { Router } from 'express';
import { RoleController } from '../controllers/role.controller';

export default (controller: RoleController) => {
  const router = Router();

  router.get('/roles', (...args) => controller.getAll(...args));
  router.get('/roles/:id', (...args) => controller.getById(...args));
  router.post('/roles', (...args) => controller.create(...args));
  router.put('/roles/:id', (...args) => controller.update(...args));
  router.delete('/roles/:id', (...args) => controller.remove(...args));

  return router;
};