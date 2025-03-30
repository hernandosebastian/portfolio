import { Project } from "@/interfaces/project.interface";

interface ProjectPreviewProps {
  project: Project;
  isOnCarousel?: boolean;
}

export default function ProjectPreview({
  project,
  isOnCarousel = false,
}: ProjectPreviewProps) {
  return (
    <a
      href={`/proyecto/${project.internal_link}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative h-full p-6 sm:p-12 flex flex-col lg:flex-row gap-6 bg-white hover:bg-blue-50 cursor-pointer rounded-[36px] sm:rounded-[42px] transition-colors duration-300 ease-in-out no-underline ${
        isOnCarousel ? "w-[95%] mx-auto" : "w-full"
      }`}
      key={project.title}
    >
      <div className="flex flex-col h-full lg:w-[70%]">
        <ProjectPreviewAsset project={project} withVideo={project.hasVideo} />
        <ProjectPreviewAuthor project={project} />
      </div>
      <ProjectPreviewInfo project={project} isOnCarousel={isOnCarousel} />
    </a>
  );
}

function ProjectPreviewAsset({
  project,
  withVideo,
}: {
  project: Project;
  withVideo: boolean;
}) {
  return (
    <div className="w-full h-full rounded-xl max-h-[500px] lg:max-h-none">
      {withVideo ? (
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
          className="rounded-xl max-h-[500px] lg:max-h-none w-full h-full object-cover"
        />
      )}
    </div>
  );
}

function ProjectPreviewAuthor({ project }: { project: Project }) {
  return (
    <div className="flex items-center gap-2 mt-4 mb-[-0.75rem] opacity-85 bg-blue-100 w-fit px-3 py-1 lg:px-4 lg:py-2 rounded-full">
      <img
        src={project.logo}
        alt={project.title}
        className="w-6 h-6 lg:w-7 lg:h-7 object-cover rounded-full text-xs"
      />
      <span className="text-sm lg:text-base text-blue-950 font-neue-montreal">
        {project.autority}
      </span>
    </div>
  );
}

function ProjectPreviewInfo({
  project,
  isOnCarousel,
}: {
  project: Project;
  isOnCarousel: boolean;
}) {
  return (
    <div className="lg:w-[30%] flex flex-col gap-8">
      <div
        className={`flex flex-col gap-2 font-neue-montreal text-[#1a1a1a] ${
          isOnCarousel ? "h-72 min-[480px]:h-full" : "h-full"
        } lg:px-4 lg:justify-center`}
      >
        <h1 className="text-4xl font-bold font-neue-montreal-medium">
          {project.title}
        </h1>
        <p className="text-base lg:text-lg whitespace-pre-line">
          {project.description}
        </p>
        <ProjectPreviewLearnMore />
      </div>
    </div>
  );
}

function ProjectPreviewLearnMore() {
  return (
    <div className="flex items-center mt-2">
      <span className="text-sm bg-blue-800 text-white font-neue-montreal-regular px-3 py-3 rounded-full">
        Aprender más
      </span>
    </div>
  );
}
