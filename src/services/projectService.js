import projectsData from "../assets/data/projects.json";
import project1 from "../assets/images/project1.jpg";
import project2 from "../assets/images/project2.jpg";
import project3 from "../assets/images/project3.jpg";

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
