import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";

interface ProjectInformationDetailsProps {
  type: ProjectInformationDetailsType;
  detailsTitle?: string;
  detailsDescription?: string;
}

export function ProjectGeneralInformation({
  type,
  detailsTitle,
  detailsDescription,
}: Pick<
  ProjectInformationDetailsProps,
  "type" | "detailsTitle" | "detailsDescription"
>) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-indigo-500 font-neue-montreal-medium text-lg">
        {type}
      </h3>
      <h2 className="tracking-tight text-[#1a1a1a] font-neue-montreal-medium text-2xl leading-6">
        {detailsTitle}
      </h2>
      <p className="text-[#1a1a1a] font-neue-montreal text-base mt-2 opacity-90 whitespace-pre-line">
        {detailsDescription}
      </p>
    </div>
  );
}
