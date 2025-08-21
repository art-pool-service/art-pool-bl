import { Router } from 'express';
import { Container } from 'inversify';

import { AddressSource } from './sources/address.source';
import { AddressService } from './services/address.service';
import { AddressController } from './controllers/address.controller';
import routes from './routes';


class AddressModule {
  routes: Router;

  constructor(container: Container) {
    container.bind<AddressSource>(AddressSource).toSelf();
    container.bind<AddressService>(AddressService).toSelf();
    container.bind<AddressController>(AddressController).toSelf();
    const addressController = container.get<AddressController>(AddressController);

    this.routes = routes(addressController);
  }
};

export { AddressModule };
