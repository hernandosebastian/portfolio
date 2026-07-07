import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.sebastianhernando.dev";
const LOCALES = ["en", "es"];
const DEFAULT_LOCALE = "en";

const projectsFile = readFileSync(
  path.join(__dirname, "../src/data/projects.data.ts"),
  "utf-8"
);

// Split into individual project object blocks so hidden/internal_link stay scoped per project.
const hiddenRegex = /hidden:\s*true/;
const projectBlocks = projectsFile.split(/\{\s*\n\s*title:/).slice(1);

const internalLinks = [];
for (const block of projectBlocks) {
  const match = block.match(/internal_link:\s*"([^"]+)"/);
  if (!match) continue;

  const closingIndex = block.indexOf("\n  },");
  const relevantSlice = closingIndex === -1 ? block : block.slice(0, closingIndex);
  if (hiddenRegex.test(relevantSlice)) continue;

  internalLinks.push(match[1]);
}

// Locale-less paths (home + each visible project).
const paths = ["/", ...internalLinks.map((link) => `/proyecto/${link}`)];

const localizedUrl = (locale, p) => `${SITE_URL}/${locale}${p === "/" ? "" : p}`;

// One <url> entry per locale per path, each listing all hreflang alternates.
const urlEntries = [];
for (const p of paths) {
  const priority = p === "/" ? "1.0" : "0.8";
  for (const locale of LOCALES) {
    const alternates = [
      ...LOCALES.map(
        (l) =>
          `    <xhtml:link rel="alternate" hreflang="${l}" href="${localizedUrl(l, p)}"/>`
      ),
      `    <xhtml:link rel="alternate" hreflang="x-default" href="${localizedUrl(DEFAULT_LOCALE, p)}"/>`,
    ].join("\n");

    urlEntries.push(
      `  <url>
    <loc>${localizedUrl(locale, p)}</loc>
${alternates}
    <priority>${priority}</priority>
  </url>`
    );
  }
}

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${urlEntries.join("\n")}
</urlset>
`;

writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml, "utf-8");
console.log(`sitemap.xml generado con ${urlEntries.length} URLs (${paths.length} rutas × ${LOCALES.length} idiomas)`);
