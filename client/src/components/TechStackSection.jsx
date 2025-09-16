import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTimes, FaJava } from "react-icons/fa";
import {
  SiAmazonwebservices,
  SiAdobephotoshop,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiGraphql,
  SiGo,
  SiLaravel,
  SiFlutter,
  SiGit,
  SiArduino,
  SiCplusplus,
  SiRaspberrypi,
  SiNginx,
  SiRust,
  SiCypress,
  SiNextdotjs,
  SiSvelte,
  SiAndroid,
  SiSwift,
  SiMongodb,
  SiFigma,
  SiDocker,
  SiCss3,
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
} from "react-icons/si";

// ✅ Categories
const categories = ["Top", "Web", "Mobile", "Backend", "Testing"];

// ✅ Descriptions
const descriptions = {
  TypeScript: "Strongly typed JavaScript for scalable development.",
  Python: "Popular language used in web, AI, data science, and scripting.",
  AWS: "Cloud services platform offering compute, storage, and more.",
  React: "JavaScript library for building user interfaces.",
  "Node.Js": "Runtime for building backend services with JavaScript.",
  GraphQL: "API query language for fetching specific data efficiently.",
  "Go Lang": "High-performance programming language by Google.",
  Laravel: "Elegant PHP framework for modern web apps.",
  Flutter: "Toolkit to build beautiful apps for mobile, web, and desktop.",
  Java: "Versatile programming language used widely in enterprises.",
  Git: "Version control system for tracking code changes.",
  Arduino: "Microcontroller platform for DIY electronics.",
  "C++": "Powerful language for system-level and performance-heavy apps.",
  "Raspberry Pi": "Affordable computer for learning, tinkering, and projects.",
  Nginx: "Web server and reverse proxy for scaling applications.",
  Rust: "Memory-safe, fast programming language for systems.",
  Cypress: "Frontend testing tool for modern web apps.",
  "Next.js": "React framework for static sites and server-rendered apps.",
  Svelte: "Compiler that turns UI code into highly efficient JS.",
  Android: "Open-source mobile OS used in billions of devices.",
  Swift: "Apple's language for building iOS/macOS apps.",
  "Mongo DB": "NoSQL document-based database for flexible data storage.",
  Figma: "Design and collaboration tool for interfaces.",
  Photoshop: "Photo editing software for creative professionals.",
  Docker: "Platform for developing, shipping, and running containers.",

  // ✅ Security Tools
  "Burp Suite":
    "Widely used for web app penetration testing (traffic interception, scanning vulnerabilities, XSS, SQLi, etc.).",
  Nmap: "Powerful network scanner for port scanning, service detection, and network mapping.",
  Metasploit:
    "Exploitation framework for testing vulnerabilities and developing payloads.",
  Nessus:
    "Widely used vulnerability scanner for servers, systems, and networks.",
  "OWASP ZAP":
    "Open-source alternative to Burp Suite, used for automated and manual web app security testing.",

  // ✅ Styling
  CSS: "The core styling language for designing modern web applications.",
  "Tailwind CSS": "Utility-first CSS framework for rapid UI development.",
  "Bootstrap CSS": "Popular CSS framework for responsive, mobile-first design.",
  Express: "Fast, unopinionated, and minimalist web framework for Node.js.",
};

// ✅ Custom inline SVG for OWASP ZAP (blue)
const ZapIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="48"
    height="48"
    viewBox="0 0 64 64"
    fill="#1E90FF" // blue color
  >
    <path d="M32 2L12 22h12L10 42h12L8 62l44-24H40l14-20H40L54 2H32z" />
  </svg>
);

// ✅ Tech Stack Master List
const techList = {
  Top: [
    {
      name: "Burp Suite",
      icon: (
        <img
          src="https://www.kali.org/tools/burpsuite/images/burpsuite-logo.svg"
          alt="Burp Suite"
          className="h-12 w-12"
        />
      ),
    },
    {
      name: "Nmap",
      icon: (
        <img
          src="https://nmap.org/images/sitelogo-nmap.svg"
          alt="Nmap"
          className="h-12 w-12"
        />
      ),
    },
    {
      name: "Metasploit",
      icon: (
        <img
          src="https://www.kali.org/tools/metasploit-framework/images/metasploit-framework-logo.svg"
          alt="Metasploit"
          className="h-12 w-12"
        />
      ),
    },
    {
      name: "Nessus",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          className="h-12 w-12"
        >
          <circle cx="256" cy="256" r="256" fill="#00b5ad" />
          <path
            d="M364.8 151.2l-93.6-54c-9.6-5.6-21.6-5.6-31.2 0l-93.6 54c-9.6 5.6-15.6 15.6-15.6 26.4v108c0 10.8 6 20.8 15.6 26.4l93.6 54c9.6 5.6 21.6 5.6 31.2 0l93.6-54c9.6-5.6 15.6-15.6 15.6-26.4v-108c0-10.8-6-20.8-15.6-26.4zM352 278.4c0 4-2 7.6-5.6 9.6l-74.4 42.8c-3.6 2-7.6 2-11.2 0l-74.4-42.8c-3.6-2-5.6-5.6-5.6-9.6v-84c0-4 2-7.6 5.6-9.6l74.4-42.8c3.6-2 7.6-2 11.2 0l74.4 42.8c3.6 2 5.6 5.6 5.6 9.6v84z"
            fill="#fff"
          />
        </svg>
      ),
    },
    {
      name: "OWASP ZAP",
      icon: ZapIcon, // ✅ Custom SVG
    },

    // Core Languages & Frameworks
    { name: "TypeScript", icon: <SiTypescript size={48} color="#3178C6" /> },
    { name: "Python", icon: <SiPython size={48} color="#3776AB" /> },
    { name: "AWS", icon: <SiAmazonwebservices size={48} color="#FF9900" /> },
    { name: "React", icon: <SiReact size={48} color="#61DAFB" /> },
    { name: "Node.Js", icon: <SiNodedotjs size={48} color="#339933" /> },
    { name: "Express", icon: <SiExpress size={48} color="#000000" /> },
    { name: "Go Lang", icon: <SiGo size={48} color="#00ADD8" /> },
    { name: "Java", icon: <FaJava size={48} color="#007396" /> },
    { name: "Arduino", icon: <SiArduino size={48} color="#00979D" /> },
    { name: "Raspberry Pi", icon: <SiRaspberrypi size={48} color="#C51A4A" /> },
    { name: "Rust", icon: <SiRust size={48} color="#000000" /> },
    { name: "Cypress", icon: <SiCypress size={48} color="#17202C" /> },
    { name: "Next.js", icon: <SiNextdotjs size={48} color="#000000" /> },
    { name: "Svelte", icon: <SiSvelte size={48} color="#FF3E00" /> },
    { name: "Android", icon: <SiAndroid size={48} color="#3DDC84" /> },
    { name: "Mongo DB", icon: <SiMongodb size={48} color="#47A248" /> },

    // Styling
    { name: "CSS", icon: <SiCss3 size={48} color="#264de4" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss size={48} color="#38BDF8" /> },
    { name: "Bootstrap CSS", icon: <SiBootstrap size={48} color="#7952B3" /> },
  ],

  Web: [
    "React",
    "Next.js",
    "Svelte",
    "TypeScript",
    "Node.Js",
    "Laravel",
    "CSS",
    "Tailwind CSS",
    "Bootstrap CSS",
    "Express",
  ],
  Mobile: ["Flutter", "React", "Swift", "Android"],
  Backend: [
    "Node.Js",
    "Go Lang",
    "Rust",
    "Laravel",
    "Mongo DB",
    "C++",
    "Python",
    "Express",
  ],
  Testing: [
    "Cypress",
    "Burp Suite",
    "Nmap",
    "Metasploit",
    "Nessus",
    "OWASP ZAP",
  ],
};

const normalize = (str) => str.toLowerCase().replace(/[\s.]+/g, "");

// ✅ Main Component
const TechStackSection = () => {
  const [activeTab, setActiveTab] = useState("Top");
  const [selectedTech, setSelectedTech] = useState(null);

  const displayList =
    activeTab === "Top"
      ? techList.Top
      : techList.Top.filter((tech) =>
          techList[activeTab].some(
            (name) => normalize(name) === normalize(tech.name)
          )
        );

  const selectedDetails = selectedTech
    ? techList.Top.find((tech) => tech.name === selectedTech)
    : null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white py-16 px-6 sm:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-12"
      >
        Tech That We Use
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveTab(cat)}
            className={`px-5 py-2 text-sm font-semibold rounded-md transition ${
              cat === activeTab
                ? "bg-blue-500 text-white"
                : "bg-white text-purple-900 hover:bg-white/80"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tech Cards */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6"
        >
          {displayList.map((tech, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              onClick={() => setSelectedTech(tech.name)}
              className="cursor-pointer bg-white text-black p-4 rounded-xl flex flex-col items-center justify-center shadow hover:shadow-xl transition"
            >
              <div className="mb-2">{tech.icon}</div>
              <span className="font-semibold text-sm text-center">
                {tech.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Modal */}
      <AnimatePresence>
        {selectedTech && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 30 }}
              transition={{ duration: 0.3 }}
              className="relative bg-white text-black rounded-2xl shadow-xl p-6 max-w-sm w-full"
            >
              <button
                className="absolute top-3 right-3 text-gray-700 hover:text-red-500"
                onClick={() => setSelectedTech(null)}
              >
                <FaTimes size={20} />
              </button>

              <div className="flex flex-col items-center">
                <div className="mb-4">{selectedDetails?.icon}</div>
                <h3 className="text-xl font-bold mb-2">{selectedTech}</h3>
                <p className="text-sm text-center text-gray-700">
                  {descriptions[selectedTech] || "No description available."}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default TechStackSection;
