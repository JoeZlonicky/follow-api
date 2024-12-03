declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: string; // Set to 'true' by jest

      DATABASE_URI: string;
      REDIS_URI: string;
      REDIS_PREFIX: string;
      PORT: string;
      AUTH_SECRET: string;
    }
  }
}

export {};
