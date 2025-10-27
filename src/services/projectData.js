import allProjects from "../assets/data/projects/projects.json";
import projectHierarchy from "../assets/data/projects/projectCategories.json";

export const getAllProjects = () => allProjects;

export const getProjectsByMainCategory = (mainCategory) => {
  const category = projectHierarchy[mainCategory];
  if (!category) return [];

  // If the category is an array (like Academy)
  if (Array.isArray(category)) {
    return allProjects.filter((p) => category.includes(p.id));
  }

  // If the category has subcategories (like Apex or Events)
  const projectIds = Object.values(category).flat();
  return allProjects.filter((p) => projectIds.includes(p.id));
};

export const getProjectsBySubCategory = (mainCategory, subCategory) => {
  const category = projectHierarchy[mainCategory];
  if (!category || Array.isArray(category)) return [];

  const ids = category[subCategory] || [];
  return allProjects.filter((p) => ids.includes(p.id));
};
