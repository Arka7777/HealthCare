import { useState, useContext } from "react";
import { Star, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react";
import axios from "axios";
import { AuthContext } from "../AuthPage/AuthContext";

const Button = ({ children, onClick, className, disabled, ...props }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`px-4 py-2 font-semibold text-sm rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
      disabled
        ? "bg-gray-400 text-gray-200 cursor-not-allowed"
        : "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500"
    } ${className}`}
    {...props}
  >
    {children}
  </button>
);

export function DoctorCard({ doctor, userLocation }) {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false);
  const [bookedSlots, setBookedSlots] = useState({}); // Track booked slots

  const { user } = useContext(AuthContext);
  const client = axios.create({ baseURL: "/api" });

  const handleBooking = async (day, slot) => {
    try {
      const response = await client.post("/api/v1/book", {
        name: user.name,
        phoneNumber: user.phoneNumber,
        drName: doctor.name,
        clinicName: slot.clinic,
      });
      console.log(response);
      
      // Store booked slot in state
      setBookedSlots((prev) => ({
        ...prev,
        [`${day}-${slot.time}-${slot.clinic}`]: true,
      }));

      alert(`Booking appointment with ${doctor.name} on ${day} at ${slot.time} in ${slot.clinic}`);
    } catch (error) {
      console.error("Booking failed:", error);
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 w-full mb-6">
      <div className="p-4">
        <div className="flex justify-between items-center mb-2">
          <div>
            <h2 className="text-xl font-bold text-blue-900">{doctor.name}</h2>
            <p className="text-sm text-blue-700">{doctor.specialization}</p>
          </div>
          <div className="flex items-center">
            <Star className="w-5 h-5 text-yellow-400 fill-current" />
            <span className="ml-1 text-gray-600 font-semibold">{doctor.rating.toFixed(1)}</span>
          </div>
        </div>
        <Button
          onClick={() => setIsAvailabilityOpen(!isAvailabilityOpen)}
          className="w-full flex justify-between items-center mt-2"
          aria-expanded={isAvailabilityOpen}
          aria-controls={`schedule-${doctor.id}`}
        >
          <span className="flex items-center">
            <Calendar className="w-4 h-4 mr-2" />
            {isAvailabilityOpen ? "Hide" : "View"} Availability
          </span>
          <span>{isAvailabilityOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</span>
        </Button>
      </div>
      {isAvailabilityOpen && (
        <div id={`schedule-${doctor.id}`} className="bg-gray-50 p-4 border-t border-gray-200">
          <h3 className="font-semibold text-blue-900 mb-4">Weekly Schedule:</h3>
          {Object.entries(doctor.availability).map(([day, slots]) => (
            <div key={day} className="mb-4">
              <h4 className="font-medium text-blue-800 mb-2">{day}</h4>
              <ul className="space-y-2">
                {slots.map((slot, index) => {
                  const slotKey = `${day}-${slot.time}-${slot.clinic}`;
                  return (
                    <li key={index} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                      <div>
                        <span className="text-sm font-medium text-blue-700">
                          {slot.clinic}: {slot.time}
                        </span>
                        {userLocation && (
                          <div className="text-xs text-gray-500 flex items-center mt-1">
                            <MapPin className="w-3 h-3 mr-1" />
                            {/* Distance calculation here */}
                          </div>
                        )}
                      </div>
                      <Button
                        onClick={() => handleBooking(day, slot)}
                        disabled={bookedSlots[slotKey]} // Disable button if booked
                        className="text-xs px-2 py-1"
                      >
                        {bookedSlots[slotKey] ? "Booked" : "Book Now"}
                      </Button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
