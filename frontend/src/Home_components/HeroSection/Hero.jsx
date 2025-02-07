import React from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import AnimatedBackground from "./AnimatedBackground"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedBackground />

      <motion.div
        className="relative z-10 text-white text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Find Doctors, Medicines, and Clinics in One Place!
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Your health, our priority. Simplifying healthcare solutions for you.
        </motion.p>

        {/* <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <input
            type="text"
            placeholder="Search for Doctors, Clinics, or Medicines..."
            className="w-full sm:w-2/3 lg:w-1/2 px-6 py-4 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-400 text-lg bg-white bg-opacity-90 backdrop-blur-sm"
          />
          <motion.button
            className="mt-4 sm:mt-0 bg-white bg-opacity-90 backdrop-blur-sm text-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 text-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Search
          </motion.button>
        </motion.div> */}

        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <Link to="/login" className="w-full sm:w-auto">
            <motion.button
              className="w-full sm:w-auto bg-white bg-opacity-90 backdrop-blur-sm text-blue-800 font-semibold px-8 py-4 rounded-full shadow-lg hover:bg-opacity-100 transition duration-300 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
          </Link>
          <Link to="/about" className="w-full sm:w-auto">
            <motion.button
              className="w-full bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white hover:bg-opacity-10 transition duration-300 text-lg backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 360],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-96 h-96 bg-white opacity-10 rounded-full translate-x-1/2 translate-y-1/2"
        animate={{
          scale: [1, 1.3, 1],
          rotate: [0, -360],
        }}
        transition={{
          duration: 25,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          ease: "linear",
        }}
      />
    </div>
  )
}