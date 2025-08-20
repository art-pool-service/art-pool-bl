import express from 'express';
import usersModule from './modules/users/module';
import authModule from './modules/auth/module';
import devicesModule from './modules/devices/module';

const app = express();

app.use(express.json());

// Подключение маршрутов users

// Подключение маршрутов auth
app.use('/api/auth', authModule.routes);
// Подключение маршрутов users
app.use('/api', usersModule.routes);
app.use('/api', devicesModule.routes);

// Глобальный обработчик ошибок
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

export default app;