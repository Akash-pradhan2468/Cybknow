import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaRobot, FaBrain, FaChartLine, FaLanguage } from "react-icons/fa";

const useCases = [
  {
    title: "Predictive Analytics",
    description:
      "Anticipate customer behavior, optimize operations, and identify market trends with AI-powered forecasting.",
  },
  {
    title: "Natural Language Processing",
    description:
      "Enhance interactions with chatbots, voice assistants, and sentiment analysis tools.",
  },
  {
    title: "Computer Vision",
    description:
      "Leverage image and video recognition for automation in healthcare, retail, and security.",
  },
  {
    title: "Recommendation Systems",
    description:
      "Boost engagement and sales with AI-driven personalized recommendations.",
  },
  {
    title: "AI-Powered Automation",
    description:
      "Streamline workflows, reduce manual effort, and improve efficiency with intelligent automation.",
  },
  {
    title: "Fraud Detection",
    description:
      "Identify anomalies and prevent financial or transactional fraud in real-time.",
  },
];

const reasons = [
  {
    icon: <FaRobot className="text-2xl text-pink-500" />,
    title: "Cutting-Edge AI Solutions",
    desc: "We build advanced AI systems tailored to your industry and business goals.",
  },
  {
    icon: <FaBrain className="text-2xl text-purple-400" />,
    title: "Expert Data Scientists",
    desc: "Our AI engineers and data scientists have expertise in deep learning, NLP, and analytics.",
  },
  {
    icon: <FaChartLine className="text-2xl text-yellow-400" />,
    title: "Data-Driven Insights",
    desc: "Turn raw data into actionable insights for smarter business decisions.",
  },
  {
    icon: <FaLanguage className="text-2xl text-green-400" />,
    title: "NLP & Conversational AI",
    desc: "Deliver natural interactions with intelligent bots and assistants.",
  },
];

export default function AIMLPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="bg-gradient-to-br from-[#0D0128] via-[#180636] to-[#0D0128] min-h-screen text-white py-20 px-6 relative overflow-hidden">
      {/* Background floating particles */}
      {[...Array(25)].map((_, i) => (
        <motion.span
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full opacity-30"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{ y: [0, -10, 0], opacity: [0.3, 0.6, 0.3] }}
          transition={{
            duration: 6 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12 relative z-10"
      >
        {/* Left Text */}
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Drive Innovation with AI & Machine Learning
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            CYBKNOW enables businesses to harness AI and ML for automation,
            predictive analytics, NLP, and computer vision — unlocking smarter
            decisions, deeper insights, and future-ready innovation.
          </p>
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.05 }}
            className="inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg"
          >
            Build My AI Solution
          </motion.a>
        </div>

        {/* Right Lottie Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex-1 flex justify-center"
        >
          <Player
            autoplay
            loop
            src="https://assets7.lottiefiles.com/packages/lf20_x1ikbkcj.json"
            style={{ height: 320, width: 320, margin: "0 auto" }}
          />
        </motion.div>
      </motion.div>

      {/* Use Cases Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="max-w-7xl mx-auto mt-20 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          AI & ML Service Offerings
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-xl border border-pink-400 shadow-md hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] transition"
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
        className="max-w-7xl mx-auto mt-24 relative z-10"
      >
        <h2 className="text-3xl font-bold text-center mb-10 text-white">
          Why Choose CYBKNOW for AI & ML?
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white/10 p-6 rounded-xl border border-pink-400 hover:shadow-[0_0_20px_rgba(244,63,94,0.5)] backdrop-blur-md transition"
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
