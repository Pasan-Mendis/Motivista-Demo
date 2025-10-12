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
  const location = useLocation();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Apex", path: "/apex" },
    { name: "Event", path: "/event" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
  ];

  const getLogo = () => {
    if (location.pathname.startsWith("/apex")) return apexLogo;
    if (location.pathname.startsWith("/event")) return eventsLogo;
    return defaultLogo;
  };

  const handleNavClick = () => {
    setIsOpen(false);
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
            className="md:hidden text-white text-2xl z-50 relative transition-all duration-300"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu - Minimalist Slide-in Panel */}
        <AnimatePresence>
          {isOpen && (
            <>
              {/* Subtle Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/30 md:hidden backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
                style={{ top: "64px", zIndex: 30 }}
              />

              {/* Minimalist Panel - Narrow Slide-in */}
              <motion.nav
                initial={{ x: "100%", opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: "100%", opacity: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 40, mass: 0.8 }}
                className="md:hidden fixed top-16 right-0 h-[calc(100vh-64px)] w-64 sm:w-72 bg-gradient-to-b from-black via-black/98 to-black/95 backdrop-blur-md z-40 border-l border-white/10 shadow-2xl"
              >
                {/* Navigation Links Container */}
                <div className="flex flex-col h-full px-4 py-6 space-y-1 overflow-y-auto">
                  {navLinks.map((link, index) => {
                    const isActive = location.pathname === link.path;
                    
                    return (
                      <motion.div
                        key={link.name}
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.06, duration: 0.3 }}
                      >
                        <Link
                          to={link.path}
                          onClick={handleNavClick}
                          className={`block px-4 py-3 rounded-lg transition-all duration-200 font-medium text-base ${
                            isActive
                              ? "bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] text-white shadow-lg shadow-[var(--color-accent)]/30"
                              : "text-gray-400 hover:text-white hover:bg-white/5"
                          }`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    );
                  })}

                  {/* Divider */}
                  <div className="my-4 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                  {/* Quick Actions */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.35, duration: 0.3 }}
                    className="space-y-2 mt-auto"
                  >
                    <p className="text-xs uppercase tracking-widest text-gray-600 px-4 font-semibold">
                      Quick Links
                    </p>
                    <a
                      href="mailto:info@motivista.com"
                      className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      📧 Email Us
                    </a>
                    <a
                      href="tel:+94779002420"
                      className="block px-4 py-3 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-200"
                    >
                      ☎️ Call Us
                    </a>
                  </motion.div>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Navbar;