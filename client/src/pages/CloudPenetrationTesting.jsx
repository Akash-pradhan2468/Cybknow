import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import toast from "react-hot-toast";
import {
  FaTimesCircle,
  FaCloud,
  FaLock,
  FaKey,
  FaUserShield,
  FaServer,
  FaNetworkWired,
  FaShieldAlt,
  FaDatabase,
  FaCodeBranch,
  FaCogs,
} from "react-icons/fa";

// Cloud Security Features
const features = [
  {
    title: "Cloud Infrastructure Review",
    description:
      "We assess the entire cloud environment for insecure deployments and exposed services.",
    icon: <FaCloud />,
  },
  {
    title: "Access Control Testing",
    description:
      "Ensure role-based access is enforced properly and identity privileges are secure.",
    icon: <FaLock />,
  },
  {
    title: "Key Management Audit",
    description:
      "We audit your key rotation, storage, and encryption policies for best practices.",
    icon: <FaKey />,
  },
  {
    title: "IAM Misconfiguration Scan",
    description:
      "Find weak configurations in your Identity and Access Management policies.",
    icon: <FaUserShield />,
  },
  {
    title: "Serverless Function Review",
    description:
      "We test serverless endpoints for business logic flaws and insecure triggers.",
    icon: <FaServer />,
  },
  {
    title: "Cloud Network Assessment",
    description:
      "Analyze traffic flow, firewall rules, and segmentation in cloud VPCs.",
    icon: <FaNetworkWired />,
  },
  {
    title: "Policy & Role Validation",
    description:
      "Review cloud roles and policies to avoid excessive permissions.",
    icon: <FaShieldAlt />,
  },
  {
    title: "Data Storage Leak Detection",
    description:
      "We test S3 buckets, databases, and cloud storage for public exposure.",
    icon: <FaDatabase />,
  },
  {
    title: "CI/CD Pipeline Testing",
    description:
      "Identify weaknesses in your automated deployment pipelines and code integrations.",
    icon: <FaCodeBranch />,
  },
  {
    title: "Cloud Configuration Review",
    description:
      "Comprehensive audit of cloud setup using standard CIS benchmarks.",
    icon: <FaCogs />,
  },
];


// Framer Motion modal animations
const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const CloudPenetrationTesting = () => {
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);
  const [quoteServiceName, setQuoteServiceName] = useState(
    "Cloud Penetration Testing"
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [details, setDetails] = useState("");
  const [emailError, setEmailError] = useState("");

  const validateEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

  const handleQuoteSubmit = () => {
    if (!name || !email || !details) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!validateEmail(email)) {
      setEmailError("Please enter a valid email address");
      return;
    }
    setEmailError("");
    setShowQuoteModal(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
    setName("");
    setEmail("");
    setDetails("");
  };

  const openQuoteModal = (serviceName = "Cloud Penetration Testing") => {
    setQuoteServiceName(serviceName);
    setShowQuoteModal(true);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cloud Penetration Testing
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Ensure your cloud infrastructure is protected from
            misconfigurations, identity threats, and insecure deployments
            through advanced testing techniques.
          </p>
          <ul className="list-disc text-gray-300 ml-5 mb-6 space-y-2">
            <li>Audit multi-cloud and hybrid environments</li>
            <li>Test IAM roles, policies, and privilege escalation</li>
            <li>Scan for public data leaks in cloud storage</li>
            <li>Review serverless and CI/CD deployments</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 font-semibold shadow-lg"
            onClick={() => openQuoteModal("Cloud Penetration Testing")}
          >
            Get A Quote
          </motion.button>
        </motion.div>

        {/* Right-side Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 blur-3xl opacity-20 animate-pulse z-0"></div>
          <Player
            autoplay
            loop
            src="https://lottie.host/69e1d1c8-92c3-414e-9a8e-f2a8379fcbe9/u9MUb2t5IK.json"
            style={{ height: 420, width: 420 }}
            className="z-10"
          />
        </motion.div>
      </div>


      {/* Features */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">What We Cover</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Our assessment covers every aspect of your cloud environment, from
          identity and access management to networking and CI/CD pipelines.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6">
          {features.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 text-center border border-purple-400 hover:shadow-xl hover:shadow-purple-600/50 transition cursor-pointer"
              onClick={() => setActiveFeature(item)}
            >
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg">
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
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg">
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

      {/* Quote Modal */}
      <AnimatePresence>
        {showQuoteModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowQuoteModal(false)}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setShowQuoteModal(false)}
            >
              <motion.div
                className="bg-white rounded-3xl p-8 w-[90%] sm:w-[450px] md:w-[500px] relative text-center text-gray-800 shadow-2xl border border-gray-200"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={() => setShowQuoteModal(false)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                >
                  <FaTimesCircle size={24} />
                </button>
                <h3 className="text-2xl font-bold mb-1 text-gray-900">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-purple-500 font-semibold mb-4">
                  {quoteServiceName}
                </p>
                <p className="text-sm text-gray-500 mb-6">
                  Fill out the form and we’ll get back to you within 24 hours.
                </p>
                <div className="space-y-4">
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Your Name"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition"
                    required
                  />
                  <div>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Your Email"
                      className={`border rounded-lg p-3 w-full focus:ring-2 outline-none transition ${
                        emailError
                          ? "border-red-500 focus:ring-red-400"
                          : "border-gray-300 focus:ring-purple-400"
                      }`}
                      required
                    />
                    {emailError && (
                      <p className="text-red-500 text-xs mt-1">{emailError}</p>
                    )}
                  </div>
                  <textarea
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder="Project Details"
                    rows="4"
                    className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
                  onClick={handleQuoteSubmit}
                  type="button"
                >
                  Submit Request
                </motion.button>
              </motion.div>
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
              style={{ height: 300, width: 300 }}
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

export default CloudPenetrationTesting;
