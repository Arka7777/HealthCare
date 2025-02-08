// MedicinePrediction.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaPrescriptionBottle, FaCapsules, FaHeartbeat, FaExclamationTriangle } from 'react-icons/fa';

const MedicinePrediction = () => {
  const [previousPrescriptions, setPreviousPrescriptions] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [allergies, setAllergies] = useState('');
  const [commonSideEffects, setCommonSideEffects] = useState('');
  const [medicine, setMedicine] = useState('');
  const [loading, setLoading] = useState(false);

  const handleMedicinePrediction = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://127.0.0.1:5000/predictMedi/', {
        previous_prescriptions: previousPrescriptions,
        symptoms: symptoms,
        allergies: allergies,
        common_side_effect: commonSideEffects,
      });
      setMedicine(response.data.predicted_medicine);
    } catch (error) {
      console.error('Error predicting medicine:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-blue-700 flex justify-center items-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white border-opacity-30">
        <h1 className="text-3xl font-bold text-white text-center mb-6">💊 Medicine Prediction</h1>

        <div className="space-y-6">
          {/* Input Fields */}
          {[ 
            { label: "Previous Prescriptions", icon: <FaPrescriptionBottle />, state: previousPrescriptions, setter: setPreviousPrescriptions },
            { label: "Symptoms", icon: <FaCapsules />, state: symptoms, setter: setSymptoms },
            { label: "Allergies", icon: <FaExclamationTriangle />, state: allergies, setter: setAllergies },
            { label: "Common Side Effects", icon: <FaHeartbeat />, state: commonSideEffects, setter: setCommonSideEffects }
          ].map(({ label, icon, state, setter }, index) => (
            <div key={index} className="relative">
              <span className="absolute left-3 top-3 text-white text-lg">{icon}</span>
              <input
                type="text"
                placeholder={label}
                value={state}
                onChange={(e) => setter(e.target.value)}
                className="pl-12 p-3 w-full bg-white bg-opacity-30 border border-white border-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200 text-white placeholder-white placeholder-opacity-80 transition-all"
              />
            </div>
          ))}

          {/* Predict Button */}
          <button
            onClick={handleMedicinePrediction}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              loading
                ? 'bg-blue-300 cursor-not-allowed text-gray-100'
                : 'bg-blue-500 hover:bg-blue-600 text-white shadow-lg transform hover:scale-105'
            }`}
          >
            {loading ? (
              <span className="flex justify-center items-center">
                <svg
                  className="animate-spin h-5 w-5 mr-2 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
                </svg>
                Processing...
              </span>
            ) : (
              'Predict Medicine'
            )}
          </button>

          {/* Display Prediction Result */}
          {medicine && (
            <div className="mt-4 p-4 bg-white bg-opacity-20 text-white text-lg font-semibold text-center rounded-lg shadow-md">
              Recommended Medicine: <span className="font-bold text-yellow-300">{medicine}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MedicinePrediction;
