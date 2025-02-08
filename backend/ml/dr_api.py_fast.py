from fastapi import FastAPI
from pydantic import BaseModel
import pickle
import pandas as pd
import numpy as np

# Load the trained model
model_filename = "dr_recommendation_model.pkl"

try:
    with open(model_filename, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        encoder = model_data["encoder"]
    print("✅ Model loaded successfully!")
except FileNotFoundError:
    print(f"❌ Error: Model file '{model_filename}' not found.")
    exit()

# FastAPI app
app = FastAPI()

# Define request model
class DoctorRecommendationRequest(BaseModel):
    doctor_specialization: str
    symptoms: str
    patient_age: int
    previous_appointments: str

# Function to make doctor recommendation
def predict_doctor(doctor_specialization, symptoms, patient_age, previous_appointments):
    # Prepare input data as a DataFrame
    input_df = pd.DataFrame([[doctor_specialization, symptoms, patient_age, previous_appointments]],
                            columns=["doctor_specialization", "symptoms", "patient_age", "previous_appointments"])
    
    # Encode categorical features
    input_encoded = encoder.transform(input_df)

    # Make prediction
    predicted_doctor = model.predict(input_encoded)
    
    return predicted_doctor[0]

# API endpoint to get doctor recommendation
@app.post("/recommend_doctor/")
def recommend_doctor(request: DoctorRecommendationRequest):
    predicted_doctor = predict_doctor(
        doctor_specialization=request.doctor_specialization,
        symptoms=request.symptoms,
        patient_age=request.patient_age,
        previous_appointments=request.previous_appointments
    )
    return {"recommended_doctor": predicted_doctor}
