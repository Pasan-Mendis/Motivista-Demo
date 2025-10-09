import React from "react";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 text-center">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-20 h-20 mx-auto rounded-full mb-4 border-4 border-gray-200"
      />
      <p className="text-gray-600 italic mb-4">“{testimonial.feedback}”</p>
      <h3 className="text-lg font-semibold text-black">{testimonial.name}</h3>
      <span className="text-sm text-gray-500">{testimonial.role}</span>
    </div>
  );
};

export default TestimonialCard;
