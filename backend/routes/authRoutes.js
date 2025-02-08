import chalk from "chalk"
import express from "express"
import User from "../model/userModel.js"

const router = express.Router()


router.post('/', async (req,res)=>{
    try {
        const {name , email} = req.body
        const user = await User.findOne({name:name})
        if(!user){
            return res.status(404).send("no user found")
        } 
        console.log("done ✅")
        return res.status(202).json(user)

    } catch (error) {
        console.log(chalk.magentaBright("auth error :"),error)
    }
})

export default router