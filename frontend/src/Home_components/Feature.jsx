import { Link } from "react-router-dom"

export default function Feature() {
  const features = [
    {
      icon: "👩‍⚕️",
      title: "Find Doctors",
      description: "Search for specialists near you with ease and book appointments instantly.",
      link: "/find-doctors",
    },
    {
      icon: "💊",
      title: "Search Medicines",
      description: "Locate medicines in nearby stores and compare availability and prices.",
      link: "/search-medicines",
    },
    {
      icon: "🏥",
      title: "Discover Clinics",
      description: "Browse clinics, view schedules, and get directions with a click.",
      link: "/discover-clinics",
    },
    {
      icon: "📊",
      title: "Forecasting",
      description: "Predict future medicine demands and optimize inventory management.",
      link: "/med_sale_ForeCasting",
    },
    {
      icon: "🔬",
      title: "Medicine Prediction",
      description: "Get AI-powered medicine recommendations based on symptoms and history.",
      link: "/medirecom",
    },
    {
      icon: "🩺",
      title: "Doctor Prediction",
      description: "Find the best doctor based on symptoms, history, and AI analysis.",
      link: "/drrecom",
    },
  ]

  return (
    <div className="bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">
          Features That Simplify Your Healthcare Journey
        </h2>
        <p className="text-base sm:text-lg text-gray-600 mb-8 sm:mb-12">
          Explore all the tools you need to make informed healthcare decisions.
        </p>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <Link
              to={feature.link}
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center border border-gray-200 hover:border-blue-500"
            >
              {/* Icon */}
              <div className="text-5xl text-blue-600 mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-base text-gray-600 text-center">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

