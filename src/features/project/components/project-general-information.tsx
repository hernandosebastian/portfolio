import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";

interface ProjectGeneralInformationProps {
  type: ProjectInformationDetailsType;
  detailsTitle?: string;
  detailsDescription?: string;
}

export function ProjectGeneralInformation({
  type,
  detailsTitle,
  detailsDescription,
}: ProjectGeneralInformationProps) {
  return (
    <div className="flex flex-col gap-4">
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

      {/* Title */}
      {detailsTitle && (
        <h3
          className="text-[#171717]"
          style={{
            fontSize: "24px",
            fontWeight: 600,
            lineHeight: 1.33,
            letterSpacing: "-0.96px",
          }}
        >
          {detailsTitle}
        </h3>
      )}

      {/* Description */}
      {detailsDescription && (
        <p
          className="text-[#4d4d4d] whitespace-pre-line"
          style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}
        >
          {detailsDescription}
        </p>
      )}
    </div>
  );
}
