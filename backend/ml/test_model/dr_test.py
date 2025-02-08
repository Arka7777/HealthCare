import pickle
import numpy as np
import pandas as pd

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

# Function to make a doctor recommendation
def predict_doctor(doctor_specialization, symptoms, patient_age, previous_appointments):
    # Prepare input data as a DataFrame
    input_df = pd.DataFrame([[doctor_specialization, symptoms, patient_age, previous_appointments]],
                            columns=["doctor_specialization", "symptoms", "patient_age", "previous_appointments"])
    
    # Encode categorical features
    input_encoded = encoder.transform(input_df)

    # Make prediction
    predicted_doctor = model.predict(input_encoded)
    
    return predicted_doctor[0]

# Test the model with a sample input
predicted_doctor = predict_doctor(
    doctor_specialization="Neurologist",
    symptoms="Headache",
    patient_age=30,
    previous_appointments="Dr. Smith"
)

print(f"🩺 Recommended Doctor: {predicted_doctor}")
