import express from "express"
import { drregister,drdelete,login,updateprofile,getAllDoctors,getDoctorById,getRecommendedDoctor } from "../controller/doctorController.js"
import { authMiddle } from "../middlewares/authMiddleware.js"

const router = express.Router()


router.post('/signup', drregister)
router.post('/login', login)
router.put('/edit/:id', updateprofile)
router.delete('/delete/:id',drdelete)
router.get('/get/:id',getDoctorById)
router.get('/get',getAllDoctors)
router.post("/recommend", getRecommendedDoctor);


export default router