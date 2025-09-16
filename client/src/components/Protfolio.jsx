import React from "react";
import { motion } from "framer-motion";

const portfolioItems = [
  {
    title: "Enterprise Threat Detection Platform",
    description:
      "Developed a state-of-the-art threat detection platform protecting enterprises worldwide with AI-driven analytics.",
    img: "https://etedge-insights.com/wp-content/uploads/2025/04/threat-1.jpg",
    tags: ["AI", "Threat Detection", "Cloud"],
  },
  {
    title: "Secure Mobile Banking App",
    description:
      "Built a highly secure mobile banking app with biometric authentication and end-to-end encryption.",
    img: "https://www.worldfinance.com/wp-content/uploads/2021/06/B021_rt.jpg",
    tags: ["Mobile", "Security", "Encryption"],
  },
  {
    title: "IoT Security Management",
    description:
      "Designed a smart IoT security management system with edge computing and real-time anomaly detection.",
    img: "https://media.istockphoto.com/id/1363232669/photo/digital-transformation-iot-internet-of-things-digital-transformation-modern-technology.jpg?s=612x612&w=0&k=20&c=PXqTkNsZOc6tE4gVaWKO-DYbilu01WjhnmUe5lMrspI=",
    tags: ["IoT", "Edge Computing", "Cybersecurity"],
  },
];

const teamMembers = [
  {
    name: "Alice Johnson",
    role: "Chief Security Officer",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Bob Smith",
    role: "Lead Developer",
    img: "https://randomuser.me/api/portraits/men/46.jpg",
  },
  {
    name: "Carol Lee",
    role: "UX Designer",
    img: "https://randomuser.me/api/portraits/women/65.jpg",
  },
];

const PortfolioPage = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white px-6 sm:px-12 py-16">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#EC4899] whitespace-normal break-words px-4 sm:px-0 max-w-full leading-[1.2] pb-2">
          CybKnow Technology Portfolio
        </h1>

        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Showcasing our innovative cybersecurity solutions, development
          expertise, and client success stories.
        </p>
      </motion.div>

      {/* Portfolio Grid */}
      <motion.div className="grid gap-12 md:grid-cols-3 max-w-7xl mx-auto">
        {portfolioItems.map((item, i) => (
          <motion.article
            key={i}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 10px 30px rgba(236,72,153,0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
            className="bg-[#1a0540] rounded-xl overflow-hidden cursor-pointer shadow-md"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover transition-transform duration-300"
            />
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p className="text-gray-300 mb-4">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-semibold bg-gradient-to-r from-purple-600 to-pink-600 px-3 py-1 rounded-full cursor-default select-none"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>

      {/* Call to action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
        className="max-w-3xl mx-auto text-center mt-20"
      >
        <p className="mb-6 text-gray-400 text-lg">
          Interested in collaborating or learning more about our capabilities?
        </p>
        <a
          href="/contact"
          className="inline-block bg-gradient-to-r from-[#3B82F6] to-[#EC4899] text-white px-8 py-4 rounded-full font-bold tracking-wide shadow-lg hover:brightness-110 transition"
        >
          Contact Us
        </a>
      </motion.div>
    </section>
  );
};

export default PortfolioPage;
