import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { Input } from "./ClinicAssets/input";
import { Button } from "./ClinicAssets/botton";
import { Card, CardContent } from "./ClinicAssets/card";
import { MapPin, Phone, Clock, Search } from "lucide-react";

function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

const fetchClinics = async () => {
  return [
    { id: 1, name: "Sunshine Medical Center", address: "123 Main St", lat: 40.7128, lng: -74.006, phone: "(555) 123-4567", hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-sun: 9:00 AM - 4:00 PM" },
    { id: 2, name: "Evergreen Health Clinic", address: "456 Elm St", lat: 40.7282, lng: -73.7949, phone: "(555) 987-6543", hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-sun: 9:00 AM - 5:00 PM" },
    { id: 3, name: "Oakwood Family Practice", address: "789 Oak St", lat: 22.7489, lng: 88.968, phone: "(555) 246-8102", hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-Sun: 9:00 AM - 6:00 PM" },
  ];
};

function ClinicCard({ clinic, userLocation, onClick }) {
  const distance = userLocation ? calculateDistance(userLocation.lat, userLocation.lng, clinic.lat, clinic.lng).toFixed(2) : null;
  return (
    <Card onClick={() => onClick(clinic)} className="cursor-pointer">
      <CardContent className="p-0">
        <div className="flex">
          <div className="w-1/3 min-w-[120px]">

            {/* <img src={placeholder.svg?height=120&width=120&text=${encodeURIComponent(clinic.name[0])} alt={clinic.name} className="object-cover w-full h-full" }/ > */}
          </div>
          <div className="w-2/3 p-4">
            <h3 className="text-xl font-semibold text-blue-800 mb-2">{clinic.name}</h3>
            <div className="space-y-1 text-sm mb-3">
              <p className="flex items-center"><MapPin className="w-4 h-4 mr-2 text-blue-500" /> {clinic.address}</p>
              <p className="flex items-center"><Phone className="w-4 h-4 mr-2 text-blue-500" /> {clinic.phone}</p>
              <p className="flex items-center"><Clock className="w-4 h-4 mr-2 text-blue-500" /> {clinic.hours}</p>
              {distance && <p className="text-blue-600">Distance: {distance} km</p>}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ClinicListPage() {
  const navigate = useNavigate();
  const [clinics, setClinics] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [userLocation, setUserLocation] = useState(null);

  useEffect(() => {
    const loadClinics = async () => {
      const fetchedClinics = await fetchClinics();
      setClinics(fetchedClinics);
    };
    loadClinics();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserLocation({ lat: position.coords.latitude, lng: position.coords.longitude });
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, []);

  const handleClinicClick = (clinic) => {
    navigate("/clinic-page", { state: { clinic } });
  };

  const filteredClinics = clinics.filter((clinic) =>
    clinic.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    clinic.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedClinics = filteredClinics.sort((a, b) => {
    const distanceA = userLocation ? calculateDistance(userLocation.lat, userLocation.lng, a.lat, a.lng) : Infinity;
    const distanceB = userLocation ? calculateDistance(userLocation.lat, userLocation.lng, b.lat, b.lng) : Infinity;
    return distanceA - distanceB;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto p-4 max-w-2xl">
        <h1 className="text-4xl font-bold mb-8 text-blue-800 text-center">Find a Clinic</h1>
        <div className="mb-8 relative">
          <Input type="text" placeholder="Search clinics..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-2" />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-400" />
        </div>
        <div className="space-y-4">
          {filteredClinics.map((clinic) => (
            <ClinicCard key={clinic.id} clinic={clinic} userLocation={userLocation} onClick={handleClinicClick} />
          ))}
        </div>
      </div>
    </div>
  );
}