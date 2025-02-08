import {Doctor} from "../model/doctorModel.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
export const drregister = async (req, res) => {
  try {
    const{name,email,password,phoneNumber,specialization,licenceNumber,address,currentyWorkingIn}=req.body;
    console.log(req.body)
    if(!name||!email||!password||!phoneNumber||!specialization||!licenceNumber||!address||!currentyWorkingIn){
            return res.status(400).json({
              message: "Sorry sir. You've to give all the informations as instructed",
              success: false,
            });
          }
    const drexistalready = await Doctor.findOne({ email,licenceNumber });
    if (drexistalready) {
      return res.status(400).json({
        message: "user already exist",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await Doctor.create({
      name,
      email,
      password:hashedPassword,
      phoneNumber,
      specialization,
      licenceNumber,
      address,
      currentyWorkingIn
    });
    return res.status(201).json({
      message:"registered successfully",
      success:true
    })
  } catch (error) {
    console.log(error);
    return res.status(402).json({
      message:"duplicate key error",
      success:false
    })
  }
};
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password ) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let dr = await Doctor.findOne({ email });
    if (!dr) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, dr.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

   
    const tokenData = {
      drId: dr._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    dr={
      _id:dr._id,
      name:dr.fullname,
      email:dr.email,
      phoneNumber:dr.phoneNumber,
      licenceNumber:dr.licenceNumber,
      

    }

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      }).json({
        message:`welcome back ${dr.fullname}`,
        dr,
        success:true,
      });
  } catch (error) {
    console.log(error);
  }
};
export const logout=async (req,res)=>{
  try{
    return res.status(200).cookie("token","",{maxAge:0}).json({
      message:"logged out successfully",
      success:true
    })
  }
  catch(error){
    console.log(error)
  }
}
export const updateprofile = async (req, res) => {
  try {
    const{name,email,phoneNumber,specialization,address,currentyWorkingIn}=req.body;
    

   
    const drId = req.params.id; 
    let dr = await Doctor.findById(drId);
    if (!dr) {
      return res.status(400).json({
        message: "dr not found",
        success: false,
      });
    }

    //update things in profile
    if(name)dr.name = name;
    if(phoneNumber)dr.phoneNumber = phoneNumber;
    if(email)dr.email = email;
    // if(password)dr.password = password;
    if(address)dr.address = address;
    if(specialization)dr.specialization = specialization;
    if(currentyWorkingIn)dr.currentyWorkingIn = currentyWorkingIn;

    

    await dr.save();
    dr = {
      _id: dr._id,
      name: dr.name,
      email: dr.email,
      phoneNumber: dr.phoneNumber,
      address:dr.address,
      specialization:dr.specialization,
      currentyWorkingIn:dr.currentyWorkingIn
    };
    return res.status(200).json({
      message: "profile updated",
      dr,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAllDoctors = async (req, res) => {
  try {
      const dr = await Doctor.find();
      res.status(200).json({
        dr,
        success:true
      });
  } catch (error) {
      console.log(error)
  }
};

export const getDoctorById = async (req, res) => {
  try {
    const {id}=req.params;
    if(mongoose.Types.ObjectId.isValid(id)){
      return res.status(400).json({
        message:"invalid",
        success:false
      })
    }
      const dr = await Doctor.findById(req.params.id);
      if (!dr) {
          return res.status(404).json({
             message: "Doctor not found" ,
            success:false});
      }
      res.status(200).status(200).json({
        dr,
        success:true
      });
  } catch (error) {
      console.log(error)
  }
};

export const drdelete=async (req,res)=>{
  try{
    const drdelete=await Doctor.findByIdAndDelete(req.params.id);
    if(!drdelete){
      return res.status(404).json({
        message:"not found",
        success:false
      })
    }
    res.status(200).json({
      message:"dr deleted successfully",
      success:true
    })
  }
  catch(error){
    console.log(error)
  }
}


export const getRecommendedDoctor = async (req, res) => {
  try {
    const { userId, symptoms, previousDoctor } = req.body;
    const response = await axios.post("http://127.0.0.1:5001/predict", {
      user_id: userId,
      symptoms: symptoms,
      previous_doctor: previousDoctor
    });
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Error fetching recommendation" });
  }
};
