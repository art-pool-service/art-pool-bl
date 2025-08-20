import { Router } from 'express';

import { AppDataSource } from '../../database/data.source';
import { PersonSource } from './sources/person.source';
import { PersonService } from './services/person.service';
import { PersonController } from './controllers/person.controller';
import routes from './routes';


class PersonModule {
  routes: Router;

  constructor(private appDataSource: AppDataSource) {
    const personRepository = new PersonSource(appDataSource);
    const personService = new PersonService(personRepository);
    const personController = new PersonController(personService);

    this.routes = routes(personController);
  }
};

export { PersonModule };