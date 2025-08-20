import { Router } from 'express';
import { PersonController } from '../controllers/person.controller';

export default (controller: PersonController) => {
  const router = Router();

  router.get('/persons', controller.getAll);
  router.get('/persons/:id', controller.getById);
  router.post('/persons', controller.create);
  router.put('/persons/:id', controller.update);
  router.delete('/persons/:id', controller.remove);

  return router;
};