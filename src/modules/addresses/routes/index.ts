import { Router } from 'express';
import { AddressController } from '../controllers/address.controller';

export default (controller: AddressController) => {
  const router = Router();

  router.get('/addresss', controller.getAll);
  router.get('/addresss/:id', controller.getById);
  router.post('/addresss', controller.create);
  router.put('/addresss/:id', controller.update);
  router.delete('/addresss/:id', controller.remove);

  return router;
};