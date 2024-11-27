// src/middlewares/cors.middleware.ts
import { Request, Response, NextFunction } from 'express';
import config from '../config';

export const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  console.log(req);
  
  const allowedOrigins = config.cors.allowedOrigins;
  const origin = req.headers.origin || '';

  if (allowedOrigins.includes('*') || allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
    res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  }

  next();
};
