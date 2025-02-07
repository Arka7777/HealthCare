import mongoose  from "mongoose";
import { type } from "os";

const medicineSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  registrationNumber:{
    type:Number,
    required:true,
    unique:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phoneNumber:{
    type:Number,
    required:true
  },
  address:{
    type:String,
    required:true
  }
})

export const Medicine=mongoose.model("medicine",medicineSchema)