import { Navigate, useParams } from "react-router-dom";

import { ProjectBasicInformation } from "@/features/project/components/project-basic-information";
import { ProjectInformationDetails } from "@/features/project/components/project-information-details";
import { Separator } from "@/features/project/components/separator";
import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";
import { getProjectByInternalLink } from "@/features/project/utils/get-project-by-internal-link";
import { useSeo } from "@/hooks/use-seo";

export default function Project() {
  const { internal_link } = useParams();
  const project = getProjectByInternalLink(internal_link || "");
  useSeo(project);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectInformationDetails = [
    {
      type: ProjectInformationDetailsType.WHY_THIS_PROJECT,
      detailsTitle: project.why_this_project_title,
      detailsDescription: project.why_this_project_description,
    },
    {
      type: ProjectInformationDetailsType.SOLUTION,
      detailsTitle: project.solution_title,
      detailsDescription: project.solution_description,
    },
    {
      type: ProjectInformationDetailsType.IMPACT,
      detailsTitle: project.impact_title,
      detailsDescription: project.impact_description,
    },
    {
      type: ProjectInformationDetailsType.MAJOR_CHALLENGES,
      detailsTitle: project.major_challenges_title,
      detailsDescription: project.major_challenges_description,
    },
    {
      type: ProjectInformationDetailsType.TECHNOLOGIES_USED,
      detailsDescription: project.technologies_used_description,
      detailsTitle: "",
    },
    {
      type: ProjectInformationDetailsType.SCREENSHOTS,
      images: project.screenshots,
      detailsTitle: "",
      detailsDescription: "",
    },
  ];

  return (
    <section className="min-h-screen flex flex-col gap-24 items-center my-20 px-6 sm:px-24">
      <ProjectBasicInformation project={project} />
      <Separator />
      <div className="flex flex-col px-6 gap-16">
        {projectInformationDetails.map((detail) => (
          <ProjectInformationDetails
            key={detail.type}
            type={detail.type}
            detailsTitle={detail.detailsTitle}
            detailsDescription={detail.detailsDescription}
            images={detail.images || []}
          />
        ))}
      </div>
    </section>
  );
}
