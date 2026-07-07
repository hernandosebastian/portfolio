import { Navigate, Outlet, useParams } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Footer from "@/features/common/footer/footer";
import Navbar from "@/features/common/nav-bar/nav-bar";
import { useSpotlight } from "@/hooks/use-spotlight";
import { LocaleProvider } from "@/i18n/i18n-context";
import { detectLocale, isLocale } from "@/i18n/locale";

function Layout() {
  const SpotlightElement = useSpotlight();
  const { locale } = useParams();

  // Invalid locale prefix (e.g. "/fr") → redirect to the detected locale,
  // preserving the rest of the path.
  if (!isLocale(locale)) {
    return <Navigate to={`/${detectLocale()}`} replace />;
  }

  return (
    <LocaleProvider>
      <div className="min-h-screen flex flex-col bg-white">
        {SpotlightElement}
        <Navbar />
        <main className="flex-1 flex flex-col z-10">
          <Outlet />
        </main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </div>
    </LocaleProvider>
  );
}

export default Layout;
