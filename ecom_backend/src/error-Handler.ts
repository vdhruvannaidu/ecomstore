import { NextFunction } from "express"
import { ErrorCode, HttpException } from "./exceptions/root"
import { InteralException } from "./exceptions/internal-exception"

export const errorHandler = (method: Function): Function=>{
    return async (req:Request, res:Response, next:NextFunction) => {
        try {
            await method(req, res, next)
        } catch (error:any) {
            let exception: HttpException;
            if(error instanceof HttpException){
                exception = error;
            }else{
                exception = new InteralException('Something Went Wrong', error, ErrorCode.INTERNAL_EXCEPTION)
            }
            next(exception)
        }
    }
}