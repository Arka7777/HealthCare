import chalk from 'chalk'
import jwt from 'jsonwebtoken'

export const authMiddle =(req,res,next)=>{
try {
    const token = req.headers['authorization'].split(" ")[1]
    // console.log(req.headers)
    // return res.status(404).send({message:"Auth failed",success:false})
    
    jwt.verify(token,process.env.JWT_SECRET,(err,decoder)=>{

            if(err){
                console.log(err)
                return res.status(404).send({message:"Auth failed",success:false})
            }else{
                req.body.name = decoder.name
                req.body.email = decoder.email
                console.log("done ➡️")
                next()
            }        
    })

} catch (error) {
    console.log(chalk.red("auth middle error:",error))
    return res.status(404).send({message:"Auth failed",success:false})
}
}