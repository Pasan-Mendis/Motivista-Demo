import React from "react";
import { FaPaperPlane } from "react-icons/fa";

export default function FloatingInquiryButton() {

  const handleInquiryClick = () => {
    const currentPath = window.location.pathname.toLowerCase();
    let formLink = "https://forms.gle/bmVvsBsUFJqYidqP7"; // Default common form

    if (currentPath.includes("/apex")) {
      formLink = "https://forms.gle/XdPHHcTf6i9zZBHBA"; // Apex form
    } else if (currentPath.includes("/events")) {
      formLink = "https://forms.gle/qE2Eqk59knRFXRpg6"; // Events form
    }

    window.open(formLink, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="fixed right-12 bottom-18 z-50 floating-inquiry">
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
        <div className="absolute -top-20 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none floating-inquiry-label">
          <div
            className="bg-white rounded-xl px-4 py-2 shadow-xl border-2 whitespace-nowrap floating-inquiry-box"
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
              className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 send-inquiry-arrow"
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
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-8px); }
          60% { transform: translateY(-4px); }
        }

        /* ✅ Mobile adjustments only */
        @media (max-width: 768px) {
          /* Move button slightly right and down */
          .floating-inquiry {
            right: 1.5rem !important;
            bottom: 2rem !important;
          }

          /* Keep floating label above the button and shift left slightly */
          .floating-inquiry-label {
            left: 45% !important;
            top: -3.5rem !important; /* higher above button */
            transform: translateX(-15%);
          }

          /* Keep text in single line and adjust box width */
          .floating-inquiry-box {
            padding: 0.5rem 0.75rem !important;
            font-size: 0.875rem;
            max-width: none;
            white-space: nowrap;
          }

          /* Arrow positioned under the label */
          .send-inquiry-arrow {
            left: 50% !important; 
            transform: translateX(120%);
          }

          /* Slightly smaller button on mobile */
          .floating-inquiry > .group > button {
            width: 56px !important;
            height: 56px !important;
          }
        }
      `}</style>
    </div>
  );
}
