import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

import {
  FaTimesCircle,
  FaCloud,
  FaServer,
  FaLock,
  FaDatabase,
  FaNetworkWired,
  FaShieldAlt,
  FaSyncAlt,
  FaCogs,
  FaCodeBranch,
  FaChartLine,
  FaUser,
  FaEnvelope,
} from "react-icons/fa";

const features = [
  {
    title: "Cloud Infrastructure",
    icon: <FaServer />,
    description:
      "Scalable, high-performance cloud infrastructure tailored to your needs.",
  },
  {
    title: "Data Security",
    icon: <FaShieldAlt />,
    description:
      "Advanced encryption and access controls to protect sensitive information.",
  },
  {
    title: "Database Management",
    icon: <FaDatabase />,
    description:
      "Reliable, high-speed databases with backup and recovery solutions.",
  },
  {
    title: "Cloud Networking",
    icon: <FaNetworkWired />,
    description:
      "High-availability networking for seamless cloud connectivity.",
  },
  {
    title: "Disaster Recovery",
    icon: <FaSyncAlt />,
    description:
      "Automated failover and disaster recovery for business continuity.",
  },
  {
    title: "DevOps Integration",
    icon: <FaCodeBranch />,
    description: "Streamlined CI/CD pipelines for faster cloud deployments.",
  },
  {
    title: "AI & Analytics",
    icon: <FaChartLine />,
    description: "Turn cloud data into insights with AI-powered analytics.",
  },
  {
    title: "Cloud Automation",
    icon: <FaCogs />,
    description: "Automate workflows and resource scaling to reduce costs.",
  },
  {
    title: "Hybrid Cloud",
    icon: <FaCloud />,
    description: "Integrate public and private clouds for optimal performance.",
  },
  {
    title: "Cloud Security Audits",
    icon: <FaLock />,
    description:
      "Regular security assessments to keep your cloud environment safe.",
  },
];

const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  exit: { scale: 0.9, opacity: 0 },
};

const CloudSolutions = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [animationError, setAnimationError] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirements: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO: Add API call or form submission logic here

    setShowModal(false);
    setShowThankYou(true);
    setFormData({ name: "", email: "", requirements: "" });

    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <section className="relative min-h-screen  px-6 overflow-hidden bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-blue-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Header */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud Solutions & Infrastructure Services
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Build, scale, and secure your business with enterprise-grade cloud
            services from CYBKNOW’s cloud experts.
          </p>
          <ul className="list-disc text-gray-300 ml-5 mb-6 space-y-2">
            <li> Scalable cloud infrastructure</li>
            <li> Data security & compliance</li>
            <li> Optimized performance & automation</li>
            <li> AI-driven analytics & insights</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg"
            onClick={() => setShowModal(true)}
          >
            Get A Quote
          </motion.button>
        </motion.div>

        {/* Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 relative flex justify-center items-center max-w-full"
        >
          <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 blur-3xl opacity-20 animate-pulse z-0"></div>

          <div className="relative z-10 w-full max-w-[500px] aspect-square">
            {!animationError ? (
              <Player
                autoplay
                loop
                src="https://lottie.host/44677baa-9f9a-4673-8d99-9b7ac128aa4a/r1znBin5fm.json"
                style={{ height: 420, width: 420 }}
                className="z-10"
              />
            ) : (
              <div className="flex items-center justify-center w-full h-full bg-gray-800 rounded-lg text-white text-center p-4">
                Animation failed to load. Please try again later.
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Features */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Cloud Features</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore scalable, secure cloud solutions to power your enterprise
          applications.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-purple-400 hover:shadow-[0_0_20px_rgba(128,90,213,0.6)] transition cursor-pointer"
              onClick={() => setActiveFeature(item)}
            >
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 shadow-lg">
                {React.cloneElement(item.icon, {
                  className: "text-white text-2xl",
                })}
              </div>
              <h4 className="text-white font-semibold text-sm">{item.title}</h4>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Feature Modal */}
      <AnimatePresence>
        {activeFeature && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveFeature(null)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setActiveFeature(null)}
            >
              <motion.div
                className="bg-white rounded-2xl p-8 w-[90%] max-w-md relative text-center text-gray-800 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                >
                  <FaTimesCircle size={22} />
                </button>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
                  {React.cloneElement(activeFeature.icon, {
                    className: "text-white text-2xl",
                  })}
                </div>
                <h3 className="text-xl font-bold mb-2">
                  {activeFeature.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {activeFeature.description}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quote Form Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowModal(false)}
            >
              <motion.form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 w-[90%] sm:w-[450px] md:w-[500px] relative text-center text-gray-800 shadow-2xl border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowModal(false)}
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                >
                  <FaTimesCircle size={24} />
                </button>

                <h3 className="text-2xl font-bold mb-1 text-gray-900">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-purple-500 font-semibold mb-4">
                  Cloud Solution
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form and we’ll get back to you within 24 hours.
                </p>

                <div className="space-y-4 text-left">
                  <label className="flex items-center gap-2">
                    <FaUser className="text-purple-600" />
                    <input
                      required
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition"
                      value={formData.name}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label className="flex items-center gap-2">
                    <FaEnvelope className="text-purple-600" />
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition"
                      value={formData.email}
                      onChange={handleInputChange}
                    />
                  </label>
                  <label>
                    <textarea
                      required
                      name="requirements"
                      placeholder="Project Details"
                      rows="4"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"
                      value={formData.requirements}
                      onChange={handleInputChange}
                    />
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Submit Request
                </motion.button>
              </motion.form>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Thank You Modal */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70"
          >
            <Player
              autoplay
              keepLastFrame
              src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              style={{ height: "300px", width: "300px" }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-white text-xl mt-4 font-semibold"
            >
              Thank you! Your quote has been submitted.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CloudSolutions;
