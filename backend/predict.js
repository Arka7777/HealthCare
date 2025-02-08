// salesPredictor.js
import pickle from 'picklejs';
import path from 'path';

// Load the trained model and encoder
let model;
let encoder;

const modelFilename = path.join(__dirname, 'model.pkl');

try {
  const modelData = pickle.load(modelFilename);
  model = modelData.model;
  encoder = modelData.encoder;
  console.log("✅ Model loaded successfully!");
} catch (err) {
  console.error("❌ Error: Could not load model", err);
}

export const predictSales = (data) => {
  const {
    day,
    month,
    year,
    medicine_name,
    stock_available,
    supplier_lead_time,
    seasonal_demand,
    hospital_orders,
    price_per_unit,
    discount_applied,
    competitor_price
  } = data;

  try {
    // Encode categorical variables
    const encodedFeatures = encoder.transform([[medicine_name, seasonal_demand]]);

    // Prepare input data as a 2D array
    const inputData = [
      [day, month, year, stock_available, supplier_lead_time, hospital_orders, price_per_unit, discount_applied, competitor_price]
    ];

    // Concatenate numerical and encoded categorical features
    const finalInputData = inputData.map((row, index) => [...row, ...encodedFeatures[index]]);

    // Make prediction
    const predictedSales = model.predict(finalInputData);

    return predictedSales[0];
  } catch (err) {
    console.error("❌ Error in prediction:", err);
    throw new Error("Failed to make prediction");
  }
};
