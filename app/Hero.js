"use client";
import { motion } from "framer-motion";
import React from "react";

const Hero = () => {
  return (
    <section className="hero-bg m-auto h-screen flex items-center relative overflow-hidden bg-gray-900">
      <div className="container relative z-10 mx-auto px-6 text-center lg:text-left">
        
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-bold text-white"
        >
          Order the Food You{" "}
          <motion.span
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8, type: "spring" }}
            className="text-yellow-400 inline-block"
          >
            Love
          </motion.span>
        </motion.h1>

        {/* Paragraph */}
        <motion.p
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="mt-4 text-lg md:text-xl text-gray-300 leading-relaxed"
        >
          Delicious meals delivered to your doorstep. Explore our menu and taste the magic.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 flex justify-center lg:justify-start gap-4"
        >
          {/* Button - same as Header Login */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            Order
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            View Menu
          </motion.button>
        </motion.div>
      </div>

      {/* Optional Image */}
      <motion.img
        src="/burger2.jpg"
        alt="Delicious food"
        initial={{ opacity: 0, x: 200, rotate: 10 }}
        animate={{ opacity: 1, x: 0, rotate: 0 }}
        transition={{ delay: 0.8, duration: 1, type: "spring" }}
        className="hidden lg:block absolute right-10 bottom-10 w-[400px] rounded-3xl shadow-2xl"
      />
    </section>
  );
};

export default Hero;
