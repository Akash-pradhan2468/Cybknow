import React, { useState, useEffect, Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { FaBrain, FaMobileAlt, FaGlobe, FaMicrochip, FaCloudUploadAlt, FaBullhorn, FaShieldAlt, FaNetworkWired, FaCloud } from "react-icons/fa";
import { MdBusiness, MdHealthAndSafety, MdCastForEducation, MdShoppingCart, MdSecurity, MdDeviceHub } from "react-icons/md";
import logo from "../assets/icon.png";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState({});
  const [hoveredMenu, setHoveredMenu] = useState(null);

  const navItems = [
    {
      label: "Services",
      path: "/services",
      submenu: {
        col1: [
          { label: "Mobile Application", icon: <FaMobileAlt />, path: "/services/mobile" },
          { label: "Web Development", icon: <FaGlobe />, path: "/services/web3" },
          { label: "IoT & Digital", icon: <FaMicrochip />, path: "/services/iot" },
          { label: "Cloud Solutions", icon: <FaCloudUploadAlt />, path: "/services/cloud" },
        ],
        col2: [
          { label: "Mobile App Pentesting", icon: <MdSecurity />, path: "/services/mobile-app-pentesting" },
          { label: "Web App Pentesting", icon: <FaShieldAlt />, path: "/services/web-app-pentesting" },
          { label: "IoT Pentesting", icon: <FaNetworkWired />, path: "/services/iot-pentesting" },
          { label: "Cloud Pentesting", icon: <FaCloud />, path: "/services/cloud-pentesting" },
        ],
      },
    },
    {
      label: "Industries",
      path: "/industries",
      submenu: {
        col1: [
          { label: "HealthTech", icon: <MdHealthAndSafety />, path: "/industries/health" },
          { label: "EdTech", icon: <MdCastForEducation />, path: "/industries/education" },
          { label: "IoT & Smart Solutions", icon: <MdDeviceHub />, path: "/industries/iot" },
        ],
        col2: [
          { label: "FinTech", icon: <MdBusiness />, path: "/industries/finance" },
          { label: "E-Commerce", icon: <MdShoppingCart />, path: "/industries/ecommerce" },
          { label: "AI & Machine Learning", icon: <FaBrain />, path: "/industries/ai" },
        ],
      },
    },
    { label: "Pricing", path: "/pricing" },
    { label: "Support", path: "/support" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleMobileDropdown = (label) => {
    setMobileDropdowns((prev) => ({
      ...prev,
      [label]: !prev[label],
    }));
  };

  return (
    <nav
      className={`px-4 sm:px-8 lg:px-12 py-4 flex justify-between items-center shadow-md sticky top-0 z-50 transition duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-[#1B003A]/80 via-[#240047]/80 to-[#1B003A]/80 backdrop-blur-md"
          : "bg-gradient-to-r from-[#1B003A] via-[#240047] to-[#1B003A]"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center space-x-3">
        <img src={logo} alt="Logo" className="h-8 sm:h-10 lg:h-12 object-contain" />
        <h1 className="text-white font-bold text-lg sm:text-xl lg:text-2xl">CYBKNOW</h1>
      </Link>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 lg:gap-12 items-center text-sm lg:text-base font-medium relative">
        {navItems.map((item) => (
          <li
            key={item.label}
            className="relative group"
            onMouseEnter={() => item.submenu && setHoveredMenu(item.label)}
            onMouseLeave={() => setHoveredMenu(null)}
          >
            {item.submenu ? (
              <Link
                to={item.path}
                className={`flex items-center gap-1 transition-colors duration-200 ${
                  location.pathname.startsWith(item.path)
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {item.label}
                <HiChevronDown
                  className={`transition-transform ${hoveredMenu === item.label ? "rotate-180" : ""}`}
                  aria-haspopup="true"
                  aria-expanded={hoveredMenu === item.label}
                />
              </Link>
            ) : (
              <Link
                to={item.path}
                className={`transition-colors duration-200 ${
                  location.pathname === item.path
                    ? "text-blue-500"
                    : "text-gray-300 hover:text-blue-500"
                }`}
              >
                {item.label}
              </Link>
            )}

            {/* Desktop Dropdown */}
            {item.submenu && (
              <AnimatePresence>
                {hoveredMenu === item.label && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-[90vw] sm:w-[500px] bg-white shadow-xl rounded-lg py-4 px-4 z-50"
                  >
                    <div className="grid grid-cols-2 gap-4 sm:gap-6">
                      {[item.submenu.col1, item.submenu.col2].map((col, colIdx) => (
                        <div key={colIdx} className="flex flex-col gap-2">
                          {col.map((sub, i) => (
                            <Link
                              key={i}
                              to={sub.path}
                              className={`flex items-center px-2 py-2 gap-2 transition ${
                                location.pathname === sub.path
                                  ? "text-blue-600 bg-blue-50"
                                  : "text-gray-800 hover:bg-blue-50 hover:text-blue-600"
                              }`}
                            >
                              {sub.icon}
                              <span className="truncate">{sub.label}</span>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </li>
        ))}
      </ul>

      {/* Contact Button (Desktop) */}
      <Link
        to="/contact"
        className="hidden md:inline-block bg-gradient-to-r from-purple-600 to-indigo-500 text-white font-semibold px-4 py-2 rounded-lg shadow-md hover:opacity-90 transition text-xs sm:text-sm lg:text-base"
      >
        Contact Us
      </Link>

      {/* Mobile Menu Toggle */}
      <button className="md:hidden text-white text-2xl" onClick={toggleMenu}>
        {menuOpen ? <HiX /> : <HiMenu />}
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-[#0A0028] border-t border-purple-700 md:hidden z-40 shadow-lg max-h-[80vh] overflow-y-auto">
          <ul className="flex flex-col items-start px-6 py-4 space-y-4 text-sm sm:text-base font-medium w-full">
            {navItems.map((item) => (
              <Fragment key={item.label}>
                <div
                  className="flex justify-between items-center w-full text-white"
                  onClick={() => item.submenu && toggleMobileDropdown(item.label)}
                >
                  {item.submenu ? (
                    <span>{item.label}</span>
                  ) : (
                    <Link
                      to={item.path}
                      className="text-white"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.submenu && (
                    <HiChevronDown
                      className={`transform transition-transform ${
                        mobileDropdowns[item.label] ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </div>

                {/* Mobile Submenu Items */}
                {item.submenu && mobileDropdowns[item.label] && (
                  <AnimatePresence>
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="pl-4 mt-2 space-y-2 overflow-hidden"
                    >
                      {item.submenu.col1.concat(item.submenu.col2 || []).map((sub, i) => (
                        <li key={i}>
                          <Link
                            to={sub.path}
                            className={`flex items-center gap-2 py-1 ${
                              location.pathname === sub.path
                                ? "text-blue-400"
                                : "text-gray-300 hover:text-blue-400"
                            }`}
                            onClick={() => setMenuOpen(false)}
                          >
                            {sub.icon}
                            <span className="truncate">{sub.label}</span>
                          </Link>
                        </li>
                      ))}
                    </motion.ul>
                  </AnimatePresence>
                )}
              </Fragment>
            ))}

            <li className="w-full pt-2">
              <Link
                to="/contact"
                className="block bg-gradient-to-r from-blue-500 to-pink-500 text-white text-center py-2 rounded-md w-full font-semibold"
                onClick={() => setMenuOpen(false)}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
