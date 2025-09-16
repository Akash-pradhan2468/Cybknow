import React from "react";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";

// Components
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import ClientLogos from "./components/ClientLogos";
import ServicesSection from "./components/ServicesSection";
import IndustriesSection from "./components/IndustriesSection";
import TechStackSection from "./components/TechStackSection";
import TestimonialSection from "./components/TestimonialSection";
import HowWeWork from "./components/HowWeWork";
import WhyChooseUs from "./components/WhyChooseUs";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import AuditPage from "./components/Audit";
import PortfolioPage from "./components/Protfolio";

// Pages
import Pricing from "./pages/Pricing";
import Support from "./pages/Support";
import MobileServiceSection from "./pages/MobileServiceSection";
import Web3Services from "./pages/Web3Services";
import IoTServices from "./pages/IoTServices";
import CloudSolutions from "./pages/CloudSolutions";
import DigitalMarketing from "./pages/DigitalMarketing";
import WebAppPentesting from "./pages/WebAppPentesting";
import MobileAppPentesting from "./pages/MobileAppPentesting";
import IoTTesting from "./pages/IoTTesting";
import CloudPenetrationTesting from "./pages/CloudPenetrationTesting";
import HealthTech from "./pages/HealthTech";
import EdTech from "./pages/EdTech";
import FinTech from "./pages/FinTech";
import ContactUs from "./pages/ContactUs";
import Ecommerce from "./pages/Ecommerce";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsConditions from "./pages/TermsConditions";
import About from "./pages/About";
import IoTSmartSolutions from "./pages/Iot";
import AIMLPage from "./pages/AIMLPage";

// ✅ Placeholder for Services root
const ServicesPage = () => (
  <>
    <div className="min-h-screen pt-20 px-6 text-center">
      <h1 className="text-3xl font-bold mt-10">Our Services</h1>
      <p className="text-gray-600 mt-4">
        This page will list all our services in detail.
      </p>
    </div>
    <TestimonialSection />
    <WhyChooseUs />
  </>
);

// ✅ Wrapper to append testimonials & why-choose-us
const WithWhyChooseUs = ({ children }) => (
  <>
    {children}
    <TestimonialSection />
    <WhyChooseUs />
  </>
);

// ✅ Home Page Layout
const HomePage = () => (
  <>
    <HeroSection />
    <ClientLogos />
    <PortfolioPage />
    <ServicesSection />
    <IndustriesSection />
    <TechStackSection />
    <TestimonialSection />
    <AuditPage />
    <HowWeWork />
    <WhyChooseUs />
    <ContactUs />
  </>
);

const App = () => {
  return (
    <>
      {/* 🔑 ScrollToTop works fine now, since BrowserRouter wraps App in main.jsx */}
      <ScrollToTop />
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      <Routes>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Pricing & Support */}
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/support" element={<Support />} />

        {/* Services */}
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/mobile"
          element={
            <WithWhyChooseUs>
              <MobileServiceSection />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/web3"
          element={
            <WithWhyChooseUs>
              <Web3Services />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/iot"
          element={
            <WithWhyChooseUs>
              <IoTServices />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/cloud"
          element={
            <WithWhyChooseUs>
              <CloudSolutions />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/digital-marketing"
          element={
            <WithWhyChooseUs>
              <DigitalMarketing />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/web-app-pentesting"
          element={
            <WithWhyChooseUs>
              <WebAppPentesting />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/mobile-app-pentesting"
          element={
            <WithWhyChooseUs>
              <MobileAppPentesting />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/iot-pentesting"
          element={
            <WithWhyChooseUs>
              <IoTTesting />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/services/cloud-pentesting"
          element={
            <WithWhyChooseUs>
              <CloudPenetrationTesting />
            </WithWhyChooseUs>
          }
        />

        {/* Industries */}
        <Route
          path="/industries/health"
          element={
            <WithWhyChooseUs>
              <HealthTech />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/industries/education"
          element={
            <WithWhyChooseUs>
              <EdTech />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/industries/finance"
          element={
            <WithWhyChooseUs>
              <FinTech />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/industries/ecommerce"
          element={
            <WithWhyChooseUs>
              <Ecommerce />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/industries/iot"
          element={
            <WithWhyChooseUs>
              <IoTSmartSolutions />
            </WithWhyChooseUs>
          }
        />
        <Route
          path="/industries/ai"
          element={
            <WithWhyChooseUs>
              <AIMLPage />
            </WithWhyChooseUs>
          }
        />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />

        {/* Privacy / Terms / About */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/about" element={<About />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
