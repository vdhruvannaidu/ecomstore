import express from "express"
import { User } from "@prisma/client"
declare module 'express-serve-static-core' {
    export interface Request {
        user?: User
    }
}
