import fs from 'fs';
import https from "https";
import { createApp } from './app';
import { appConfig } from './config';

async function bootstrap() {
  const appInstance = await createApp();

  if (!appConfig.httpsKeyPath || !appConfig.httpsCertPath) {
    console.error("Add paths for HttpsKey & HttpsCert into .env");
    process.exit(2);
  }  

  const options = {
    key: fs.readFileSync(appConfig.httpsKeyPath),
    cert: fs.readFileSync(appConfig.httpsCertPath),
  };

  const server = https.createServer(options, appInstance);

  server.listen(appConfig.port, (error?: Error) => {
    if (error) {
      console.error("Error starting server:", error);
      process.exit(1);
    }

    console.log(`Server is running on https://localhost:${appConfig.port}`);
  });
}

bootstrap();