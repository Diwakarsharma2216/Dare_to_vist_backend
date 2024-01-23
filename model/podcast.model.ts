import mongoose, { Model, Schema, model } from "mongoose";


export interface Ipodcast extends Document{
    podurl:{
        public_id:string;
        url:string;
    },
    title:string

}

const podSchema:Schema<Ipodcast>=new mongoose.Schema({
   podurl:{
    type:String,
    required:true
   },
   title:{
    type:String,
    required:true
   }

    
})

export const podcastModel:Model<Ipodcast>=mongoose.model("podcast",podSchema)

