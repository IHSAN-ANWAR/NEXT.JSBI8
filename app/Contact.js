"use client";
import { motion } from "framer-motion";
import React from "react";

export default function ReserveTable() {
  return (
    <section className="bg-gradient-to-r from-[#182848] to-[#4b6cb7] min-h-screen flex items-center text-white">
      <div className="container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Heading & Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-yellow-300">
            Reserve a Table
          </h2>
          <p className="text-lg leading-relaxed">
            Book your spot in advance and enjoy a premium dining experience.
            Whether it’s a family dinner, date night or a special celebration,
            we’ll make it memorable for you.
          </p>
          <p className="text-lg leading-relaxed">
            Fill in your details below and let us take care of the rest.
          </p>
        </motion.div>

        {/* Right Side - Reservation Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="backdrop-blur-md shadow-2xl rounded-3xl p-10 w-full border border-white/30 bg-white/10"
        >
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Phone & Guests */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2 text-gray-200">
                  Phone Number
                </label>
                <input
                  type="tel"
                  placeholder="123-456-7890"
                  className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2 text-gray-200">
                  Guests
                </label>
                <select className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
                  {[1,2,3,4,5,6,7,8,9,10].map(num => (
                    <option key={num} className="text-black">
                      {num} {num === 1 ? "Guest" : "Guests"}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Date & Time */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2 text-gray-200">
                  Date
                </label>
                <input
                  type="date"
                  className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-2 text-gray-200">
                  Time
                </label>
                <select className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
                  <option className="text-black">11:00 AM</option>
                  <option className="text-black">12:00 PM</option>
                  <option className="text-black">1:00 PM</option>
                  <option className="text-black">2:00 PM</option>
                  <option className="text-black">5:00 PM</option>
                  <option className="text-black">6:00 PM</option>
                  <option className="text-black">7:00 PM</option>
                  <option className="text-black">8:00 PM</option>
                </select>
              </div>
            </div>

            {/* Occasion */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Occasion
              </label>
              <select className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black focus:outline-none focus:ring-2 focus:ring-yellow-400 transition">
                <option className="text-black">Birthday</option>
                <option className="text-black">Anniversary</option>
                <option className="text-black">Date Night</option>
                <option className="text-black">Family Dinner</option>
                <option className="text-black">Business Meeting</option>
                <option className="text-black">Other</option>
              </select>
            </div>

            {/* Special Requests */}
            <div>
              <label className="block text-sm font-medium mb-2 text-gray-200">
                Special Requests (Optional)
              </label>
              <textarea
                rows="3"
                placeholder="Any dietary restrictions or special requests..."
                className="w-full border border-gray-300/30 rounded-xl p-3 bg-white/20 text-black placeholder-gray-700 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition"
              />
            </div>

            {/* Submit Button */}
            <button
              type=""
              className="w-full border border-white px-6 py-3 rounded-lg font-semibold text-white hover:bg-white hover:text-black transition"
            >
              Reserve a Table
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
