// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const clients = [
  { name: "Aeye Innovations", logo: "/logos/aeye.png" },
  { name: "Ballys", logo: "/logos/ballys.png" },
  { name: "TechNova", logo: "/logos/dummy1.png" },
  { name: "FutureWave", logo: "/logos/dummy2.png" },
  { name: "PixelCore", logo: "/logos/dummy3.png" },
  { name: "NeoSphere", logo: "/logos/dummy4.png" }
];

export default function Clients() {
  return (
    <section className="relative py-24 bg-gradient-to-b from-[var(--color-background)] via-[var(--color-gray-100)] to-[var(--color-background)] overflow-hidden">
      {/* Floating blobs */}
      <div className="absolute inset-0">
        <div className="absolute -top-20 left-0 w-72 h-72 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-[var(--color-highlight)]/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      {/* Heading */}
      <div className="relative text-center mb-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight"
        >
          Our Clients
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-sm sm:text-base text-[var(--color-neutral)] max-w-md sm:max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          We’re proud to partner with forward-thinking companies who trust us to bring their vision to life.
        </motion.p>
      </div>

      {/* Marquee Container */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="overflow-hidden">
          <motion.div
            className="flex gap-6 sm:gap-12"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
          >
            {[...clients, ...clients].map((client, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center justify-center w-36 sm:w-52 h-24 sm:h-36 rounded-2xl bg-white/60 backdrop-blur-md border border-white/20 shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-12 sm:max-h-16 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* optional underline */}
      <div className="relative mt-12 text-center">
        <span className="inline-block w-16 sm:w-24 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] rounded-full"></span>
      </div>
    </section>
  );
}
