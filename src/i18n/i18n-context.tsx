import { createContext, useContext, useMemo, type ReactNode } from "react";
import { useParams } from "react-router-dom";

import { DEFAULT_LOCALE, isLocale, type Locale, type Localized } from "@/i18n/locale";
import { ui, type UiStrings } from "@/i18n/ui";

interface LocaleContextValue {
  locale: Locale;
  /** UI strings for the active locale. */
  t: UiStrings;
  /** Resolve a localized data field ({ en, es }) to the active locale. */
  tData: <T>(field: Localized<T>) => T;
  /** Prefix an app path with the active locale, e.g. "/proyecto/x" → "/en/proyecto/x". */
  localePath: (path: string) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const { locale: localeParam } = useParams();
  const locale: Locale = isLocale(localeParam) ? localeParam : DEFAULT_LOCALE;

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      t: ui[locale],
      tData: (field) => field[locale],
      localePath: (path) => {
        const normalized = path === "/" ? "" : path.startsWith("/") ? path : `/${path}`;
        return `/${locale}${normalized}`;
      },
    }),
    [locale]
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) {
    throw new Error("useLocale must be used within a LocaleProvider");
  }
  return ctx;
}
