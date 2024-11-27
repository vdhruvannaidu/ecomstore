// src/app.ts
import express, { Application } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { json, urlencoded } from 'body-parser';
import { handleRequest } from './controller/gateway.controller';
import { authMiddleware } from './middlewares/auth.middleware';
import { rateLimitMiddleware } from './middlewares/rateLimit.middleware';
import { validationMiddleware } from './middlewares/validation.middleware';
import { errorMiddleware } from './middlewares/error.middleware';
import { httpsEnforceMiddleware } from './middlewares/https.middleware';
import { corsMiddleware } from './middlewares/cors.middleware';

const app: Application = express();

// Middleware setup
app.use(helmet()); // Security headers
app.use(corsMiddleware); // CORS configuration
app.use(httpsEnforceMiddleware); // Enforce HTTPS
app.use(rateLimitMiddleware); // Rate limiting
app.use(authMiddleware); // Authentication and Authorization
app.use(validationMiddleware); // Input validation and sanitization

app.use(json()); // JSON parser
app.use(urlencoded({ extended: true })); // URL-encoded parser

// Route setup
app.use('/api', handleRequest); // Main route handler

// Error handling middleware
app.use(errorMiddleware);

export default app;
