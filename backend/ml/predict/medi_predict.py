from fastapi import FastAPI
import pickle
import numpy as np
import pandas as pd
from pydantic import BaseModel

# Initialize FastAPI app
app = FastAPI()


model_filename = "../test_model/model.pkl"

try:
    with open(model_filename, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        encoder = model_data["encoder"] 
    print("✅ Model loaded successfully!")
except FileNotFoundError:
    print(f"❌ Error: Model file '{model_filename}' not found.")
    exit()


class MedicineDemandRequest(BaseModel):
    day: int
    month: int
    year: int
    medicine_name: str
    stock_available: int
    supplier_lead_time: int
    seasonal_demand: str
    hospital_orders: int
    price_per_unit: float
    discount_applied: float
    competitor_price: float

# Prediction function
@app.post("/predict_medicine_demand")
def predict_demand(request: MedicineDemandRequest):
    try:
        # Encode categorical variables
        encoded_features = encoder.transform([[request.medicine_name, request.seasonal_demand]])

        # Prepare input as a 2D array
        input_data = np.array([[
            request.day, request.month, request.year, request.stock_available,
            request.supplier_lead_time, request.hospital_orders, request.price_per_unit,
            request.discount_applied, request.competitor_price
        ]])

        # Concatenate numerical and encoded categorical features
        input_data = np.hstack((input_data, encoded_features))

        # Make prediction
        predicted_demand = model.predict(input_data)

        return {"predicted_medicine_demand": predicted_demand[0]}
    
    except Exception as e:
        return {"error": str(e)}

# Run FastAPI using: uvicorn medipredict:app --reload
