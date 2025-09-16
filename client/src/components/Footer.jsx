import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaWhatsapp,
  FaYoutube,
  FaLinkedin,
  FaFacebookF,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

// Services
const serviceLinks = [
  { title: "Web App Pentesting", path: "/services/web-app-pentesting" },
  { title: "Mobile App Pentesting", path: "/services/mobile-app-pentesting" },
  { title: "Cloud Security", path: "/services/cloud-pentesting" },
  { title: "IoT Security", path: "/services/iot-pentesting" },
  { title: "Mobile App Development", path: "/services/mobile" },
  { title: "Website Development", path: "/services/web3" },
  { title: "IoT & Digital", path: "/services/iot" },
  { title: "Cloud Solutions", path: "/services/cloud" },
];

// Certifications
const certifications = [
  {
    src: "https://media.istockphoto.com/id/942287864/vector/iso-9001-2015-label-certification-new-version.jpg?s=612x612&w=0&k=20&c=BNxlzWbGc3v4GbNRSwqPrSpXQmabbjVLpxPXGMhvOaQ=",
    alt: "ISO",
  },
  {
    src: "https://www.journalofaccountancy.com/wp-content/uploads/sites/3/2016/06/soc-logo-1.JPG",
    alt: "SOC",
  },
  {
    src: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202110/gRf5_7yO_400x400_1200x768.jpeg",
    alt: "MSME",
  },
  {
    src: "https://creativehone.com/wp-content/uploads/2025/07/Design-Rush-logo.png",
    alt: "Partner",
  },
];

// ✅ Continuous infinite marquee (no reset at all)
function InfiniteMarquee({ items, speed = 60 }) {
  const [offset, setOffset] = useState(0);

  // Duplicate items many times so there’s always content filling screen
  const allItems = Array(1000).fill(items).flat(); // repeated 10x

  useEffect(() => {
    let animationFrame;
    let lastTime;

    const animate = (time) => {
      if (!lastTime) lastTime = time;
      const delta = time - lastTime;
      lastTime = time;

      // Just keep moving left, never reset
      setOffset((prev) => prev - (speed * delta) / 1000);

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [speed]);

  return (
    <div className="overflow-hidden w-full">
      <div
        className="flex items-center gap-10 whitespace-nowrap"
        style={{
          transform: `translateX(${offset}px)`,
          willChange: "transform",
        }}
      >
        {allItems.map((cert, i) => (
          <img
            key={i}
            src={cert.src}
            alt={cert.alt}
            className="h-16 sm:h-20 w-auto object-contain rounded-lg shadow-md bg-white p-2 flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#1B003A] via-[#240047] to-[#0A0028] text-white px-6 sm:px-10 lg:px-16 py-14">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(139,92,246,0.25),transparent_60%)] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 relative z-10">
        {/* About */}
        <div>
          <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Cybknow <br />
            <span className="text-lg font-semibold text-purple-300">
              Technology
            </span>
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed max-w-xs">
            Cybknow Technology is a global technology firm specializing in
            end-to-end cybersecurity solutions, penetration testing, and
            security services, along with innovative software development to
            help businesses stay secure and technologically advanced.
          </p>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-300">
            Our Services
          </h3>
          <ul className="space-y-2 text-sm">
            {serviceLinks.map((service, i) => (
              <li key={i}>
                <Link
                  to={service.path}
                  className="text-gray-300 hover:text-purple-400 transition-colors duration-300"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-300">
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/contact" className="hover:text-purple-400">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-purple-400">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="hover:text-purple-400">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-purple-400">
                About
              </Link>
            </li>
            <li>
              <a
                href="https://academy.cybknow.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-purple-400"
              >
                Cybknow Academy
              </a>
            </li>
          </ul>
        </div>

        {/* Location + Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-purple-300">
            Our Location
          </h3>
          <iframe
            title="Cybknow Map"
            className="rounded-lg w-full h-36 sm:h-40 mb-4 shadow-lg"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3731.722797783222!2d85.85786151486833!3d20.268830986407095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a19a1d014758575%3A0xc1345bf4aef6d71!2sCybknow%20Technology%20Private%20limited!5e0!3m2!1sen!2sin!4v1719973802349"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <p className="text-sm text-gray-300 mb-3">
            Bhubaneswar, Odisha, India 751006
          </p>

          <div className="space-y-2 text-sm text-gray-300">
            <a
              href="tel:+918117842014"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaPhoneAlt className="text-purple-400" /> +91 81178 42014
            </a>
            <a
              href="mailto:contact@cybknow.com"
              className="flex items-center gap-2 hover:text-purple-400 transition"
            >
              <FaEnvelope className="text-purple-400" /> contact@cybknow.com
            </a>
          </div>
        </div>
      </div>

      {/* ✅ Smooth Continuous Marquee */}
      <div className="mt-16 relative z-10 border-t border-purple-700 pt-6">
        <InfiniteMarquee items={certifications} speed={60} />
      </div>

      {/* Social */}
      <div className="mt-12 border-t border-purple-700 pt-6 text-center relative z-10">
        <div className="flex justify-center space-x-5 sm:space-x-6 mb-5">
          {[
            { icon: <FaInstagram size={22} />, link: "https://www.instagram.com/cybknow/" },
            { icon: <FaWhatsapp size={22} />, link: "https://wa.me/918117842014" },
            { icon: <FaYoutube size={22} />, link: "https://www.youtube.com/results?search_query=cybknow" },
            { icon: <FaLinkedin size={22} />, link: "https://www.linkedin.com/company/cybknow/" },
            { icon: <FaFacebookF size={22} />, link: "https://www.facebook.com/" },
          ].map((social, i) => (
            <a
              key={i}
              href={social.link}
              target="_blank"
              rel="noreferrer"
              className="text-purple-400 hover:text-white transition-colors"
            >
              {social.icon}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-400">
          <a
            href="https://www.google.com/search?q=cybknow"
            target="_blank"
            rel="noreferrer"
            className="hover:text-purple-300"
          >
            © {new Date().getFullYear()} Cybknow Technology Pvt. Ltd.
          </a>{" "}
          | All rights reserved
        </p>
      </div>
    </footer>
  );
}
