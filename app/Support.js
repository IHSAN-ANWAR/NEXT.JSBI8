"use client";
import { motion } from "framer-motion";
import React from "react";
import SupportForm from "./SupportForm";

const LostSection = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center overflow-hidden">
      {/* Background uses global gradient from globals.css */}

      {/* Subtle glowing blobs */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-3xl animate-pulse" />

      <div className="relative container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-12 items-center text-white py-16">
        {/* Image Side (left) */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="flex justify-center md:order-2"
        >
          <img
            src="/location.jpg"
            alt="Lost food or missing order"
            className="rounded-2xl shadow-2xl w-80 md:w-[700px]"
          />
        </motion.div>

        {/* Form Side (right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="space-y-6 md:order-1"
        >
          <h2 className="text-4xl md:text-5xl font-bold">Contact Support</h2>
          <p className="text-lg leading-relaxed text-gray-200">
            Experiencing an issue with your order? Fill out the form below and our team
            will reach out shortly.
          </p>

          <SupportForm />
        </motion.div>
      </div>
    </section>
  );
};

export default LostSection;
