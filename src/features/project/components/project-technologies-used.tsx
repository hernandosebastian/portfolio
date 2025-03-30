import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";
import { TechnologySection } from "@/features/project/interfaces/technology-section.interface";
import { getSectionsByDescription } from "@/features/project/utils/get-sections-by-description";

interface ProjectInformationDetailsProps {
  type: ProjectInformationDetailsType;
  detailsDescription: string;
}

export function ProjectTechnologiesUsed({
  type,
  detailsDescription,
}: Pick<ProjectInformationDetailsProps, "type" | "detailsDescription">) {
  const sections = getSectionsByDescription(detailsDescription);

  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-indigo-500 font-neue-montreal-medium text-lg">
        {type}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
        {sections.map(({ category, items }, index) => (
          <ProjectTechnologiesUsedItem
            key={index}
            category={category}
            items={items}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectTechnologiesUsedItem({ category, items }: TechnologySection) {
  return (
    <div>
      <h4 className="text-[#1a1a1a] font-neue-montreal-medium text-base mb-3">
        {category}
      </h4>
      <ul className="list-disc pl-4 space-y-2">
        {items.map((item: string, itemIndex: number) => (
          <li
            key={itemIndex}
            className="text-[#1a1a1a] font-neue-montreal text-base opacity-90"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
