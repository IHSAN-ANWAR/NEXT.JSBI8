"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { menuItems } from "./menuData";

const Menu = () => {
  return (
    <section className="relative min-h-screen py-16 px-6 lg:px-20" id="menu">
      {/* Background uses global gradient from globals.css */}

      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="relative text-4xl font-bold text-center mb-12 text-rose-400"
      >
        🍴 Our Menu
      </motion.h2>

      {/* Menu Grid */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {menuItems.map((item, idx) => {
          const fromRight = idx < 3; // first row
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: fromRight ? 60 : -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.05 * (idx % 3) }}
              viewport={{ once: true, amount: 0.3 }}
              className="rounded-2xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-3 overflow-hidden flex flex-col"
            >
            {/* Image */}
            <div className="relative w-full h-72">
              <Image
                src={item.img}
                alt={item.name}
                fill
                className="object-cover rounded-t-2xl"
                priority={item.id <= 3}
              />
            </div>

            {/* Content */}
            <div className="p-6 bg-gradient-to-b from-gray-900 to-gray-800 flex flex-col flex-1">
              <h3 className="text-2xl font-semibold text-white">{item.name}</h3>
              <p className="text-gray-300 mt-2 flex-1">{item.desc}</p>
              <p className="text-lg font-bold mt-3 mb-2 text-rose-400">
                {item.price}
              </p>

              {/* Button */}
              <button
                className="w-full border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition"
                onClick={() => {
                  window.dispatchEvent(new CustomEvent('open-order-modal', { detail: { itemId: item.id } }));
                }}
              >
                Order
              </button>
            </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Menu;
