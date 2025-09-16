import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  FaHeartbeat,
  FaChalkboardTeacher,
  FaShoppingCart,
  FaPiggyBank,
  FaNetworkWired,
  FaRobot,
} from "react-icons/fa";

const industries = [
  {
    name: "HealthTech",
    icon: <FaHeartbeat />,
    themeColor: "#9333EA",
    description:
      "We deliver smart healthcare solutions such as teleconsultation, EHR platforms, appointment systems, and wearable device integrations, enabling better patient care through digital transformation.",
    link: "/industries/health",
    features: [
      {
        name: "Remote Patient Monitoring",
        desc: "Track patient vitals in real-time using IoT and AI analytics.",
        img: "https://socialmobile.com/wp-content/uploads/2023/03/T8-Healthcare-Remote-Patient-Monitoring-1024x683.jpg",
      },
      {
        name: "EHR System Integration",
        desc: "Centralized medical data access for hospitals and clinics.",
        img: "https://blog.cmecorp.com/hubfs/6%20Key%20Considerations%20for%20a%20Successful%20EHR%20Implementation.jpg",
      },
    ],
  },
  {
    name: "EdTech",
    icon: <FaChalkboardTeacher />,
    themeColor: "#3B82F6",
    description:
      "We empower education institutions with eLearning platforms, LMS solutions, AI-based testing, and virtual classrooms that transform learning into a digital experience.",
    link: "/industries/education",
    features: [
      {
        name: "Smart Learning Platforms",
        desc: "Interactive video classes, quizzes and gamified learning.",
        img: "https://cdni.iconscout.com/illustration/premium/thumb/online-learning-platform-5370124-4494865.png",
      },
      {
        name: "Virtual Classroom",
        desc: "Live classes, attendance tracking and content sharing tools.",
        img: "https://blog.globalindianschool.org/hubfs/IMG_0300.jpg",
      },
    ],
  },
  {
    name: "E-Commerce",
    icon: <FaShoppingCart />,
    themeColor: "#F59E0B",
    description:
      "We build scalable e-commerce ecosystems, payment integrations, logistics solutions, and personalized shopping experiences powered by AI recommendations.",
    link: "/industries/ecommerce",
    features: [
      {
        name: "Omnichannel Commerce",
        desc: "Integrated online and offline buying experience.",
        img: "https://media.istockphoto.com/id/2166319912/photo/omni-channel-marketing-concept-businessman-holding-digital-representation-of-omni-channel.jpg?s=612x612&w=0&k=20&c=kiSBzmNIGZ2QWfizIS2AV7liOGpoJ6HmhfA9ffCAt84=",
      },
      {
        name: "AI Recommendation Engine",
        desc: "Drive sales with personalized product suggestions.",
        img: "https://www.algolia.com/files/live/sites/algolia-assets/files/blogs/bannerimages/what-role-does-ai-play-in-recommendation.webp",
      },
    ],
  },
  {
    name: "FinTech",
    icon: <FaPiggyBank />,
    themeColor: "#06B6D4",
    description:
      "We innovate financial experiences through secure wallets, KYC onboarding, real-time analytics dashboards, lending automation, and open banking APIs.",
    link: "/industries/fintech",
    features: [
      {
        name: "Digital Wallets & UPI",
        desc: "Secure transactions with QR & multi-factor authentication.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_PiaSUh-2R8pGtERh-uI4TSJHxgialVNSy3iz5iw-WDFGRn5-56IrUSRY12ODA0ta2fU&usqp=CAU",
      },
      {
        name: "Loan Origination System",
        desc: "Automate KYC, credit scoring and approvals using AI.",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxtfjhMNOorwTDLNCm3wrfUy7oebSy6RP3CnHhcHD7-VVxGhc8g9rn9L_S8cGktmjrgoY&usqp=CAU",
      },
    ],
  },
  {
    name: "IoT & Smart Solutions",
    icon: <FaNetworkWired />,
    themeColor: "#10B981",
    description:
      "We help enterprises build IoT ecosystems and secure them with modern protocols, enabling smart devices, industrial automation, and connected products.",
    link: "/industries/iot",
    features: [
      {
        name: "Smart Device Integration",
        desc: "IoT gateways, connected sensors, and real-time analytics dashboards.",
        img: "https://media.istockphoto.com/id/1389880494/photo/concept-of-smart-home-control-via-mobile-device.jpg?s=612x612&w=0&k=20&c=bAReI9H45rwZCld-ZT0EwqzZs4HlEytIKNR_PQPyilY=",
      },
      {
        name: "IoT Security",
        desc: "Protect devices and networks with advanced authentication and encryption.",
        img: "https://thumbs.dreamstime.com/b/iot-security-theme-downtown-san-francisco-skyline-buildings-164239202.jpg",
      },
    ],
  },
  {
    name: "AI & Machine Learning",
    icon: <FaRobot />,
    themeColor: "#F43F5E",
    description:
      "We enable businesses to harness AI and ML for automation, predictive analytics, NLP, and computer vision to drive smarter decisions and innovations.",
    link: "/industries/ai",
    features: [
      {
        name: "Predictive Analytics",
        desc: "Anticipate customer behavior and market trends using AI-powered forecasting.",
        img: "https://www.hdatasystems.com/assets/uploads/banner/1639602922.jpg",
      },
      {
        name: "Natural Language Processing",
        desc: "Enhance customer interactions with chatbots, voice assistants, and sentiment analysis.",
        img: "https://media.istockphoto.com/id/1790814384/photo/natural-language-processing.jpg?s=612x612&w=0&k=20&c=ra9ZbtRvF7IgMm_JQc4Fqi_4M5bsI532BUdu_Kr8xJA=",
      },
    ],
  },
];

const IndustriesSection = () => {
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
        className="text-center text-4xl sm:text-5xl font-extrabold mb-16 relative z-10 bg-white bg-clip-text text-transparent"
      >
        Industries We Serve
      </motion.h1>

      {/* Industries Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto relative z-10">
        {industries.map((industry, i) => (
          <motion.div
            key={industry.name}
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
                backgroundColor: industry.themeColor,
                scale: orbScale,
                opacity: orbOpacity,
              }}
              animate={{ y: [0, 18, 0], x: [0, -12, 0] }}
              transition={{ duration: 7, repeat: Infinity }}
            />

            {/* Header */}
            <div className="p-6 relative z-10">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="text-3xl text-purple-300">
                  {industry.icon}
                </span>
                {industry.name}
              </h2>
              <p className="text-gray-300 mt-3 text-sm leading-relaxed">
                {industry.description}
              </p>
            </div>

            {/* Features (no scroll, responsive) */}
            <div className="divide-y divide-white/10 relative z-10 flex-1">
              {industry.features.map((feature, idx) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col sm:flex-row gap-4 p-4 hover:bg-white/10 transition rounded-xl"
                >
                  <img
                    src={feature.img}
                    alt={feature.name}
                    className="w-full sm:w-1/3 h-28 object-cover rounded-lg transform group-hover:scale-105 transition duration-300"
                  />
                  <div className="flex flex-col justify-center sm:w-2/3">
                    <h3 className="text-lg font-semibold text-white">
                      {feature.name}
                    </h3>
                    <p className="text-sm text-gray-300 leading-snug">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Button */}
            <div className="p-6 text-center relative z-10">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate(industry.link)}
                className="px-6 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-md hover:shadow-lg hover:from-purple-400 hover:to-blue-400 transition cursor-pointer"
              >
                View All Offerings
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default IndustriesSection;
