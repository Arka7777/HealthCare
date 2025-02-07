import express from "express"
import { medicineRegister,medicinelogin,logout,updateprofile, medicineDelete,getAllShops } from "../controller/medicineController.js"
import { authMiddle } from "../middlewares/authMiddleware.js"

const router=express.Router()

router.route("/signup").post(medicineRegister)
router.route("/login").post(medicinelogin)
router.route("/logout").get(authMiddle,logout)
router.route("/update/:id").put(authMiddle,updateprofile)
router.route("/delete:id").delete(medicineDelete)
router.route("/getAllShops").get(getAllShops)


export default router