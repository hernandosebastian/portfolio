import { Outlet } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";

import Footer from "@/features/common/footer/footer";
import Navbar from "@/features/common/nav-bar/nav-bar";
import { useSpotlight } from "@/hooks/use-spotlight";

function Layout() {
  const SpotlightElement = useSpotlight();

  return (
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
  );
}

export default Layout;
