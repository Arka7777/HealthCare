import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier

# Load dataset
data = pd.DataFrame({
    "patient_id": [101, 102, 103, 104, 105],
    "previous_appointments": ["Dr. Smith", "Dr. Doe", "Dr. Brown", "Dr. Green", "Dr. White"],
    "symptoms": ["Headache", "Fever", "Back Pain", "Chest Pain", "Anxiety"],
    "recommended_doctor": ["Dr. Allen", "Dr. Baker", "Dr. Clarke", "Dr. Davis", "Dr. Evans"],
    "patient_age": [25, 34, 45, 50, 29],
    "doctor_specialization": ["Neurologist", "General Physician", "Orthopedic", "Cardiologist", "Psychiatrist"]
})

# Selecting input features (X) and target variable (y)
X = data[["doctor_specialization", "symptoms", "patient_age", "previous_appointments"]]
y = data["recommended_doctor"]

# One-Hot Encoding for categorical features
encoder = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
X_encoded = encoder.fit_transform(X)

# Splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

# Train a RandomForest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the trained model
model_filename = "dr_recommendation_model.pkl"
with open(model_filename, "wb") as file:
    pickle.dump({"model": model, "encoder": encoder}, file)

print("✅ Doctor recommendation model trained and saved successfully!")
