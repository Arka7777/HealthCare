import React, { useState } from "react";
import { FaCalendar, FaPills, FaWarehouse, FaTruck, FaChartLine, FaMoneyBillWave, FaPercentage, FaDollarSign } from "react-icons/fa";

function SalesPredictionForm() {
  const [formData, setFormData] = useState({
    day:"", 
    month:"", 
    year:"",
    medicine_name: "",
    stock_available:"",
    supplier_lead_time:"",
    seasonal_demand: "",
    hospital_orders:"",
    price_per_unit:"",
    discount_applied:"",
    competitor_price:"",
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    try {
      const response = await fetch("http://localhost:5000/predict/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.predicted_sales);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-orange-700 flex justify-center items-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white border-opacity-30">
        <h1 className="text-3xl font-bold text-white text-center mb-6">📊 Sales Prediction</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {[
            { label: "Day", icon: <FaCalendar />, name: "day" },
            { label: "Month", icon: <FaCalendar />, name: "month" },
            { label: "Year", icon: <FaCalendar />, name: "year" },
            { label: "Medicine Name", icon: <FaPills />, name: "medicine_name" },
            { label: "Stock Available", icon: <FaWarehouse />, name: "stock_available" },
            { label: "Supplier Lead Time", icon: <FaTruck />, name: "supplier_lead_time" },
            { label: "Seasonal Demand", icon: <FaChartLine />, name: "seasonal_demand" },
            { label: "Hospital Orders", icon: <FaWarehouse />, name: "hospital_orders" },
            { label: "Price per Unit", icon: <FaMoneyBillWave />, name: "price_per_unit" },
            { label: "Discount Applied", icon: <FaPercentage />, name: "discount_applied" },
            { label: "Competitor Price", icon: <FaDollarSign />, name: "competitor_price" },
          ].map(({ label, icon, name }, index) => (
            <div key={index} className="relative">
              <span className="absolute left-3 top-3 text-white text-lg">{icon}</span>
              <input
                type="text"
                placeholder={label}
                name={name}
                value={formData[name]}
                onChange={handleChange}
                required
                className="pl-12 p-3 w-full bg-white bg-opacity-30 border border-white border-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-200 text-white placeholder-white placeholder-opacity-80 transition-all"
              />
            </div>
          ))}

          <button
            type="submit"
            className="w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 bg-purple-500 hover:bg-orange-600 text-white shadow-lg transform hover:scale-105"
          >
            Predict Sales
          </button>

          {error && <p className="text-red-500 mt-2">Error: {error}</p>}
          {prediction !== null && (
            <div className="mt-4 p-4 bg-white bg-opacity-20 text-white text-lg font-semibold text-center rounded-lg shadow-md">
              Predicted Sales: <span className="font-bold text-yellow-300">{prediction}</span> units
            </div>
          )}
        </form>
      </div>
    </div>
  );
}

export default SalesPredictionForm;
