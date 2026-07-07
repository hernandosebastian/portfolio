import { JSX } from "react";
import { LinkedinIcon } from "@/icons/linkedin-icon";
import { useLocale } from "@/i18n/i18n-context";

const EMAIL = "sebastianhernando.dev@gmail.com" as const;
const LINKEDIN = "https://www.linkedin.com/in/sebastianhernando/" as const;
const CV = "/assets/pdf/Sebastian_Hernando_CV_ES.pdf" as const;

export default function Footer(): JSX.Element {
  const { t } = useLocale();

  const mailto = `mailto:${EMAIL}?subject=${encodeURIComponent(
    t.footer.mailtoSubject
  )}&body=${encodeURIComponent(t.footer.mailtoBody)}`;

  return (
    <footer className="w-full bg-white" style={{ borderTop: "1px solid #171717" }}>
      <div className="max-w-[1200px] mx-auto px-8 py-24 flex flex-col items-start sm:items-center gap-8">

        {/* Heading */}
        <h2
          className="text-left sm:text-center text-[#171717] leading-[1.1]"
          style={{
            fontSize: "clamp(32px, 5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "clamp(-1.28px, -0.05em, -2.4px)",
          }}
        >
          {t.footer.heading}
        </h2>

        {/* Subtext */}
        <p
          className="text-left sm:text-center text-[#4d4d4d]"
          style={{ fontSize: "20px", fontWeight: 400, lineHeight: 1.8 }}
        >
          {t.footer.subtext}
        </p>

        {/* Primary CTA */}
        <a
          href={mailto}
          className="inline-flex items-center text-white bg-[#171717] rounded-[6px] transition-colors duration-200 hover:bg-[#2a2a2a] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
          style={{ fontSize: "14px", fontWeight: 500, lineHeight: 1.43, padding: "8px 16px" }}
        >
          {t.footer.sendEmail}
        </a>

        {/* Social links */}
        <div className="flex items-center gap-2">
          <SocialLink href={LINKEDIN} label={t.footer.linkedin}>
            <LinkedinIcon />
          </SocialLink>
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-[#808080] bg-white rounded-[6px] transition-colors duration-200 hover:text-[#171717] hover:bg-[#fafafa] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
            style={{
              fontSize: "13px",
              fontWeight: 500,
              lineHeight: 1,
              padding: "0 12px",
              height: "40px",
              boxShadow: "rgb(235,235,235) 0px 0px 0px 1px",
            }}
          >
            {t.footer.viewCv} ↗
          </a>
        </div>

        {/* Divider */}
        <div className="w-full mt-8" style={{ borderTop: "1px solid #ebebeb" }} />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:justify-between w-full">
          <p
            className="text-[#808080]"
            style={{ fontSize: "12px", fontWeight: 500, lineHeight: 1.33 }}
          >
            Sebastián Hernando
          </p>
          <p
            className="text-[#808080]"
            style={{ fontSize: "12px", fontWeight: 400, lineHeight: 1.33 }}
          >
            {EMAIL}
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex items-center justify-center text-[#808080] rounded-[6px] transition-colors duration-200 hover:text-[#171717] hover:bg-[#fafafa] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
      style={{
        width: "40px",
        height: "40px",
        boxShadow: "rgb(235,235,235) 0px 0px 0px 1px",
      }}
    >
      {children}
    </a>
  );
}
