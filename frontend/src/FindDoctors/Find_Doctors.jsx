"use client"

import { useState, useEffect } from "react";
import { Search, Mic, MicOff } from "lucide-react";
import { DoctorCard } from "./DoctorCard";
import doctors from "./DoctorsData"; // Import doctors data
import axios from "axios"




const Input = ({ id, type, placeholder, value, onChange, className, ...props }) => (
  <input
    id={id}
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className={`w-full px-3 py-2 text-gray-700 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
    {...props}
  />
);

const Select = ({ id, value, onChange, children, className, ...props }) => (
  <div className="relative">
    <select
      id={id}
      value={value}
      onChange={onChange}
      className={`w-full px-3 py-2 text-gray-700 bg-white border rounded-md appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      {...props}
    >
      {children}
    </select>
    <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
      <svg className="w-4 h-4 fill-current text-gray-400" viewBox="0 0 20 20">
        <path
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
          fillRule="evenodd"
        ></path>
      </svg>
    </div>
  </div>
);

const Label = ({ htmlFor, children, className, ...props }) => (
  <label htmlFor={htmlFor} className={`block text-sm font-medium text-gray-700 mb-1 ${className}`} {...props}>
    {children}
  </label>
)

// Utility function for calculating distance
function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371 // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lat2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c // Distance in km
}

export default function DoctorsList() {
  const [doctors,setDoctors] = useState([])

  const client = axios.create({
    baseURL: "/api",
  })

  const getDoctors = async () => {
    try {
    
      const response = await client.get('/api/v1/doctor/get')

      console.log(response.data.dr)
      setDoctors(response.data.dr)
      // setIsAuth(true)
    } catch (error) {
      console.log("doctors fetching error :", error)
      // setIsAuth(false)
    }

  }
  useEffect(() => {
    getDoctors()
  }, [])
  const [searchTerm, setSearchTerm] = useState("");
  const [isListening, setIsListening] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en-US");
  const [sortBy, setSortBy] = useState("rating")
  const [specialization, setSpecialization] = useState("All")
  const [userLocation, setUserLocation] = useState(null)
  const [filteredDoctors, setFilteredDoctors] = useState(doctors)
  const [selectedDay, setSelectedDay] = useState("All")
  const [selectedDate, setSelectedDate] = useState("")
  const [selectedTime, setSelectedTime] = useState("")

  let recognition;

  // Check if browser supports Speech Recognition
  if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
    recognition = new window.webkitSpeechRecognition();
    recognition.continuous = false;
    recognition.interimResults = false;
    recognition.lang = selectedLanguage;

    recognition.onresult = (event) => {
      let transcript = event.results[0][0].transcript.trim();
      if (transcript.endsWith(".")) {
        transcript = transcript.slice(0, -1);
      }
      setSearchTerm(transcript); // Update search term with spoken words
      setIsListening(false);
    };

    recognition.onerror = (event) => {
      console.error("Speech Recognition Error:", event.error);
      setIsListening(false);
    };

    recognition.onend = () => {
      setIsListening(false);
    };
  }

  // Start or stop voice recognition
  const toggleListening = () => {
    if (isListening) {
      recognition.stop();
      setIsListening(false);
    } else {
      recognition.lang = selectedLanguage;
      recognition.start();
      setIsListening(true);
    }
  };

  // Get unique specializations from doctors data
  const specializations = ["All", ...new Set(doctors.map((doctor) => doctor.specialization))]

  // Get unique days from doctors data
  const days = ["All", ...new Set(doctors.flatMap((doctor) => Object.keys(doctor.availability)))]

  useEffect(() => {
    // Get user's location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({
            lat: position.coords.latitude,
            lon: position.coords.longitude,
          })
        },
        (error) => {
          console.error("Error getting user location:", error)
        },
      )
    }
  }, [])

  useEffect(() => {
    let result = doctors.filter(
      (doctor) =>
        (doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          doctor.specialization.toLowerCase().includes(searchTerm.toLowerCase())) &&
        (specialization === "All" || doctor.specialization === specialization),
    )

    // Filter by day
    if (selectedDay !== "All") {
      result = result.filter((doctor) => doctor.availability[selectedDay])
    }

    // Filter by date
    if (selectedDate) {
      const selectedDateObj = new Date(selectedDate)
      const dayOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][
        selectedDateObj.getDay()
      ]
      result = result.filter((doctor) => doctor.availability[dayOfWeek])
    }

    // Filter by time
    if (selectedTime) {
      result = result.filter((doctor) =>
        Object.values(doctor.availability).some((slots) =>
          slots.some((slot) => {
            const [start, end] = slot.time.split(" - ")
            return selectedTime >= start && selectedTime <= end
          }),
        ),
      )
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating)
    } else if (sortBy === "nearest" && userLocation) {
      result.sort((a, b) => {
        const nearestClinicA = Object.values(a.availability)
          .flat()
          .reduce(
            (nearest, slot) => {
              const distance = calculateDistance(
                userLocation.lat,
                userLocation.lon,
                slot.location.lat,
                slot.location.lon,
              )
              return distance < nearest.distance ? { distance, slot } : nearest
            },
            { distance: Number.POSITIVE_INFINITY, slot: null },
          )

        const nearestClinicB = Object.values(b.availability)
          .flat()
          .reduce(
            (nearest, slot) => {
              const distance = calculateDistance(
                userLocation.lat,
                userLocation.lon,
                slot.location.lat,
                slot.location.lon,
              )
              return distance < nearest.distance ? { distance, slot } : nearest
            },
            { distance: Number.POSITIVE_INFINITY, slot: null },
          )

        return nearestClinicA.distance - nearestClinicB.distance
      })
    }

    setFilteredDoctors(result)
  }, [searchTerm, sortBy, specialization, userLocation, selectedDay, selectedDate, selectedTime])

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-blue-900">Find Your Doctor</h1>
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            
            {/* Search with Voice Input */}
            <div className="space-y-2">
              <Label htmlFor="search">Search</Label>
              <div className="relative flex items-center">
                <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input
                  id="search"
                  type="text"
                  placeholder="Search doctors by name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-8 pr-10"
                />
                <button
                  type="button"
                  onClick={toggleListening}
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white p-2 rounded-full shadow-md focus:outline-none"
                >
                  {isListening ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
              </div>
            </div>

            {/* Language Selection */}
            <div className="space-y-2">
              <Label htmlFor="language">Language</Label>
              <Select
                id="language"
                value={selectedLanguage}
                onChange={(e) => setSelectedLanguage(e.target.value)}
              >
                <option value="en-US">English</option>
                <option value="hi-IN">Hindi</option>
                <option value="bn-IN">Bengali</option>
                <option value="es-ES">Spanish</option>
                <option value="fr-FR">French</option>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialization">Specialization</Label>
              <Select id="specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
                {specializations.map((spec, index) => (
                  <option key={index} value={spec}>
                    {spec === "All" ? "All Specializations" : spec}
                  </option>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="sortBy">Sort by</Label>
              <Select id="sortBy" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="rating">Rating</option>
                <option value="nearest">Nearest Clinic</option>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="day">Day</Label>
              <Select id="day" value={selectedDay} onChange={(e) => setSelectedDay(e.target.value)}>
                {days.map((day, index) => (
                  <option key={index} value={day}>
                    {day === "All" ? "All Days" : day}
                  </option>
                ))}
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)} />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          {filteredDoctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} userLocation={userLocation} />
          ))}
        </div>
      </div>
    </div>
  );
}
