import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function PrivacyPolicy() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: "#0E0132" },
    fpsLimit: 60,
    particles: {
      number: { value: 80, density: { enable: true, value_area: 800 } },
      color: { value: "#a855f7" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1.2, outModes: "out" },
      links: { enable: true, color: "#a855f7", distance: 150, opacity: 0.3, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 120, duration: 0.4 } },
    },
    detectRetina: true,
  };

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as your name, email, contact number, and project details. We may also gather technical data like IP address, browser type, and device information to enhance security and improve our services.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "Your data is used to deliver and improve our cybersecurity and development services, respond to inquiries, send service updates, and maintain system security. We never sell or share your personal data for marketing purposes.",
    },
    {
      title: "3. Data Protection & Security",
      content:
        "We implement advanced encryption, strict access controls, and continuous monitoring systems to protect your data from unauthorized access, misuse, or loss.",
    },
    {
      title: "4. Cookies & Tracking",
      content:
        "We use cookies to improve your browsing experience, analyze traffic, and personalize content. You can disable cookies anytime in your browser settings.",
    },
    {
      title: "5. Third-Party Services",
      content:
        "We may work with trusted third-party providers for analytics, hosting, or payment processing. These partners follow strict confidentiality and data protection regulations.",
    },
    {
      title: "6. Your Rights",
      content:
        "You have the right to access, update, or request deletion of your personal data. Contact us at privacy@cybknow.com to exercise these rights.",
    },
    {
      title: "7. Changes to This Policy",
      content:
        "We may update this Privacy Policy periodically. Updates will be posted on this page with a revised date.",
    },
  ];

  return (
    <div className="bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] relative min-h-screen text-white overflow-hidden px-6 md:px-20 py-16">
      {/* Particles Background */}
      <Particles className="absolute inset-0" init={particlesInit} options={particlesOptions} />

      {/* Heading */}
      <motion.h1
        className="relative text-4xl md:text-5xl font-bold mb-4 text-center z-10"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        Privacy Policy
      </motion.h1>

      {/* Intro paragraph */}
      <motion.p
        className="relative text-center max-w-3xl mx-auto text-gray-300 mb-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        At Cybknow Technology, we value your trust. This Privacy Policy explains
        how we collect, use, and safeguard your information while delivering our
        cybersecurity and development services worldwide.
      </motion.p>

      {/* Policy sections */}
      <motion.div
        className="relative max-w-4xl mx-auto space-y-10 z-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.15 },
          },
        }}
      >
        {sections.map((section, index) => (
          <motion.div
            key={index}
            className="bg-gray-800/40 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-gray-700 hover:border-purple-400 transition-all"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{
              scale: 1.03,
              rotate: 0.5,
              boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)",
            }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            <h2 className="text-xl md:text-2xl font-semibold mb-3 text-purple-300">
              {section.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">{section.content}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Footer note */}
      <motion.p
        className="relative text-center text-gray-400 mt-14 text-sm z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        Last Updated: August 2025
      </motion.p>
    </div>
  );
}