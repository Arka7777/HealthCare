import mongoose from "mongoose";

const demandSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  quantitySold: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

export const Demand = mongoose.model("Demand", demandSchema);
