import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const vulnerabilities = [
  { id: "01", title: "Broken Access Control" },
  { id: "02", title: "Injection" },
  { id: "03", title: "Security Misconfiguration" },
  { id: "04", title: "Authentication Issues" },
  { id: "05", title: "Cross-Site Scripting" },
  { id: "06", title: "Cryptographic Failures" },
  { id: "07", title: "Insecure Design" },
  { id: "08", title: "Vulnerable Components" },
  { id: "09", title: "Data Integrity Failure" },
  { id: "10", title: "Information Disclosure" },
];

export default function AuditPage() {
  const navigate = useNavigate();

  const firstRow = vulnerabilities.slice(0, 5);
  const secondRow = vulnerabilities.slice(5);

  return (
    <section className="relative min-h-screen bg-gradient-to-b from-[#120025] to-[#1a0033] flex flex-col items-center px-6 py-16 text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl" />
      </div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-extrabold mb-4 tracking-wide text-center"
      >
        Audit
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-gray-300 text-center max-w-2xl mb-12 text-lg"
      >
        Here are the key types of vulnerabilities that we find during our Cyber Security Audit.
      </motion.p>

      {/* First Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full max-w-7xl"
      >
        {firstRow.map((vuln, index) => (
          <motion.div
            key={vuln.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-5 shadow-lg hover:shadow-purple-500/50 transition flex flex-col items-center text-center"
          >
            <span className="text-xl font-bold text-purple-400">{vuln.id}</span>
            <span className="text-white font-medium text-sm mt-2">{vuln.title}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="grid grid-cols-1 sm:grid-cols-5 gap-4 w-full max-w-7xl mt-6"
      >
        {secondRow.map((vuln, index) => (
          <motion.div
            key={vuln.id}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="bg-gradient-to-br from-purple-600/20 to-pink-500/20 border border-purple-500/30 rounded-lg p-5 shadow-lg hover:shadow-pink-500/50 transition flex flex-col items-center text-center"
          >
            <span className="text-xl font-bold text-pink-400">{vuln.id}</span>
            <span className="text-white font-medium text-sm mt-2">{vuln.title}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action */}
      <motion.button
        onClick={() => navigate("/contact")}
        whileHover={{ scale: 1.08, boxShadow: "0 0 25px rgba(236,72,153,0.8)" }}
        whileTap={{ scale: 0.95 }}
        className="mt-12 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold py-3 px-10 rounded-full shadow-lg transition-all text-lg"
      >
        Get Started Now
      </motion.button>
    </section>
  );
}
