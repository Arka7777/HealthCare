
import {Clinic} from '../model/clinicModel.js'

import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const clinicRegister = async (req, res) => {
  try {
    const{email,password,phoneNumber,name,registrationNumber,address,}=req.body;
    console.log(req.body)
    if(!email||!password||!phoneNumber||!name||!registrationNumber||!address){
            return res.status(400).json({
              message: "Sorry sir. You've to give all the informations as instructed",
              success: false,
            });
          }
    const clinicExistalready = await Clinic.findOne({ email,registrationNumber });
    if (clinicExistalready) {
      return res.status(400).json({
        message: "user already exist",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await Clinic.create({
      
      email,
      password:hashedPassword,
      phoneNumber,
      name,
      registrationNumber,
      address,
      
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
    let clinic = await Clinic.findOne({ email });
    if (!clinic) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

   
    const tokenData = {
      userId: user._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    clinic={
      _id:clinic._id,
      name:clinic.name,
      email:clinic.email,
      phoneNumber:clinic.phoneNumber,
      registrationNumber:clinic.registrationNumber,
      
    }

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      }).json({
        message:`welcome back ${clinic.clinicName}`,
        clinic,
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
export const updateProfile = async (req, res) => {
  try {
    const{name,email,phoneNumber,address,}=req.body;
    

   
    const clinicId = req.params.id;
    let clinic = await Clinic.findById(clinicId);
    if (!clinic) {
      return res.status(400).json({
        message: "clinic not found",
        success: false,
      });
    }

    //update things in profile
    if(name)clinic.name = name;
    if(phoneNumber)clinic.phoneNumber = phoneNumber;
    if(email)clinic.email = email;
    
    if(address)clinic.address = address;
    
    

    await clinic.save();
    clinic = {
      _id: clinic._id,
      name: clinic.name,
      email: clinic.email,
      phoneNumber: clinic.phoneNumber,
      address:clinic.address,
      
    };
    return res.status(200).json({
      message: "profile updated",
      clinic,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAllClinics = async (req, res) => {
  try {
      const clinic = await Clinic.find();
      res.status(200).json({
        clinic,
        success:true
      });
  } catch (error) {
      console.log(error)
  }
};



export const clinicDelete=async (req,res)=>{
  try{
    const clinicDelete=await Clinic.findByIdAndDelete(req.params.id);
    if(!clinicDelete){
      return res.status(404).json({
        message:"not found",
        success:false
      })
    }
    res.status(200).json({
      message:"clinic deleted successfully",
      success:true
    })
  }
  catch(error){
    console.log(error)
  }
}

