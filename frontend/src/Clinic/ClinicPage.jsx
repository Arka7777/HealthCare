"use client"

import { useLocation } from "react-router-dom"
import { useState, useEffect } from "react"
import { MapPin, Phone, Clock, Calendar, Star } from "lucide-react"
import clinics from "./ClinicData"
import { Link } from "react-router-dom"

const specialties = [...new Set(clinics.flatMap((clinic) => clinic.doctors?.map((doctor) => doctor.specialty) || []))]
const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
const times = ["Morning (8 AM - 12 PM)", "Afternoon (12 PM - 4 PM)", "Evening (4 PM - 8 PM)"]

export default function ClinicPage() {
  const location = useLocation()
  const [clinic, setClinic] = useState(null)
  const [filters, setFilters] = useState({
    specialty: "",
    day: "",
    time: "",
  })

  useEffect(() => {
    let clinicFromLocation = location.state?.clinic
  
    if (!clinicFromLocation) {
      // Extract the clinic ID from the URL path
      const clinicId = location.pathname.split("/").pop()
      clinicFromLocation = clinics.find((c) => c.id.toString() === clinicId)
    }
  
    if (clinicFromLocation) {
      setClinic(clinicFromLocation)
    }
  }, [location])

  if (!clinic) {
    return <div className="text-center text-red-600 mt-10">Loading clinic information...</div>
  }

  const filteredDoctors =
    clinic.doctors?.filter((doctor) => {
      return (
        (filters.specialty === "" || doctor.specialty === filters.specialty) &&
        (filters.day === "" || doctor.availableDays.includes(filters.day)) &&
        (filters.time === "" || isTimeInRange(doctor.availableTime, filters.time))
      )
    }) || []

  function isTimeInRange(doctorTime, filterTime) {
    if (!doctorTime) return false
    const [start, end] = doctorTime.split(" - ")
    const startHour = Number.parseInt(start.split(":")[0])
    const endHour = Number.parseInt(end.split(":")[0])

    switch (filterTime) {
      case "Morning (8 AM - 12 PM)":
        return startHour >= 8 && endHour <= 12
      case "Afternoon (12 PM - 4 PM)":
        return startHour >= 12 && endHour <= 16
      case "Evening (4 PM - 8 PM)":
        return startHour >= 16 && endHour <= 20
      default:
        return true
    }
  }

  return (
    <div className="min-h-screen bg-blue-50">
      <main className="max-w-6xl mx-auto p-6 space-y-10">
        <section id="about" className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex items-center">
            <div className="md:w-2/5">
              <img
                src={`/placeholder.svg?height=300&width=400&text=${encodeURIComponent(clinic.name)}`}
                alt={clinic.name}
                className="w-full h-64 md:h-72 object-cover"
              />
            </div>
            <div className="p-6 md:w-3/5">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to {clinic.name}</h2>
              <p className="text-gray-600 text-base">
                At {clinic.name}, we're committed to providing top-quality healthcare services to our community. Our
                state-of-the-art facility and experienced medical professionals ensure you receive the best care
                possible.
              </p>
              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="ml-2 text-lg font-semibold">{clinic.rating?.toFixed(1) || "N/A"}</span>
                </div>
                <Link
                  to={`/rate-clinic/${clinic.id}`}
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                >
                  Rate this clinic
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Contact & Location</h3>
            <div className="space-y-3 text-base">
              <p className="flex items-center gap-3">
                <MapPin className="text-blue-600" size={20} />
                <span>{clinic.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Phone className="text-blue-600" size={20} />
                <span>{clinic.phone}</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="text-blue-600" size={20} />
                <span>{clinic.hours}</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-bold text-blue-600 mb-4">Location Map</h3>
            <a
              href={`https://www.google.com/maps?q=${clinic.lat},${clinic.lng}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <iframe
                src={`https://www.google.com/maps/embed/v1/place?key=YOUR_GOOGLE_MAPS_API_KEY&q=${clinic.lat},${clinic.lng}`}
                width="100%"
                height="250"
                className="rounded-md"
                allowFullScreen
                loading="lazy"
                title="Google Map Location"
              ></iframe>
            </a>
          </div>
        </section>

        <section id="filters" className="bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold text-blue-600 mb-4">Filter Doctors</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <select
              value={filters.specialty}
              onChange={(e) => setFilters({ ...filters, specialty: e.target.value })}
              className="border rounded-lg p-2"
            >
              <option value="">All Specialties</option>
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            <select
              value={filters.day}
              onChange={(e) => setFilters({ ...filters, day: e.target.value })}
              className="border rounded-lg p-2"
            >
              <option value="">All Days</option>
              {days.map((day, index) => (
                <option key={index} value={day}>
                  {day}
                </option>
              ))}
            </select>
            <select
              value={filters.time}
              onChange={(e) => setFilters({ ...filters, time: e.target.value })}
              className="border rounded-lg p-2"
            >
              <option value="">All Times</option>
              {times.map((time, index) => (
                <option key={index} value={time}>
                  {time}
                </option>
              ))}
            </select>
          </div>
        </section>

        <section id="doctors">
          <h2 className="text-2xl font-bold text-blue-600 mb-6">Our Doctors</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {filteredDoctors.map((doctor, index) => (
              <div key={index} className="bg-white p-5 rounded-lg shadow-lg">
                <h3 className="text-lg font-bold text-blue-600 mb-2">{doctor.name}</h3>
                <p className="text-gray-600 text-base mb-2">{doctor.specialty}</p>
                <p className="flex items-center gap-2 text-gray-600 text-sm">
                  <Calendar className="text-blue-600" size={16} />
                  <span>{doctor.availableDays.join(", ")}</span>
                </p>
                <p className="flex items-center gap-2 text-gray-600 text-sm mb-4">
                  <Clock className="text-blue-600" size={16} />
                  <span>{doctor.availableTime}</span>
                </p>
                <button className="w-full bg-blue-600 text-white px-4 py-2 text-sm rounded-full hover:bg-blue-700 transition">
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}