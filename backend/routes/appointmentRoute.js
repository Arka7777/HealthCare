
import { bookAppo,getBookings } from "../controller/appointmentController.js"
import express from "express"


const router = express.Router()


router.post('/book', bookAppo)
router.post('/getBookings/:name',getBookings)


export default router

