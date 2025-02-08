from flask import Flask, request, jsonify
import pickle
from flask_cors import *
import numpy as np

app = Flask(__name__)
CORS(app)
# Load the model and encoder
model_filename = "HealthCare/backend/ml/test_model/model.pkl"
with open(model_filename, "rb") as file:
    model_data = pickle.load(file)
    model = model_data["model"]
    encoder = model_data["encoder"]

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

if __name__ == "__main__":
    app.run(debug=True)