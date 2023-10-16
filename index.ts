
import express, { NextFunction, Request, Response } from "express"
import {v2 as cloudinary} from "cloudinary"
import  connectDB  from "./utlis/db";
require("dotenv").config()
import cors from "cors"
import cookieParser from "cookie-parser"
import { middlewareErrorHandle } from "./middleware/error"
import userRouter from "./routes/user.routes"


const app=express()

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });


//body parser sadlkjasdf asdfsfad
app.use(express.json({limit:"50mb"}))

//cookie parser
app.use(cookieParser())

// cors 
app.use(cors({
    origin:process.env.ORIGIN
}));

//user router

app.use("/user",userRouter)




// test api
app.get("/test",(req:Request,res:Response,next:NextFunction)=>{
res.status(200).json({
    success:true,
    message:"API is Working"
})
})

// unkown route
app.all("*",(req:Request,res:Response,next:NextFunction)=>{
    const err =new Error(`Routes ${req.originalUrl} not found` ) as any;
    err.statusCode=404
    next(err)
})


app.use(middlewareErrorHandle)

// cloudany config
cloudinary.config({
    cloud_name:process.env.ClOUD_NAME,
    api_key:process.env.ClOUD_API_KEY,
    api_secret:process.env.ClOUD_SECRET_KEY
})

app.listen(process.env.PORT,async()=>{
    try {
        console.log(`server is connected at ${process.env.PORT}`)
      await  connectDB()
    } catch (error:any) {
       console.log(error.message) 
    }
   
})

/// sadklfjas;ldlkasdf