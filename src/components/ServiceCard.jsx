// src/components/ServiceCard.jsx
import React from "react";

const ServiceCard = ({ service }) => {
  return (
    <div className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2">
      <div className="text-5xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-semibold mb-2 text-black">{service.title}</h3>
      <p className="text-gray-600">{service.description}</p>
    </div>
  );
};

export default ServiceCard;


