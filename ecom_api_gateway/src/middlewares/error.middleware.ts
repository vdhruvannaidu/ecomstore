// src/middlewares/error.middleware.ts
import { Request, Response, NextFunction } from 'express';

// Error handling middleware
export const errorMiddleware = (err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err); // Log the error for debugging
  res.status(500).json({ message: 'An unexpected error occurred.', error: err.message });
};
