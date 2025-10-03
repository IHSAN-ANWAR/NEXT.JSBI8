"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const Menu = () => {
  const menuItems = [
    {
      id: 1,
      name: "Classic Beef Burger",
      price: "$8.99",
      desc: "Juicy beef patty with melted cheese, lettuce, tomato, and our special house sauce.",
      img: "/burger2.jpg",
    },
    {
      id: 2,
      name: "Fries",
      price: "$3.49",
      desc: "Crispy golden fries served hot and lightly salted.",
      img: "/fries.jpg",
    },
    {
      id: 3,
      name: "Grilled Chicken Plate",
      price: "$12.99",
      desc: "Tender grilled chicken served with fresh salad and a side of fries.",
      img: "/menu1.jpg",
    },
    {
      id: 4,
      name: "Banana Shake",
      price: "$4.99",
      desc: "Refreshing banana shake blended with creamy milk and ice.",
      img: "/banana.jpg",
    },
    {
      id: 5,
      name: "Coffee",
      price: "$2.99",
      desc: "Freshly brewed hot coffee with a rich aroma and bold flavor.",
      img: "/coffee.jpg",
    },
    {
      id: 6,
      name: "Mango Shake",
      price: "$5.49",
      desc: "Delicious mango shake made with ripe mangoes and chilled milk.",
      img: "/mango.jpg",
    },
  ];

  return (
    <section className="relative min-h-screen py-16 px-6 lg:px-20" id="menu">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[#182848] to-black" />
      <div className="absolute -top-32 left-10 w-[400px] h-[400px] bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl animate-pulse" />

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
        {menuItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
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
              <button className="w-full border border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition">
                Order
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
