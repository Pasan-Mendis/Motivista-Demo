import {
  Users,
  User,
  Briefcase,
  TrendingUp,
  BookOpen,
  Lightbulb,
  MessageSquare,
  HeartHandshake,
  Cpu,
  Target,
  Brain,
  Settings,
} from "lucide-react";

import servicesData from "../../assets/data/academy/services.json";
import Service from "../../models/Service";

const iconMap = {
  1: Users,
  2: User,
  3: Briefcase,
  4: TrendingUp,
  5: BookOpen,
  6: Lightbulb,
  7: MessageSquare,
  8: HeartHandshake,
  9: Cpu,
  10: Target,
  11: Brain,
  12: Settings,
};

const services = servicesData.map(
  (service) =>
    new Service(
      service.id,
      service.title,
      service.description,
      iconMap[service.id] // ✅ assign icon dynamically
    )
);

export default services;
