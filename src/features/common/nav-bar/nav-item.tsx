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

export function NavItem({
  icon,
  label,
  isActive,
  onClick,
  href,
}: NavItemProps) {
  const iconMap = {
    home: <HomeIcon />,
    curriculum: <CurriculumIcon />,
    linkedin: <LinkedinIcon />,
    github: <GithubIcon />,
  };

  return (
    <a
      onClick={(e) => {
        e.preventDefault();
        onClick();
      }}
      href={href}
      className={`flex flex-col items-center gap-1 bg-inherit border-none hover:border-none rounded-none w-12 sm:w-24 px-2 cursor-pointer transition-colors duration-200 ease-in-out ${
        isActive
          ? "text-blue-800 hover:text-blue-800"
          : "text-gray-500 hover:text-blue-800"
      }`}
    >
      {iconMap[icon]}
      <span className="hidden sm:block text-base font-medium truncate w-full text-center">
        {label}
      </span>
    </a>
  );
}
