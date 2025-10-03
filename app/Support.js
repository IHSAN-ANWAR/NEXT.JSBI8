"use client";
import { motion } from "framer-motion";
import React from "react";

const LostSection = () => {
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">
      {/* Background gradient with glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-[#182848] to-gray-900" />

      {/* Subtle glowing blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center text-white">
        
        {/* Image Side (now left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center"
        >
          <img
            src="/location.jpg"
            alt="Lost food or missing order"
            className="rounded-2xl shadow-2xl w-80 md:w-[700px]"
          />
        </motion.div>

        {/* Text Side (now right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            Lost Something?
          </h2>
          <p className="text-lg leading-relaxed text-gray-200">
            We understand that sometimes things go missing. Whether it’s a misplaced 
            order or an issue with your delivery, we’re here to help you track it down.
          </p>
          <p className="text-lg leading-relaxed text-gray-200">
            Our support team is available to quickly resolve issues and make sure your 
            experience with us is always smooth and satisfying.
          </p>
          <button className="text-white border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default LostSection;
