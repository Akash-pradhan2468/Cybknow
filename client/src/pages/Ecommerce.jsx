import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaShoppingCart,
  FaTruckMoving,
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

const ecommerceSolutions = [
  {
    title: "Online Storefronts",
    description:
      "Design and launch responsive, scalable, and SEO-optimized online stores.",
  },
  {
    title: "Multi-Vendor Platforms",
    description:
      "Enable third-party sellers to join your platform with real-time dashboards.",
  },
  {
    title: "Smart Inventory",
    description:
      "Automate inventory updates, stock alerts, and warehouse syncing.",
  },
  {
    title: "Subscription Commerce",
    description:
      "Launch subscription models for consumables, digital goods, and more.",
  },
  {
    title: "Logistics Integration",
    description:
      "Connect with delivery APIs, order tracking systems, and route management.",
  },
  {
    title: "AI Product Recommendations",
    description:
      "Increase sales using AI-driven suggestions and dynamic pricing.",
  },
];

const ecommerceBenefits = [
  {
    icon: <FaShoppingCart className="text-2xl text-yellow-400" />,
    title: "Conversion-Focused Design",
    desc: "We build beautiful, fast storefronts optimized to convert visitors into buyers.",
  },
  {
    icon: <FaTruckMoving className="text-2xl text-green-400" />,
    title: "End-to-End Logistics",
    desc: "From cart to customer door — we integrate tracking, delivery, and inventory.",
  },
  {
    icon: <FaHeadset className="text-2xl text-blue-500" />,
    title: "Customer Support Tools",
    desc: "Chatbots, help desks, and CRM systems to support your buyers 24/7.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-pink-500" />,
    title: "Security & Compliance",
    desc: "GDPR-ready, PCI-DSS payment secure, and bot-protected checkout flows.",
  },
];

export default function Ecommerce() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0D0128] via-[#180636] to-[#0D0128] min-h-screen text-white py-20 px-6 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
      >
        {/* Left Content */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Powering the Next Generation of eCommerce
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Build high-performing online stores, subscription systems, and
            intelligent checkout experiences with CYBKNOW — fast, flexible, and
            future-proof.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Launch Your Store Today
          </motion.a>
        </div>

        {/* Right Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_pprxh53t.json"
            style={{ height: 340, width: 340 }}
          />
        </motion.div>
      </motion.div>

      {/* Ecommerce Solutions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          eCommerce Solutions We Offer
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ecommerceSolutions.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-purple-400 shadow-md hover:shadow-[0_0_20px_rgba(128,90,213,0.6)] transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-gray-300 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Why CYBKNOW for Your eCommerce Project?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ecommerceBenefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-purple-400 hover:shadow-[0_0_20px_rgba(128,90,213,0.6)] backdrop-blur-md transition"
            >
              <div className="mb-3">{benefit.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {benefit.title}
              </h4>
              <p className="text-gray-300 text-sm">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
