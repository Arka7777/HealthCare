import pandas as pd
import numpy as np

# Generate sample data
np.random.seed(42)
num_records = 100

data = {
    "date": pd.date_range(start="2024-01-01", periods=num_records, freq="D"),
    "medicine_name": np.random.choice(["Paracetamol", "Amoxicillin", "Metformin", "Ibuprofen"], num_records),
    "sales_units": np.random.randint(50, 500, num_records),
    "stock_available": np.random.randint(100, 1000, num_records),
    "supplier_lead_time": np.random.randint(1, 10, num_records),
    "seasonal_demand": np.random.choice(["Yes", "No"], num_records),
    "hospital_orders": np.random.randint(1, 5, num_records),
    "price_per_unit": np.round(np.random.uniform(10, 50, num_records), 2),
    "discount_applied": np.random.randint(0, 10, num_records),
    "competitor_price": np.round(np.random.uniform(10, 50, num_records), 2),
}

# Create DataFrame
df = pd.DataFrame(data)

# Save to CSV
df.to_csv("historical_sales.csv", index=False)

print("✅ historical_sales.csv has been generated successfully!")
