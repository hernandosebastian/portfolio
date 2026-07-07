import { Helmet } from "react-helmet-async";

import { SITE_URL } from "@/features/common/seo/person-schema";
import { useLocale } from "@/i18n/i18n-context";
import { DEFAULT_LOCALE, LOCALES } from "@/i18n/locale";

interface SeoProps {
  title: string;
  description: string;
  /** App path WITHOUT locale prefix, e.g. "/" or "/proyecto/zencost". */
  path?: string;
  image?: string;
  type?: "website" | "article";
  jsonLd?: Record<string, unknown>;
}

const OG_LOCALE: Record<string, string> = {
  en: "en_US",
  es: "es_ES",
};

/** Build a fully-qualified URL for a given locale + locale-less path. */
function localizedUrl(locale: string, path: string): string {
  const suffix = path === "/" ? "" : path;
  return `${SITE_URL}/${locale}${suffix}`;
}

export function Seo({
  title,
  description,
  path = "/",
  image = "/android-chrome-512x512.png",
  type = "website",
  jsonLd,
}: SeoProps) {
  const { locale } = useLocale();

  const url = localizedUrl(locale, path);
  const absoluteImage = image.startsWith("http") ? image : `${SITE_URL}${image}`;

  return (
    <Helmet>
      <html lang={locale} />

      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* hreflang alternates so Google serves the right language per region */}
      {LOCALES.map((code) => (
        <link key={code} rel="alternate" hrefLang={code} href={localizedUrl(code, path)} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={localizedUrl(DEFAULT_LOCALE, path)} />

      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={absoluteImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content="Sebastián Hernando" />
      <meta property="og:locale" content={OG_LOCALE[locale]} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={absoluteImage} />

      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
}
