import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

const RemoteLottie = ({ url, className = "w-20 h-20 mx-auto mb-3" }) => {
  const [animationData, setAnimationData] = useState(null);
  const [error, setError] = useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setAnimationData)
      .catch(() => setError(true));
  }, [url]);

  if (error)
    return (
      <div className="text-center text-red-400 text-sm italic">
        Animation failed to load.
      </div>
    );
  if (!animationData)
    return (
      <div
        className={`${className} bg-white/10 rounded-full animate-pulse`}
      />
    );

  return (
    <Lottie
      animationData={animationData}
      loop
      autoplay
      className={className}
    />
  );
};

const steps = [
  {
    title: "Requirement Analysis",
    lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_tnrzlN.json",
    details:
      "In this stage, we work closely with stakeholders to understand objectives, target audience, and expected outcomes. Detailed documentation is created for a solid foundation.",
  },
  {
    title: "UI/UX Design",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_mjlh3hcy.json",
    details:
      "We create wireframes, prototypes, and design mockups focusing on usability and modern aesthetics. Our design process ensures clarity, consistency, and delightful user experiences.",
  },
  {
    title: "Development",
    lottieUrl: "https://assets4.lottiefiles.com/packages/lf20_tfb3estd.json",
    details:
      "Using Agile methodology, our developers code scalable solutions. We ensure clean architecture, optimized performance, and integration of APIs and databases for smooth workflows.",
  },
  {
    title: "Testing & QA",
    lottieUrl: "https://assets2.lottiefiles.com/packages/lf20_jtbfg2nb.json",
    details:
      "We perform unit tests, integration tests, and usability testing to identify issues early. Automated and manual testing ensures the product is reliable, secure, and performs flawlessly.",
  },
  {
    title: "Deployment",
    lottieUrl: "https://assets7.lottiefiles.com/packages/lf20_w51pcehl.json",
    details:
      "After successful QA, we deploy applications to production environments. Continuous monitoring, support, and updates ensure long-term success and scalability.",
  },
];

const HowWeWork = () => {
  const [activeStep, setActiveStep] = useState(null); // For popup
  const [hoveredStep, setHoveredStep] = useState(null); // For hover animation

  return (
    <section className="relative bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white py-20 px-4 sm:px-8 md:px-16 lg:px-24 overflow-hidden">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 tracking-wide"
      >
        How We Work
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.7 }}
        className="text-center text-gray-300 max-w-3xl mx-auto mb-16 text-sm sm:text-base md:text-lg leading-relaxed tracking-wide"
      >
        Our process is clear, modern, and focused on delivering innovation &
        quality at every stage.
      </motion.p>

      {/* Steps Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8">
        {steps.map((step, index) => {
          const isHovered = hoveredStep === index;

          return (
            <motion.div
              key={index}
              className="relative cursor-pointer rounded-3xl p-6 flex flex-col items-center text-center transition-all duration-500 bg-white/5 backdrop-blur-md border border-white/10"
              onMouseEnter={() => setHoveredStep(index)}
              onMouseLeave={() => setHoveredStep(null)}
              onClick={() => setActiveStep(index)}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
            >
              {/* Step Number (inside card, above animation) */}
              <div className="mb-4 bg-gradient-to-r from-purple-600 to-pink-500 text-white text-xs sm:text-sm md:text-base font-bold px-3 sm:px-4 py-1 rounded-full shadow-md">
                Step {index + 1}
              </div>

              {/* Neon glowing circle */}
              <motion.div
                className={`w-20 sm:w-24 md:w-28 h-20 sm:h-24 md:h-28 rounded-full p-3 mb-3 flex items-center justify-center transition-all duration-500 ${
                  isHovered
                    ? "bg-gradient-to-tr from-purple-600 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)]"
                    : "bg-white/10"
                }`}
                animate={{ scale: isHovered ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <RemoteLottie url={step.lottieUrl} className="w-full h-full" />
              </motion.div>

              {/* Step Title */}
              <motion.h3
                className={`text-sm sm:text-base md:text-lg font-semibold transition-colors duration-300 px-2 break-words ${
                  isHovered ? "text-white" : "text-gray-200"
                }`}
              >
                {step.title}
              </motion.h3>

              {/* Glow Border Overlay */}
              <AnimatePresence>
                {isHovered && (
                  <motion.div
                    layoutId="glow-border"
                    className="absolute inset-0 rounded-3xl border-2 border-purple-500 pointer-events-none shadow-[0_0_20px_rgba(236,72,153,0.5)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Animated Popup Modal */}
      <AnimatePresence>
        {activeStep !== null && (
          <>
            {/* Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStep(null)}
            />
            {/* Modal */}
            <motion.div
              className="fixed inset-0 flex items-center justify-center z-50 px-4"
              initial={{ opacity: 0, scale: 0.8, y: 50 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 50 }}
              transition={{ type: "spring", stiffness: 120, damping: 20 }}
            >
              <div className="relative bg-gradient-to-br from-[#1A0540] to-[#0E0132] p-6 sm:p-8 rounded-3xl shadow-2xl max-w-lg w-full text-center border border-purple-500/40">
                {/* Close Button */}
                <button
                  className="absolute top-3 right-3 text-red-500 hover:text-red-700 cursor-pointer text-lg"
                  onClick={() => setActiveStep(null)}
                >
                  ✕
                </button>

                {/* Lottie Animation */}
                <div className="w-24 sm:w-28 h-24 sm:h-28 mx-auto mb-6">
                  <RemoteLottie
                    url={steps[activeStep].lottieUrl}
                    className="w-full h-full"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-2xl md:text-3xl font-bold mb-4">
                  {steps[activeStep].title}
                </h3>

                {/* Details */}
                <p className="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed">
                  {steps[activeStep].details}
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HowWeWork;
