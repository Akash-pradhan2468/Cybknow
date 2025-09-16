import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaPaperPlane,
  FaComments,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";
import { Player } from "@lottiefiles/react-lottie-player";

const faqs = [
  {
    question: "What services does Cybknow Technology provide?",
    answer:
      "We specialize in cybersecurity solutions, software and web development, penetration testing, security audits, and implementation of secure IT infrastructures.",
  },
  {
    question: "Can Cybknow Technology provide customized solutions for businesses?",
    answer:
      "Absolutely! We tailor our cybersecurity and software development services based on the unique requirements of each business, ensuring scalable and secure solutions.",
  },
  {
    question: "Do you offer ongoing support after project delivery?",
    answer:
      "Yes, we provide dedicated support and maintenance services to ensure your applications, systems, and networks remain secure and fully operational.",
  },
  {
    question: "Are your services suitable for both startups and enterprises?",
    answer:
      "Yes, we cater to organizations of all sizes—from startups seeking secure product development to large enterprises needing advanced cybersecurity frameworks.",
  },
  {
    question: "How do you ensure the security of my business systems?",
    answer:
      "We use industry-standard security protocols, regular vulnerability assessments, penetration testing, and continuous monitoring to protect your systems from threats.",
  },
  {
    question: "Can Cybknow Technology integrate with existing IT infrastructure?",
    answer:
      "Yes, our solutions are designed to seamlessly integrate with your current systems, ensuring minimal disruption and maximum efficiency.",
  },
  {
    question: "How can I contact Cybknow Technology for services?",
    answer:
      "You can reach us through our contact form, email, or direct call. We are always ready to discuss project requirements and provide tailored solutions.",
  },
];


const Support = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm CybBot 🤖. How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const messagesEndRef = useRef(null);

  const toggleFAQ = (i) => {
    setExpandedFAQ(expandedFAQ === i ? null : i);
  };

  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    const userMsg = { sender: "user", text: userInput.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setUserInput("");
    setIsTyping(true);

    setTimeout(() => {
      const lower = userMsg.text.toLowerCase();
      let reply = "Sorry, I didn’t understand that. Please rephrase.";

      if (lower.includes("pentest") || lower.includes("penetration")) {
        reply =
          "Penetration testing identifies vulnerabilities before hackers do.";
      } else if (lower.includes("price") || lower.includes("cost")) {
        reply = "Prices vary by scope. Contact our team for a custom quote.";
      } else if (lower.includes("certified") || lower.includes("team")) {
        reply = "Yes, our team is CEH, OSCP, and CISSP certified.";
      }

      setMessages((prev) => [...prev, { sender: "bot", text: reply }]);
      setIsTyping(false);
    }, 1000);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setShowThankYou(true);

    // ✅ Clear form fields after submit
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => setShowThankYou(false), 3000);
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] px-4  text-white relative overflow-hidden">
      {/* Floating Background Glows */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-700 opacity-20 blur-3xl rounded-full animate-pulse" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-blue-700 opacity-20 blur-3xl rounded-full animate-pulse" />

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto mb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-8"
      >
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold text-purple-300 mb-4 drop-shadow-lg">
            Support Center
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl mb-6 max-w-xl mx-auto md:mx-0">
            Got a question or need assistance? We’re here to help. Reach out to
            our expert support team or chat with CybBot for instant guidance.
          </p>
          <p className="text-purple-400 text-sm sm:text-base font-medium tracking-wide">
            Quick answers, personalized support, and instant chatbot assistance.
          </p>
        </div>
        <div className="flex-1 flex justify-center">
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_zrqthn6o.json"
            className="w-[90%] max-w-[600px] h-auto"
          />
        </div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="backdrop-blur-lg bg-white/10 text-white rounded-3xl border border-purple-500 shadow-2xl p-6 sm:p-8 w-full max-w-4xl mx-auto mb-16"
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-purple-300 text-center">
          Send Us a Message
        </h2>
        <form
          onSubmit={handleFormSubmit}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
        >
          <div className="w-full">
            <label className="block text-sm mb-1">Name</label>
            <input
              type="text"
              required
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>
          <div className="w-full">
            <label className="block text-sm mb-1">Email</label>
            <input
              type="email"
              required
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition"
            />
          </div>
          <div className="col-span-1 sm:col-span-2 w-full">
            <label className="block text-sm mb-1">Message</label>
            <textarea
              rows="4"
              required
              placeholder="Describe your issue..."
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className="w-full p-3 rounded-lg bg-white/10 text-white border border-purple-400 focus:ring-2 focus:ring-purple-500 outline-none transition resize-none"
            ></textarea>
          </div>
          <div className="col-span-1 sm:col-span-2 text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center mx-auto shadow-lg"
            >
              <FaPaperPlane /> Submit
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* FAQ Accordion */}
      <div className="max-w-4xl mx-auto mb-16">
        <h2 className="text-3xl font-bold mb-8 text-purple-300 text-center">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              className={`rounded-xl overflow-hidden shadow-xl border transition ${
                expandedFAQ === i
                  ? "border-purple-400 bg-gradient-to-r from-purple-900/40 to-indigo-900/40"
                  : "border-purple-500 bg-white/10"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.4 }}
            >
              {/* Question button */}
              <button
                onClick={() => toggleFAQ(i)}
                className={`flex items-center justify-between w-full text-left px-6 py-5 text-lg font-semibold transition-all duration-300 ${
                  expandedFAQ === i ? "text-purple-300" : "text-white"
                } hover:scale-[1.02] hover:bg-purple-600/20`}
              >
                {faq.question}
                <motion.span
                  animate={{ rotate: expandedFAQ === i ? 180 : 0 }}
                  transition={{ type: "spring", stiffness: 250, damping: 20 }}
                  className={`ml-2 transition-colors ${
                    expandedFAQ === i ? "text-purple-300" : "text-gray-300"
                  }`}
                >
                  <FaChevronDown size={20} />
                </motion.span>
              </button>

              {/* Animated Answer */}
              <AnimatePresence>
                {expandedFAQ === i && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="px-6 pb-5 text-base leading-relaxed text-gray-200 bg-gradient-to-r from-purple-600/10 to-indigo-600/10 border-t border-purple-500/30"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-10 text-center text-gray-300 space-y-3"
      >
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-purple-400" /> info@cybknow.com
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-purple-400" /> +91 8117842014
          </div>
        </div>
      </motion.div>

      {/* Floating Chat Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
      >
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-xl text-white hover:shadow-2xl transition"
          onClick={() => setChatOpen(!chatOpen)}
        >
          {chatOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
        </button>
      </motion.div>

      {/* Chat Popup */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 md:w-96 bg-white text-gray-800 rounded-xl shadow-2xl p-4 z-50 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="flex items-center gap-2 mb-2">
              <Player
                autoplay
                loop
                src="https://assets4.lottiefiles.com/packages/lf20_jcikwtux.json"
                style={{ width: "30px", height: "30px" }}
              />
              <span className="font-bold text-purple-700">CybBot</span>
            </div>
            <div className="h-48 md:h-60 overflow-y-auto flex flex-col space-y-2 mb-2 text-sm scrollbar-thin scrollbar-thumb-purple-500 scrollbar-track-purple-900">
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  className={`p-2 rounded-md max-w-[80%] ${
                    msg.sender === "bot"
                      ? "bg-purple-100 text-purple-900 self-start"
                      : "bg-blue-500 text-white self-end ml-auto"
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  {msg.text}
                </motion.div>
              ))}
              {isTyping && (
                <motion.div
                  className="text-xs text-gray-400 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  CybBot is typing...
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2 mt-auto">
              <input
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border p-2 rounded text-sm outline-none focus:ring-2 focus:ring-purple-500 transition"
              />
              <button
                onClick={handleSendMessage}
                className="bg-purple-600 text-white px-3 rounded text-sm font-semibold hover:bg-purple-700 transition"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ✅ Thank You Animation */}
      <AnimatePresence>
        {showThankYou && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/70"
          >
            <Player
              autoplay
              keepLastFrame
              src="https://assets6.lottiefiles.com/packages/lf20_jbrw3hcz.json"
              style={{ height: 300, width: 300 }}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-white text-xl mt-4 font-semibold text-center px-4"
            >
              Thank you! Your message has been submitted.
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Support;
