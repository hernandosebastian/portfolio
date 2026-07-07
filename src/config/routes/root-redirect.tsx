import { Navigate, useLocation } from "react-router-dom";

import { detectLocale } from "@/i18n/locale";

/**
 * Landing at a path without a locale prefix ("/", "/proyecto/x") redirects to the
 * same path under the detected locale (localStorage → browser language → "en").
 */
export function RootRedirect() {
  const { pathname, search } = useLocation();
  const locale = detectLocale();
  const suffix = pathname === "/" ? "" : pathname;
  return <Navigate to={`/${locale}${suffix}${search}`} replace />;
}
