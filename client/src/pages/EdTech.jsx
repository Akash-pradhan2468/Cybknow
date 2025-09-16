import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import {
  FaBookOpen,
  FaLaptopCode,
  FaClock,
  FaUserGraduate,
} from "react-icons/fa";

const useCases = [
  {
    title: "Learning Management Systems",
    description:
      "Custom LMS platforms for schools, universities, and corporates.",
  },
  {
    title: "Virtual Classrooms",
    description:
      "Seamless real-time video classes with interactive whiteboards.",
  },
  {
    title: "AI Tutoring",
    description: "Personalized learning journeys using adaptive AI tutors.",
  },
  {
    title: "Gamified Learning",
    description: "Boost engagement with quizzes, leaderboards & badges.",
  },
  {
    title: "Course Marketplace",
    description: "Create platforms like Udemy to sell and manage courses.",
  },
  {
    title: "Student Analytics",
    description: "Track performance with real-time dashboards and insights.",
  },
];

const reasons = [
  {
    icon: <FaBookOpen className="text-2xl text-yellow-400" />,
    title: "EdTech Expertise",
    desc: "Years of experience building scalable platforms for modern learning.",
  },
  {
    icon: <FaLaptopCode className="text-2xl text-blue-500" />,
    title: "Custom Development",
    desc: "Tailored web and mobile apps to suit your learning goals.",
  },
  {
    icon: <FaClock className="text-2xl text-purple-400" />,
    title: "Faster Deployment",
    desc: "Agile delivery with iterative rollouts and feedback-driven updates.",
  },
  {
    icon: <FaUserGraduate className="text-2xl text-pink-400" />,
    title: "Student-Centric Design",
    desc: "UI/UX crafted to maximize engagement and retention.",
  },
];

export default function EdTech() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0D0128] via-[#180636] to-[#0D0128] min-h-screen text-white py-20 px-6 overflow-hidden">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12"
      >
        {/* Left Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Empowering Education Through Technology
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Deliver immersive, scalable, and smart learning experiences. From
            online classes to AI tutors and course platforms – CYBKNOW makes
            EdTech happen.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Get Started with Us
          </motion.a>
        </div>

        {/* Right Lottie Animation - Replaced with education related animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_kdx6cani.json" 
            // This is an education-themed animation (e.g. student learning or books)
            style={{ height: 320, width: 320, margin: "0 auto" }}
          />
        </motion.div>
      </motion.div>

      {/* Use Cases Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          EdTech Use Cases
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-purple-400 shadow-md hover:shadow-[0_0_20px_rgba(128,90,213,0.6)] transition"
            >
              <h3 className="text-xl font-bold text-white mb-2">
                {useCase.title}
              </h3>
              <p className="text-gray-300 text-sm">{useCase.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Why Choose Us Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-24"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Why Choose CYBKNOW for EdTech?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-purple-400 hover:shadow-[0_0_20px_rgba(128,90,213,0.6)]  backdrop-blur-md transition"
            >
              <div className="mb-3">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white mb-1">
                {item.title}
              </h4>
              <p className="text-gray-300 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
