import mongoose from "mongoose";
const db = process.env.URI

export const connectDB = () =>{
    mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => { console.log('Connected to the database') })
        .catch(err => { console.log('Database error powered by Aru...', err) })
}