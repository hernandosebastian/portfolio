import type { Locale } from "@/i18n/locale";

export const SITE_URL = "https://www.sebastianhernando.dev";
export const LINKEDIN_URL = "https://www.linkedin.com/in/sebastianhernando/";

const JOB_TITLE: Record<Locale, string> = {
  en: "Solutions Architect · Full-Stack Developer",
  es: "Solutions Architect · Full-Stack Developer",
};

export function getPersonJsonLd(locale: Locale) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Sebastián Hernando",
    jobTitle: JOB_TITLE[locale],
    url: SITE_URL,
    sameAs: [LINKEDIN_URL],
  };
}
