const doctors = [
  {
    id: 1,
    name: "Dr. John Doe",
    specialization: "Cardiologist",
    rating: 4.5,
    availability: {
      Monday: [
        { clinic: "Heart Care Center", time: "9:00 AM - 1:00 PM", location: { lat: 40.7128, lon: -74.006 } },
        { clinic: "City Hospital", time: "3:00 PM - 6:00 PM", location: { lat: 40.7589, lon: -73.9851 } },
      ],
      Tuesday: [{ clinic: "Medical Center", time: "10:00 AM - 2:00 PM", location: { lat: 40.7484, lon: -73.9857 } }],
      Wednesday: [
        { clinic: "Cardio Clinic", time: "9:00 AM - 12:00 PM", location: { lat: 40.7549, lon: -73.984 } },
        { clinic: "City Hospital", time: "2:00 PM - 6:00 PM", location: { lat: 40.7589, lon: -73.9851 } },
      ],
      Friday: [{ clinic: "Heart Institute", time: "11:00 AM - 3:00 PM", location: { lat: 40.7185, lon: -74.0025 } }],
    },
  },
  {
    id: 2,
    name: "Dr. Jane Smith",
    specialization: "Dermatologist",
    rating: 4.8,
    availability: {
      Monday: [{ clinic: "Skin Care Clinic", time: "9:00 AM - 1:00 PM", location: { lat: 40.7306, lon: -73.9352 } }],
      Tuesday: [{ clinic: "Beauty Med", time: "10:00 AM - 3:00 PM", location: { lat: 40.7484, lon: -73.9857 } }],
      Thursday: [{ clinic: "Derma Center", time: "2:00 PM - 6:00 PM", location: { lat: 40.7549, lon: -73.984 } }],
      Friday: [
        { clinic: "City Hospital", time: "9:00 AM - 12:00 PM", location: { lat: 40.7589, lon: -73.9851 } },
        { clinic: "Skin Care Clinic", time: "2:00 PM - 5:00 PM", location: { lat: 40.7306, lon: -73.9352 } },
      ],
    },
  },
  // ... Add more doctors with similar availability structure
];

export default doctors;
