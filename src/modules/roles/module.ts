import routes from './routes';
import { appDataSource } from '../../database/data.source';
import { RoleController } from './controllers/role.controller';
import { RoleService } from './services/role.service';
import { RoleSource } from './sources/role.source';


const roleSource = new RoleSource(appDataSource);
const roleService = new RoleService(roleSource);
const roleController = new RoleController(roleService);

export default {
  routes: routes(roleController)
};
