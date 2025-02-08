import express from "express"
import { getSalesPrediction } from "../controller/predictController.js"
const router=express.Router()
router.post("/sales",getSalesPrediction)
export default router