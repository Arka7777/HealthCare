import express from "express"
import { medicineRegister,medicinelogin,logout,updateprofile, medicineDelete,getAllShops } from "../controller/medicineController.js"

const router=express.Router()

router.route("/signup").post(medicineRegister)
router.route("/login").post(medicinelogin)
router.route("/logout").get(logout)
router.route("/update/:id").put(updateprofile)
router.route("/delete:id").delete(medicineDelete)
router.route("/getAllShops").get(getAllShops)


export default router