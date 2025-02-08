import fs from 'fs';
import pickle from 'pickle';
import path from 'path';

// Declare the model and encoder variables at the module level
let model, encoder;

// Load the model only once
const loadModel = () => {
  if (!model || !encoder) {
    const __dirname = path.dirname(new URL(import.meta.url).pathname);

    // Resolving the model path relative to the current directory
    const fullModelPath = path.resolve(__dirname, '../ml/test_model/model.pkl');

    // Load the model and encoder from the pickle file
    const modelData = pickle.load(fs.readFileSync(fullModelPath));

    model = modelData.model;
    encoder = modelData.encoder;

    console.log("✅ Model loaded successfully!");
  }
};

// The function to make a sales prediction
export const predictSales = async (day, month, year, medicine_name, stock_available, supplier_lead_time, seasonal_demand, hospital_orders, price_per_unit, discount_applied, competitor_price) => {
  // Ensure the model is loaded
  loadModel();

  // Encode the categorical features (medicine_name and seasonal_demand)
  const encodedFeatures = encoder.transform([[medicine_name, seasonal_demand]]);

  // Prepare the input data for prediction
  const inputData = [
    day, month, year, stock_available, supplier_lead_time, hospital_orders,
    price_per_unit, discount_applied, competitor_price, ...encodedFeatures[0]
  ];

  // Make the prediction
  return model.predict([inputData])[0];
};
