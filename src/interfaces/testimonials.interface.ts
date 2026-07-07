import type { Localized } from "@/i18n/locale";

export interface Testimonial {
  name: string;
  content: Localized<string>;
  role: Localized<string>;
  company: string;
}
