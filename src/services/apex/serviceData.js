import servicesData from "../../assets/data/apex_data/services.json";
import Service from "../../models/Service";
import { Palette, Share2, Code2, Video, Package } from "lucide-react";

const iconMap = { Palette, Share2, Code2, Video, Package };

const services = servicesData.map(
  service =>
    new Service(
      service.id,
      service.title,
      service.description,
      iconMap[service.icon] // map string to actual icon component
    )
);

export default services;
