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
              className="bg-white p-4 sm:p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center"
            >
              {/* Icon */}
              <div className="text-4xl sm:text-5xl text-blue-600 mb-3 sm:mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm sm:text-base text-gray-600">{feature.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

