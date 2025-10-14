import projectsData from "../assets/data/projects.json";
import project1 from "../assets/images/homeprojects/Amite.png";
import project2 from "../assets/images/homeprojects/Romeshta20.png";
import project3 from "../assets/images/homeprojects/CareerGuidance.png";

const images = {
  "project1.jpg": project1,
  "project2.jpg": project2,
  "project3.jpg": project3
};

const projects = projectsData.map(project => ({
  ...project,
  image: images[project.image]
}));

export default projects;
