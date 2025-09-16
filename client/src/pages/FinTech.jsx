import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaWallet,
  FaChartLine,
  FaMobileAlt,
  FaFingerprint,
} from "react-icons/fa";

const useCases = [
  {
    title: "Digital Wallets",
    description:
      "Create secure and scalable mobile wallets for payments, loyalty, and more.",
  },
  {
    title: "Payment Gateways",
    description:
      "Integrate seamless multi-currency payment systems for global reach.",
  },
  {
    title: "Robo-Advisors",
    description:
      "Automate financial planning with intelligent investment bots.",
  },
  {
    title: "Banking-as-a-Service",
    description:
      "Launch your own neobank with core banking and compliance features.",
  },
  {
    title: "Lending Platforms",
    description: "Build P2P or institutional loan systems with credit scoring.",
  },
  {
    title: "Fraud Detection Systems",
    description:
      "Protect users with AI-based transaction monitoring and alerts.",
  },
];

const reasons = [
  {
    icon: <FaWallet className="text-2xl text-yellow-400" />,
    title: "FinTech Focused",
    desc: "We specialize in financial product design, compliance, and scalability.",
  },
  {
    icon: <FaChartLine className="text-2xl text-green-400" />,
    title: "Real-Time Insights",
    desc: "Dashboards and analytics for tracking transactions and growth live.",
  },
  {
    icon: <FaMobileAlt className="text-2xl text-blue-500" />,
    title: "Mobile First",
    desc: "Slick, secure, and responsive FinTech apps users love to use.",
  },
  {
    icon: <FaFingerprint className="text-2xl text-pink-500" />,
    title: "Secure by Design",
    desc: "Encrypted flows, biometric logins, and GDPR/PCI-DSS compliance.",
  },
];

export default function FinTech() {
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
            Building the Future of Finance
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Launch world-class FinTech apps with CYBKNOW — from digital wallets
            and neobanks to AI-driven investment platforms. Scalable, secure,
            and user-first.
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
            src="https://assets9.lottiefiles.com/packages/lf20_qp1q7mct.json"
            style={{ height: 320, width: 320, margin: "0 auto" }}
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
          FinTech Use Cases
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
          Why Choose CYBKNOW for FinTech?
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
