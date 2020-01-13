declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    IS_BROWSER: 'true' | undefined;
  }
}
