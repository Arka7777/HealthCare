import pandas as pd

# Load data
data = pd.read_csv("ml/data/raw_sales.csv")

# Convert date column
data["date"] = pd.to_datetime(data["date"])

# Remove missing values
data.dropna(inplace=True)

# Save cleaned data
data.to_csv("ml/data/historical_sales.csv", index=False)

print("Data preprocessing complete! Cleaned data saved.")
