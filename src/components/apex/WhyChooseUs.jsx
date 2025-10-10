// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import reasons from "../../services/apex/reasonData";

export default function WhyChooseUs() {
  // Function to determine animation based on reason title
  const getAnimationProps = (title) => {
    switch (title) {
      case "Timely Execution with Precision":
        return {
          animate: { scale: [1, 1.05, 1] }, // only scale, no rotate
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        };
      case "Creative-Tech Synergy":
        return {
          animate: { y: [0, -8, 0] },
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        };
      case "A One-Stop Branding Solution":
        return {
          animate: { scale: [1, 1.1, 1] },
          transition: { repeat: Infinity, duration: 2.5, ease: "easeInOut" },
        };
      case "Client-Centric Approach":
        return {
          animate: { rotate: [-5, 5, -5] },
          transition: { repeat: Infinity, duration: 4, ease: "easeInOut" },
        };
      default:
        return {
          animate: { y: [0, -5, 0] },
          transition: { repeat: Infinity, duration: 3, ease: "easeInOut" },
        };
    }
  };

  return (
    <section className="relative bg-[var(--color-bg-secondary)] py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      {/* Heading */}
      <motion.div
        className="text-center mb-10 sm:mb-12 lg:mb-16 px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4 px-2">
          Why Choose{" "}
          <span className="bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] bg-clip-text text-transparent">
            Motivista Apex?
          </span>
        </h2>
        <motion.p
          className="text-[var(--color-text-secondary)] max-w-3xl mx-auto mt-3 sm:mt-4 text-sm sm:text-base lg:text-lg leading-relaxed px-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We combine creativity, precision, and innovation to deliver
          exceptional results that elevate your brand.
        </motion.p>
      </motion.div>

      {/* Cards */}
      <motion.div
        className="flex justify-center items-stretch gap-4 sm:gap-6 lg:gap-8 flex-wrap px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        {reasons.map((reason, index) => {
          const Icon = reason.icon;

          return (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center w-full sm:max-w-[calc(50%-12px)] lg:max-w-xs group"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.15,
                ease: "easeOut",
              }}
              whileHover={{ y: -10 }}
            >
              {/* Card Container */}
              <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-6 sm:p-7 lg:p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white border-opacity-50 hover:border-[var(--color-accent)] hover:border-opacity-30 relative overflow-hidden group-hover:bg-opacity-90 w-full h-full">
                {/* Icon Animation */}
                <motion.div
                  className="relative z-10"
                  style={{ originX: 0.5, originY: 0.5, rotate: 0 }} // force no rotation
                  {...getAnimationProps(reason.title)}
                >
                  <div className="w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 mb-4 sm:mb-5 lg:mb-6 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-highlight)] text-white shadow-xl group-hover:shadow-2xl mx-auto relative overflow-hidden">
                    {Icon && (
                      <Icon className="w-8 h-8 sm:w-9 sm:h-9 lg:w-10 lg:h-10 relative z-10" strokeWidth={2} />
                    )}
                  </div>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-base sm:text-lg lg:text-xl font-bold text-[var(--color-text-primary)] mb-3 sm:mb-4 group-hover:text-[var(--color-accent)] transition-colors duration-300 relative z-10"
                  whileHover={{ scale: 1.02 }}
                >
                  {reason.title}
                </motion.h3>

                {/* Description */}
                <p className="text-sm sm:text-base text-[var(--color-text-secondary)] leading-relaxed group-hover:text-[var(--color-text-primary)] transition-colors duration-300 relative z-10">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
}