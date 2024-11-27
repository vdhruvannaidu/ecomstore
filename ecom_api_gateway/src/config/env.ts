// src/config/env.ts
import { cleanEnv, str, num, bool, port } from 'envalid';

// Function to validate environment variables
export const validateEnv = () => {
  cleanEnv(process.env, {
    PORT: port({ default: 3000 }),
    NODE_ENV: str({ choices: ['development', 'production', 'test'], default: 'development' }),
    USER_SERVICE_URL: str({ desc: 'URL of the User Microservice' }),
    PRODUCT_SERVICE_URL: str({ desc: 'URL of the Product Microservice' }),
    JWT_SECRET: str({ desc: 'Secret key for JWT signing', default: 'default_secret_key' }),
    RATE_LIMIT_WINDOW_MS: num({ desc: 'Rate limit window in milliseconds', default: 60000 }),
    RATE_LIMIT_MAX_REQUESTS: num({ desc: 'Max number of requests per rate limit window', default: 100 }),
    CORS_ALLOWED_ORIGINS: str({ desc: 'Comma-separated list of allowed CORS origins', default: '*' }),
    ENFORCE_HTTPS: bool({ desc: 'Enforce HTTPS connections', default: false }),
  });
};
