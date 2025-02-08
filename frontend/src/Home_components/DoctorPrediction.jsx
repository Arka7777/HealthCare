// DoctorPrediction.js
import React, { useState } from 'react';
import axios from 'axios';
import { FaUserMd, FaHeartbeat, FaCalendarCheck, FaClock } from 'react-icons/fa';

const DoctorPrediction = () => {
  const [doctorSpecialization, setDoctorSpecialization] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [patientAge, setPatientAge] = useState('');
  const [previousAppointments, setPreviousAppointments] = useState('');
  const [recommendedDoctor, setRecommendedDoctor] = useState('');
  const [loading, setLoading] = useState(false);

  const handleDoctorPrediction = async () => {
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:5000/predictDoctor', {
        doctor_specialization: doctorSpecialization,
        symptoms: symptoms,
        patient_age: patientAge,
        previous_appointments: previousAppointments,
      });
      setRecommendedDoctor(response.data.predicted_doctor);
    } catch (error) {
      console.error('Error predicting doctor:', error);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-500 to-green-700 flex justify-center items-center p-4">
      <div className="bg-white bg-opacity-20 backdrop-blur-lg p-8 rounded-2xl shadow-xl w-full max-w-lg border border-white border-opacity-30">
        <h1 className="text-3xl font-bold text-white text-center mb-6">🩺 Doctor Prediction</h1>

        <div className="space-y-6">
          {/* Input Fields */}
          {[
            { label: 'Doctor Specialization', icon: <FaUserMd />, state: doctorSpecialization, setter: setDoctorSpecialization },
            { label: 'Symptoms', icon: <FaHeartbeat />, state: symptoms, setter: setSymptoms },
            { label: 'Patient Age', icon: <FaCalendarCheck />, state: patientAge, setter: setPatientAge, type: 'number' },
            { label: 'Previous Appointments', icon: <FaClock />, state: previousAppointments, setter: setPreviousAppointments }
          ].map(({ label, icon, state, setter, type = 'text' }, index) => (
            <div key={index} className="relative">
              <span className="absolute left-3 top-3 text-white text-lg">{icon}</span>
              <input
                type={type}
                placeholder={label}
                value={state}
                onChange={(e) => setter(e.target.value)}
                className="pl-12 p-3 w-full bg-white bg-opacity-30 border border-white border-opacity-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-200 text-white placeholder-white placeholder-opacity-80 transition-all"
              />
            </div>
          ))}

          {/* Predict Button */}
          <button
            onClick={handleDoctorPrediction}
            disabled={loading}
            className={`w-full py-3 rounded-lg text-lg font-semibold transition-all duration-300 ${
              loading
                ? 'bg-green-300 cursor-not-allowed text-gray-100'
                : 'bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105'
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
              'Predict Doctor'
            )}
          </button>

          {/* Display Prediction Result */}
          {recommendedDoctor && (
            <div className="mt-4 p-4 bg-white bg-opacity-20 text-white text-lg font-semibold text-center rounded-lg shadow-md">
              Recommended Doctor: <span className="font-bold text-yellow-300">{recommendedDoctor}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DoctorPrediction;
