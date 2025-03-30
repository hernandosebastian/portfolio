import { useNavigate, useLocation } from "react-router-dom";

import { NavItem } from "@/features/common/nav-bar/nav-item";

const HOME_PATH = "/" as const;
const LINKEDIN_URL = "https://www.linkedin.com/in/sebastianhernando/" as const;
const GITHUB_URL = "https://github.com/hernandosebastian" as const;
const CV_PATH =
  "/src/assets/pdf/sebastian-hernando-curriculum-vitae.pdf" as const;

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    {
      icon: "home" as const,
      label: "Home",
      href: HOME_PATH,
      onClick: () => {
        const isHomePage = location.pathname === HOME_PATH;

        if (!isHomePage) {
          navigate(HOME_PATH);
        }
      },
    },
    {
      icon: "linkedin" as const,
      label: "LinkedIn",
      href: LINKEDIN_URL,
      onClick: () => window.open(LINKEDIN_URL, "_blank"),
    },
    {
      icon: "github" as const,
      label: "GitHub",
      href: GITHUB_URL,
      onClick: () => window.open(GITHUB_URL, "_blank"),
    },
    {
      icon: "curriculum" as const,
      label: "Curriculum",
      href: CV_PATH,
      onClick: () => window.open(CV_PATH, "_blank"),
    },
  ];

  return (
    <div className="mt-10 z-10 px-8 sm:px-4">
      <nav className="py-4 w-full max-w-[40rem] mx-auto bg-white rounded-2xl shadow-sm">
        <div className="flex justify-around items-center max-w-md mx-auto gap-4 ">
          {navItems.map((item) => (
            <NavItem
              key={item.label}
              {...item}
              isActive={
                item.href === HOME_PATH && location.pathname === HOME_PATH
              }
            />
          ))}
        </div>
      </nav>
    </div>
  );
}
