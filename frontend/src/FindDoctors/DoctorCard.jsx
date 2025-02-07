import { useState } from "react"
import { Star, Calendar, ChevronDown, ChevronUp, MapPin } from "lucide-react"

// Custom Button component
const Button = ({ children, onClick, className, ...props }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 font-semibold text-sm bg-blue-500 text-white rounded-lg shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${className}`}
    {...props}
  >
    {children}
  </button>
)

export function DoctorCard({ doctor, userLocation }) {
  const [isAvailabilityOpen, setIsAvailabilityOpen] = useState(false)

  const handleBooking = (day, slot) => {
    alert(`Booking appointment with ${doctor.name} on ${day} at ${slot.time} in ${slot.clinic}`)
  }

  const getNextOccurrence = (day) => {
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    const today = new Date()
    const targetDay = daysOfWeek.indexOf(day)
    const daysUntilTarget = (targetDay + 7 - today.getDay()) % 7
    const nextOccurrence = new Date(today.getTime() + daysUntilTarget * 24 * 60 * 60 * 1000)
    return nextOccurrence.toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })
  }

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371 // Radius of the Earth in km
    const dLat = (lat2 - lat1) * (Math.PI / 180)
    const dLon = (lon2 - lon1) * (Math.PI / 180)
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
    return R * c // Distance in km
  }

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
  <span>
    {isAvailabilityOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
  </span>
</Button>

      </div>
      {isAvailabilityOpen && (
        <div id={`schedule-${doctor.id}`} className="bg-gray-50 p-4 border-t border-gray-200">
          <h3 className="font-semibold text-blue-900 mb-4">Weekly Schedule:</h3>
          {Object.entries(doctor.availability).map(([day, slots]) => (
            <div key={day} className="mb-4">
              <h4 className="font-medium text-blue-800 mb-2">
                {day} - {getNextOccurrence(day)}
              </h4>
              <ul className="space-y-2">
                {slots.map((slot, index) => (
                  <li key={index} className="flex items-center justify-between bg-white p-2 rounded shadow-sm">
                    <div>
                      <span className="text-sm font-medium text-blue-700">
                        {slot.clinic}: {slot.time}
                      </span>
                      {userLocation && (
                        <div className="text-xs text-gray-500 flex items-center mt-1">
                          <MapPin className="w-3 h-3 mr-1" />
                          {calculateDistance(
                            userLocation.lat,
                            userLocation.lon,
                            slot.location.lat,
                            slot.location.lon,
                          ).toFixed(1)}{" "}
                          km away
                        </div>
                      )}
                    </div>
                    <Button onClick={() => handleBooking(day, slot)} className="text-xs px-2 py-1">
                      Book Now
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

