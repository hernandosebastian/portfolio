import { projectsData } from "@/data/projects.data";

export const getProjectByInternalLink = (internal_link: string) => {
  return projectsData.find(
    (project) => project.internal_link === internal_link
  );
};
