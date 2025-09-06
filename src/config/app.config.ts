interface Config {
  port: number;
  httpsKeyPath: string;
  httpsCertPath: string;
  httpsCaPath: string;
  nodeEnv: string;
  jwtSecret: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  jwtSecret: process.env.JWT_SECRET || "default_secret",
  httpsKeyPath: process.env.HTTPS_KEY_PATH || "",
  httpsCertPath: process.env.HTTPS_CERT_PATH || "",
  httpsCaPath: process.env.HTTPS_CA_PATH || "",
};

export default config;
