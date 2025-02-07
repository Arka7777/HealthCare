import mongoose from "mongoose"; 

//guess kore korchi change krte hote pare

const appointmentSchema=new mongoose.Schema({
  name:{
    type:String,
    ref:"User",
    required:true
  },
  phoneNumber:{
    // type:mongoose.Schema.Types.ObjectId,
    type:Number,
    ref:"User",
    required:true
  },
  drName:{
    type:String,
    required:true
  },
  start:{
    type:String,
    required:true,
    default:"pending",
  },
  clinicName:{
    type:String,
  },
  address:{
    type:String,
  },
  date:{
    type:Date,
    required:true,
  }

})

export const Appointment=mongoose.model("Appointment",appointmentSchema)