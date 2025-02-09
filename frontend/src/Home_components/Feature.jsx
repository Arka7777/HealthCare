import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Feature() {
  const featuresTop = [
    {
      icon: "👩‍⚕️",
      title: "Find Doctors",
      description: "Search for specialists near you and book appointments instantly.",
      link: "/find-doctors",
    },
    {
      icon: "💊",
      title: "Search Medicines",
      description: "Locate medicines nearby, compare availability, and prices.",
      link: "/search-medicines",
    },
    {
      icon: "🏥",
      title: "Discover Clinics",
      description: "Browse clinics, view schedules, and get directions easily.",
      link: "/discover-clinics",
    },
  ];

  const featuresBottom = [
    {
      icon: "📊",
      title: "Predict Sales",
      description: "Forecast medicine demand and optimize inventory.",
      link: "/med_sale_ForeCasting",
    },
    {
      icon: "🔬",
      title: "Medicine Prediction",
      description: "Get medicine recommendations based on symptoms.",
      link: "/medirecom",
    },
    {
      icon: "🩺",
      title: "Doctor Prediction",
      description: "Find the best doctor based on symptoms and history.",
      link: "/drrecom",
    },
  ];

  return (
    <div className="bg-white min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Header */}
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          Smarter Healthcare Solutions 🚀
        </motion.h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12">
          Find doctors, medicines, and clinics—all in one place.
        </p>

        {/* Top Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresTop.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={feature.link}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-gray-200"
              >
                <motion.div 
                  className="text-5xl"
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mt-3 text-gray-800">{feature.title}</h3>
                <p className="text-base text-gray-600 mt-2 text-center">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Animated Hero Section */}
        <motion.div
          className="mt-16 bg-gradient-to-r from-blue-500 to-purple-600 text-white py-10 px-8 rounded-2xl shadow-2xl max-w-4xl mx-auto text-center relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
        >
          <motion.h3
            className="text-2xl sm:text-3xl font-bold mb-3"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 1.8 }}
          >
            🔥 Smarter Predictions for Better Health!
          </motion.h3>
          <p className="text-lg sm:text-xl">
            Stay ahead with insights on medicine demand, doctor recommendations, and prescriptions.
          </p>

          {/* Glowing Animated Effect */}
          <motion.div
            className="absolute top-0 left-0 w-full h-full bg-blue-400 opacity-20 blur-3xl transform scale-150"
            animate={{ opacity: [0.2, 0.4, 0.2] }}
            transition={{ repeat: Infinity, duration: 3 }}
          />
        </motion.div>

        {/* Bottom Feature Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuresBottom.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, boxShadow: "0px 10px 30px rgba(0,0,0,0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <Link
                to={feature.link}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col items-center border border-gray-200"
              >
                <motion.div 
                  className="text-5xl"
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 1.5 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold mt-3 text-gray-800">{feature.title}</h3>
                <p className="text-base text-gray-600 mt-2 text-center">{feature.description}</p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
