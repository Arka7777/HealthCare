import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";



const app = express()
const port = process.env.PORT || 3000
const uri = process.env.URI
// console.log("here is the uri",uri)


app.use(express.json())
app.get('/',(req,res)=>{
    res.send("All is well")
})

//mongodb
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('Connected to the database') })
    .catch(err => { console.log('Database error powered by Aru...', err) })

//routes
app.use('/api/v1/user',userRoute)


app.listen(port,()=>{
    console.log(`server is running at : http://localhost:${port}`)
})