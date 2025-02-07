import { Medicine } from "../model/medicineModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
export const medicineRegister = async (req, res) => {
  try {
    const{email,password,phoneNumber,name,registrationNumber,address,}=req.body;
    // console.log(req.body)
    if(!email||!password||!phoneNumber||!name||!registrationNumber||!address){
            return res.status(400).json({
              message: "Sorry sir. You've to give all the informations as instructed",
              success: false,
            });
          }
    const medicineExistAlready = await Medicine.findOne({ email,registrationNumber });
    if (medicineExistAlready) {
      return res.status(400).json({
        message: "user already exist",
        success: false,
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    await Medicine.create({
      
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
export const medicinelogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password ) {
      return res.status(400).json({
        message: "something is missing",
        success: false,
      });
    }
    let medicine = await Medicine.findOne({ email });
    if (!medicine) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }
    const isPasswordMatch = await bcrypt.compare(password, medicine.password);
    if (!isPasswordMatch) {
      return res.status(400).json({
        message: "Incorrect email or password",
        success: false,
      });
    }

   
    const tokenData = {
      medicineId: medicine._id,
    };

    const token = await jwt.sign(tokenData, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    medicine={
      _id:medicine._id,
      name:medicine.name,
      email:medicine.email,
      phoneNumber:medicine.phoneNumber,
      registrationNumber:medicine.registrationNumber,
      
    }

    return res
      .status(200)
      .cookie("token", token, {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpsOnly: true,
        sameSite: "strict",
      }).json({
        message:`welcome back ${medicine.name}`,
        medicine,
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
    const{name,email,phoneNumber,address,}=req.body;
    

   
    const medicineId = req.params.id; 

    let medicine = await Medicine.findById(medicineId);
    if (!medicine) {
      return res.status(400).json({
        message: "shop not found",
        success: false,
      });
    }

    //update things in profile
    if(name)medicine.name = name;
    if(phoneNumber)medicine.phoneNumber = phoneNumber;
    if(email)medicine.email = email;
    
    if(address)medicine.address = address;
    
    

    await medicine.save();
    medicine = {
      _id: medicine._id,
      name: medicine.name,
      email: medicine.email,
      phoneNumber: medicine.phoneNumber,
      address:medicine.address,
      
    };
    return res.status(200).json({
      message: "profile updated",
      medicine,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};


export const getAllShops = async (req, res) => {
  try {
      const shop = await Medicine.find();
      res.status(200).json({
        shop,
        success:true
      });
  } catch (error) {
      console.log(error)
  }
};



export const medicineDelete=async (req,res)=>{
  try{
    const medicineDelete=await Medicine.findByIdAndDelete(req.params.id);
    if(!medicineDelete){
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

