import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";

const RemoteLottie = ({ url, className = "w-16 h-16 sm:w-20 sm:h-20" }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then(setData)
      .catch(() => setError(true));
  }, [url]);

  if (error)
    return <div className="text-xs text-red-400 italic">Animation failed.</div>;

  if (!data)
    return <div className={`${className} bg-gray-200 animate-pulse rounded-md`} />;

  return <Lottie animationData={data} loop autoplay className={className} />;
};

const reasons = [
  {
    title: "Expert Team",
    desc: "Industry professionals with years of experience delivering quality results. Our team combines domain expertise with innovative problem-solving to ensure every project meets the highest standards.",
    lottieUrl: "https://assets8.lottiefiles.com/packages/lf20_wd1udlcz.json",
  },
  {
    title: "Cutting-edge Tech",
    desc: "We leverage the latest technologies to create scalable and robust solutions. From cloud-native architectures to AI-driven automation, we stay ahead to give you a competitive edge.",
    lottieUrl: "https://assets9.lottiefiles.com/packages/lf20_0yfsb3a1.json",
  },
  {
    title: "Customer Focus",
    desc: "Your satisfaction is our priority, backed with strong support and continuous improvements. We believe in building long-term partnerships by putting your needs first.",
    lottieUrl: "https://assets1.lottiefiles.com/packages/lf20_1pxqjqps.json",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  hover: { scale: 1.03, transition: { duration: 0.2 } },
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, scale: 0.9, transition: { duration: 0.2 } },
};

const WhyChooseUs = () => {
  const [selected, setSelected] = React.useState(null);

  return (
    <section className="bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] py-12 px-4 sm:py-16 sm:px-6 lg:px-20">
      {/* Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-12"
      >
        Why Choose Us
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {reasons.map((reason, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="hover"
            viewport={{ once: true }}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center text-center transition-all border border-gray-100 hover:border-indigo-400 h-full cursor-pointer"
            onClick={() => setSelected(reason)}
          >
            {/* Animation */}
            <RemoteLottie
              url={reason.lottieUrl}
              className="mb-4 w-16 h-16 sm:w-20 sm:h-20"
            />

            {/* Title */}
            <h3 className="text-lg font-semibold text-indigo-600 mb-2">
              {reason.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed flex-1">
              {reason.desc.slice(0, 80)}...
            </p>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={modalVariants}
            onClick={() => setSelected(null)}
          >
            <motion.div
              className="bg-white rounded-2xl shadow-xl max-w-lg w-full p-6 relative flex flex-col items-center text-center"
              onClick={(e) => e.stopPropagation()}
              variants={modalVariants}
            >
              {/* Close Button */}
              <button
                className="absolute top-3 right-3 text-red-500 hover:text-red-800"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>

              {/* Lottie */}
              <RemoteLottie
                url={selected.lottieUrl}
                className="mb-4 w-32 h-32 sm:w-40 sm:h-40"
              />

              {/* Title */}
              <h3 className="text-xl font-bold text-indigo-600 mb-3">
                {selected.title}
              </h3>

              {/* Full Description */}
              <p className="text-gray-700 leading-relaxed">{selected.desc}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default WhyChooseUs;
