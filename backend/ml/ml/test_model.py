import pickle
import numpy as np
import pandas as pd

# Load the trained model
model_filename = "model.pkl"

try:
    with open(model_filename, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        encoder = model_data["encoder"]  # Load the encoder for categorical variables
    print("✅ Model loaded successfully!")
except FileNotFoundError:
    print(f"❌ Error: Model file '{model_filename}' not found.")
    exit()

# Function to make a prediction
def predict_sales(day, month, year, medicine_name, stock_available, supplier_lead_time, seasonal_demand, hospital_orders, price_per_unit, discount_applied, competitor_price):
    # Encode categorical variables
    encoded_features = encoder.transform([[medicine_name, seasonal_demand]])
    
    # Prepare input as a 2D array
    input_data = np.array([[day, month, year, stock_available, supplier_lead_time, hospital_orders, price_per_unit, discount_applied, competitor_price]])
    
    # Concatenate numerical and encoded categorical features
    input_data = np.hstack((input_data, encoded_features))
    
    # Make prediction
    predicted_sales = model.predict(input_data)
    
    return predicted_sales[0]

# Test the model with sample input
# predicted_value = predict_sales(
#     day=7,
#     month=4,
#     year=2024,
#     medicine_name="Ibuprofen",
#     stock_available=708,
#     supplier_lead_time=8,
#     seasonal_demand="Yes",
#     hospital_orders=1,
#     price_per_unit=19.47,
#     discount_applied=5,
#     competitor_price=11.47
# )

# print(f"📈 Predicted sales units: {predicted_value:.2f}")
