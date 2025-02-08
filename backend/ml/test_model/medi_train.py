import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import OneHotEncoder
from sklearn.ensemble import RandomForestClassifier
from sklearn.pipeline import Pipeline

# Load dataset
data = pd.DataFrame({
    "patient_id": [201, 202, 203, 204, 205],
    "previous_prescriptions": ["Paracetamol", "Ibuprofen", "Aspirin", "Metformin", "Sertraline"],
    "symptoms": ["Fever", "Pain", "Inflammation", "Diabetes", "Depression"],
    "recommended_medicine": ["Acetaminophen", "Diclofenac", "Naproxen", "Glipizide", "Fluoxetine"],
    "allergies": ["None", "Penicillin", "NSAIDs", "None", "None"],
    "common_side_effects": ["Drowsiness, Nausea", "Stomach Pain, Dizziness", "Acid Reflux, Headache", 
                            "Low Blood Pressure, Fatigue", "Drowsiness, Dry Mouth"]
})

# Selecting input features (X) and target variable (y)
X = data[["previous_prescriptions", "symptoms", "allergies", "common_side_effects"]]
y = data["recommended_medicine"]

# One-Hot Encoding for categorical features
encoder = OneHotEncoder(handle_unknown="ignore", sparse_output=False)
X_encoded = encoder.fit_transform(X)

# Splitting the dataset
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

# Train a RandomForest model
model = RandomForestClassifier(n_estimators=100, random_state=42)
model.fit(X_train, y_train)

# Save the trained model
model_filename = "medi_model.pkl"
with open(model_filename, "wb") as file:
    pickle.dump({"model": model, "encoder": encoder}, file)

print("✅ Doctor recommendation model trained and saved successfully!")
