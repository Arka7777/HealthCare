from flask import Flask, request, jsonify
import pickle
from flask_cors import *
import numpy as np
from sklearn.preprocessing import OneHotEncoder

app = Flask(__name__)
CORS(app)
# Load the model and encoder
model_filename = "HealthCare/backend/ml/test_model/model.pkl"
with open(model_filename, "rb") as file:
    model_data = pickle.load(file)
    model = model_data["model"]
    encoder = model_data["encoder"]
model_filename1 = "HealthCare/backend/ml/test_model/medi_model.pkl"
with open(model_filename1, "rb") as file1:
    model_data1 = pickle.load(file1)
    model1 = model_data1["model"]
    encoder1 = model_data1["encoder"]
model_filename2 = "HealthCare/backend/ml/test_model/dr_recommendation_model.pkl"
with open(model_filename2, "rb") as file2:
    model_data2 = pickle.load(file2)
    model2 = model_data2["model"]
    encoder2 = model_data2["encoder"]

@app.route("/predict/", methods=["POST"])
def predict():
    # Get data from the request
    data = request.json
    print(data)

    # Encode categorical variables
    encoded_features = encoder.transform([[data["medicine_name"], data["seasonal_demand"]]])

    # Prepare input data
    input_data = np.array([
        [
            data["day"],
            data["month"],
            data["year"],
            data["stock_available"],
            data["supplier_lead_time"],
            data["hospital_orders"],
            data["price_per_unit"],
            data["discount_applied"],
            data["competitor_price"],
        ]
    ])

    # Concatenate numerical and encoded categorical features
    input_data = np.hstack((input_data, encoded_features))

    # Make prediction
    predicted_sales = model.predict(input_data)

    # Return the prediction
    return jsonify({"predicted_sales": predicted_sales[0]})

@app.route("/predictMedi/", methods=["POST"])
def predictMedi():
    # Get data from the request
    data = request.json
    print(data)
    
    # Encode categorical variables
    encoded_features = encoder1.transform([[data["previous_prescriptions"], data["symptoms"],data["allergies"],data["common_side_effect"]]])

    # Prepare input data

    # Concatenate numerical and encoded categorical features
    input_data = encoded_features

    # Make prediction
    predicted_medicine = model1.predict(input_data)

    # Return the prediction
    return jsonify({"predicted_medicine": predicted_medicine[0]})
@app.route("/predictDoctor/", methods=["POST"])
def predictDoc():
    # Get data from the request
    data = request.json
    print(data)
    
    # doctor_specialization, symptoms, patient_age, previous_appointments
    # Ensure all 4 features are provided for encoding
    # Example of adding any missing features (adjust as per your model's expected input)
    encoded_features = encoder2.transform([[
        data["doctor_specialization"],
        data["symptoms"],
        data["previous_appointments"],  # Make sure this matches the training data feature
        data["patient_age"]  # Include numerical feature (if it was part of training)
    ]])

    # Make prediction with the encoded features
    predicted_doctors = model2.predict(encoded_features)

    # Return the prediction
    return jsonify({"predicted_doctors": predicted_doctors[0]})


if __name__ == "__main__":
    app.run(debug=True)