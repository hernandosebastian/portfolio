import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import { useLocale } from "@/i18n/i18n-context";
import { LanguageSwitcher } from "@/features/common/language-switcher/language-switcher";

const LINKEDIN_URL = "https://www.linkedin.com/in/sebastianhernando/" as const;
const CV_PATH = "/assets/pdf/Sebastian_Hernando_CV_ES.pdf" as const;

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t, localePath } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);

  const homePath = localePath("/");

  const navLinks = [
    {
      label: t.nav.home,
      href: homePath,
      onClick: () => {
        if (location.pathname !== homePath) navigate(homePath);
        setMobileOpen(false);
      },
    },
    {
      label: t.nav.linkedin,
      href: LINKEDIN_URL,
      onClick: () => { window.open(LINKEDIN_URL, "_blank"); setMobileOpen(false); },
    },
    {
      label: t.nav.resume,
      href: CV_PATH,
      onClick: () => { window.open(CV_PATH, "_blank"); setMobileOpen(false); },
    },
  ];

  return (
    <header
      className="sticky top-0 z-50 w-full bg-white"
      style={{ boxShadow: "rgba(0,0,0,0.08) 0px 0px 0px 1px" }}
    >
      <div className="max-w-[1200px] mx-auto px-8 h-14 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href={homePath}
          onClick={(e) => { e.preventDefault(); navigate(homePath); }}
          className="text-[16px] font-semibold text-[#171717] tracking-[-0.32px] leading-none cursor-pointer select-none"
          style={{ fontWeight: 600 }}
        >
          Sebastián Hernando
        </a>

        {/* Center nav links — desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = link.href === homePath && location.pathname === homePath;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); link.onClick(); }}
                className="text-[14px] font-medium text-[#171717] leading-[1.43] transition-colors duration-200 hover:text-[#4d4d4d] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
                style={{
                  fontWeight: isActive ? 600 : 500,
                  borderBottom: isActive ? "1px solid #171717" : "none",
                  paddingBottom: isActive ? "1px" : "0",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right side — language switcher + CTA (desktop) */}
        <div className="hidden md:flex items-center gap-6">
          <LanguageSwitcher />
          <a
            href={CV_PATH}
            onClick={(e) => { e.preventDefault(); window.open(CV_PATH, "_blank"); }}
            className="inline-flex items-center text-[14px] font-medium text-white bg-[#171717] px-4 py-2 rounded-[6px] leading-[1.43] transition-colors duration-200 hover:bg-[#2a2a2a] focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
            style={{ fontWeight: 500 }}
          >
            {t.nav.viewCv}
          </a>
        </div>

        {/* Hamburger — mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[5px] rounded-full focus:outline-none focus-visible:outline-2 focus-visible:outline-[hsla(212,100%,48%,1)]"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={t.nav.menu}
        >
          <span
            className="block w-5 h-[1.5px] bg-[#171717] transition-all duration-200"
            style={{ transform: mobileOpen ? "translateY(6.5px) rotate(45deg)" : "none" }}
          />
          <span
            className="block w-5 h-[1.5px] bg-[#171717] transition-all duration-200"
            style={{ opacity: mobileOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-[1.5px] bg-[#171717] transition-all duration-200"
            style={{ transform: mobileOpen ? "translateY(-6.5px) rotate(-45deg)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden bg-white px-8 pb-6 flex flex-col gap-6"
          style={{ boxShadow: "rgba(0,0,0,0.08) 0px 1px 0px 0px" }}
        >
          {navLinks.map((link) => {
            const isActive = link.href === homePath && location.pathname === homePath;
            return (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => { e.preventDefault(); link.onClick(); }}
                className="text-[16px] text-[#171717] leading-none"
                style={{ fontWeight: isActive ? 600 : 500 }}
              >
                {link.label}
              </a>
            );
          })}
          <a
            href={CV_PATH}
            onClick={(e) => { e.preventDefault(); window.open(CV_PATH, "_blank"); setMobileOpen(false); }}
            className="inline-flex items-center justify-center text-[14px] font-medium text-white bg-[#171717] px-4 py-2 rounded-[6px] w-fit"
            style={{ fontWeight: 500 }}
          >
            {t.nav.viewCv}
          </a>
          <div className="pt-2">
            <LanguageSwitcher onNavigate={() => setMobileOpen(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
