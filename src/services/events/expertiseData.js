import expertiseJson from "../../assets/data/events/expertise.json";
import Expertise from "../../models/Expertise";

const expertise = expertiseJson.map(
  (e) => new Expertise(e.id, e.title, e.shortDescription, e.details, e.image)
);

export default expertise;
