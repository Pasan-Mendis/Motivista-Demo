import React from "react";
import introImage from "../assets/images/services-intro.jpg";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

export default function IntroAndCounters() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  const counters = [
    { id: 1, label: "Projects Completed", value: 120 },
    { id: 2, label: "Happy Clients", value: 85 },
    { id: 3, label: "Awards Won", value: 15 },
    { id: 4, label: "Years Experience", value: 10 },
  ];

  return (
    <div className="w-full">
      {/* Intro Section */}
      <section className="relative py-20 bg-[var(--color-gray-200)]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center px-6 gap-10">
          {/* Text */}
          <div className="md:w-1/2">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[var(--color-text-primary)]">
              Welcome to{" "}
              <span className="text-[var(--color-primary)]">Our Company</span>
            </h1>
            <p className="text-lg text-[var(--color-text-secondary)] leading-relaxed">
              We specialize in delivering high-quality solutions that drive
              growth and success for your business. Our experienced team
              combines creativity, strategy, and technology to create impactful
              results tailored just for you.
            </p>
          </div>

          {/* Image */}
          <div className="md:w-1/2">
            <img
              src={introImage}
              alt="Intro"
              className="rounded-2xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Counters Section with Parallax Background */}
      <section
        className="relative py-20 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url(${introImage})` }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 text-center !text-[var(--color-highlight-dark)]">
            Why Choose Us
          </h2>

          <div
            ref={ref}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {counters.map((counter) => (
              <div
                key={counter.id}
                className="p-6 bg-[var(--color-dark)]/20 backdrop-blur-sm rounded-2xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-4xl font-bold text-[var(--color-primary)]">
                  {inView ? <CountUp end={counter.value} duration={2} /> : 0}+
                </h3>
                <p className="mt-2 text-[var(--color-text-light)]">{counter.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
