import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";

// Logos
import defaultLogo from "../assets/images/logos/MH White.png";
import apexLogo from "../assets/images/logos/MA White.png";
import eventsLogo from "../assets/images/logos/MEP White.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // current route

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apex", path: "/apex" },
    { name: "Event", path: "/event" },
    // { name: "Academy", path: "/academy" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  // 🟡 Dynamically set the logo based on current route
  const getLogo = () => {
    if (location.pathname.startsWith("/apex")) return apexLogo;
    if (location.pathname.startsWith("/event")) return eventsLogo;
    return defaultLogo;
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 shadow-lg">
      {/* Glassmorphism navbar */}
      <div className="backdrop-blur-md bg-black/100">
        <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
          
          {/* Dynamic Logo */}
          <Link
            to="/"
            className="inline-block hover:scale-105 transition-transform duration-300"
          >
            <img
              src={getLogo()}
              alt="Motivista Logo"
              className="h-10 w-auto"
            />
          </Link>

          {/* Desktop Links */}
          <nav className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`!text-[var(--color-background)] relative group text-lg font-medium transition-colors duration-300 ${
                  location.pathname === link.path
                    ? "text-blue-400"
                    : "text-white hover:text-blue-400"
                }`}
              >
                {link.name}
                <span
                  className={`absolute left-0 -bottom-1 w-0 h-0.5 bg-gradient-to-r from-[var(--color-highlight)] to-[var(--color-highlight)] transition-all duration-300 ${
                    location.pathname === link.path
                      ? "w-full"
                      : "group-hover:w-full"
                  }`}
                ></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden text-white text-2xl"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 120 }}
              className="md:hidden fixed top-0 right-0 h-full w-64 bg-black/90 backdrop-blur-md shadow-xl flex flex-col p-8 gap-6"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`text-xl font-medium transition-colors duration-300 ${
                    location.pathname === link.path
                      ? "text-blue-400"
                      : "text-white hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;
