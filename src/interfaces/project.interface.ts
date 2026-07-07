import { ProjectInformationImage } from "@/features/project/interfaces/project-information-image.interface";
import type { Localized } from "@/i18n/locale";

export interface Project {
  title: string;
  description: Localized<string>;
  short_description: Localized<string>;
  hidden?: boolean;
  screenshotsPrivate?: boolean;
  image?: string;
  video?: string;
  logo: string;
  internal_link: string;
  autority: Localized<string>;
  hasVideo: boolean;
  team: Localized<string>;
  role: Localized<string>;
  year: string;
  timeline: Localized<string>;
  why_this_project_title: Localized<string>;
  why_this_project_description: Localized<string>;
  technologies_used_description: Localized<string>;
  solution_title: Localized<string>;
  solution_description: Localized<string>;
  my_role_title?: Localized<string>;
  my_role_description?: Localized<string>;
  impact_title: Localized<string>;
  impact_description: Localized<string>;
  major_challenges_title: Localized<string>;
  major_challenges_description: Localized<string>;
  website_url?: string;
  marketplace_links?: { label: string; url: string }[];
  screenshots: ProjectInformationImage[];
}
