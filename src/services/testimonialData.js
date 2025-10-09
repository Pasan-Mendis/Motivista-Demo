import testimonialData from "../assets/data/testimonials.json";
import Testimonial from "../models/Testimonial";

const testimonials = testimonialData.map(
  (t) => new Testimonial(t.id, t.name, t.position, t.feedback, t.image)
);

export default testimonials;
