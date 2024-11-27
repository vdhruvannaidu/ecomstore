// src/middlewares/https.middleware.ts
import { Request, Response, NextFunction } from 'express';
import config from '../config';

export const httpsEnforceMiddleware = (req: Request, res: Response, next: NextFunction) => {
  if (config.https.enforce && req.headers['x-forwarded-proto'] !== 'https') {
    return res.redirect(301, `https://${req.headers.host}${req.url}`);
  }
  next();
};
