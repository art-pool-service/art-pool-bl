import { createApp } from './app';
import { appConfig } from './config';

async function bootstrap() {
  const appInstance = await createApp();

  appInstance.listen(appConfig.port, (error) => {
    if (error) {
      console.error('Error starting server:', error);
      process.exit(1);
    }

    console.log(`Server is running on http://localhost:${appConfig.port}`);
  });
}

bootstrap();