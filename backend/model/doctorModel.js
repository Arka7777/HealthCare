import mongoose  from "mongoose";


const doctorSchema=new mongoose.Schema({
  name:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true,
    unique:true
  },
  phoneNumber:{
    type:Number,
    required:true,
    unique:true
  },
  password:{
    type:String,
    required:true
  },
  licenceNumber:{
    type:Number,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true
  },
  location: String,
  ratings: Number

})
export const Doctor=mongoose.model("doctor",doctorSchema)