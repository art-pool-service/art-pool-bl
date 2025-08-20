import routes from './routes';
import { appDataSource } from '../../database/data.source';
import { AddressController } from './controllers/address.controller';
import { AddressService } from './services/address.service';
import { AddressSource } from './sources/address.source';


const addressSource = new AddressSource(appDataSource);
const addressService = new AddressService(addressSource);
const addressController = new AddressController(addressService);

export default {
  routes: routes(addressController)
};
