import React, { useState } from 'react';

function SalesPredictionForm() {
  const [formData, setFormData] = useState({
    day: 0,
    month:0,
    year: 0,
    medicine_name: '',
    stock_available: 0,
    supplier_lead_time: 0,
    seasonal_demand: '',
    hospital_orders: 0,
    price_per_unit: 0,
    discount_applied: 0,
    competitor_price: 0,
  });

  const [prediction, setPrediction] = useState(null);
  const [error, setError] = useState(null);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null); // Reset error before attempting request

    try {
      // Sending data to backend at localhost:5000/predict
      const response = await fetch('http://localhost:5000/predict/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
   console.log(response)
   
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.detail || `HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPrediction(data.predicted_sales_units); // Save the predicted sales units
    } catch (err) {
      console.error('Error fetching prediction:', err);
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sales Prediction</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Date input */}
        {/* <div>
          <label htmlFor="date" className="block text-gray-700 font-bold mb-2">
            Date:
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div> */}

        {/* Medicine Name input */}
        <div>
          <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
            Day:
          </label>
          <input
            type="Number"
            id="day"
            name="day"
            value={formData.day}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="month" className="block text-gray-700 font-bold mb-2">
            month:
          </label>
          <input
            type="Number"
            id="month"
            name="month"
            value={formData.month}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="day" className="block text-gray-700 font-bold mb-2">
            year:
          </label>
          <input
            type="Number"
            id="year"
            name="year"
            value={formData.year}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="medicine_name" className="block text-gray-700 font-bold mb-2">
            Medicine Name:
          </label>
          <input
            type="text"
            id="medicine_name"
            name="medicine_name"
            value={formData.medicine_name}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Stock Available input */}
        <div>
          <label htmlFor="stock_available" className="block text-gray-700 font-bold mb-2">
            Stock Available:
          </label>
          <input
            type="number"
            id="stock_available"
            name="stock_available"
            value={formData.stock_available}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Supplier Lead Time input */}
        <div>
          <label htmlFor="supplier_lead_time" className="block text-gray-700 font-bold mb-2">
            Supplier Lead Time:
          </label>
          <input
            type="number"
            id="supplier_lead_time"
            name="supplier_lead_time"
            value={formData.supplier_lead_time}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div>
          <label htmlFor="supplier_lead_time" className="block text-gray-700 font-bold mb-2">
            Seasonal Demand:
          </label>
          <input
            type="String"
            id="seasonal_demand"
            name="seasonal_demand"
            value={formData.seasonal_demand}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Seasonal Demand input */}
        {/* <div>
          <label htmlFor="seasonal_demand" className="block text-gray-700 font-bold mb-2">
            Seasonal Demand:
          </label>
          <select
            id="seasonal_demand"
            name="seasonal_demand"
            value={formData.seasonal_demand}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div> */}

        {/* Hospital Orders input */}
        <div>
          <label htmlFor="hospital_orders" className="block text-gray-700 font-bold mb-2">
            Hospital Orders:
          </label>
          <input
            type="number"
            id="hospital_orders"
            name="hospital_orders"
            value={formData.hospital_orders}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Price per Unit input */}
        <div>
          <label htmlFor="price_per_unit" className="block text-gray-700 font-bold mb-2">
            Price per Unit:
          </label>
          <input
            type="number"
            id="price_per_unit"
            name="price_per_unit"
            value={formData.price_per_unit}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Discount Applied input */}
        <div>
          <label htmlFor="discount_applied" className="block text-gray-700 font-bold mb-2">
            Discount Applied:
          </label>
          <input
            type="number"
            id="discount_applied"
            name="discount_applied"
            value={formData.discount_applied}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Competitor Price input */}
        <div>
          <label htmlFor="competitor_price" className="block text-gray-700 font-bold mb-2">
            Competitor Price:
          </label>
          <input
            type="number"
            id="competitor_price"
            name="competitor_price"
            value={formData.competitor_price}
            onChange={handleChange}
            required
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Predict
        </button>
      </form>

      {/* Display any errors
      {error && <p className="text-red-500 mt-2">Error: {error}</p>}
      
      {/* Display prediction result */}
      {/* {prediction !== null && (
        <p className="mt-4 text-lg">
          Predicted Sales Units: <span className="font-bold">{prediction.toFixed(2)}</span>
        </p>
      // )} */} 
    </div>
  );
}

export default SalesPredictionForm;
