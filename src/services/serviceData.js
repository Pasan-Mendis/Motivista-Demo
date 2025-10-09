// src/services/serviceData.js
import servicesData from "../assets/data/services.json"; // JSON file with "icon" as filename
import MAIcon from "../assets/images/logos/MA LOGO (3).png";
import EventIcon from "../assets/images/logos/MEP LOGO.png";
import AcademyIcon from "../assets/images/logos/MAE LOGO (1).png";

// Map filenames to actual imports
const images = {
  "MA Icon.png": MAIcon,
  "Event Icon.png": EventIcon,
  "Academy Icon.png": AcademyIcon,
};

// Merge JSON data with actual image imports
const services = servicesData.map(service => ({
  ...service,
  icon: images[service.image] // replace icon filename with imported image
}));

export default services;
