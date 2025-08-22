import 'reflect-metadata';
import express from 'express';
import { AppDataSource } from './database/data.source';
import { UserModule } from './modules/users/module';
import { Container } from 'inversify';
import { AddressModule } from './modules/addresses/module';
import { PersonModule } from './modules/persons/module';
import { RoleModule } from './modules/roles/module';
import { AuthModule } from './modules/auth/auth.module';

const createApp = async () => {
  const app = express();

  app.use(express.json());

  const appDataSource = new AppDataSource()
  await appDataSource.initialize();


  const container: Container = new Container();
  container.bind(AppDataSource).toConstantValue(appDataSource);

  const userModule = new UserModule(container);
  const roleModule = new RoleModule(container);
  const personModule = new PersonModule(container); 
  const addressModule = new AddressModule(container);
  const authModule = new AuthModule(container);

  // Подключение маршрутов users
  app.use('/api', userModule.routes);
  // Подключение маршрутов roles
  app.use('/api', roleModule.routes);
  // Подключение маршрутов persons
  app.use('/api', personModule.routes);
  // Подключение маршрутов addresses
  app.use('/api', addressModule.routes);
  // Подключение маршрутов auth
  app.use('/api', authModule.routes);
  
  // Глобальный обработчик ошибок
  app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    console.error(err);
    res.status(err.status || 500).json({
      message: err.message || 'Internal Server Error',
      error: process.env.NODE_ENV === 'development' ? err : {},
    });
  });

  return app;
};

export { createApp };