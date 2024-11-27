// src/middlewares/rateLimit.middleware.ts
import rateLimit from 'express-rate-limit';
import config from '../config';

// Rate limit middleware setup
export const rateLimitMiddleware = rateLimit({
  windowMs: config.security.rateLimit.windowMs, // Time frame for rate limiting (in milliseconds)
  max: config.security.rateLimit.maxRequests,  // Maximum number of requests per windowMs
  message: 'Too many requests, please try again later.',
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false,  // Disable the `X-RateLimit-*` headers
});
