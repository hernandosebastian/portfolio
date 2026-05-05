import { Project } from "@/interfaces/project.interface";

export function ProjectBasicInformation({ project }: { project: Project }) {
  const genericInformation = [
    { title: "Equipo", description: project.team, icon: <TeamIcon /> },
    { title: "Rol", description: project.role, icon: <RoleIcon /> },
    { title: "Año — Duración", description: `${project.year} · ${project.timeline}`, icon: <YearIcon /> },
  ];

  return (
    <div className="flex flex-col gap-16 w-full">
      {/* Title + description */}
      <div className="flex flex-col gap-4 text-center">
        <h1
          className="text-[#171717]"
          style={{
            fontSize: "clamp(36px, 6vw, 56px)",
            fontWeight: 600,
            lineHeight: 1.05,
            letterSpacing: "clamp(-1.44px, -0.04em, -2.88px)",
          }}
        >
          {project.title}
        </h1>
        <p
          className="text-[#4d4d4d] max-w-[600px] mx-auto"
          style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.8 }}
        >
          {project.short_description}
        </p>
        {project.website_url && (
          <a
            href={project.website_url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-[#4d4d4d]"
            style={{ fontSize: "14px", fontWeight: 500, color: "#0072f5", lineHeight: 1.43 }}
          >
            {project.website_url}
          </a>
        )}
        {project.marketplace_links && project.marketplace_links.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            {project.marketplace_links.map(({ label, url }) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors duration-200 hover:bg-[#f2f2f2]"
                style={{
                  background: "#fafafa",
                  boxShadow: "rgb(235,235,235) 0px 0px 0px 1px",
                  borderRadius: "9999px",
                  padding: "5px 14px",
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "#171717",
                  lineHeight: 1.33,
                  textDecoration: "none",
                }}
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: "11px", height: "11px", color: "#808080" }}
                  aria-hidden="true"
                >
                  <path d="M12 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6" />
                  <path d="M14 2h6v6" />
                  <path d="M10 14L20 4" />
                </svg>
                AWS Marketplace · {label}
              </a>
            ))}
          </div>
        )}
      </div>

      {/* Hero media */}
      <div
        className="w-full overflow-hidden rounded-[12px]"
        style={{ boxShadow: "rgb(235,235,235) 0px 0px 0px 1px" }}
      >
        {project.hasVideo ? (
          <video
            preload="none"
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            draggable={false}
            className="w-full object-cover"
            style={{ borderRadius: "12px", maxHeight: "480px" }}
          />
        ) : (
          <img
            loading="lazy"
            src={project.image}
            alt={project.title}
            draggable={false}
            className="w-full object-cover"
            style={{ borderRadius: "12px", maxHeight: "480px" }}
          />
        )}
      </div>

      {/* Metadata row */}
      <div className="flex flex-wrap gap-8 justify-start sm:justify-center">
        {genericInformation.map((info, index) => (
          <MetadataItem
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

function MetadataItem({
  title,
  description,
  icon,
  showSeparator,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  showSeparator: boolean;
}) {
  return (
    <div className="flex items-stretch gap-8">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          {icon}
          <span
            className="uppercase text-[#808080]"
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: "11px",
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "0.06em",
            }}
          >
            {title}
          </span>
        </div>
        <p
          className="text-[#171717]"
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}
        >
          {description}
        </p>
      </div>
      {showSeparator && (
        <div
          className="self-stretch my-1"
          style={{ width: "1px", background: "#ebebeb" }}
        />
      )}
    </div>
  );
}

function TeamIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#808080]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
    </svg>
  );
}

function RoleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#808080]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z" />
    </svg>
  );
}

function YearIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-[#808080]">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
    </svg>
  );
}
