import { Router } from "express";
import { login, signup } from "../controllers/auth";
import { errorHandler } from "../error-Handler";
const authRoutes:Router = Router();

authRoutes.post('/signup', errorHandler(signup));
authRoutes.post('/login', login);

export default authRoutes