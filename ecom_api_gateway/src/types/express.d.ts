import { JwtPayload } from 'jsonwebtoken';

// Import the module to extend it
declare module 'express-serve-static-core' {
  interface Request {
    user?: string | JwtPayload; // Define the user property with appropriate type
  }
}
