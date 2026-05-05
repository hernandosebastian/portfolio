import { useState } from "react";

import { projectsData } from "@/data/projects.data";
import { testimonialsData } from "@/data/testimonials.data";
import Hero from "@/features/homepage/components/hero";
import TechMarquee from "@/features/homepage/components/tech-marquee";
import ProjectPreview from "@/features/homepage/components/project-preview";
import Testimonial from "@/features/homepage/components/testimonial";
import { useSeo } from "@/hooks/use-seo";

export default function Homepage() {
  useSeo();

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
      {/* ── Hero ─────────────────────────────────────────────────────── */}
      <Hero />

      {/* ── Tech stack marquee ───────────────────────────────────────── */}
      <TechMarquee />

      {/* Section divider */}
      <div style={{ borderTop: "1px solid #171717" }} />

      {/* ── Mi enfoque ───────────────────────────────────────────────── */}
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
            Enfoque
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
          Lo que me define
        </h2>

        <Pipeline />
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
            Proyectos
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
          Trabajo seleccionado
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

        {/* "Ver más" button */}
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
              Ver más proyectos
            </button>
          </div>
        )}
      </section>

      {/* Section divider */}
      <div style={{ borderTop: "1px solid #171717" }} />

      {/* ── Testimonios ──────────────────────────────────────────────── */}
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
            Testimonios
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
          Lo que dicen quienes trabajaron conmigo
        </h2>

        {/* Grid — 2 cols on large, 1 col on small */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 auto-rows-fr">
          {visibleTestimonials.map((testimonial) => (
            <Testimonial key={testimonial.name} testimonial={testimonial} />
          ))}
        </div>

        {/* "Ver más" button */}
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
              Ver más testimonios
            </button>
          </div>
        )}
      </section>
    </div>
  );
}

/* ─── Pipeline component ────────────────────────────────────────────────── */

const PIPELINE_STEPS = [
  {
    color: "#0a72ef",
    label: "01 — Foco en producto, no en tecnología",
    title: "Trabajo donde el problema lo requiera",
    description:
      "Entré a proyectos en Vue, .NET, Python y AWS con una profundidad que no había necesitado antes. Lo que no sé lo aprendo en el camino — me certifiqué en AWS Security Specialty en 2 meses porque la empresa lo requería.",
  },
  {
    color: "#de1d8d",
    label: "02 — Remoto internacional desde el día uno",
    title: "3 años trabajando para equipos en Australia y Panamá",
    description:
      "Sin oficina, sin micromanagement. Me integré, entregué y crecí en entornos donde la comunicación y la autonomía son lo que importa.",
  },
  {
    color: "#ff5b4f",
    label: "03 — Sistemas que generan ingresos reales",
    title: "No hago demos, hago productos",
    description:
      "Sistema FinOps publicado en AWS Marketplace y usado por bancos, aseguradoras y empresas de salud. Plataforma de streaming con pasarela de pago, herramientas agrícolas con sensores en tiempo real. Código que escala y clientes que pagan.",
  },
] as const;

function Pipeline() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#ebebeb] rounded-[8px] overflow-hidden"
      style={{ boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px" }}
    >
      {PIPELINE_STEPS.map((step) => (
        <PipelineStep key={step.label} step={step} />
      ))}
    </div>
  );
}

function PipelineStep({ step }: { step: typeof PIPELINE_STEPS[number] }) {
  return (
    <div className="bg-white flex flex-col gap-6 p-8">
      {/* Colored accent line */}
      <div
        className="w-8 h-[2px] rounded-full"
        style={{ background: step.color }}
      />

      {/* Label */}
      <span
        style={{
          fontFamily: "ui-monospace, SFMono-Regular, monospace",
          fontSize: "11px",
          fontWeight: 500,
          lineHeight: 1.4,
          letterSpacing: "0.04em",
          color: step.color,
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
