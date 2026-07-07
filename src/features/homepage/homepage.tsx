import { useState } from "react";

import { projectsData } from "@/data/projects.data";
import { testimonialsData } from "@/data/testimonials.data";
import Hero from "@/features/homepage/components/hero";
import TechMarquee from "@/features/homepage/components/tech-marquee";
import ProjectPreview from "@/features/homepage/components/project-preview";
import Testimonial from "@/features/homepage/components/testimonial";
import { Seo } from "@/features/common/seo/seo";
import { getPersonJsonLd } from "@/features/common/seo/person-schema";
import { useLocale } from "@/i18n/i18n-context";
import type { PipelineStepText } from "@/i18n/ui";

export default function Homepage() {
  const { t, locale } = useLocale();

  const [showAllTestimonials, setShowAllTestimonials] = useState<boolean>(false);
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  const visibleTestimonials = showAllTestimonials
    ? testimonialsData
    : testimonialsData.slice(0, 2);

  const visibleProjects = projectsData.filter((p) => !p.hidden);
  const featuredProject = visibleProjects[0];
  const allGridProjects = visibleProjects.slice(1);
  const gridProjects = showAllProjects ? allGridProjects : allGridProjects.slice(0, 2);

  return (
    <div className="flex flex-col w-full">
      <Seo
        title={`Sebastián Hernando — ${t.hero.role}`}
        description={t.hero.description}
        path="/"
        jsonLd={getPersonJsonLd(locale)}
      />

      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Tech stack marquee ───────────────────────────────────────── */}
      <TechMarquee />

      {/* Section divider */}
      <div style={{ borderTop: "1px solid #171717" }} />

      {/* ── Approach ─────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-24 flex flex-col gap-16">
        <div>
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
            {t.homepage.approachLabel}
          </span>
        </div>

        <h2
          className="text-[#171717] mt-[-8px]"
          style={{
            fontSize: "clamp(32px, 5vw, 40px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "clamp(-1.2px, -0.06em, -2.4px)",
          }}
        >
          {t.homepage.approachTitle}
        </h2>

        <Pipeline steps={t.homepage.pipeline} />
      </section>

      {/* Section divider */}
      <div style={{ borderTop: "1px solid #171717" }} />

      {/* ── Projects ─────────────────────────────────────────────────── */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-24 flex flex-col gap-16">
        {/* Section label */}
        <div>
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
            {t.homepage.projectsLabel}
          </span>
        </div>

        {/* Section heading */}
        <h2
          className="text-[#171717] mt-[-8px]"
          style={{
            fontSize: "clamp(32px, 5vw, 40px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "clamp(-1.2px, -0.06em, -2.4px)",
          }}
        >
          {t.homepage.projectsTitle}
        </h2>

        {/* Featured project — full-width horizontal */}
        <ProjectPreview project={featuredProject} featured />

        {/* Grid — 2 columns */}
        {gridProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridProjects.map((project) => (
              <ProjectPreview key={project.title} project={project} />
            ))}
          </div>
        )}

        {/* "See more" button */}
        {!showAllProjects && allGridProjects.length > 2 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllProjects(true)}
              className="text-[#171717] bg-white rounded-[6px] transition-colors duration-200 hover:bg-[#fafafa] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.43,
                padding: "8px 16px",
                boxShadow: "rgb(235,235,235) 0px 0px 0px 1px",
              }}
            >
              {t.homepage.moreProjects}
            </button>
          </div>
        )}
      </section>

      {/* Section divider */}
      <div style={{ borderTop: "1px solid #171717" }} />

      {/* ── Testimonials ─────────────────────────────────────────────── */}
      <section className="w-full max-w-[1200px] mx-auto px-8 py-24 flex flex-col gap-16">
        {/* Section label */}
        <div>
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
            {t.homepage.testimonialsLabel}
          </span>
        </div>

        <h2
          className="text-[#171717] mt-[-8px]"
          style={{
            fontSize: "clamp(32px, 5vw, 40px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "clamp(-1.2px, -0.06em, -2.4px)",
          }}
        >
          {t.homepage.testimonialsTitle}
        </h2>

        {/* Grid — 2 cols on large, 1 col on small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
          {visibleTestimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {/* "See more" button */}
        {!showAllTestimonials && testimonialsData.length > 2 && (
          <div className="flex justify-center">
            <button
              onClick={() => setShowAllTestimonials(true)}
              className="text-[#171717] bg-white rounded-[6px] transition-colors duration-200 hover:bg-[#fafafa] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
              style={{
                fontSize: "14px",
                fontWeight: 500,
                lineHeight: 1.43,
                padding: "8px 16px",
                boxShadow: "rgb(235,235,235) 0px 0px 0px 1px",
              }}
            >
              {t.homepage.moreTestimonials}
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

/* ─── Pipeline component ────────────────────────────────────────────────── */

const PIPELINE_COLORS = ["#0a72ef", "#de1d8d", "#ff5b4f"] as const;

function Pipeline({ steps }: { steps: PipelineStepText[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ebebeb] rounded-[8px] overflow-hidden"
      style={{ boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px" }}
    >
      {steps.map((step, i) => (
        <PipelineStep key={step.label} step={step} color={PIPELINE_COLORS[i % PIPELINE_COLORS.length]} />
      ))}
    </div>
  );
}

function PipelineStep({ step, color }: { step: PipelineStepText; color: string }) {
  return (
    <div className="bg-white flex flex-col gap-6 p-8">
      {/* Colored accent line */}
      <div
        className="w-8 h-[2px] rounded-full"
        style={{ background: color }}
      />

      {/* Label */}
      <span
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          fontSize: "11px",
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: "0.04em",
          color,
          textTransform: "uppercase",
        }}
      >
        {step.label}
      </span>

      {/* Title */}
      <h3
        className="text-[#171717]"
        style={{
          fontSize: "24px",
          fontWeight: 600,
          lineHeight: 1.33,
          letterSpacing: "-0.96px",
        }}
      >
        {step.title}
      </h3>

      {/* Description */}
      <p
        className="text-[#4d4d4d]"
        style={{ fontSize: "16px", fontWeight: 400, lineHeight: 1.5 }}
      >
        {step.description}
      </p>
    </div>
  );
}
