import reasonsData from "../../assets/data/apex_data/reasons.json";
import Service from "../../models/Service";
import { Sparkles, Layers, Users, Clock } from "lucide-react";

const iconMap = { Sparkles, Layers, Users, Clock };

const reasons = reasonsData.map(
  service =>
    new Service(
      service.id,
      service.title,
      service.description,
      iconMap[service.icon] // map string to actual icon component
    )
);

export default reasons;
