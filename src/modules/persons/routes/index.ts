import { Router } from 'express';
import { PersonController } from '../controllers/person.controller';

export default (controller: PersonController) => {
  const router = Router();

  router.get('/persons', (...args) => controller.getAll(...args));
  router.get('/persons/:id', (...args) => controller.getById(...args));
  router.post('/persons', (...args) => controller.create(...args));
  router.put('/persons/:id', (...args) => controller.update(...args));
  router.delete('/persons/:id', (...args) => controller.remove(...args));

  return router;
};