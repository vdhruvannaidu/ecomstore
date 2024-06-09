import { NextFunction, Request, Response } from 'express'
import { prismaClient } from '..';
import { hashSync, compareSync } from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from '../secrets';
import { BadRequestsException } from '../exceptions/bad-request';
import { ErrorCode } from '../exceptions/root';
import { signupSchema } from '../schemas/users';
import { NotFoundException } from '../exceptions/not-found';
import { User } from "@prisma/client"


//signup Controller for New User signup
export const signup = async (req: Request, res: Response, next: NextFunction) => {
    signupSchema.parse(req.body)
    const { email, password, name } = req.body;

    let user = await prismaClient.user.findFirst({ where: { email } })
    if (user) {
        new BadRequestsException('User already exists!', ErrorCode.USER_ALREADY_EXISTS)
    }
    user = await prismaClient.user.create({
        data: {
            name,
            email,
            password: hashSync(password, 10)
        }
    })
    res.json(user)

}

//login controller
export const login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    console.log(req.body);
    
    var user = await prismaClient.user.findFirst({ where: { email } })
    if (!user) {
        throw new NotFoundException('User not found.', ErrorCode.USER_NOT_FOUND)
    }
    if (!compareSync(password, user.password)) {
        throw new BadRequestsException('Incorrect password', ErrorCode.INCORRECT_PASSWORD)
    }
    const token = jwt.sign({
        userId: user.id
    }, JWT_SECRET)


    res.json({ user, token })
}

// me ->  return the logged in user
export const me = async (req: Request, res: Response, user: any) => {
    res.json(req.user)
}

