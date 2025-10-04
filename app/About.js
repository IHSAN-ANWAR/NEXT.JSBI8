"use client";
import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";

const About = () => {
  const [expanded, setExpanded] = useState(false);
  return (
    <section className="relative h-screen w-full flex items-center overflow-hidden">

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
          <AnimatePresence initial={false}>
            {expanded && (
              <motion.div
                key="about-more"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <div className="mt-4 space-y-4 text-gray-300">
                  <p>
                    Since day one, our mission has been simple: craft memorable meals with
                    honest ingredients and warm hospitality. We partner with local suppliers
                    to bring you fresh produce and sustainable proteins.
                  </p>
                  <p>
                    Our kitchen blends classic techniques with modern flavors. Whether it’s a
                    quick lunch or a family dinner, we’ve designed our menu to have something
                    for every taste and occasion.
                  </p>
                  <p>
                    Have feedback or an idea for a new dish? We’d love to hear it. Your voice helps
                    us continuously improve and innovate.
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="pt-2">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="bg-white text-black px-6 py-3 rounded-lg font-semibold hover:bg-transparent hover:text-white hover:border hover:border-white transition cursor-pointer"
              aria-expanded={expanded}
            >
              {expanded ? "Show Less" : "Learn More"}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
