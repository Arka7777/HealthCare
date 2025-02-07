// clinicsData.js

const clinics = [
    {
        id: 1,
        name: "Sunshine Medical Center",
        address: "123 Main St",
        lat: 40.7128,
        lng: -74.006,
        phone: "(555) 123-4567",
        hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-Sun: 9:00 AM - 4:00 PM",
        doctors: [
            {
                id: 1,
                name: "Dr. Emily Johnson",
                specialty: "General Practitioner",
                availableDays: ["Mon", "Wed", "Fri"],
                availableTime: "9:00 AM - 5:00 PM",
            },
            {
                id: 2,
                name: "Dr. Michael Lee",
                specialty: "Pediatrician",
                availableDays: ["Tue", "Thu"],
                availableTime: "10:00 AM - 6:00 PM",
            },
        ],
    },
    {
        id: 3,
        name: "Medical Center",
        address: "12 St",
        lat: 0.7128,
        lng: -7.006,
        phone: "(555) 123-4567",
        hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-Sun: 9:00 AM - 4:00 PM",
        doctors: [
            {
                id: 1,
                name: "Dr. Emily Johnson",
                specialty: "General Practitioner",
                availableDays: ["Mon", "Wed", "Fri"],
                availableTime: "9:00 AM - 5:00 PM",
            },
            {
                id: 2,
                name: "Dr. Michael Lee",
                specialty: "Pediatrician",
                availableDays: ["Tue", "Thu"],
                availableTime: "10:00 AM - 6:00 PM",
            },
        ],
    },
    {
        id: 2,
        name: "Evergreen Health Clinic",
        address: "456 Elm St",
        lat: 40.7282,
        lng: -73.7949,
        phone: "(555) 987-6543",
        hours: "Mon-Fri: 8:00 AM - 8:00 PM, Sat-Sun: 9:00 AM - 5:00 PM",
        doctors: [
            {
                id: 3,
                name: "Dr. Sarah Patel",
                specialty: "Dermatologist",
                availableDays: ["Mon", "Thu", "Sat"],
                availableTime: "11:00 AM - 7:00 PM",
            },
            {
                id: 4,
                name: "Dr. David Chen",
                specialty: "Cardiologist",
                availableDays: ["Mon", "Wed", "Fri"],
                availableTime: "8:00 AM - 4:00 PM",
            },
            {
                id: 1,
                name: "Dr. Emily Johnson",
                specialty: "General Practitioner",
                availableDays: ["Tue", "Thu"],
                availableTime: "1:00 PM - 5:00 PM",
            },
        ],
    },
];

export default clinics;
