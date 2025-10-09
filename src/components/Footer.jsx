import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FaFacebook, FaInstagram, FaEnvelope, FaPhone } from "react-icons/fa";
import footerData from "../services/footerData";


const Footer = () => {
  const location = useLocation();
  const currentPath =
    location.pathname === "/" ? "home" : location.pathname.split("/")[1];

  const config = footerData[currentPath] || footerData.home;

  const footerTheme = config?.footerTheme || {};
  const footer = config?.footer || {};

  const {
    accent = "var(--color-accent)",
    background = "var(--color-background)",
    textPrimary = "var(--color-white)",
    textSecondary = "var(--color-gray-500)",
  } = footerTheme;

  const {
    companyName = "Motivista",
    companyDescription = "",
    email = "info@motivista.com",
    facebookLink = "https://facebook.com",
    instagramLink = "https://instagram.com",
    phone = "+94779002420",
  } = footer;

  return (
    <footer
      className="relative py-20 overflow-hidden transition-all duration-700"
      style={{
        background,
        color: textPrimary,
        "--footer-accent": accent,
        "--footer-text-primary": textPrimary,
        "--footer-text-secondary": textSecondary,
      }}
    >
      {/* Decorative Orbs */}
      <div
        className="absolute top-10 left-10 w-32 h-32 rounded-full blur-3xl animate-float"
        style={{ backgroundColor: `${accent}30`, opacity: 0.3 }}
      />
      <div
        className="absolute bottom-10 right-10 w-40 h-40 rounded-full blur-3xl animate-float-delay"
        style={{ backgroundColor: `${accent}30`, opacity: 0.3 }}
      />

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12 relative z-10">
        {/* Company Info */}
        <div className="space-y-4">
          <h3
            className="text-2xl font-bold transition-colors duration-500"
            style={{ color: textPrimary }}
          >
            {companyName}
          </h3>
          <p
            className="leading-relaxed transition-colors duration-500"
            style={{ color: textSecondary }}
          >
            {companyDescription}
          </p>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h4
            className="text-xl font-semibold transition-colors duration-500"
            style={{ color: textPrimary }}
          >
            Quick Links
          </h4>
          <ul className="space-y-2">
            {[
              { label: "Services", href: "/#services" },
              { label: "Projects", href: "/gallery" },
              { label: "Team", href: "/#team" },
              { label: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.href}>
                <Link
                  to={link.href}
                  className="inline-block transition-all duration-300 hover:translate-x-1 hover:[color:var(--footer-accent)]"
                  style={{ color: textPrimary }}
                  onClick={(e) => {
                    // smooth scroll for sections on the home page
                    const isHomeSection = link.href.startsWith("/#");
                    if (isHomeSection) {
                      e.preventDefault();
                      const targetId = link.href.split("#")[1];
                      if (window.location.pathname === "/") {
                        // If already on home page
                        const el = document.getElementById(targetId);
                        if (el) el.scrollIntoView({ behavior: "smooth" });
                      } else {
                        // If not on home page
                        window.location.href = link.href; // navigate then scroll
                      }
                    }
                  }}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links */}
        <div className="space-y-4">
          <h4
            className="text-xl font-semibold transition-colors duration-500"
            style={{ color: textPrimary }}
          >
            Connect With Us
          </h4>
          <div className="flex items-center gap-4">
            {[
              { icon: FaEnvelope, href: `mailto:${email}`, label: "Email" },
              {
                icon: FaFacebook,
                href: facebookLink,
                label: "Facebook",
                external: true,
              },
              {
                icon: FaInstagram,
                href: instagramLink,
                label: "Instagram",
                external: true,
              },
              { icon: FaPhone, href: `tel:${phone}`, label: "Phone" },
            ].map((social) => {
              const Icon = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target={social.external ? "_blank" : undefined}
                  rel={social.external ? "noopener noreferrer" : undefined}
                  className="transition-transform duration-300 hover:scale-110 text-[color:var(--footer-text-primary)] hover:text-[color:var(--footer-accent)]"
                  aria-label={social.label}
                >
                  <Icon className="text-2xl transition-colors duration-300" />
                </a>
              );
            })}
          </div>
          <p
            className="mt-4 text-sm transition-colors duration-500"
            style={{ color: textSecondary }}
          >
            &copy; {new Date().getFullYear()} {companyName}. All rights reserved.
          </p>
        </div>
      </div>

      {/* Floating animations */}
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(2deg); }
          66% { transform: translateY(10px) rotate(-2deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(20px) rotate(-2deg); }
          66% { transform: translateY(-10px) rotate(2deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
