import React, { useEffect, useState, useRef, useCallback, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import { FaComments, FaTimes, FaWhatsapp } from "react-icons/fa";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const services = [
  { label: "Cyber Threat Detection" },
  { label: "Web App Testing" },
  { label: "Mobile App Security" },
  { label: "Cloud Infra Audit" },
  { label: "Red Team Sim" },
  { label: "Website Development" },
];

// ✅ Memoized Particles to prevent re-render refresh
const MemoizedParticles = memo(({ options, init }) => (
  <Particles init={init} options={options} />
));

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const [chatOpen, setChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! I'm CybBot 🤖. How can I help you today?" },
  ]);
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);
  const messagesEndRef = useRef(null);

  // ✅ useCallback so it's stable and doesn't re-trigger renders
  const particlesInit = useCallback(async (main) => {
    await loadFull(main);
  }, []);

  // Particle configuration
  const particlesOptions = {
    background: { opacity: 0 },
    particles: {
      number: { value: 60 },
      color: { value: ["#3B82F6", "#EC4899", "#9333EA"] },
      links: { enable: true, color: "#ffffff", distance: 150 },
      move: { enable: true, speed: 1 },
      shape: { type: "circle" },
      opacity: { value: 0.7 },
      size: { value: { min: 1, max: 4 } },
    },
    interactivity: {
      events: { onHover: { enable: true, mode: "grab" } },
      modes: { grab: { distance: 200, links: { opacity: 0.5 } } },
    },
    fullScreen: { enable: false }, // Confine to container
  };

  // Cycle service labels every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % services.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  // Auto-scroll chat to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // Auto-focus chat input when chat opens
  useEffect(() => {
    if (chatOpen) inputRef.current?.focus();
  }, [chatOpen]);

  // Handle sending user message and bot response
  const handleSendMessage = () => {
    if (!userInput.trim()) return;
    const userMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, userMessage]);
    setUserInput("");
    setIsTyping(true);
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "Thanks for reaching out! A CYBKNOW expert will respond shortly.",
        },
      ]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] min-h-screen flex items-center px-6 sm:px-10 pb-24">
      {/* Cyber Grid Background, Particles, Animated Gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="cyber-grid" />
        {/* ✅ Memoized Particles prevents refresh */}
        <MemoizedParticles init={particlesInit} options={particlesOptions} />
        <div className="absolute inset-0 animate-gradient bg-gradient-to-r from-purple-600/10 via-pink-500/10 to-blue-500/10" />
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl w-full flex flex-col md:grid md:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full flex justify-center order-1 md:order-2"
        >
          <DotLottieReact
            autoplay
            loop
            src="https://lottie.host/2abb6f76-5a5b-4768-8258-9ed7b7706c33/fw5MXEahH3.lottie"
            className="w-[300px] sm:w-[400px] md:w-[450px] lg:w-[500px] aspect-square"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-white order-2 md:order-1 text-center md:text-left"
        >
          <motion.div className="mb-4 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/10 text-sm font-medium border border-white/20 backdrop-blur-sm shadow-sm w-fit mx-auto md:mx-0">
            <span className="w-2 h-2 rounded-full bg-[#EC4899] animate-ping"></span>
            Trusted by 100+ Clients Across India
          </motion.div>
          <div className="mb-2 flex justify-center md:justify-start">
            <AnimatePresence mode="wait">
              <motion.h1
                key={services[index].label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-2xl sm:text-4xl lg:text-5xl leading-tight font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#3B82F6] to-[#EC4899] whitespace-nowrap"
              >
                {services[index].label}
              </motion.h1>
            </AnimatePresence>
          </div>
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-xl sm:text-2xl lg:text-3xl font-semibold mb-4"
          >
            CYBKNOW – Your Cybersecurity & Web Excellence Partner
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-gray-300 text-lg sm:text-xl mb-8 max-w-xl mx-auto md:mx-0"
          >
            We protect your digital assets and craft exceptional websites. From app security to custom design & development — CYBKNOW secures and scales your brand.
          </motion.p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
            <a
              href="https://calendly.com/saurav-cybknow/cybknow-technology-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded-full bg-gradient-to-r from-[#3B82F6] to-[#EC4899] text-white font-semibold text-lg shadow-lg hover:shadow-pink-400/40"
            >
              Talk to an Expert
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Chat Button */}
      <motion.div className="fixed bottom-6 right-6 z-50" whileHover={{ scale: 1.1 }}>
        <button
          className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full shadow-xl text-white"
          onClick={() => setChatOpen(!chatOpen)}
        >
          {chatOpen ? <FaTimes size={20} /> : <FaComments size={20} />}
        </button>
      </motion.div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918117842014"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 z-50 bg-green-500 p-4 rounded-full shadow-xl text-white"
        whileHover={{ scale: 1.1 }}
      >
        <FaWhatsapp size={24} />
      </motion.a>

      {/* Chat Popup */}
      <AnimatePresence>
        {chatOpen && (
          <motion.div
            className="fixed bottom-20 right-6 w-80 bg-white text-gray-800 rounded-xl shadow-xl p-4 z-50 flex flex-col"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
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
            <div className="h-48 overflow-y-auto flex flex-col space-y-2 mb-2 text-sm">
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
                <motion.div className="text-xs text-gray-400 italic" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  CybBot is typing...
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>
            <div className="flex gap-2 mt-auto">
              <input
                ref={inputRef}
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                placeholder="Type your message..."
                className="flex-1 border p-2 rounded text-sm outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button onClick={handleSendMessage} className="bg-purple-600 text-white px-3 rounded text-sm font-semibold">
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HeroSection;
