import chalk from 'chalk'
import mongoose from 'mongoose'
import User from '../model/userModel.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import 'dotenv/config'
// const sendMail = require('../middlewares/sendMail')
// const tryCatch = require('../middlewares/tryCatch')

export const register = async (req, res) => {
    console.log(req.body)
    try {
        // const chalk = await import('chalk');
        const { username, email, phoneNumber,password, address, gender, age } = req.body


        //check for existing user
        let user = await User.findOne({ "name": username })
        if (user) {
            console.log(chalk.blue('Abey naam to ache bey'))
            return res.status(469).json({
                message: "Tor naam ache re",
            })
        }

        // //Password hash
        const saltRounds = 11
        const salt = await bcrypt.genSalt(saltRounds)
        const hashedPass = await bcrypt.hash(String(password), salt)


        const newUser = await new  User({
            name: username,
            email,
            password: hashedPass,
            phoneNumber,
            gender,
            address,
        })
        try {
            await newUser.save();
            console.log(chalk.blue('User saved'));
            res.status(200).json({
                message: "User save hoye geche",
            })

        } catch (err) {
            console.log("This is an error:", err);
            res.status(500).send('Internal Server Error');
        }
        console.log(chalk.green('done'))
        //jwt
        // const otp = Math.floor(Math.random() * 1000000)
        // const activationToken = jwt.sign({
        //     user,
        //     otp,
        // }, process.env.SECRET_KEY, {
        //     expiresIn: "5m",
        // })

        // const data = {
        //     otp
        // }

        // await sendMail(username, "Wildlife otp", data)




        // res.status(201).json({
        //     message: "Otp send to your mail",
        //     activationToken
        // })
    } catch (err) {
        res.status(401).json({
            message: "Gar mereche"
        })
        console.log(err);
    }

}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ "email": email })
        if (!user) {
            return res.status(401).json({ message: "user not found" })
        }

        const isValid = await bcrypt.compare(password, user.password);
        if (!isValid) {
            return res.status(401).json({ message: "wrong password" })
        }
        const payload = {
            "name":user.name,
            "email":user.email
        }
        try {
            console.log("Generating token...");
            const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "5h" });
            console.log(chalk.greenBright("Generated Token:"), token);

            return res.status(200).json({ token, user });
        } catch (error) {
            console.error("JWT error:", error);
            return res.status(500).json({ error: "Token generation failed" });
        }


    } catch (error) {

    }
}
export const updateprofile = async (req, res) => {
  try {
    const{name,email,address,}=req.body;
    
console.log("id : ",req.body)
   
    const userId = req.id; //middlewares se ayega
    console.log("id : ",req.id)
    let user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      });
    }

    //update things in profile
    if(name)user.name = name;
    // if(phoneNumber)dr.phoneNumber = phoneNumber;
    if(email)user.email = email;
    // if(password)dr.password = password;
    if(address)user.address = address;
    // if(specialization)dr.specialization = specialization;
    // if(currentyWorkingIn)dr.currentyWorkingIn = currentyWorkingIn;

    

    await user.save();
    
    const updatedUser = {
        _id: user._id,
        name: user.name,
        email: user.email,
        address: user.address,
        // Include other fields if needed
      };
    return res.status(200).json({
      message: "profile updated",
      updatedUser,
      success: true,
    });
  } catch (error) {
    console.log(error);
  }
};