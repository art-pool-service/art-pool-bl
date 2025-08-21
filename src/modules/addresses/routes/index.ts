import { Router } from 'express';
import { AddressController } from '../controllers/address.controller';

export default (controller: AddressController) => {
  const router = Router();

  router.get('/addresses', (...args) => controller.getAll(...args));
  router.get('/addresses/:id', (...args) => controller.getById(...args));
  router.post('/addresses', (...args) => controller.create(...args));
  router.put('/addresses/:id', (...args) => controller.update(...args));
  router.delete('/addresses/:id', (...args) => controller.remove(...args));

  return router;
};