import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    countryCode: "+91",
    phone: "",
    services: [],
  });
  const [showThankYou, setShowThankYou] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleServiceChange = (e) => {
    const { value, checked } = e.target;
    setForm((prev) => {
      if (checked) {
        return { ...prev, services: [...prev.services, value] };
      } else {
        return {
          ...prev,
          services: prev.services.filter((s) => s !== value),
        };
      }
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, phone, services, countryCode } = form;

    if (!name || !email || !phone || services.length === 0 || !countryCode) {
      toast.error("Please fill in all required fields.");
      return;
    }

    const phoneRegex = /^[0-9]{6,15}$/;
    if (!phoneRegex.test(phone)) {
      toast.error("Please enter a valid phone number.");
      return;
    }

    toast.success("Message sent! We’ll get back shortly.");
    setShowThankYou(true);

    setForm({
      name: "",
      email: "",
      countryCode: "+91",
      phone: "",
      services: [],
    });

    setTimeout(() => {
      setShowThankYou(false);
    }, 3000);
  };

  return (
    <section className="bg-gradient-to-br from-[#0D0128] via-[#180636] to-[#0D0128] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10"
      >
        {/* Left Content */}
        <motion.div
          className="flex-1 w-full"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-bold mb-4 text-center lg:text-left">
            Let’s Build Something Great Together
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg mb-6 text-center lg:text-left leading-relaxed">
            Whether you're starting a new project, scaling your existing tech,
            or just exploring an idea — CYBKNOW is ready to help. Fill out the
            form or reach us directly.
          </p>

          <div className="space-y-4 text-gray-300 text-sm sm:text-base">
            <motion.div className="flex items-center gap-3 justify-center lg:justify-start">
              <FaEnvelope className="text-pink-400 text-lg" />
              <a href="mailto:info@cybknow.com" className="break-all">
                info@cybknow.com
              </a>
            </motion.div>
            <motion.div className="flex items-center gap-3 justify-center lg:justify-start">
              <FaPhoneAlt className="text-yellow-400 text-lg" />
              <a href="tel:+918117842014">+91 8117842014</a>
            </motion.div>
            <motion.div className="flex items-center gap-3 justify-center lg:justify-start text-center">
              <FaMapMarkerAlt className="text-green-400 text-lg" />
              <span>Bhubaneswar, Odisha, India</span>
            </motion.div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex-1 w-full"
        >
          <div className="w-full bg-white/10 backdrop-blur-lg p-5 sm:p-8 rounded-3xl border border-purple-500 shadow-xl">
            <h2 className="text-lg sm:text-2xl font-semibold mb-6 text-white text-center">
              Drop Us a Message
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col">
                  <label className="block text-xs sm:text-sm mb-1 text-gray-200">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 text-sm"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-xs sm:text-sm mb-1 text-gray-200">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 rounded-lg bg-white/10 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 text-sm"
                    placeholder="Enter your work email"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex flex-col">
                <label className="block text-xs sm:text-sm mb-1 text-gray-200">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <div className="flex gap-2">
                  <select
                    name="countryCode"
                    value={form.countryCode}
                    onChange={handleChange}
                    className="px-2 sm:px-3 py-2 sm:py-3 rounded-lg bg-[#1E1B2E] text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 text-sm w-24 sm:w-auto"
                  >
                    <option value="+91">🇮🇳 +91</option>
                    <option value="+1">🇺🇸 +1</option>
                    <option value="+61">🇦🇺 +61</option>
                    <option value="+81">🇯🇵 +81</option>
                    <option value="+49">🇩🇪 +49</option>
                    <option value="+33">🇫🇷 +33</option>
                    <option value="+971">🇦🇪 +971</option>
                  </select>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="flex-1 px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white/10 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 text-sm"
                    placeholder="Enter phone number"
                  />
                </div>
              </div>

              {/* Services */}
              <div className="flex flex-col">
                <label className="block text-xs sm:text-sm mb-2 text-gray-200">
                  Types of services you need{" "}
                  <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-200 text-sm">
                  {[
                    "Web app pentesting",
                    "Cloud security assessment",
                    "Mobile app pentesting",
                    "IoT Pentesting",
                    "Mobile Application",
                    "Web Development",
                    "IoT & Digital",
                    "Cloud Solutions",
                    "Digital Marketing",
                    "I want to partner with Cybknow",
                    "Others",
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={service}
                        checked={form.services.includes(service)}
                        onChange={handleServiceChange}
                        className="w-4 h-4 accent-purple-500"
                      />
                      <span className="truncate">{service}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-4 py-2 sm:px-6 sm:py-3 rounded-lg font-semibold shadow-lg text-sm sm:text-base"
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </motion.div>
      </motion.div>

      {/* Thank You Popup */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70 px-4"
          >
            <Player
              autoplay
              keepLastFrame
              src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              style={{ height: "180px", width: "180px" }}
              className="sm:h-[220px] sm:w-[220px] lg:h-[300px] lg:w-[300px]"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-white text-base sm:text-lg mt-4 font-semibold text-center"
            >
              Thank you! Your request has been submitted.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ContactUs;
