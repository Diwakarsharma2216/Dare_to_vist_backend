import { NextFunction } from "express";
import ErrorHandling from "../utlis/ErrorHandling";

export const podcastdata=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        
    } catch (error:any) {
        return next(new ErrorHandling(error.message,400))
    }
}