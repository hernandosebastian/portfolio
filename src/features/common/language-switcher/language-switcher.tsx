import { useLocation, useNavigate } from "react-router-dom";

import { useLocale } from "@/i18n/i18n-context";
import { LOCALES, storeLocale, type Locale } from "@/i18n/locale";

interface LanguageSwitcherProps {
  /** Called after navigating — used to close the mobile menu. */
  onNavigate?: () => void;
}

/**
 * Compact EN / ES toggle. Switching swaps the locale prefix of the current URL,
 * preserving the rest of the path (so you stay on the same project page), and
 * persists the choice for the next visit.
 */
export function LanguageSwitcher({ onNavigate }: LanguageSwitcherProps) {
  const { locale } = useLocale();
  const location = useLocation();
  const navigate = useNavigate();

  const switchTo = (target: Locale) => {
    if (target === locale) return;
    storeLocale(target);
    // Replace the first path segment (the current locale) with the target one.
    const rest = location.pathname.replace(/^\/[^/]+/, "");
    navigate(`/${target}${rest}${location.search}`);
    onNavigate?.();
  };

  return (
    <div
      className="inline-flex items-center gap-1"
      role="group"
      aria-label="Language"
      style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1 }}
    >
      {LOCALES.map((code, i) => {
        const isActive = code === locale;
        return (
          <span key={code} className="inline-flex items-center gap-1">
            {i > 0 && <span className="text-[#d4d4d4]" aria-hidden="true">/</span>}
            <button
              type="button"
              onClick={() => switchTo(code)}
              aria-current={isActive ? "true" : undefined}
              className="uppercase transition-colors duration-200 focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
              style={{
                color: isActive ? "#171717" : "#a3a3a3",
                fontWeight: isActive ? 600 : 500,
                cursor: isActive ? "default" : "pointer",
              }}
            >
              {code}
            </button>
          </span>
        );
      })}
    </div>
  );
}
