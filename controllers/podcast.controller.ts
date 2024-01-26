import { NextFunction, Request, Response } from "express";
import ErrorHandling from "../utlis/ErrorHandling";
import { podcastModel } from "../model/podcast.model";


//  get Routes

export const podcastdata=async(req:Request,res:Response,next:NextFunction)=>{
    try {
        const data=await podcastModel.find()
        res.status(201).json({succes:true,data})
      
    } catch (error:any) {
        return next(new ErrorHandling(error.message,400))
    }
}

