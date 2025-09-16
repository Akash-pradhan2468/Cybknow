import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaMicrochip, FaWifi, FaMobileAlt, FaCogs } from "react-icons/fa";

// Manual SVG IoT Device network animation component
const IoTManualAnimation = () => {
  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="mx-auto"
    >
      {/* Central device */}
      <motion.rect
        x="24"
        y="24"
        width="16"
        height="16"
        rx="3"
        fill="#2563EB"
        stroke="#93C5FD"
        strokeWidth="2"
        initial={{ scale: 0.9 }}
        animate={{ scale: [0.9, 1.1, 0.9] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      {/* Connection lines */}
      <motion.line
        x1="32"
        y1="24"
        x2="10"
        y2="8"
        stroke="#60A5FA"
        strokeWidth="1.5"
        initial={{ strokeDashoffset: 20 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3 }}
      />
      <motion.line
        x1="32"
        y1="24"
        x2="54"
        y2="8"
        stroke="#60A5FA"
        strokeWidth="1.5"
        initial={{ strokeDashoffset: 20 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, delay: 0.5 }}
      />
      <motion.line
        x1="32"
        y1="40"
        x2="10"
        y2="56"
        stroke="#60A5FA"
        strokeWidth="1.5"
        initial={{ strokeDashoffset: 20 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1 }}
      />
      <motion.line
        x1="32"
        y1="40"
        x2="54"
        y2="56"
        stroke="#60A5FA"
        strokeWidth="1.5"
        initial={{ strokeDashoffset: 20 }}
        animate={{ strokeDashoffset: 0 }}
        transition={{ repeat: Infinity, repeatType: "reverse", duration: 3, delay: 1.5 }}
      />
      {/* Other devices */}
      <motion.circle
        cx="10"
        cy="8"
        r="6"
        fill="#3B82F6"
        stroke="#2563EB"
        strokeWidth="1"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
      />
      <motion.circle
        cx="54"
        cy="8"
        r="6"
        fill="#3B82F6"
        stroke="#2563EB"
        strokeWidth="1"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.circle
        cx="10"
        cy="56"
        r="6"
        fill="#3B82F6"
        stroke="#2563EB"
        strokeWidth="1"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1 }}
      />
      <motion.circle
        cx="54"
        cy="56"
        r="6"
        fill="#3B82F6"
        stroke="#2563EB"
        strokeWidth="1"
        initial={{ scale: 0.8 }}
        animate={{ scale: [0.8, 1, 0.8] }}
        transition={{ repeat: Infinity, duration: 3, ease: "easeInOut", delay: 1.5 }}
      />
    </svg>
  );
};

const useCases = [
  {
    title: "Smart Home Automation",
    description:
      "Control lighting, climate, entertainment, and security remotely for a connected home experience.",
  },
  {
    title: "Industrial IoT",
    description:
      "Monitor machinery and optimize manufacturing with sensor-based data and real-time insights.",
  },
  {
    title: "Healthcare IoT",
    description:
      "Use wearables and remote monitoring devices to track patient health metrics continuously.",
  },
  {
    title: "Connected Vehicles",
    description:
      "Enable vehicle-to-everything (V2X) communication for safer, smarter transportation solutions.",
  },
  {
    title: "Smart Agriculture",
    description:
      "Implement IoT sensors to monitor soil, weather, and crop health for precision farming.",
  },
  {
    title: "Asset Tracking",
    description:
      "Real-time GPS and sensor-based tracking of goods and equipment to improve operational efficiency.",
  },
];

const reasons = [
  {
    icon: <FaMicrochip className="text-2xl text-blue-500" />,
    title: "Cutting-Edge Technology",
    desc: "Leveraging latest IoT protocols, edge computing, and AI for smart, scalable solutions.",
  },
  {
    icon: <FaWifi className="text-2xl text-purple-400" />,
    title: "Seamless Connectivity",
    desc: "Robust networking architectures ensuring reliable device communication and data transfer.",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-pink-400" />,
    title: "Cross-Platform Support",
    desc: "Apps and dashboards optimized for all devices providing real-time control and monitoring.",
  },
  {
    icon: <FaCogs className="text-2xl text-yellow-400" />,
    title: "End-to-End Integration",
    desc: "From hardware to cloud to analytics — complete IoT ecosystems tailored for your use case.",
  },
];

export default function IoTSmartSolutions() {
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
        {/* Left Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Innovative IoT & Smart Solutions for a Connected Future
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            CYBKNOW delivers cutting-edge IoT platforms empowering businesses to transform operations, increase efficiency, and enhance user experiences — from smart homes to industrial automation.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-purple-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Explore Our Solutions
          </motion.a>
        </div>

        {/* Right Manual SVG Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <IoTManualAnimation />
        </motion.div>
      </motion.div>

      {/* Use Cases Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          IoT & Smart Solutions Use Cases
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-blue-400 shadow-md hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-300 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Why Choose CYBKNOW for IoT & Smart Solutions?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-blue-400 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] backdrop-blur-md transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
