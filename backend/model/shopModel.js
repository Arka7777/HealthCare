import mongoose  from "mongoose";


const shopSchema=new mongoose.Schema({
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
  registrationNumber:{
    type:Number,
    required:true,
    unique:true
  },
  address:{
    type:String,
    required:true
  },

})
export const Shop=mongoose.model("shop",shopSchema)
