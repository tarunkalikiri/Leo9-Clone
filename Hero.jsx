import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-purple-600 to-indigo-700">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-white"
      >
        We Design Experiences 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-6 text-lg md:text-2xl text-gray-200 max-w-2xl"
      >
        Creative, clean, and professional websites that help your brand shine.
      </motion.p>

      <motion.button
        whileHover={{ scale: 1.1 }}
        className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold shadow-md hover:bg-yellow-300"
      >
        Get Started
      </motion.button>
    </section>
  );
}

export default Hero;
