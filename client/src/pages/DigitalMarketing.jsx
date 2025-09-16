import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaTimesCircle,
  FaUser,
  FaEnvelope,
  FaRegPaperPlane,
  FaChartLine,
  FaBullhorn,
  FaEnvelopeOpenText,
  FaLightbulb,
  FaMoneyBillWave,
  FaSignal,
  FaFlag,
  FaUsers,
  FaFileAlt,
  FaRedo,
  FaQuoteLeft,
} from "react-icons/fa";

const features = [
  {
    title: "SEO Optimization",
    icon: <FaChartLine />,
    description:
      "Improve your website’s visibility on search engines to attract organic traffic.",
  },
  {
    title: "Social Media Marketing",
    icon: <FaBullhorn />,
    description:
      "Engage audiences and grow your brand through powerful social media strategies.",
  },
  {
    title: "Email Campaigns",
    icon: <FaEnvelopeOpenText />,
    description:
      "Reach your customers directly with high-converting, personalized email campaigns.",
  },
  {
    title: "Content Strategy",
    icon: <FaLightbulb />,
    description: "Plan and create engaging content that aligns with your business goals.",
  },
  {
    title: "Paid Advertising",
    icon: <FaMoneyBillWave />,
    description:
      "Leverage paid ads on Google, Facebook, and other platforms for instant results.",
  },
  {
    title: "Conversion Boost",
    icon: <FaSignal />,
    description: "Optimize landing pages and funnels to turn visitors into paying customers.",
  },
  {
    title: "Brand Awareness",
    icon: <FaFlag />,
    description:
      "Expand your brand reach and recognition through consistent digital presence.",
  },
  {
    title: "Influencer Marketing",
    icon: <FaUsers />,
    description:
      "Collaborate with influencers to promote your brand to a targeted audience.",
  },
  {
    title: "Analytics & Reporting",
    icon: <FaFileAlt />,
    description:
      "Track KPIs and campaign effectiveness with detailed reports and dashboards.",
  },
  {
    title: "Retargeting",
    icon: <FaRedo />,
    description:
      "Re-engage visitors who didn’t convert the first time with strategic remarketing.",
  },
];


const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } },
};

const DigitalMarketing = () => {
  const [showModal, setShowModal] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could add API call or validation

    // Reset form, close modal and show thank you message
    setFormData({ name: "", email: "", details: "" });
    setShowModal(false);
    setShowThankYou(true);

    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Digital Marketing Solutions That Drive Results
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Boost your brand's presence, generate leads, and increase sales with
            expert SEO, social media, email campaigns, and more.
          </p>
          <ul className="list-disc text-gray-300 ml-5 mb-6 space-y-2">
            <li> SEO to improve organic rankings</li>
            <li> Powerful social media outreach</li>
            <li> Personalized email marketing</li>
            <li> Analytics to track your growth</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg"
            onClick={() => setShowModal(true)}
            aria-label="Open Get A Quote form"
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
          <div className="absolute w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 blur-3xl opacity-20 animate-pulse z-0"></div>
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_5ngs2ksb.json"
            style={{ height: "380px", width: "380px" }}
            className="z-10"
            aria-label="Digital Marketing Animation"
          />
        </motion.div>
      </div>


      {/* Features */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Our Services</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore our range of digital marketing services crafted to elevate your brand.
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
              tabIndex={0}
              role="button"
              aria-pressed={activeFeature === item}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setActiveFeature(item);
                }
              }}
            >
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg">
                {React.cloneElement(item.icon, {
                  className: "text-white text-2xl",
                  "aria-hidden": true,
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
              aria-label="Close feature details overlay"
            />
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setActiveFeature(null)}
              role="dialog"
              aria-modal="true"
              aria-labelledby="feature-modal-title"
              aria-describedby="feature-modal-desc"
            >
              <motion.div
                className="bg-white rounded-2xl p-8 w-[90%] max-w-md relative text-center text-gray-800 shadow-xl"
                onClick={(e) => e.stopPropagation()}
                tabIndex={-1}
              >
                <button
                  onClick={() => setActiveFeature(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-red-500 transition"
                  aria-label="Close modal"
                >
                  <FaTimesCircle size={22} />
                </button>
                <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg">
                  {React.cloneElement(activeFeature.icon, {
                    className: "text-white text-2xl",
                  })}
                </div>
                <h3 id="feature-modal-title" className="text-xl font-bold mb-2">
                  {activeFeature.title}
                </h3>
                <p id="feature-modal-desc" className="text-sm text-gray-600">
                  {activeFeature.description}
                </p>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Quote Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-md z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              aria-label="Close quote request overlay"
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
                  aria-label="Close modal"
                >
                  <FaTimesCircle size={24} />
                </button>

                <h3 className="text-2xl font-bold mb-1 text-gray-900">
                  Get a Free Quote
                </h3>
                <p className="text-sm text-purple-500 font-semibold mb-4">
                  Digital Marketing Services
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
                      aria-label="Your Name"
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
                      aria-label="Your Email"
                    />
                  </label>
                  <label>
                    <textarea
                      required
                      name="details"
                      placeholder="Project Details"
                      rows="4"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"
                      value={formData.details}
                      onChange={handleInputChange}
                      aria-label="Project Details"
                    />
                  </label>
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-6 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg hover:shadow-xl transition"
                >
                  Submit Request <FaRegPaperPlane className="inline ml-2" />
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
            role="alert"
            aria-live="assertive"
          >
            <Player
              autoplay
              keepLastFrame
              src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              style={{ height: "300px", width: "300px" }}
              aria-label="Thank you animation"
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

export default DigitalMarketing;
