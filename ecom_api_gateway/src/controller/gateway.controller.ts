import { Request, Response, NextFunction } from 'express';
import { forwardRequest } from '../utils/requestHandler';

// Main routing function
export const handleRequest = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const response = await forwardRequest(req); // Directly forwards the request to a statically defined microservice
    res.status(response.status).json(response.data);
  } catch (error) {
    next(error); // Pass error to centralized error handler
  }
};
