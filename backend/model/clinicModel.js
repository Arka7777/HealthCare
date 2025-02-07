import mongoose  from "mongoose";


const clinicSchema=new mongoose.Schema({
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


export const Clinic=mongoose.model("clinic",clinicSchema)