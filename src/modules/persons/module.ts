import { Router } from 'express';
import { Container } from 'inversify';

import { PersonSource } from './sources/person.source';
import { PersonService } from './services/person.service';
import { PersonController } from './controllers/person.controller';
import routes from './routes';


class PersonModule {
  routes: Router;

  constructor(container: Container) {
    container.bind<PersonSource>(PersonSource).toSelf();
    container.bind<PersonService>(PersonService).toSelf();
    container.bind<PersonController>(PersonController).toSelf();
    const personController = container.get<PersonController>(PersonController);

    this.routes = routes(personController);
  }
};

export { PersonModule };
