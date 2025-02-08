import pandas as pd
import numpy as np
import pickle
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestRegressor
from sklearn.preprocessing import OneHotEncoder

# Load historical sales data
data = pd.read_csv("../ml/data/historical_sales.csv")

# Convert 'date' column to datetime format
data["date"] = pd.to_datetime(data["date"])

# Extract numerical features from 'date'
data["day"] = data["date"].dt.day
data["month"] = data["date"].dt.month
data["year"] = data["date"].dt.year

# Drop 'date' column since it's no longer needed
data.drop(columns=["date"], inplace=True)

# Encode categorical features
encoder = OneHotEncoder(sparse_output=False, drop="first")  # One-Hot Encoding for categorical variables
encoded_features = encoder.fit_transform(data[["medicine_name", "seasonal_demand"]])

# Convert encoded features to DataFrame
encoded_df = pd.DataFrame(encoded_features, columns=encoder.get_feature_names_out(["medicine_name", "seasonal_demand"]))

# Drop original categorical columns and merge encoded ones
data.drop(columns=["medicine_name", "seasonal_demand"], inplace=True)
data = pd.concat([data, encoded_df], axis=1)

# Define Features (X) and Target (y)
X = data.drop(columns=["sales_units"])  # Use all columns except the target
y = data["sales_units"]  # Target variable

# Split into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.1, random_state=50)

# Train the model
model = RandomForestRegressor(n_estimators=200, random_state=42)
model.fit(X_train, y_train)

# Save the model
model_filename = "ml/model.pkl"
with open(model_filename, "wb") as file:
    pickle.dump({"model": model, "encoder": encoder}, file)  # Save both model and encoder

print(f"✅ Model trained and saved at {model_filename}")
