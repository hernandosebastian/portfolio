import type { Localized } from "@/i18n/locale";

export interface ProjectInformationImage {
  src: string;
  alt: Localized<string>;
  legend: Localized<string>;
}
