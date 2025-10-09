import React, { useState, useEffect, useMemo } from "react";

export default function SecondaryNavbar({ links: customLinks = [] }) {
  // Default links (used if no props are passed)
  const defaultLinks = useMemo(
    () => [
      { label: "Intro", href: "intro" },
      { label: "Services", href: "services" },
      { label: "Why Choose Us", href: "why-choose-us" },
      { label: "Clients", href: "clients" },
    ],
    []
  );

  const links = customLinks.length > 0 ? customLinks : defaultLinks;
  const [active, setActive] = useState(links[0]?.href || "");

  const handleScroll = (e, href) => {
    e.preventDefault();
    const element = document.getElementById(href);
    if (element) {
      const navHeight = 128;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      setActive(href);
    }
  };

  // Scroll spy to detect active section
  useEffect(() => {
    const handleScrollSpy = () => {
      let current = active;
      links.forEach((link) => {
        const section = document.getElementById(link.href);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom > 150) {
            current = link.href;
          }
        }
      });
      if (current !== active) setActive(current);
    };

    window.addEventListener("scroll", handleScrollSpy);
    return () => window.removeEventListener("scroll", handleScrollSpy);
  }, [active, links]);

  return (
    <div className="fixed top-16 z-40 w-full">
      <nav
        className="transition-all duration-300 border-t border-[var(--color-gray-800)] shadow-sm"
        style={{
          background: "rgba(10, 10, 15, 0.9)",
          backdropFilter: "blur(8px)",
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-end px-4 sm:px-6 md:px-3">
          <div className="flex justify-end items-center gap-6 overflow-x-auto scrollbar-hide py-2">
            {links.map((link, i) => {
              const isActive = active === link.href;
              return (
                <a
                  key={i}
                  href={`#${link.href}`}
                  onClick={(e) => handleScroll(e, link.href)}
                  className={`relative px-2 md:px-3 py-1.5 text-xs md:text-sm font-medium whitespace-nowrap group transition-all duration-300 ${
                    isActive ? "scale-105" : "hover:scale-105"
                  }`}
                >
                  <span
                    className={`relative z-10 transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--color-highlight)] font-semibold"
                        : "text-white group-hover:text-[var(--color-highlight)]"
                    }`}
                  >
                    {link.label}
                  </span>
                  {isActive && (
                    <span
                      className="absolute left-0 bottom-0 w-full h-0.5"
                      style={{
                        background:
                          "linear-gradient(90deg, var(--color-accent), var(--color-highlight))",
                      }}
                    ></span>
                  )}
                </a>
              );
            })}
          </div>
        </div>
      </nav>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
