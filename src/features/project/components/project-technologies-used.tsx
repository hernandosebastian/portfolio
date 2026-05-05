import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";
import { TechnologySection } from "@/features/project/interfaces/technology-section.interface";
import { getSectionsByDescription } from "@/features/project/utils/get-sections-by-description";

interface ProjectTechnologiesUsedProps {
  type: ProjectInformationDetailsType;
  detailsDescription: string;
}

export function ProjectTechnologiesUsed({
  type,
  detailsDescription,
}: ProjectTechnologiesUsedProps) {
  const sections = getSectionsByDescription(detailsDescription);

  return (
    <div className="flex flex-col gap-8">
      {/* Section label */}
      <span
        className="uppercase text-[#808080]"
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "0.08em",
        }}
      >
        {type}
      </span>

      {/* Cards grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {sections.map(({ category, items }, index) => (
          <TechCard key={index} category={category} items={items} />
        ))}
      </div>
    </div>
  );
}

function TechCard({ category, items }: TechnologySection) {
  return (
    <div
      className="flex flex-col gap-4 bg-white rounded-[8px] p-6"
      style={{
        boxShadow:
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, #fafafa 0px 0px 0px 1px",
      }}
    >
      <h4
        className="uppercase text-[#171717]"
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          fontSize: "11px",
          fontWeight: 500,
          lineHeight: 1,
          letterSpacing: "0.06em",
        }}
      >
        {category}
      </h4>

      <ul className="flex flex-col gap-2">
        {items.map((item, i) => (
          <li
            key={i}
            className="flex items-start gap-2 text-[#4d4d4d]"
            style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.43 }}
          >
            <span
              className="mt-[2px] shrink-0 text-[#808080]"
              aria-hidden="true"
            >
              ·
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
