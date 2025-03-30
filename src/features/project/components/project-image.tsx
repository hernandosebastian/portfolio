import type { ProjectInformationImage } from "@/features/project/interfaces/project-information-image.interface";

import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";

interface ProjectImageProps {
  type: ProjectInformationDetailsType;
  images: ProjectInformationImage[];
}

export function ProjectImage({ type, images }: ProjectImageProps) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-indigo-500 font-neue-montreal-medium text-lg">
        {type}
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-2">
        {images.map((image) => (
          <ProjectImageItem
            key={image.src}
            src={image.src}
            alt={image.alt}
            legend={image.legend}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectImageItem({ src, alt, legend }: ProjectInformationImage) {
  return (
    <div className="flex flex-col gap-2">
      <a href={src} target="_blank" rel="noopener noreferrer">
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover cursor-pointer hover:opacity-90 transition-opacity"
        />
      </a>
      <p className="text-sm text-[#1a1a1a] opacity-75 font-neue-montreal">
        {legend}
      </p>
    </div>
  );
}
