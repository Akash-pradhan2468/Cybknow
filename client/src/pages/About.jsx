// src/pages/About.jsx
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

export default function About() {
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
      title: "Cybersecurity Excellence",
      content:
        "From vulnerability assessments to real-time threat monitoring, we safeguard digital infrastructures with state-of-the-art tools and strategies. Our experts ensure your systems stay ahead of evolving cyber threats."
    },
    {
      title: "Innovative Development",
      content:
        "We create tailored software, mobile apps, and web platforms designed to boost efficiency, security, and scalability. Every solution is built with security as a foundation, ensuring reliability and trust."
    },
    {
      title: "Our Vision",
      content:
        "At Cybknow Technology, our vision is to create a safer, smarter, and more connected world. We strive to be the trusted partner for businesses seeking both protection and progress in the digital era."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] relative min-h-screen text-white overflow-hidden">
      {/* Floating Particles */}
      <Particles className="absolute inset-0" init={particlesInit} options={particlesOptions} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <motion.h1
          className="text-5xl font-extrabold text-purple-400 mb-6 text-center"
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Cybknow Technology
        </motion.h1>

        <motion.p
          className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed text-center mb-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 1 }}
        >
          Cybknow Technology is a global leader in cybersecurity and cutting-edge software
          development. We provide full-spectrum cyber defense, penetration testing, and advanced
          security services to protect businesses worldwide. Alongside our robust cybersecurity
          solutions, we deliver innovative software and web development services to empower
          organizations with secure, scalable, and high-performance digital solutions.
        </motion.p>

        {/* Sections with stagger animation */}
        <motion.div
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } }
          }}
        >
          {sections.slice(0, 2).map((sec, idx) => (
            <motion.div
              key={idx}
              className="bg-gray-800/50 backdrop-blur-md p-6 rounded-2xl shadow-lg border border-purple-500 hover:border-purple-400 transition-all"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 }
              }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
              }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <h2 className="text-2xl font-bold text-purple-300 mb-4">{sec.title}</h2>
              <p className="text-gray-300">{sec.content}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision section full width */}
        <motion.div
          className="mt-16 bg-gray-800/50 backdrop-blur-md p-8 rounded-2xl shadow-lg border border-purple-500 max-w-4xl mx-auto hover:border-purple-400 transition-all"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{
            scale: 1.02,
            boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)"
          }}
        >
          <h2 className="text-3xl font-bold text-purple-300 mb-4 text-center">
            {sections[2].title}
          </h2>
          <p className="text-gray-300 text-center">{sections[2].content}</p>
        </motion.div>
      </div>
    </div>
  );
}
