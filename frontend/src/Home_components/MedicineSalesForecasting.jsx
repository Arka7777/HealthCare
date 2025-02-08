import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const MedicineSalesForecasting = () => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  return (
    <div className="px-6 sm:px-12 md:px-20 lg:px-40 xl:px-60 py-10">
      <h1 className="text-center font-bold text-3xl md:text-4xl lg:text-5xl text-blue-800">
        Medicine Forecasting
      </h1>

      <div className="grid md:grid-cols-2 gap-10 mt-10 border-2 px-8 py-8 rounded-md border-black bg-slate-200 relative">
        <div>
          <label className="block text-lg font-semibold">Date</label>
          <input
            type="date"
            className="mt-2 w-full border-2 border-blue-800 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          <div className="mt-6 w-full max-w-xs">
            <button
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-md flex justify-between items-center hover:bg-blue-600"
              onClick={() => setIsOpen1(!isOpen1)}
            >
              <span>Medicine Name</span>
              {isOpen1 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen1 && (
              <ul className="w-full bg-white border border-gray-300 shadow-md mt-1 rounded-md overflow-hidden">
                {["Metaformin", "Ibuprofen", "Paracetamol", "Amoxicillin"].map((med, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{med}</li>
                ))}
              </ul>
            )}
          </div>

          <div className={`mt-6 w-full max-w-xs transition-all duration-300 ${isOpen1 ? 'mt-20' : ''}`}>
            <button
              className="w-full bg-blue-500 text-white px-4 py-3 rounded-md flex justify-between items-center hover:bg-blue-600"
              onClick={() => setIsOpen2(!isOpen2)}
            >
              <span>Stock Available</span>
              {isOpen2 ? <FaChevronUp /> : <FaChevronDown />}
            </button>
            {isOpen2 && (
              <ul className="w-full bg-white border border-gray-300 shadow-md mt-1 rounded-md overflow-hidden">
                {["Yes", "No"].map((option, index) => (
                  <li key={index} className="px-4 py-2 hover:bg-gray-200 cursor-pointer">{option}</li>
                ))}
              </ul>
            )}
          </div>
        </div>

        <div>
          {["Enter Number of Hospital Orders", "Enter Supplier Lead Time (minutes)", "Enter Price per Unit", "Enter Discount Applied"].map(
            (placeholder, index) => (
              <input
                key={index}
                type="number"
                className="w-full h-12 mt-5 border-2 border-blue-800 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder={placeholder}
              />
            )
          )}
        </div>

        <div className="flex justify-center mt-10 md:col-span-2">
          <button className="text-lg px-6 py-3 bg-blue-500 text-white border-2 border-transparent rounded-md hover:bg-blue-600 hover:border-blue-800 transition-all">
            Generate
          </button>
        </div>
      </div>
    </div>
  );
};

export default MedicineSalesForecasting;



