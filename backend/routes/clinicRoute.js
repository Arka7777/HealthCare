import express from "express"
import { clinicRegister,login,updateProfile } from "../controller/clinicController.js"
import { getAllClinics, } from "../controller/clinicController.js"
import { logout } from "../controller/clinicController.js"



const router = express.Router()


router.post('/signup', clinicRegister)
router.post('/login', login)
router.put('/edit/:id', updateProfile)
router.get('/getAllClinics',getAllClinics)
router.get('/logout',logout)



export default router