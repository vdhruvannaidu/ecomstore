import { NextFunction, Request, Response } from 'express'
import { prismaClient } from '..';
import { hashSync, compareSync } from 'bcrypt';
import *  as jwt from 'jsonwebtoken'
import { JWT_SECRET } from '../secrets';
import { BadRequestException } from '../exceptions/bad-request';
import { ErrorCode } from '../exceptions/root';
import { UnprocessableEntity } from '../exceptions/validation';
import { signupSchema } from '../schemas/users';
import { NotFoundException } from '../exceptions/not-found';
import { error } from 'console';

export const signup = async (req: Request, res: Response, next: NextFunction) => {
    signupSchema.parse(req.body)
    const { name, email, password } = req.body;
    let user = await prismaClient.user.findFirst({ where: { email } });
    if (user) {
        next(new BadRequestException('User Already Exists', ErrorCode.USER_ALREADY_EXISTS));
    }
    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.send(user);

}

export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    let user = await prismaClient.user.findFirst({ where: { email } });
    if (!user) {
        throw new NotFoundException('User Not Found', ErrorCode.USER_NOT_FOUND)
    }
    if (!compareSync(password, user.password)) {
        throw new BadRequestException('Incorrect Password', ErrorCode.USER_NOT_FOUND)
    }
    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET)
    res.send({ user, token });
}