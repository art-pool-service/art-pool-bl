import routes from './routes';
import { appDataSource } from '../../database/data.source';
import { PersonController } from './controllers/person.controller';
import { PersonSource } from './sources/person.source';
import { PersonService } from './services/person.service';

const personSource = new PersonSource(appDataSource);
const personService = new PersonService(personSource);
const personController = new PersonController(personService);

export default {
  routes: routes(personController)
};
