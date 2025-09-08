import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="font-sans bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black bg-opacity-70 backdrop-blur-md z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Leo9 Clone
          </motion.div>

          {/* Links */}
          <div className="hidden md:flex space-x-8 text-lg">
            {["Home", "About", "Work", "Contact"].map((link, index) => (
              <motion.a
                key={index}
                href="#"
                whileHover={{ scale: 1.1 }}
                className="text-gray-300 hover:text-white transition"
              >
                {link}
              </motion.a>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-black bg-opacity-90 px-6 py-4 space-y-4"
          >
            {["Home", "About", "Work", "Contact"].map((link, index) => (
              <a
                key={index}
                href="#"
                className="block text-gray-300 hover:text-white transition"
              >
                {link}
              </a>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-purple-700 via-black to-indigo-900 px-6">
        {/* Left side */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-6 mt-20 md:mt-0"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            We Design{" "}
            <span className="text-purple-400">Experiences</span> That Inspire
          </h1>
          <p className="text-lg text-gray-300 max-w-md mx-auto md:mx-0">
            Crafting cutting-edge digital products with creativity, innovation,
            and technology.
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-800 rounded-xl text-white shadow-lg"
          >
            Get Started
          </motion.button>
        </motion.div>

        {/* Right side */}
        <motion.div
          className="flex-1 mt-10 md:mt-0"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="https://source.unsplash.com/600x600/?technology,design"
            alt="Hero Visual"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>
    </div>
  );
}

export default App;
