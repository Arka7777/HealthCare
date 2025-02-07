import express from "express";
import 'dotenv/config'


const app = express()
const port = process.env.PORT || 3000
app.get('/',(req,res)=>{
    res.send("All is well")
})


app.listen(port,()=>{
    console.log(`server is running at : http://localhost:${port}`)
})