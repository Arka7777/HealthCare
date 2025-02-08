import joblib
import pandas as pd
from fastapi import FastAPI, HTTPException
from pydantic import BaseModel

# Initialize FastAPI
app = FastAPI()

# Load the trained model
model = joblib.load("../test_model/medi_model.pkl")

# Define the request structure
class DoctorPredictionInput(BaseModel):
    previous_prescriptions: str
    symptoms: str
    allergies: str
    common_side_effects: str

@app.post("/predict")
def predict(data: DoctorPredictionInput):
    try:
        # Convert input into DataFrame
        df = pd.DataFrame([data.dict()])
        df = pd.get_dummies(df)  # Apply one-hot encoding if required

        # Make prediction
        prediction = model.predict(df)

        return {"recommended_doctor": int(prediction[0])}

    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# Run using: uvicorn filename:app --reload
