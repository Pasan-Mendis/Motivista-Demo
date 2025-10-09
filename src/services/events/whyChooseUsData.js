import differentiatorsJson from "../../assets/data/events/whyChooseUs.json";
import Differentiator from "../../models/Service";

const differentiators = differentiatorsJson.map(
  (d) => new Differentiator(d.id, d.title, d.description, d.icon)
);

export default differentiators;