import express from "express";
import userRouter from "./user.routes";
import { podcastdata } from "../controllers/podcast.controller";
import { isAuthticated } from "../middleware/auth";


const podcostRouter=express.Router()


podcostRouter.get("/podcost",isAuthticated,podcastdata)