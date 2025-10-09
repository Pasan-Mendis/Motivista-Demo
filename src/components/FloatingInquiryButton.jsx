import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function FloatingInquiryButton() {

  const handleInquiryClick = () => {
    const currentPath = window.location.pathname.toLowerCase();
    let formLink = "https://forms.gle/bmVvsBsUFJqYidqP7"; // Default common form

    if (currentPath.includes("/apex")) {
      formLink = "https://forms.gle/XdPHHcTf6i9zZBHBA"; // Apex form
    } else if (currentPath.includes("/events")) {
      formLink = "https://forms.gle/qE2Eqk59knRFXRpg6"; // Events form (replace with your actual link)
    }

    window.open(formLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed right-12 bottom-24 z-50">
      {/* Main Inquiry Button */}
      <div className="relative group animate-bounce-gentle">
        {/* Main Button */}
        <button
          onClick={handleInquiryClick}
          className="relative w-16 h-16 rounded-full shadow-xl transition-all duration-300 hover:scale-110 group overflow-hidden"
          style={{ backgroundColor: 'var(--color-accent)' }}
        >
          {/* Button Icon */}
          <div className="relative z-10 flex items-center justify-center w-full h-full">
            <FaPaperPlane className="text-white text-xl transition-transform duration-300 group-hover:scale-125 group-hover:-translate-y-1" />
          </div>

          {/* Ripple Effect on Click */}
          <div
            className="absolute inset-0 rounded-full opacity-0 group-active:opacity-30 group-active:scale-150 transition-all duration-200"
            style={{ backgroundColor: 'var(--color-white)' }}
          ></div>
        </button>

        {/* Floating Label on Hover */}
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
          <div
            className="bg-white rounded-xl px-4 py-3 shadow-xl border-2 whitespace-nowrap"
            style={{ borderColor: 'var(--color-accent)' }}
          >
            <span
              className="text-sm font-semibold"
              style={{ color: 'var(--color-primary)' }}
            >
              Send Inquiry ✨
            </span>
            {/* Arrow pointing down */}
            <div
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0"
              style={{
                borderLeft: '8px solid transparent',
                borderRight: '8px solid transparent',
                borderTop: '8px solid var(--color-accent)',
              }}
            ></div>
          </div>
        </div>
      </div>

      <style>{`
        /* Gentle bouncing animation */
        .animate-bounce-gentle {
          animation: bounce-gentle 3s ease-in-out infinite;
        }

        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-8px);
          }
          60% {
            transform: translateY(-4px);
          }
        }
      `}</style>
    </div>
  );
}
