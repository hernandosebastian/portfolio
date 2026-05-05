// nav-item.tsx — kept for interface compatibility, not used in new navbar
import { CurriculumIcon } from "@/icons/curriculum-icon";
import { GithubIcon } from "@/icons/github-icon";
import { HomeIcon } from "@/icons/home-icon";
import { LinkedinIcon } from "@/icons/linkedin-icon";

type NavItemProps = {
  icon: "home" | "curriculum" | "linkedin" | "github";
  label: string;
  isActive?: boolean;
  onClick: () => void;
  href: string;
};

export function NavItem({ icon, label, isActive, onClick, href }: NavItemProps) {
  const iconMap = {
    home: <HomeIcon />,
    curriculum: <CurriculumIcon />,
    linkedin: <LinkedinIcon />,
    github: <GithubIcon />,
  };

  return (
    <a
      onClick={(e) => { e.preventDefault(); onClick(); }}
      href={href}
      className={`flex flex-col items-center gap-1 bg-transparent border-none rounded-[6px] w-12 sm:w-24 px-2 py-1 cursor-pointer transition-colors duration-200 ${
        isActive ? "text-[#171717] font-semibold" : "text-[#4d4d4d] hover:text-[#171717]"
      }`}
    >
      {iconMap[icon]}
      <span className="hidden sm:block text-[14px] font-medium truncate w-full text-center">
        {label}
      </span>
    </a>
  );
}
