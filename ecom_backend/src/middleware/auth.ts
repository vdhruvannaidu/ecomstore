import { Request, Response, NextFunction } from "express";
import { UnauthorizedException } from "../exceptions/unauthorized";
import { ErrorCode } from "../exceptions/root";
import * as jwt from 'jsonwebtoken';
import { JWT_SECRET } from "../secrets";
import { Prisma } from "@prisma/client";
import { prismaClient } from "..";

const authMiddleWare = async(req:Request, res:Response, next:NextFunction) => {
    //1. Extract the token from header
    const token = req.headers.authorization
    //2. If token is not present, throw an error of unauthorized
    if(!token){
        next(new UnauthorizedException("Unauthorized Error", ErrorCode.UNAUTHORIZED));
    }
    try {
        //3. If the token is present, then verify the token and extract the payload
        const payload = jwt.verify(token, JWT_SECRET)
        const user = await prismaClient.user.findFirst({where:{id: payload.userId}});
        if(!user){
            next(new UnauthorizedException("Unauthorized Error", ErrorCode.UNAUTHORIZED));
        }
        req.user = user;
    } catch (error) {
        next(new UnauthorizedException("Unauthorized Error", ErrorCode.UNAUTHORIZED));
    }
}

export default authMiddleWare;