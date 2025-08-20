import { Router } from 'express';
import { AddressController } from '../controllers/address.controller';

export default (controller: AddressController) => {
  const router = Router();

  router.get('/addresses', controller.getAll);
  router.get('/addresses/:id', controller.getById);
  router.post('/addresses', controller.create);
  router.put('/addresses/:id', controller.update);
  router.delete('/addresses/:id', controller.remove);

  return router;
};