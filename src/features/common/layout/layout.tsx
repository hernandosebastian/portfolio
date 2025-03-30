import { Outlet } from "react-router-dom";

import BackgroundDecoration from "@/features/common/decoration/background-decoration";
import Footer from "@/features/common/footer/footer";
import Navbar from "@/features/common/nav-bar/nav-bar";
import { useSpotlight } from "@/hooks/use-spotlight";

function Layout() {
  const SpotlightElement = useSpotlight();
  
  return (
    <div className="min-h-screen flex flex-col bg-[#f7f7f7]">
      <BackgroundDecoration />
      {SpotlightElement}
      <div className="min-h-screen flex flex-col z-10 max-w-[1680px] min-[1680px]:mx-auto">
        <Navbar />
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

