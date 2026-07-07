export const LOCALES = ["en", "es"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = "en";

const STORAGE_KEY = "locale";

export function isLocale(value: string | undefined): value is Locale {
  return value === "en" || value === "es";
}

/** A field that has one value per language. */
export type Localized<T = string> = Record<Locale, T>;

/** Resolve a browser preference the first time a visitor hits the root. */
export function detectLocale(): Locale {
  if (typeof window === "undefined") return DEFAULT_LOCALE;

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (isLocale(stored ?? undefined)) return stored as Locale;

  const nav = window.navigator.language?.toLowerCase() ?? "";
  if (nav.startsWith("es")) return "es";

  return DEFAULT_LOCALE;
}

export function storeLocale(locale: Locale): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(STORAGE_KEY, locale);
}
