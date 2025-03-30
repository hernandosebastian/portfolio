import { Project } from "@/interfaces/project.interface";

export function ProjectBasicInformation({ project }: { project: Project }) {
  const genericInformation = [
    {
      title: "Equipo",
      description: project.team,
      icon: <TeamIcon />,
    },
    {
      title: "Rol",
      description: project.role,
      icon: <RoleIcon />,
    },
    {
      title: "Año - Tiempo",
      description: `${project.year} - ${project.timeline}`,
      icon: <YearIcon />,
    },
  ];

  return (
    <div className="flex flex-col gap-12 sm:gap-20">
      <div className="flex flex-col gap-2 text-center">
        <h1 className="text-3xl sm:text-5xl font-neue-montreal-medium text-blue-800 tracking-tight">
          {project.title}
        </h1>
        <p className="text-base sm:text-xl font-neue-montreal-medium sm:font-neue-montreal text-[#1a1a1a] tracking-tight">
          {project.short_description}
        </p>
      </div>
      <div className="w-full h-full rounded-xl max-h-[400px]">
        {project.hasVideo ? (
          <video
            preload="none"
            src={project.video}
            autoPlay={true}
            muted
            loop
            playsInline
            draggable={false}
            className="rounded-xl max-h-[500px] lg:max-h-none w-full h-full object-cover"
          />
        ) : (
          <img
            loading="lazy"
            src={project.image}
            alt={project.title}
            draggable={false}
            className="rounded-xl max-h-[400px] w-full h-full object-cover"
          />
        )}
        {project.website_url && (
          <a
            href={project.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-800 font-neue-montreal text-base block text-center mt-1"
          >
            {project.website_url}
          </a>
        )}
      </div>
      <div className="flex flex-col min-[700px]:flex-row gap-4 sm:gap-8 justify-start w-full min-[700px]:justify-center items-stretch h-full">
        {genericInformation.map((info, index) => (
          <ProjectGenericInformationItem
            key={info.title}
            title={info.title}
            description={info.description}
            icon={info.icon}
            showSeparator={index < genericInformation.length - 1}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectGenericInformationItem({
  title,
  description,
  icon,
  showSeparator = false,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  showSeparator?: boolean;
}) {
  return (
    <div className="flex flex-row items-stretch h-auto max-w-48">
      <div className="flex flex-col gap-1 w-full max-w-48">
        <div className="flex flex-row gap-2 items-center justify-left">
          {icon}
          <p className="text-sm font-neue-montreal-medium sm:font-neue-montreal text-[#1a1a1a] opacity-50 tracking-tight">
            {title}
          </p>
        </div>
        <p className="text-sm sm:text-base font-neue-montreal text-[#1a1a1a]">
          {description}
        </p>
      </div>
      {showSeparator && <ProjectGenericInformationItemSeparator />}
    </div>
  );
}

function ProjectGenericInformationItemSeparator() {
  return <div className="h-[50%] w-[1px] bg-gray-200 ml-4 sm:ml-16 my-auto" />;
}

function TeamIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 text-[#1a1a1a] opacity-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z"
      />
    </svg>
  );
}

function RoleIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="size-6 text-[#1a1a1a] opacity-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
      />
    </svg>
  );
}

function YearIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 text-[#1a1a1a] opacity-50"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5"
      />
    </svg>
  );
}
