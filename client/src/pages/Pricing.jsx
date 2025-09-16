import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaTimesCircle,
  FaEnvelope,
  FaUser,
  FaRegPaperPlane,
} from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

const categories = ["Web App", "Mobile App", "Cloud Security"];

const plans = [
  {
    title: "Starter",
    category: "Web App",
    tagline: "Simple security for small apps",
    features: [
      "Black box",
      "1 Pentest per year",
      "1 Retest within a month",
      "OWASP Coverage",
      "Email, virtual call",
      "1 Final report",
      "Standard report format",
    ],
  },
  {
    title: "Enterprise",
    category: "Web App",
    tagline: "Full round security for enterprises",
    features: [
      "Grey box",
      "1 Pentest per year",
      "2 Retests within 2 months",
      "OWASP + SANS",
      "Email, call, Skype, WhatsApp support",
      "1 Final report + Daily status",
      "Compliance: SOC2, ISO27001, PCI-DSS, HIPAA",
    ],
  },
  {
    title: "Standard Plus",
    category: "Web App",
    tagline: "Continuous protection for evolving apps",
    features: [
      "Grey box",
      "1 Pentest + 3 VA scans per year",
      "Unlimited retests",
      "OWASP + SANS + Custom + PTES",
      "Email, Skype, WhatsApp support",
      "Final report + Daily updates + Real-time vulnerabilities",
      "Compliance: SOC2, ISO27001, PCI-DSS, HIPAA",
    ],
  },
  {
    title: "Growth",
    category: "Mobile App",
    tagline: "Mobile-first advanced security",
    features: [
      "Grey box",
      "4 Pentests per year",
      "Unlimited retests",
      "OWASP + SANS + Custom + PTES",
      "Email, Skype, WhatsApp support",
      "Final report + Daily updates + Real-time vulnerabilities",
      "Compliance: SOC2, ISO27001, PCI-DSS, HIPAA",
    ],
  },
  {
    title: "Professional",
    category: "Mobile App",
    tagline: "Advanced app protection for teams",
    features: [
      "White box",
      "3 Pentests per year",
      "Monthly status report",
      "Zero-day vulnerability analysis",
      "Slack integration",
      "Compliance tracking & automation",
    ],
  },
  {
    title: "Business",
    category: "Cloud Security",
    mostPopular: true,
    tagline: "Enterprise-grade offensive cloud security",
    features: [
      "White + Grey box hybrid",
      "6 Pentests + 12 VA scans",
      "Real-time dashboard + SOC alerts",
      "AI-based vulnerability prioritization",
      "Dedicated account manager",
      "Compliance: GDPR, ISO, HIPAA, PCI-DSS",
    ],
  },
  {
    title: "Ultimate",
    category: "Cloud Security",
    tagline: "Elite security for mission-critical workloads",
    features: [
      "White + Grey box hybrid",
      "6 Pentests + 12 VA scans",
      "Real-time dashboard + SOC alerts",
      "AI-based vulnerability prioritization",
      "Dedicated account manager",
      "Compliance: GDPR, ISO, HIPAA, PCI-DSS",
    ],
  },
  {
    title: "Cloud Advanced",
    category: "Cloud Security",
    tagline: "Proactive monitoring and penetration testing",
    features: [
      "White + Grey box hybrid",
      "6 Pentests + 12 VA scans",
      "Real-time dashboard + SOC alerts",
      "AI-based vulnerability prioritization",
      "Dedicated account manager",
      "Compliance: GDPR, ISO, HIPAA, PCI-DSS",
    ],
  },
];

const tooltipVariants = {
  initial: { opacity: 0, y: -10 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 300, damping: 20 },
  },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  exit: { opacity: 0, y: 60, scale: 0.9 },
};

const Pricing = () => {
  const [activeTab, setActiveTab] = useState(0); // activeTab as index for categories
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [showThankYou, setShowThankYou] = useState(false);

  const filteredPlans = plans.filter(
    (plan) => plan.category === categories[activeTab]
  );

  const handleQuoteClick = (plan) => {
    setSelectedPlan(plan);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedPlan(null);
  };

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    setShowModal(false);
    setShowThankYou(true);
    setTimeout(() => setShowThankYou(false), 3000);
  };

  const getGridClass = () => {
    if (filteredPlans.length === 1) return "grid-cols-1 place-items-center";
    if (filteredPlans.length === 2)
      return "grid-cols-1 sm:grid-cols-2 place-items-center";
    if (filteredPlans.length === 3)
      return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4";
  };

  const prevCategory = () => {
    setActiveTab((prev) => (prev === 0 ? categories.length - 1 : prev - 1));
  };

  const nextCategory = () => {
    setActiveTab((prev) => (prev === categories.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] py-20 px-4 lg:px-16 text-white min-h-screen relative overflow-hidden">
      {/* Floating glow backgrounds */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700 opacity-30 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-700 opacity-30 blur-3xl rounded-full animate-pulse" />

      {/* Header + Lottie */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-16 relative z-10"
      >
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
          {/* Left Text */}
          <div className="flex-1">
            <h1 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-4 drop-shadow-lg">
              Cybknow Pentest Packages
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mb-8">
              Simplifying security with transparent, impactful penetration testing.
            </p>
            <h3 className="uppercase text-sm tracking-widest text-purple-400 font-semibold">
              Available Packages
            </h3>
            <h2 className="text-2xl font-bold my-3">
              Choose the Right Plan for Your Business
            </h2>
            <p className="text-gray-400 mb-6">
              Explore transparent and genuine pentesting solutions tailored to your needs.
            </p>
          </div>

          {/* Right Animation */}
          <div className="flex-1 flex justify-center">
            <Player
              autoplay
              loop
              src="https://assets1.lottiefiles.com/packages/lf20_49rdyysj.json"
              style={{ height: 320, width: 320 }}
            />
          </div>
        </div>
      </motion.div>

      {/* ---- CATEGORY SECTION WITH ARROWS (ARROWS SHOW ONLY ON SMALL SCREENS) ---- */}
      <div className="w-full flex items-center justify-center gap-4 mb-12 flex-wrap z-20 relative">
        {/* Left Arrow - Small screens only */}
        <button
          onClick={prevCategory}
          className="bg-purple-700 px-3 py-2 rounded-full text-white hover:bg-purple-800 transition inline-flex sm:hidden"
          aria-label="Previous category"
        >
          ◀
        </button>

        {/* Buttons */}
        {categories.map((cat, index) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === index
                ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                : "bg-white text-gray-700 hover:bg-purple-100"
            } ${
              // On small screens show only active tab; on sm+ show all
              activeTab === index ? "inline-flex" : "hidden sm:inline-flex"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {cat}
          </motion.button>
        ))}

        {/* Right Arrow - Small screens only */}
        <button
          onClick={nextCategory}
          className="bg-purple-700 px-3 py-2 rounded-full text-white hover:bg-purple-800 transition inline-flex sm:hidden"
          aria-label="Next category"
        >
          ▶
        </button>
      </div>

      {/* Pricing Cards */}
      <div
        className={`grid gap-8 max-w-7xl mx-auto px-2 sm:px-4 relative z-10 ${getGridClass()}`}
      >
        {filteredPlans.map((plan, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 25px rgba(139,92,246,0.4)",
            }}
            transition={{ duration: 0.3, delay: idx * 0.1 }}
            className={`flex flex-col p-6 rounded-2xl shadow-xl relative overflow-hidden border w-full max-w-sm ${
              plan.mostPopular
                ? "bg-gradient-to-br from-purple-100 to-white border-purple-400 scale-[1.03] z-10"
                : "bg-white border-gray-200"
            }`}
          >
            {plan.mostPopular && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 260 }}
                className="absolute top-3 right-3 bg-pink-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-md"
              >
                ⭐ Most Popular
              </motion.div>
            )}
            <h3 className="text-xl font-bold text-gray-800 mb-1">{plan.title}</h3>
            <p className="text-sm text-gray-500 mb-5">{plan.tagline}</p>
            <motion.button
              whileHover={{ scale: 1.03 }}
              className="mt-auto mb-4 bg-gradient-to-r from-purple-600 to-blue-500 text-white py-2 px-4 rounded-md font-medium shadow-md"
              onClick={() => handleQuoteClick(plan)}
            >
              Get a Quote
            </motion.button>
            <ul className="text-sm text-gray-700 space-y-2">
              {plan.features.map((feat, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 relative"
                  onMouseEnter={() => setHoveredFeature(`${plan.title}-${i}`)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <span className="text-purple-500">✓</span>
                  {feat}
                  <AnimatePresence>
                    {hoveredFeature === `${plan.title}-${i}` && (
                      <motion.div
                        variants={tooltipVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="absolute bg-purple-800 text-white text-xs p-2 rounded-lg shadow-md top-full left-0 mt-2 w-60"
                      >
                        {feat} enhances security posture.
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* ----- Modal for Quote ----- */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              <motion.div
                className="bg-white rounded-2xl p-6 sm:p-8 w-[90%] sm:w-[420px] relative text-gray-800 shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeModal}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500"
                >
                  <FaTimesCircle size={22} />
                </button>
                <div className="text-center mb-4">
                  <h2 className="text-2xl font-bold text-purple-800 mb-1">
                    Request Quote
                  </h2>
                  <p className="text-sm text-gray-600">
                    Plan:{" "}
                    <span className="font-semibold">{selectedPlan?.title}</span> —{" "}
                    {selectedPlan?.tagline}
                  </p>
                </div>
                <form onSubmit={handleQuoteSubmit} className="space-y-4">
                  <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-lg focus-within:ring-2 focus-within:ring-purple-500">
                    <FaUser className="text-gray-400" />
                    <input
                      type="text"
                      required
                      placeholder="Your Name"
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                  <div className="flex items-center gap-3 border border-gray-300 p-2 rounded-lg focus-within:ring-2 focus-within:ring-purple-500">
                    <FaEnvelope className="text-gray-400" />
                    <input
                      type="email"
                      required
                      placeholder="Your Email"
                      className="flex-1 bg-transparent outline-none text-sm"
                    />
                  </div>
                  <textarea
                    required
                    rows="4"
                    placeholder="Tell us your requirements..."
                    className="w-full border border-gray-300 rounded-lg p-3 text-sm focus:ring-2 focus:ring-purple-500 outline-none"
                  ></textarea>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-md"
                  >
                    <FaRegPaperPlane /> Submit Request
                  </motion.button>
                </form>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* ----- Thank You Animation ----- */}
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

export default Pricing;
