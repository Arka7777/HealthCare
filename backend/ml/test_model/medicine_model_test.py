import pickle
import numpy as np
import pandas as pd

# Load the trained model
model_filename = "dr_model.pkl"

try:
    with open(model_filename, "rb") as file:
        model_data = pickle.load(file)
        model = model_data["model"]
        encoder = model_data["encoder"]  # Load the encoder for categorical variables
    print("✅ Model loaded successfully!")
    
    # Print expected categorical feature names
    print("Expected categorical features:", encoder.feature_names_in_)
    
except FileNotFoundError:
    print(f"❌ Error: Model file '{model_filename}' not found.")
    exit()

# Function to predict recommended doctor
def recommend_medicine(previous_prescriptions, symptoms, allergies, common_side_effects):
    # Ensure categorical feature order matches training
    categorical_features = [previous_prescriptions, symptoms, allergies, common_side_effects]
    
    # Create a DataFrame ensuring correct column order
    df = pd.DataFrame([categorical_features], columns=encoder.feature_names_in_)

    # Transform categorical features
    encoded_features = encoder.transform(df)

    # Ensure correct shape for prediction
    input_data = encoded_features.reshape(1, -1)

    # Make prediction
    predicted_medicine = model.predict(input_data)

    return predicted_medicine[0]

# Test the model with sample input
predicted_medicine = recommend_medicine(
    previous_prescriptions="Ibuprofen",
    symptoms="Pain",
    allergies="None",
    common_side_effects="Drowsiness, Nausea"
)

print(f"🩺 Recommended medicine: {predicted_medicine}")
