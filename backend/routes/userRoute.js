import express from "express";
import  User  from "../model/userModel.js";

const router = express.Router()

router.post('/signup',async(req,res)=>{
   console.log(req.body)
      try {
         const {name , phoneNumber , password ,address,gender} = req.body
         const user = await User.findOne({name:name})
         if(user){
            return res.status(200).json({message:"user already exists"})
         }
         const newUser = User.create({
            name,
            phoneNumber,
            password,
            address,
            gender
         })

         try {
            // await newUser.save();
            console.log('User saved');
            res.status(200).json({
                message: "User save hoye geche",
            })
        } catch (err) {
            console.log("This is an error:", err);
            res.status(500).send('Internal Server Error');
        }
      } catch (error) {
        console.log("req parsing error in signup :",error)
      }
})

export default router