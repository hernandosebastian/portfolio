import { readFileSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://www.sebastianhernando.dev";

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

const urls = [
  { loc: `${SITE_URL}/`, priority: "1.0" },
  ...internalLinks.map((link) => ({
    loc: `${SITE_URL}/proyecto/${link}`,
    priority: "0.8",
  })),
];

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    (u) => `  <url>
    <loc>${u.loc}</loc>
    <priority>${u.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

writeFileSync(path.join(__dirname, "../public/sitemap.xml"), xml, "utf-8");
console.log(`sitemap.xml generado con ${urls.length} URLs`);
