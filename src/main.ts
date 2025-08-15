import app from './app';
import config from './config/app.config';

async function bootstrap() {
  app.listen(config.port, (error) => {
    if (error) {
      console.error('Error starting server:', error);
      process.exit(1);
    }

    console.log(`Server is running on http://localhost:${config.port}`);
  });
}

bootstrap();