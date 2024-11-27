// src/config/index.ts
import dotenv from 'dotenv';
import { validateEnv } from './env';

// Load environment variables from .env file
dotenv.config();

// Validate required environment variables
validateEnv();

// Configuration object to be used across the application
const config = {
  server: {
    port: process.env.PORT || 3000,
    nodeEnv: process.env.NODE_ENV || 'development',
  },
  services: {
    userServiceUrl: process.env.USER_SERVICE_URL || 'http://localhost:4000',
    productServiceUrl: process.env.PRODUCT_SERVICE_URL || 'http://localhost:4001',
    // Add other service URLs as needed
  },
  security: {
    jwtSecret: process.env.JWT_SECRET || 'default_secret_key',
    rateLimit: {
      windowMs: parseInt(process.env.RATE_LIMIT_WINDOW_MS || '60000'), // 1 minute
      maxRequests: parseInt(process.env.RATE_LIMIT_MAX_REQUESTS || '100'), // Max 100 requests per window
    },
  },
  cors: {
    allowedOrigins: (process.env.CORS_ALLOWED_ORIGINS || '*').split(','), // CORS allowed origins
  },
  https: {
    enforce: process.env.ENFORCE_HTTPS === 'true',
  },
};

export default config;
