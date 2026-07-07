import type { ProjectInformationImage } from "@/features/project/interfaces/project-information-image.interface";
import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";
import { useLocale } from "@/i18n/i18n-context";

interface ProjectImageProps {
  type: ProjectInformationDetailsType;
  images: ProjectInformationImage[];
  screenshotsPrivate?: boolean;
}

export function ProjectImage({ type, images, screenshotsPrivate }: ProjectImageProps) {
  const { t } = useLocale();

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
        {t.project.sectionLabels[type]}
      </span>

      {screenshotsPrivate ? (
        <div
          className="flex flex-col items-center justify-center gap-3 rounded-[8px] py-12"
          style={{ boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: "20px", height: "20px", color: "#808080" }}
            aria-hidden="true"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
          <p
            className="text-[#808080]"
            style={{ fontSize: "14px", fontWeight: 400, lineHeight: 1.43 }}
          >
            {t.project.screenshotsPrivate}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image) => (
            <ScreenshotItem key={image.src} image={image} />
          ))}
        </div>
      )}
    </div>
  );
}

function ScreenshotItem({ image }: { image: ProjectInformationImage }) {
  const { tData } = useLocale();

  return (
    <div className="flex flex-col gap-3">
      <a
        href={image.src}
        target="_blank"
        rel="noopener noreferrer"
        className="block overflow-hidden rounded-[8px] transition-opacity duration-200 hover:opacity-90"
        style={{ boxShadow: "rgb(235,235,235) 0px 0px 0px 1px" }}
      >
        <img
          src={image.src}
          alt={tData(image.alt)}
          loading="lazy"
          className="w-full h-full object-cover rounded-[8px]"
        />
      </a>
      <p
        className="text-[#666666]"
        style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.33 }}
      >
        {tData(image.legend)}
      </p>
    </div>
  );
}
