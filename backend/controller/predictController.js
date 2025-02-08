import { predictSales } from "../utils/modelLoader.js";

export const getSalesPrediction = async (req, res) => {
  const {
    day, month, year, medicine_name, stock_available, supplier_lead_time,
    seasonal_demand, hospital_orders, price_per_unit, discount_applied, competitor_price
  } = req.body;

  try {
    // Wait for the prediction result
    const predictedSales = await predictSales(
      day, month, year, medicine_name, stock_available, supplier_lead_time,
      seasonal_demand, hospital_orders, price_per_unit, discount_applied, competitor_price
    );

    // Send the prediction back to the client
    res.json({ predicted_sales: predictedSales });
  } catch (error) {
    console.error('Error in prediction:', error);
    res.status(500).json({ error: 'Error making prediction' });
  }
};
