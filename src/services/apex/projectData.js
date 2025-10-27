import Project from "../../models/Project.js";
import projectsData from "../../assets/data/apex_data/projects.json";

const projects = projectsData.map(
  (p) => new Project(p.id, p.title, p.description, p.image, p.category)
);

export default projects;
