import express from "express"
import { drregister,drdelete,login,updateprofile,getAllDoctors,getDoctorById } from "../controller/doctorcontroller"
import { authMiddle } from "../middlewares/authMiddleware"

const router = express.Router()


router.post('/signup', drregister)
router.post('/login', login)
router.put('/edit/:id',authMiddle, updateprofile)
router.delete('/delete/:id',authMiddle,drdelete)
router.get('/get/:id',getDoctorById)
router.get('/get',getAllDoctors)


export default router