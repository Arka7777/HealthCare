import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { Input } from "./ClinicAssets/input"
import { Card, CardContent } from "./ClinicAssets/card"
import { MapPin, Phone, Clock, Search, Star, Mic } from "lucide-react"
import clinics from "./ClinicData"

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371
  const dLat = (lat2 - lat1) * (Math.PI / 180)
  const dLon = (lon2 - lon1) * (Math.PI / 180)
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

function ClinicCard({ clinic, userLocation, onClick }) {
  const distance = userLocation
    ? calculateDistance(userLocation.lat, userLocation.lng, clinic.lat, clinic.lng).toFixed(2)
    : null
  return (
    <Card onClick={() => onClick(clinic)} className="cursor-pointer">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-1/3 min-w-[120px]">
            <img
              src={`/placeholder.svg?height=120&width=120&text=${encodeURIComponent(clinic.name[0])}`}
              alt={clinic.name}
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{clinic.name}</h3>
            <div className="space-y-1 text-sm mb-3">
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2 text-blue-500" /> {clinic.address}
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2 text-blue-500" /> {clinic.phone}
              </p>
              <p className="flex items-center">
                <Clock className="w-4 h-4 mr-2 text-blue-500" /> {clinic.hours}
              </p>
              <p className="flex items-center">
                <Star className="w-4 h-4 mr-2 text-yellow-500" fill="currentColor" /> {clinic.rating.toFixed(1)}
              </p>
              {distance && <p className="text-blue-600">Distance: {distance} km</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default function ClinicListPage() {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState("")
  const [userLocation, setUserLocation] = useState(null)
  const [showNearby, setShowNearby] = useState(false)
  const [language, setLanguage] = useState("en-US") // Default language: English

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude })
        },
        (error) => {
          console.error("Error getting user location:", error)
        },
      )
    }
  }, [])

  const handleClinicClick = (clinic) => {
    navigate(`/clinic/${clinic.id}`)
  }

  const handleVoiceSearch = () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)()
    recognition.lang = language // Set selected language
    recognition.start()
    
    recognition.onresult = (event) => {
      let spokenText = event.results[0][0].transcript.trim()
      if (spokenText.endsWith(".")) {
        spokenText = spokenText.slice(0, -1)
      }
      setSearchTerm(spokenText)
    }
  }

  const filteredClinics = clinics.filter(
    (clinic) =>
      (clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        clinic.address.toLowerCase().includes(searchTerm.toLowerCase())) &&
      (!showNearby ||
        (userLocation && calculateDistance(userLocation.lat, userLocation.lng, clinic.lat, clinic.lng) <= 5)),
  )

  const sortedClinics = filteredClinics.sort((a, b) => {
    const distanceA = userLocation
      ? calculateDistance(userLocation.lat, userLocation.lng, a.lat, a.lng)
      : Number.POSITIVE_INFINITY
    const distanceB = userLocation
      ? calculateDistance(userLocation.lat, userLocation.lng, b.lat, b.lng)
      : Number.POSITIVE_INFINITY
    return distanceA - distanceB
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Find a Clinic</h1>
        
        {/* Language selection dropdown */}
        <div className="mb-4">
          <label htmlFor="language" className="block text-sm font-medium text-gray-700">Select Language:</label>
          <select
            id="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="en-US">English</option>
            <option value="hi-IN">Hindi</option>
            {/* <option value="bn-BD">Bengali</option> */}
            <option value="es-ES">Spanish</option>
            <option value="fr-FR">French</option>
            {/* <option value="de-DE">German</option> */}
            {/* <option value="zh-CN">Chinese</option> */}
            <option value="ja-JP">Japanese</option>
          </select>
        </div>

        <div className="mb-8 relative flex items-center">
          <Search className="absolute left-3 text-blue-400" />
          <Input
            type="text"
            placeholder="Search clinics..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-12 py-2"
          />
          <button onClick={handleVoiceSearch} className="absolute right-3">
            <Mic className="w-5 h-5 text-blue-500" />
          </button>
        </div>
        
        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            id="showNearby"
            checked={showNearby}
            onChange={(e) => setShowNearby(e.target.checked)}
            className="mr-2"
          />
          <label htmlFor="showNearby">Show clinics within 5km</label>
        </div>
        
        <div className="space-y-4">
          {sortedClinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} userLocation={userLocation} onClick={handleClinicClick} />
          ))}
        </div>
      </div>
    </div>
  )
}
