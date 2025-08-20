import { deviceRepository } from './repositories/device.repository';
import { DeviceService } from './services/device.service';
import routes from './routes';

const deviceService = new DeviceService(deviceRepository);

export default {
  routes: routes(deviceService),
};
