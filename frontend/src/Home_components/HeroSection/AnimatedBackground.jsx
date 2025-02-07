import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-blue-700 via-blue-600 to-blue-800"
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-500 to-blue-600 opacity-50"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-800 to-blue-900 opacity-40"
        animate={{
          rotate: [0, -360],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          repeatType: 'reverse',
          ease: 'linear',
        }}
      />
      <div className="absolute inset-0 bg-blue-900 opacity-20" />
    </div>
  );
};

export default AnimatedBackground;