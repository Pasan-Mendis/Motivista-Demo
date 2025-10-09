import projectData from "../../assets/data/events/projects.json";
import Project from "../../models/events/Project";

const projects = projectData.map(
  (p) =>
    new Project(
      p.id,
      p.title,
      p.category,
      p.location,
      p.attendees,
      p.date,
      p.image,
      p.link,
      p.description
    )
);

export default projects;
