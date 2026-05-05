const cloudPractitionerBadge = "/assets/certifications/aws-certified-cloud-practicioner-badge.png";
const securitySpecialtyBadge = "/assets/certifications/aws-certified-security-specialty-badge.png";

export default function Hero() {
  const EMAIL = "sebastianhernando.dev@gmail.com";
  const LINKEDIN = "https://www.linkedin.com/in/sebastianhernando/";

  return (
    <section className="w-full max-w-[1200px] mx-auto px-8 pt-24 pb-16 flex flex-col gap-8">
      {/* Display heading */}
      <h1
        className="text-[#171717] leading-[1.05]"
        style={{
          fontSize: "clamp(40px, 6vw, 64px)",
          fontWeight: 600,
          letterSpacing: "clamp(-1.6px, -0.04em, -2.88px)",
        }}
      >
        Sebastián Hernando
      </h1>

      {/* Role + level */}
      <h2
        className="text-[#4d4d4d]"
        style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.5 }}
      >
        Full Stack Engineer · Semi Senior
      </h2>

      {/* Description */}
      <p
        className="text-[#4d4d4d] max-w-[600px]"
        style={{ fontSize: "18px", fontWeight: 400, lineHeight: 1.7 }}
      >
        Next.js, Python y AWS — tres años construyendo productos reales para
        equipos en Australia y Panamá, desde MVPs hasta plataformas en
        producción usadas por bancos y empresas.
      </p>

      {/* CTAs */}
      <div className="flex flex-row gap-4 flex-wrap">
        {/* Primary CTA */}
        <a
          href={`mailto:${EMAIL}?subject=%5BPortfolio%5D%20Contacto%20profesional&body=Hola%20Sebasti%C3%A1n%2C%0A%0A`}
          className="inline-flex items-center text-white bg-[#171717] rounded-[6px] transition-colors duration-200 hover:bg-[#2a2a2a] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
          style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.43, padding: "8px 16px" }}
        >
          Contactar
        </a>

        {/* Secondary CTA */}
        <a
          href={LINKEDIN}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-[#171717] bg-white rounded-[6px] transition-colors duration-200 hover:bg-[#fafafa] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
          style={{
            fontSize: "14px",
            fontWeight: 500,
            lineHeight: 1.43,
            padding: "8px 16px",
            boxShadow: "rgb(235,235,235) 0px 0px 0px 1px",
          }}
        >
          Ver LinkedIn
        </a>
      </div>

      {/* ── Certificaciones AWS ──────────────────────────────────────────── */}
      <div className="flex flex-col gap-6 pt-8" style={{ borderTop: "1px solid #ebebeb" }}>
        <span
          className="uppercase text-[#808080]"
          style={{
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            fontSize: "11px",
            fontWeight: 500,
            lineHeight: 1,
            letterSpacing: "0.08em",
          }}
        >
          Certificaciones
        </span>

        <div className="grid grid-cols-2 gap-4 max-w-[480px]">
          <CertBadge
            src={securitySpecialtyBadge}
            name="Security Specialty"
            issuer="Amazon Web Services"
            href="https://www.credly.com/badges/a1a0ad98-d1bb-4557-9ea1-9586d87c5ce9"
          />
          <CertBadge
            src={cloudPractitionerBadge}
            name="Cloud Practitioner"
            issuer="Amazon Web Services"
            href="https://www.credly.com/badges/9efd1c97-0a8c-405d-86c4-7a4b6d21775e"
          />
        </div>
      </div>
    </section>
  );
}

/* ── Certification badge card ───────────────────────────────────────────── */

interface CertBadgeProps {
  src: string;
  name: string;
  issuer: string;
  href: string;
}

function CertBadge({ src, name, issuer, href }: CertBadgeProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center gap-4 bg-white rounded-[8px] px-6 py-8 transition-all duration-200"
      style={{
        boxShadow:
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px",
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "rgba(0,0,0,0.12) 0px 0px 0px 1px, rgba(0,0,0,0.08) 0px 4px 8px, rgba(0,0,0,0.06) 0px 12px 16px -8px, #fafafa 0px 0px 0px 1px";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.boxShadow =
          "rgba(0,0,0,0.08) 0px 0px 0px 1px, rgba(0,0,0,0.04) 0px 2px 2px, rgba(0,0,0,0.04) 0px 8px 8px -8px, #fafafa 0px 0px 0px 1px";
      }}
    >
      {/* Badge image — centered, large */}
      <img
        src={src}
        alt={`AWS ${name} badge`}
        draggable={false}
        style={{ width: "128px", height: "128px", objectFit: "contain" }}
      />

      {/* Text — centered below badge */}
      <div className="flex flex-col items-center gap-1 text-center">
        <span
          className="text-[#171717]"
          style={{ fontSize: "14px", fontWeight: 600, lineHeight: 1.43, letterSpacing: "-0.32px" }}
        >
          {name}
        </span>
        <span
          className="text-[#808080]"
          style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.33 }}
        >
          {issuer}
        </span>
      </div>

      {/* "Ver credencial" — aparece en hover */}
      <span
        className="text-[#0072f5] transition-opacity duration-200"
        style={{
          fontSize: "12px",
          fontWeight: 500,
          lineHeight: 1.33,
          opacity: 0,
        }}
        ref={(el) => {
          if (!el) return;
          const card = el.closest("a");
          if (!card) return;
          card.addEventListener("mouseenter", () => { el.style.opacity = "1"; });
          card.addEventListener("mouseleave", () => { el.style.opacity = "0"; });
        }}
      >
        Ver credencial ↗
      </span>
    </a>
  );
}
