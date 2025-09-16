import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaLock, FaBolt, FaRobot, FaHeartbeat } from "react-icons/fa";

const useCases = [
  {
    title: "Telemedicine Apps",
    description:
      "Enable remote consultations with doctors through secure video and chat.",
  },
  {
    title: "EHR Systems",
    description: "Manage electronic health records with compliance and ease.",
  },
  {
    title: "Health Monitoring Devices",
    description: "IoT-based wearables for real-time patient vitals and alerts.",
  },
  {
    title: "Pharmacy Management",
    description:
      "Digital inventory, prescription tracking, and medication delivery.",
  },
  {
    title: "AI Diagnosis Assist",
    description:
      "Use AI to help practitioners with faster and more accurate diagnostics.",
  },
  {
    title: "Patient Engagement Portals",
    description:
      "Empower patients with access to records, bookings, and prescriptions.",
  },
];

const reasons = [
  {
    icon: <FaLock className="text-2xl text-blue-500" />,
    title: "HIPAA & GDPR Compliant",
    desc: "We prioritize data security & compliance with all global standards.",
  },
  {
    icon: <FaHeartbeat className="text-2xl text-pink-400" />,
    title: "Domain Expertise",
    desc: "Years of experience delivering healthcare tech across hospitals & startups.",
  },
  {
    icon: <FaBolt className="text-2xl text-yellow-400" />,
    title: "Fast Delivery",
    desc: "Agile development and scalable infrastructure for rapid go-to-market.",
  },
  {
    icon: <FaRobot className="text-2xl text-green-400" />,
    title: "AI & IoT Integrated",
    desc: "Smart devices and AI-driven decisions make your platform future-ready.",
  },
];

export default function HealthTech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0D0128] via-[#180636] to-[#0D0128] min-h-screen text-white py-20 px-6">
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
            Transforming Healthcare Digitally
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Build smart, secure, and scalable HealthTech solutions for
            hospitals, clinics, and startups. From telemedicine to IoT wearables – we've got you covered.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
             Get Started with Us
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
            src="https://assets10.lottiefiles.com/packages/lf20_tutvdkg0.json"
            style={{ height: 320, width: 320, margin: "0 auto" }}
          />
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
          HealthTech Use Cases
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-purple-400 shadow-md hover:shadow-[0_0_20px_rgba(128,90,213,0.6)] transition"
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
          Why Choose CYBKNOW for HealthTech?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-purple-400 hover:shadow-[0_0_20px_rgba(128,90,213,0.6)]  backdrop-blur-md transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">{item.title}</h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
