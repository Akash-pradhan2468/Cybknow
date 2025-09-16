import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaMobileAlt,
  FaGlobe,
  FaMicrochip,
  FaCloudUploadAlt,
  FaNetworkWired,
  FaCloud,
} from "react-icons/fa";

// Categories with one main image + text
const categories = [
  {
    name: "Mobile App Pentesting",
    icon: <FaMobileAlt />,
    themeColor: "#9333EA",
    description:
      "Security testing and vulnerability assessment for mobile applications to safeguard users.",
    link: "/services/mobile-app-pentesting",
    img: "https://hackersonlineclub.com/wp-content/uploads/2018/01/Mobile-Security-Penertation-Testing.png",
  },
  {
    name: "Web App Pentesting",
    icon: <FaGlobe />,
    themeColor: "#3B82F6",
    description:
      "Penetration testing to identify and fix vulnerabilities in your web applications.",
    link: "/services/web-app-pentesting",
    img: "https://malcure.com/wp-content/uploads/2019/08/xwordpress-malware-removal-service.jpg.pagespeed.ic.6uqyWlKejn.jpg",
  },
  {
    name: "IoT Pentesting",
    icon: <FaMicrochip />,
    themeColor: "#F59E0B",
    description:
      "Specialized penetration testing focused on IoT devices and ecosystems.",
    link: "/services/iot-pentesting",
    img: "https://threatsys.co.in/wp-content/uploads/2021/05/iot-9001.jpg",
  },
  {
    name: "Cloud Pentesting",
    icon: <FaCloudUploadAlt />,
    themeColor: "#06B6D4",
    description:
      "Comprehensive cloud infrastructure security testing and breach simulations.",
    link: "/services/cloud-pentesting",
    img: "https://www.strongboxit.com/wp-content/uploads/2023/08/cloud-security-testing-strongbox-it-1.webp",
  },
  {
    name: "Mobile Application",
    icon: <FaMobileAlt />,
    themeColor: "#9333EA",
    description:
      "Unlock the potential of mobile technology with our comprehensive mobile app development services.",
    link: "/services/mobile",
    img: "https://img.freepik.com/premium-psd/health-app-phone-screen-mockup_23-2150120708.jpg",
  },
  {
    name: "Web Development",
    icon: <FaGlobe />,
    themeColor: "#3B82F6",
    description:
      "We build fast, secure and responsive web platforms with cutting-edge technologies.",
    link: "/services/web3",
    img: "https://blog.openreplay.com/images/web-design--mobile-first-desktop-first-what/images/hero.png",
  },
  {
    name: "IoT & Digital",
    icon: <FaNetworkWired />,
    themeColor: "#F59E0B",
    description:
      "Connected hardware, smart systems, and automation solutions.",
    link: "/services/iot",
    img: "https://innovationatwork.ieee.org/wp-content/uploads/2019/09/bigstock-Edge-Computing-Modern-It-Techn-280957174_1024X684.png",
  },
  {
    name: "Cloud Solutions",
    icon: <FaCloud />,
    themeColor: "#06B6D4",
    description:
      "Scalable cloud architecture, secure infrastructure, and managed DevOps.",
    link: "/services/cloud",
    img: "https://images.tmcnet.com/tmc/misc/articles/image/2022-aug/AdobeStock_263382437_cloud_services_SUPERSIZE.jpg",
  },
];

const ServicesSection = () => {
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();
  const orbScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  const orbOpacity = useTransform(scrollYProgress, [0, 1], [0.25, 0.6]);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white px-6 sm:px-12 py-20 overflow-hidden">
      {/* Floating background particles */}
      {[...Array(30)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -12, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{
            duration: 6 + Math.random() * 6,
            repeat: Infinity,
            delay: Math.random() * 6,
          }}
        />
      ))}

      {/* Section Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 relative z-10"
      >
        Our Service Offerings
      </motion.h1>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {categories.map((cat, i) => (
          <motion.div
            key={cat.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="relative group rounded-3xl overflow-hidden shadow-xl backdrop-blur-lg border border-white/10 bg-white/5 hover:shadow-purple-500/30 flex flex-col"
          >
            {/* Animated Orb */}
            <motion.div
              className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl pointer-events-none"
              style={{
                backgroundColor: cat.themeColor,
                scale: orbScale,
                opacity: orbOpacity,
              }}
              animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            {/* Header */}
            <div className="p-6 relative z-10 text-center">
              <h2 className="text-2xl font-bold flex items-center justify-center gap-3">
                <span className="text-3xl text-purple-300">{cat.icon}</span>
                {cat.name}
              </h2>
            </div>

            {/* Single Image */}
            <div className="relative z-10 flex justify-center">
              <img
                src={cat.img}
                alt={cat.name}
                className="w-full h-52 object-cover rounded-lg mx-6 transform group-hover:scale-105 transition duration-300"
              />
            </div>

            {/* Description */}
            <div className="p-6 relative z-10 text-center flex-1 flex flex-col">
              <p className="text-gray-300 mt-3 text-sm leading-relaxed flex-1">
                {cat.description}
              </p>
            </div>

            {/* Button */}
            <div className="p-6 text-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(cat.link)}
                className="cursor-pointer px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-400 hover:to-blue-400 transition"
              >
                View All Details
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
