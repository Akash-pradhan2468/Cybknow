import React, { useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

export default function TermsConditions() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesOptions = {
    background: { color: "#0E0132" },
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, value_area: 800 } },
      color: { value: "#a855f7" },
      shape: { type: "circle" },
      opacity: { value: 0.4 },
      size: { value: 3, random: true },
      move: { enable: true, speed: 1, outModes: "out" },
      links: { enable: true, color: "#a855f7", distance: 150, opacity: 0.3, width: 1 },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "repulse" }, resize: true },
      modes: { repulse: { distance: 100, duration: 0.4 } },
    },
    detectRetina: true,
  };

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using any services provided by Cybknow Technology — including cybersecurity, penetration testing, software development, and consulting — you agree to be bound by these Terms & Conditions. If you do not agree, you must discontinue use of our services immediately.",
    },
    {
      title: "2. Scope of Services",
      content:
        "Our services cover a wide range of solutions including vulnerability assessments, security audits, incident response, secure application development, IT consulting, and other technology-related services. The scope for each engagement is defined in its respective service agreement.",
    },
    {
      title: "3. User Responsibilities",
      content:
        "You agree to use our services lawfully and responsibly, and not engage in any activity that compromises security, breaches intellectual property rights, or disrupts system operations. You are responsible for providing accurate and complete information.",
    },
    {
      title: "4. Confidentiality",
      content:
        "We are committed to maintaining the confidentiality of all sensitive data you share with us. Any information disclosed during an engagement will be handled with strict security protocols and used solely for the purposes outlined in the agreement.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "While we employ industry-leading practices, Cybknow Technology is not liable for any indirect damages, service interruptions, or losses caused by cyberattacks, software errors, or third-party service failures beyond our control.",
    },
    {
      title: "6. Changes to Terms",
      content:
        "We may update these Terms & Conditions periodically to reflect changes in our services or legal requirements. Continued use of our services after changes indicates your acceptance of the revised terms.",
    },
    {
      title: "7. Contact Information",
      content:
        "For any questions about these Terms & Conditions, please contact us at legal@cybknow.com.",
    },
  ];

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* Particle Background */}
      <Particles className="absolute inset-0" init={particlesInit} options={particlesOptions} />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 py-16">
        {/* Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-4 text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Terms & Conditions
        </motion.h1>

        {/* Intro paragraph */}
        <motion.p
          className="text-center max-w-3xl mx-auto text-gray-300 mb-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.6 }}
        >
          These Terms & Conditions govern your use of Cybknow Technology’s services.
          By working with us, you agree to these terms, which are designed to ensure
          a secure, professional, and transparent collaboration.
        </motion.p>

        {/* Terms sections */}
        <motion.div
          className="max-w-4xl mx-auto space-y-10"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.15 } },
          }}
        >
          {sections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-purple-500 hover:border-purple-400 transition-all"
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
          className="text-center text-gray-400 mt-14 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          Last Updated: August 2025
        </motion.p>
      </div>
    </div>
  );
}
