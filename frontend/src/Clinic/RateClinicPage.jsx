"use client"

import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Star } from "lucide-react"
import clinics from "./ClinicData"

export default function RateClinicPage() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [clinic, setClinic] = useState(null)
  const [rating, setRating] = useState(0)
  const [hover, setHover] = useState(0)

  useEffect(() => {
    const foundClinic = clinics.find((c) => c.id === Number.parseInt(id))
    if (foundClinic) {
      setClinic(foundClinic)
    } else {
      navigate("/not-found")
    }
  }, [id, navigate])

  const handleRating = async (rate) => {
    setRating(rate)
    // Here you would typically send this rating to your backend
    // For now, we'll just show an alert
    alert(`You rated ${clinic.name} ${rate} stars!`)
    // After rating, navigate back to the clinic page
    navigate(`/clinic/${id}`)
  }

  if (!clinic) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-blue-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Rate {clinic.name}</h1>
        <p className="text-gray-600 mb-6">How would you rate your experience at {clinic.name}?</p>
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((star, index) => {
            index += 1
            return (
              <button
                type="button"
                key={index}
                className={`${index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"} text-3xl`}
                onClick={() => handleRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <Star fill="currentColor" />
              </button>
            )
          })}
        </div>
        <p className="text-center text-gray-600">
          {rating ? `You rated this clinic ${rating} stars` : "Click on a star to rate"}
        </p>
      </div>
    </div>
  )
}