"use client";
import { motion } from "framer-motion";
import React from "react";

const About = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Dark gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-[#182848] to-black" />

      {/* Glow blobs for depth */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* Image side */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/home.jpg"
            alt="About our food"
            className="rounded-2xl shadow-2xl w-80 md:w-[800px]"
          />
        </motion.div>

        {/* Text side */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About Us
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            We are passionate about delivering fresh, delicious meals straight
            to your doorstep. Our chefs use high-quality ingredients to ensure
            every bite is full of flavor and love.
          </p>
          <p className="text-lg leading-relaxed text-gray-300">
            Whether you’re craving a quick snack or a full-course meal, we’ve
            got something for everyone. With fast delivery and mouthwatering
            dishes, your happiness is just one order away.
          </p>
          <button className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border hover:border-white transition cursor-pointer">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
