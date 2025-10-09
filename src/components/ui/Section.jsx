// src/components/ui/Section.jsx
function Section({ children, className = "", fullWidth = false }) {
  if (fullWidth) {
    // For full width sections, don't add any containers or padding
    return (
      <section className={`w-full ${className}`}>
        {children}
      </section>
    );
  }

  // For regular sections, use container with padding
  return (
    <section className={`py-16 md:py-24 w-full ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}

export default Section;