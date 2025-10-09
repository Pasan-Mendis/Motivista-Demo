// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import services from "../../services/apex/serviceData";

export default function Services() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-b from-[var(--color-background)] via-[var(--color-gray-100)] to-[var(--color-background)]">
      {/* subtle background artwork */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-60 -right-20 w-96 h-96 bg-[var(--color-highlight)]/10 rounded-full blur-3xl animate-float-delay"></div>
      </div>

      {/* heading */}
      <div className="relative text-center mb-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-[var(--color-primary)] tracking-tight"
        >
          Our Services
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="text-lg text-[var(--color-neutral)] max-w-2xl mx-auto mt-4 leading-relaxed"
        >
          Tech-driven creativity to elevate your brand, crafted with innovation
          and precision.
        </motion.p>
      </div>

      {/* grid */}
      <div className="relative max-w-7xl mx-auto grid gap-12 sm:grid-cols-2 lg:grid-cols-3 px-6">
        {services.map((service, index) => {
          const Icon = service.icon;

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, rotate: 0.5 }}
              className="relative group rounded-3xl bg-white/60 backdrop-blur-xl border border-white/20 shadow-[0_8px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_12px_32px_rgba(0,0,0,0.1)] transition-all duration-500 overflow-hidden"
            >
              {/* icon background shape */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[var(--color-accent)]/10 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>

              {/* content */}
              <div className="relative p-10 flex flex-col">
                <div className="mb-8 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[var(--color-accent)] to-[var(--color-highlight)] text-white shadow-lg">
                  {Icon && <Icon className="w-8 h-8" />}
                </div>
                <h3 className="text-2xl font-bold text-[var(--color-primary)] mb-3">
                  {service.title}
                </h3>
                <p className="text-[var(--color-neutral)] leading-relaxed">
                  {service.description}
                </p>

                {/* underline accent */}
                <div className="mt-6 w-16 h-1 bg-gradient-to-r from-[var(--color-accent)] to-[var(--color-highlight)] rounded-full group-hover:w-24 transition-all duration-500"></div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
