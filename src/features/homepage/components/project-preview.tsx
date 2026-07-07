import { Project } from "@/interfaces/project.interface";
import { useLocale } from "@/i18n/i18n-context";
import type { UiStrings } from "@/i18n/ui";
import type { Localized } from "@/i18n/locale";

/* ── Shared types ────────────────────────────────────────────────────────── */

interface ProjectPreviewProps {
  project: Project;
  featured?: boolean;
}

/* ── Main export — routes to featured or compact variant ─────────────────── */

export default function ProjectPreview({ project, featured = false }: ProjectPreviewProps) {
  const { t, tData, localePath } = useLocale();
  const href = localePath(`/proyecto/${project.internal_link}`);

  if (featured) return <FeaturedCard project={project} href={href} t={t} tData={tData} />;
  return <CompactCard project={project} href={href} t={t} tData={tData} />;
}

interface CardProps {
  project: Project;
  href: string;
  t: UiStrings;
  tData: <T>(field: Localized<T>) => T;
}

/* ── Featured card — full-width, horizontal ──────────────────────────────── */

function FeaturedCard({ project, href, t, tData }: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col lg:flex-row bg-white rounded-[12px] overflow-hidden w-full no-underline"
      style={{
        boxShadow:
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px",
      }}
    >
      {/* Media — 55% */}
      <div
        className="lg:w-[55%] w-full overflow-hidden border-b border-[#ebebeb] lg:border-b-0 lg:border-r lg:border-[#ebebeb] h-[260px] lg:h-auto"
      >
        <Media project={project} radius="12px 0 0 12px" mobileRadius="12px 12px 0 0" />
      </div>

      {/* Info panel — 45% */}
      <div className="lg:w-[45%] flex flex-col gap-6 p-6 lg:gap-8 lg:p-12 lg:justify-between">
        <Authority project={project} tData={tData} />

        <div className="flex flex-col gap-4">
          <h3
            className="text-[#171717]"
            style={{
              fontSize: "clamp(28px, 3.5vw, 40px)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "clamp(-1.12px, -0.035em, -2.4px)",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-[#4d4d4d]"
            style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.6 }}
          >
            {tData(project.short_description)}
          </p>
        </div>

        <MetaRow project={project} t={t} tData={tData} />

        <div>
          <span
            className="inline-flex items-center text-white bg-[#171717] rounded-[6px] transition-colors duration-200 group-hover:bg-[#2a2a2a]"
            style={{ fontSize: "14px", fontWeight: 500, padding: "8px 16px" }}
          >
            {t.project.viewProject}
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Compact card — for 2-col grid ──────────────────────────────────────── */

function CompactCard({ project, href, t, tData }: CardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col bg-white rounded-[12px] overflow-hidden no-underline h-full"
      style={{
        boxShadow:
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px",
      }}
    >
      {/* Thumbnail */}
      <div className="w-full overflow-hidden" style={{ height: "220px" }}>
        <Media project={project} radius="12px 12px 0 0" mobileRadius="12px 12px 0 0" />
      </div>

      {/* Content */}
      <div className="flex flex-col gap-5 p-6 flex-1">
        <Authority project={project} tData={tData} />

        <div className="flex flex-col gap-2 flex-1">
          <h3
            className="text-[#171717]"
            style={{
              fontSize: "22px",
              fontWeight: 600,
              lineHeight: 1.25,
              letterSpacing: "-0.96px",
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-[#4d4d4d]"
            style={{
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: 1.5,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {tData(project.short_description)}
          </p>
        </div>

        {/* Bottom row: meta + arrow */}
        <div className="flex items-end justify-between gap-4 mt-auto pt-4" style={{ borderTop: "1px solid #ebebeb" }}>
          <MetaRow project={project} t={t} tData={tData} compact />
          <span
            className="text-[#808080] transition-colors duration-200 group-hover:text-[#171717] shrink-0"
            style={{ fontSize: "16px", lineHeight: 1 }}
            aria-hidden="true"
          >
            ↗
          </span>
        </div>
      </div>
    </a>
  );
}

/* ── Shared sub-components ───────────────────────────────────────────────── */

function Media({
  project,
  radius,
  mobileRadius,
}: {
  project: Project;
  radius: string;
  mobileRadius: string;
}) {
  const { tData } = useLocale();
  const style = {
    width: "100%",
    height: "100%",
    objectFit: "cover" as const,
    borderRadius: radius,
  };

  if (project.hasVideo) {
    return (
      <video
        preload="none"
        src={project.video}
        autoPlay
        muted
        loop
        playsInline
        draggable={false}
        style={style}
        className={`lg:rounded-[${radius}] rounded-[${mobileRadius}]`}
      />
    );
  }

  return (
    <img
      loading="lazy"
      src={project.image}
      alt={tData(project.short_description)}
      draggable={false}
      style={style}
    />
  );
}

function Authority({
  project,
  tData,
}: {
  project: Project;
  tData: <T>(field: Localized<T>) => T;
}) {
  const authority = tData(project.autority);

  return (
    <div className="flex items-center gap-2">
      {project.logo && (
        <img
          src={project.logo}
          alt={authority}
          className="rounded-full object-cover"
          style={{ width: "20px", height: "20px" }}
        />
      )}
      <span
        className="text-[#808080]"
        style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.33 }}
      >
        {authority}
      </span>
    </div>
  );
}

function MetaRow({
  project,
  t,
  tData,
  compact = false,
}: {
  project: Project;
  t: UiStrings;
  tData: <T>(field: Localized<T>) => T;
  compact?: boolean;
}) {
  const metaItems = compact
    ? [
        { label: t.project.year, value: project.year },
        { label: t.project.duration, value: tData(project.timeline) },
      ]
    : [
        { label: t.project.role, value: tData(project.role) },
        { label: t.project.year, value: project.year },
        { label: t.project.duration, value: tData(project.timeline) },
      ];

  return (
    <div className="flex gap-6 flex-wrap">
      {metaItems.map(({ label, value }) => (
        <div key={label} className="flex flex-col gap-1">
          <span
            className="uppercase text-[#808080]"
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: "10px",
              fontWeight: 500,
              lineHeight: 1,
              letterSpacing: "0.06em",
            }}
          >
            {label}
          </span>
          <span
            className="text-[#171717]"
            style={{ fontSize: "13px", fontWeight: 500, lineHeight: 1.4 }}
          >
            {value}
          </span>
        </div>
      ))}
    </div>
  );
}
