import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Updated logo sources with high-contrast or colored versions
const allLogos = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    alt: "Google",
  },
  {
    src: "https://nutriblendfit.com/assets/food1-BWbfwNzF.png",
    alt: "Nutriblend",
  },
  {
    src: "https://demo.bosathemes.com/bosa/it-services/wp-content/uploads/sites/146/2025/01/client-2.png",
    alt: "Okta",
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
    alt: "Amazon Web Services",
  },
  {
    src: "https://demo.bosathemes.com/bosa/it-services/wp-content/uploads/sites/146/2025/01/client-3.png",
    alt: "Deters",
  },
  {
    src: "https://demo.bosathemes.com/bosa/it-services/wp-content/uploads/sites/146/2025/01/client-4.png",
    alt: "Delivery",
  },
];

const LOGOS_PER_BATCH = 6;

const ClientLogos = () => {
  const [batchIndex, setBatchIndex] = useState(0);
  const batchCount = Math.ceil(allLogos.length / LOGOS_PER_BATCH);

  useEffect(() => {
    const timer = setInterval(() => {
      setBatchIndex((prev) => (prev + 1) % batchCount);
    }, 5000);
    return () => clearInterval(timer);
  }, [batchCount]);

  const currentBatch = allLogos.slice(
    batchIndex * LOGOS_PER_BATCH,
    batchIndex * LOGOS_PER_BATCH + LOGOS_PER_BATCH
  );

  return (
    <section className="bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] py-20 px-6 text-center text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-14 text-gray-100 drop-shadow-lg"
      >
        Trusted by global leaders in tech & security
      </motion.h2>

      <AnimatePresence mode="wait">
        <motion.div
          key={batchIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-10 max-w-5xl mx-auto items-center"
        >
          {currentBatch.map((logo, idx) => (
            <motion.div
              key={logo.alt}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.05 }}
              className="bg-white backdrop-blur-md rounded-xl p-4 flex items-center justify-center shadow-lg hover:shadow-xl transition"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-12 object-contain drop-shadow-md"
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ClientLogos;
