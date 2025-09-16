import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaUser,
  FaEnvelope,
  FaTimesCircle,
  FaKey,
  FaCubes,
  FaWallet,
  FaLock,
  FaLink,
  FaShieldAlt,
  FaFingerprint,
  FaGlobe,
  FaDatabase,
  FaCube,
} from "react-icons/fa";

// Feature list
const features = [
  {
    title: "Smart Contracts",
    icon: <FaKey />,
    description:
      "Deploy self-executing contracts that run trustlessly on the blockchain.",
  },
  {
    title: "DApps",
    icon: <FaCubes />,
    description:
      "Build decentralized applications that run on peer-to-peer networks.",
  },
  {
    title: "NFT Integration",
    icon: <FaCube />,
    description:
      "Enable NFT minting, marketplace, and wallet integration in your app.",
  },
  {
    title: "Blockchain Security",
    icon: <FaShieldAlt />,
    description:
      "Ensure decentralized data integrity with Web3-grade security protocols.",
  },
  {
    title: "Crypto Wallet",
    icon: <FaWallet />,
    description:
      "Integrate wallet connectivity (MetaMask, WalletConnect, etc.) seamlessly.",
  },
  {
    title: "DAO Implementation",
    icon: <FaLink />,
    description:
      "Decentralized governance systems using DAOs for transparent decision-making.",
  },
  {
    title: "Web3 Authentication",
    icon: <FaFingerprint />,
    description:
      "Log in using your wallet with signature-based authentication.",
  },
  {
    title: "Metaverse Ready",
    icon: <FaGlobe />,
    description:
      "Power metaverse environments with token access and persistent user state.",
  },
  {
    title: "IPFS Storage",
    icon: <FaDatabase />,
    description:
      "Store and retrieve decentralized files using the InterPlanetary File System.",
  },
  {
    title: "Token Development",
    icon: <FaLock />,
    description:
      "Create and deploy utility or governance tokens for your blockchain app.",
  },
];

// Modal animation
const modalVariants = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.3 } },
  exit: { scale: 0.9, opacity: 0 },
};

const Web3Services = () => {
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
    // Add form validation or API call here

    // Reset form
    setFormData({ name: "", email: "", details: "" });
    setShowModal(false);
    setShowThankYou(true);

    setTimeout(() => setShowThankYou(false), 3000);
  };

  return (
    <section className="relative min-h-screen py-20 px-6 overflow-hidden bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white">
      {/* Background Glow */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse" />
      <div className="absolute bottom-20 right-10 w-60 h-60 bg-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" />

      {/* Header Section */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Web 3.0 Blockchain Development Services
          </h1>
          <p className="text-lg text-gray-300 mb-4">
            Future-proof your business with decentralized apps, smart contracts,
            NFTs, and crypto wallets built by CYBKNOW’s Web3 experts.
          </p>
          <ul className="list-disc text-gray-300 ml-5 mb-6 space-y-2">
            <li> Trustless contracts & on-chain logic</li>
            <li> Metaverse & NFT marketplaces</li>
            <li> Wallet connect, DAO, IPFS integration</li>
            <li> Secure, scalable Web3 architecture</li>
          </ul>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold shadow-lg"
            onClick={() => setShowModal(true)}
          >
            Get A Quote
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex-1 relative flex justify-center items-center"
        >
          <div className="absolute w-[480px] h-[480px] rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 blur-3xl opacity-20 animate-pulse z-0" />
          <Player
            autoplay
            loop
            src="https://assets1.lottiefiles.com/packages/lf20_3ntisyac.json"
            style={{ height: "420px", width: "420px" }}
            className="z-10"
          />
        </motion.div>
      </div>

      {/* Features */}
      <div className="relative z-10 mt-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Web3 Features</h2>
        <p className="text-center text-gray-300 mb-12 max-w-2xl mx-auto">
          Explore scalable, secure blockchain components to power your next-gen
          product.
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
              <div className="w-14 h-14 mx-auto mb-3 flex items-center justify-center rounded-full bg-gradient-to-br from-purple-600 to-indigo-500 shadow-lg">
                {React.cloneElement(item.icon, {
                  className: "text-white text-2xl",
                })}
              </div>
              <h4 className="text-white font-semibold text-sm">
                {item.title}
              </h4>
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
                  Web 3.0 Blockchain Services
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
                      name="details"
                      placeholder="Project Details"
                      rows="4"
                      className="border border-gray-300 rounded-lg p-3 w-full focus:ring-2 focus:ring-purple-400 outline-none transition resize-none"
                      value={formData.details}
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

export default Web3Services;
