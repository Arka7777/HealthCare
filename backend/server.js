import express from "express";
import 'dotenv/config'
import mongoose from "mongoose";
import userRoute from './routes/userRoute.js'
import clinicRoute from './routes/clinicRoute.js'
import doctorRoute from './routes/doctorRoute.js'
import medicineRoute from './routes/medicineRoute.js'



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
// app.use('/api/v1/user',userRoute)
app.use('/api/v1/clinic',clinicRoute)
app.use('/api/v1/doctor',doctorRoute)
app.use('/api/v1/medicineShop',medicineRoute)

app.listen(port,()=>{
    console.log(`server is running at : http://localhost:${port}`)
})