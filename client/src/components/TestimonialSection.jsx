import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "Aditya Patra",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    feedback:
      "Working with our team was a great pleasure as they were always there to listen to my ideas and convert them to reality.",
  },
  {
    name: "Priya Sharma",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    feedback:
      "Amazing experience! The UI/UX quality and professionalism of the team stood out. They really brought our vision to life with precision.",
  },
  {
    name: "Rahul Mehta",
    image: "https://randomuser.me/api/portraits/men/51.jpg",
    rating: 5,
    feedback:
      "Great support, fantastic communication and brilliant design ideas. Their timely delivery helped us launch successfully.",
  },
];

const TestimonialSection = () => {
  return (
    <section className="min-h-[80vh] bg-gradient-to-br from-[#0E0132] via-[#1A0540] to-[#0E0132] text-white py-16 px-6 sm:px-12">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center text-4xl font-bold mb-2"
      >
        Client Testimonials
      </motion.h2>
      <p className="text-center text-gray-300 mb-10">
        See what satisfied clients are saying about us.
      </p>

      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 20 },
          768: { slidesPerView: 1, spaceBetween: 20 }, // still 1 on tablet
          1024: { slidesPerView: 2, spaceBetween: 32 }, // 2 on large screens
        }}
        className="max-w-3xl lg:max-w-6xl mx-auto"
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index} className="flex h-full">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl px-6 py-10 text-center text-white overflow-hidden flex flex-col h-full"
            >
              {/* Decorative blur ring */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 blur-xl opacity-30 pointer-events-none z-0"></div>

              <img
                src={item.image}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-full mx-auto border-4 border-white shadow-md mb-4 relative z-10"
              />
              <h4 className="text-lg font-bold relative z-10">{item.name}</h4>
              <div className="flex justify-center mt-1 mb-4 text-yellow-400 text-xl relative z-10">
                {"★".repeat(item.rating)}
                {"☆".repeat(5 - item.rating)}
              </div>
              <p className="text-sm text-gray-100 relative z-10 flex-grow flex items-center">
                <span className="text-4xl text-white/30 mr-1">“</span>
                {item.feedback}
                <span className="text-4xl text-white/30 ml-1">”</span>
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default TestimonialSection;
