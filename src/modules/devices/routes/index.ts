import { Router } from 'express';
import { DeviceService } from '../services/device.service';
import { deviceController } from '../controllers/device.controller';

export default (deviceService: DeviceService) => {
  const controller = deviceController(deviceService);
  const router = Router();

  router.get('/devices', controller.getAll);
  router.get('/devices/:id', controller.getById);
  router.post('/devices', controller.create);
  router.put('/devices/:id', controller.update);
  router.delete('/devices/:id', controller.remove);

  return router;
};
