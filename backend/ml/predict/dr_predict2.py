from fastapi import FastAPI
import pickle
import pandas as pd
from pydantic import BaseModel

# Initialize FastAPI
app = FastAPI()

# Load the trained model
model_filename = "../test_model/dr_recommendation_model.pkl"

try:
    with open(model_filename, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        encoder = model_data["encoder"]
    print("✅ Model loaded successfully!")
except FileNotFoundError:
    print(f"❌ Error: Model file '{model_filename}' not found.")
    exit()

# Define request body model
class DoctorRecommendationRequest(BaseModel):
    doctor_specialization: str
    symptoms: str
    patient_age: int
    previous_appointments: str

# API Endpoint to predict doctor recommendation
@app.post("/dr_predict")
def predict_doctor(request: DoctorRecommendationRequest):
    try:
        # Prepare input data as DataFrame
        input_df = pd.DataFrame([[
            request.doctor_specialization,
            request.symptoms,
            request.patient_age,
            request.previous_appointments
        ]], columns=["doctor_specialization", "symptoms", "patient_age", "previous_appointments"])
        
        # Encode categorical features
        input_encoded = encoder.transform(input_df)

        # Make prediction
        predicted_doctor = model.predict(input_encoded)
        
        return {"recommended_doctor": predicted_doctor[0]}
    
    except Exception as e:
        return {"error": str(e)}


