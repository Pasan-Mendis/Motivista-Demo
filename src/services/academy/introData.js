import introDataJson from "../../assets/data/academy/intro.json";
import * as Icons from "lucide-react";
import { IntroItem, IntroSection } from "../../models/academy/IntroSection";
import youth from "../../assets/images/academy/youth.jpg";
import professional from "../../assets/images/academy/professional.jpeg";
import organisations from "../../assets/images/academy/organisations.jpeg";

const images = {
  "youth.jpg": youth,
  "professional.jpeg": professional,
  "organisations.jpeg": organisations
};


const getIconComponent = (iconName) => {
  const Icon = Icons[iconName];
  return Icon ? Icon : Icons.HelpCircle; // fallback
};

const introData = introDataJson.map(
  (section) =>
    new IntroSection(
      section.id,
      section.category,
      images[section.image] || null,
      section.description,
      section.items.map(
        (item) =>
          new IntroItem(
            item.title,
            item.description,
            getIconComponent(item.icon)
          )
      ),
      getIconComponent(section.icon)
    )
);

export default introData;
