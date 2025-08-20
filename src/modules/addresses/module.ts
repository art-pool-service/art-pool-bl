import { Router } from 'express';

import { AppDataSource } from '../../database/data.source';
import { AddressSource } from './sources/address.source';
import { AddressService } from './services/address.service';
import { AddressController } from './controllers/address.controller';
import routes from './routes';


class AddressModule {
  routes: Router;

  constructor(private appDataSource: AppDataSource) {
    const addressRepository = new AddressSource(appDataSource);
    const addressService = new AddressService(addressRepository);
    const addressController = new AddressController(addressService);

    this.routes = routes(addressController);
  }
};

export { AddressModule };
