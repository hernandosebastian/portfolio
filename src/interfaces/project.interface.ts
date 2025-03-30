import { ProjectInformationImage } from "@/features/project/interfaces/project-information-image.interface";

export interface Project {
  title: string;
  description: string;
  short_description: string;
  image?: string;
  video: string;
  logo: string;
  internal_link: string;
  autority: string;
  hasVideo: boolean;
  team: string;
  role: string;
  year: string;
  timeline: string;
  why_this_project_title: string;
  why_this_project_description: string;
  technologies_used_description: string;
  solution_title: string;
  solution_description: string;
  impact_title: string;
  impact_description: string;
  major_challenges_title: string;
  major_challenges_description: string;
  website_url?: string;
  screenshots: ProjectInformationImage[];
}
