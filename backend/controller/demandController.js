import { Demand } from "../model/demandModel.js";
import axios from "axios";

export const addSalesData = async (req, res) => {
  try {
    const { medicineName, quantitySold } = req.body;
    const newSale = new Demand({ medicineName, quantitySold });
    await newSale.save();

    res.status(201).json({ message: "Sales data added", success: true });
  } catch (error) {
    res.status(500).json({ message: "Error adding sales data", error });
  }
};

export const getPredictions = async (req, res) => {
  try {
    const response = await axios.get("http://127.0.0.1:5000/predict");
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Error fetching predictions", error });
  }
};
