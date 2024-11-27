// src/middlewares/auth.middleware.ts
import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import config from '../config';

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization?.split(' ')[1]; // Extract token from the Authorization header

  if (!token) {
    return res.status(401).json({ message: 'Access denied, no token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.security.jwtSecret);
    // req.user = decoded; // Attach the decoded token data to the request object
    next();
  } catch (err) {
    res.status(403).json({ message: 'Invalid or expired token.' });
  }
};
