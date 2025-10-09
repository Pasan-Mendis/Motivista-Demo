// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      // Instantly scroll to top when no section hash
      window.scrollTo(0, 0);
    } else {
      // Jump directly to the section instantly
      const target = document.querySelector(hash);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView();
        }, 100); // slight delay to ensure element is rendered
      }
    }
  }, [pathname, hash]);

  return null;
}
