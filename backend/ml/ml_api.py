from flask import Flask, request, jsonify
import pickle
import pandas as pd
from datetime import datetime

app = Flask(__name__)

# Load trained model
model = pickle.load(open("ml/model.pkl", "rb"))

@app.route('/predict', methods=['GET'])
def predict_demand():
    # Get today's date features
    today = datetime.today()
    input_features = pd.DataFrame([[today.day, today.month, today.year]], columns=["day", "month", "year"])
    
    # Predict demand
    prediction = model.predict(input_features)[0]
    
    return jsonify({"predicted_demand": int(prediction)})

if __name__ == '__main__':
    app.run(port=5001, debug=True)
