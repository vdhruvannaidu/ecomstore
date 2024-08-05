import express, { Express, Request, Response } from 'express';
import { PORT } from './secrets';
import rootRouter from './routes';
import { PrismaClient } from '@prisma/client';
import { errorMiddleware } from './middlewares/errors';
import { signupSchema } from './schemas/users';
const cors = require('cors');

const app: Express = express();
app.use(cors({
    origin: 'http://localhost:4200'
  }));
app.use(express.json());
app.use('/', rootRouter);

export const prismaClient = new PrismaClient({
    log: ['query']
})

app.use(errorMiddleware);

app.listen(PORT, () => { console.log("hello from Ts App") })