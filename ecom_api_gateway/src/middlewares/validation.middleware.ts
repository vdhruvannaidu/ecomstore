// src/middlewares/validation.middleware.ts
import { Request, Response, NextFunction } from 'express';
import { validationResult, check } from 'express-validator';

// Basic input validation middleware
export const validationMiddleware = [
  // Add validation checks here (e.g., check('email').isEmail())
  check('name').isString().withMessage('Name must be a string'),
  check('email').isEmail().withMessage('Must be a valid email'),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];
