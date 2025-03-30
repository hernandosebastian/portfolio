import { ProjectGeneralInformation } from "@/features/project/components/project-general-information";
import { ProjectImage } from "@/features/project/components/project-image";
import { ProjectTechnologiesUsed } from "@/features/project/components/project-technologies-used";
import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";
import { ProjectInformationImage as ProjectInformationImageType } from "@/features/project/interfaces/project-information-image.interface";

interface ProjectInformationDetailsProps {
  type: ProjectInformationDetailsType;
  detailsTitle: string;
  detailsDescription: string;
  images: ProjectInformationImageType[];
}

export function ProjectInformationDetails({
  type,
  detailsTitle,
  detailsDescription,
  images,
}: ProjectInformationDetailsProps) {
  switch (type) {
    case ProjectInformationDetailsType.TECHNOLOGIES_USED:
      return (
        <ProjectTechnologiesUsed
          type={type}
          detailsDescription={detailsDescription}
        />
      );
    case ProjectInformationDetailsType.SCREENSHOTS:
      return <ProjectImage type={type} images={images} />;
    default:
      return (
        <ProjectGeneralInformation
          type={type}
          detailsTitle={detailsTitle}
          detailsDescription={detailsDescription}
        />
      );
  }
}
