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
  const [review, setReview] = useState("")

  useEffect(() => {
    const foundClinic = clinics.find((c) => c.id === Number.parseInt(id))
    if (foundClinic) {
      setClinic(foundClinic)
    } else {
      navigate("/not-found")
    }
  }, [id, navigate])

  const handleSubmit = async () => {
    if (rating === 0) {
      alert("Please select a rating before submitting.")
      return
    }
    
    // Here you would typically send this rating and review to your backend
    alert(`You rated ${clinic.name} ${rating} stars!\nReview: ${review}`)
    
    // After submission, navigate back to the clinic page
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
        
        {/* Star Rating */}
        <div className="flex justify-center mb-6">
          {[...Array(5)].map((_, index) => {
            index += 1
            return (
              <button
                type="button"
                key={index}
                className={`${index <= (hover || rating) ? "text-yellow-400" : "text-gray-300"} text-3xl`}
                onClick={() => setRating(index)}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
              >
                <Star fill="currentColor" />
              </button>
            )
          })}
        </div>
        
        {/* Review Input */}
        <textarea
          className="w-full p-2 border border-gray-300 rounded-md mb-4"
          rows="4"
          placeholder="Write your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
        
        {/* Submit Button */}
        <button
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700"
          onClick={handleSubmit}
        >
          Submit Review
        </button>
      </div>
    </div>
  )
}
