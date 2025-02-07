from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import numpy as np
import datetime

# Load the trained model
model_filename = "./ml/model.pkl"

try:
    with open(model_filename, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        encoder = model_data["encoder"]  # Load the encoder for categorical variables
    print("✅ Model loaded successfully!")
except FileNotFoundError:
    print(f"❌ Error: Model file '{model_filename}' not found.")
    exit()

# Initialize FastAPI
app = FastAPI()

# Define request model
class InputData(BaseModel):
    date: str  # Expecting a string format like "YYYY-MM-DD"
    medicine_name: str
    stock_available: int
    supplier_lead_time: int
    seasonal_demand: str
    hospital_orders: int
    price_per_unit: float
    discount_applied: float
    competitor_price: float

# Prediction function
def predict_sales(input_data: InputData):
    # Extract day, month, and year from date
    date_obj = datetime.datetime.strptime(input_data.date, "%Y-%m-%d")
    day, month, year = date_obj.day, date_obj.month, date_obj.year

    # Encode categorical variables
    encoded_features = encoder.transform([[input_data.medicine_name, input_data.seasonal_demand]])
    
    # Prepare numerical features
    numerical_features = np.array([[day, month, year, 
                                    input_data.stock_available, input_data.supplier_lead_time, 
                                    input_data.hospital_orders, input_data.price_per_unit, 
                                    input_data.discount_applied, input_data.competitor_price]])
    
    # Concatenate numerical and encoded categorical features
    input_features = np.hstack((numerical_features, encoded_features))
    
    # Make prediction
    predicted_sales = model.predict(input_features)
    
    return {"predicted_sales_units": float(predicted_sales[0])}

# API endpoint for prediction
@app.post("/predict/")
def get_prediction(data: InputData):
    prediction = predict_sales(data)
    return prediction
