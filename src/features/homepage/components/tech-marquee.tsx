const BASE = "https://cdn.jsdelivr.net/npm/simple-icons/icons";

const STACK = [
  // Frontend
  { name: "React",      src: `${BASE}/react.svg` },
  { name: "Next.js",    src: `${BASE}/nextdotjs.svg` },
  { name: "Tailwind",   src: `${BASE}/tailwindcss.svg` },
  // Shared language
  { name: "TypeScript", src: `${BASE}/typescript.svg` },
  // Backend
  { name: "Node.js",    src: `${BASE}/nodedotjs.svg` },
  { name: "NestJS",     src: `${BASE}/nestjs.svg` },
  { name: "Python",     src: `${BASE}/python.svg` },
  { name: "FastAPI",    src: `${BASE}/fastapi.svg` },
  // Cloud + Data
  { name: "AWS",        src: `${BASE}/amazonaws.svg` },
  { name: "Snowflake",  src: `${BASE}/snowflake.svg` },
  { name: "Databricks", src: `${BASE}/databricks.svg` },
] as const;

/* brightness(0) → turns any color to black, opacity(0.5) → #808080 on white */
const ICON_STYLE = { display: "block", flexShrink: 0, filter: "brightness(0) opacity(0.5)" } as const;

export default function TechMarquee() {
  const items = [...STACK, ...STACK];

  return (
    <div
      className="w-full"
      style={{ borderTop: "1px solid #ebebeb", borderBottom: "1px solid #ebebeb" }}
    >
      <div className="flex items-center tech-marquee-wrapper">
        {/* Left label */}
        <div
          className="flex-shrink-0 px-8 self-stretch flex items-center"
          style={{ borderRight: "1px solid #ebebeb" }}
        >
          <span
            style={{
              fontFamily: "ui-monospace, SFMono-Regular, monospace",
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.08em",
              color: "#808080",
              textTransform: "uppercase",
              whiteSpace: "nowrap",
            }}
          >
            Stack
          </span>
        </div>

        {/* Scrolling area */}
        <div className="overflow-hidden flex-1">
          <div
            className="tech-marquee-track flex items-center"
            style={{ width: "max-content" }}
          >
            {items.map((tech, i) => (
              <div
                key={i}
                className="flex items-center gap-2 flex-shrink-0"
                style={{
                  padding: "10px 20px",
                  borderLeft: "1px solid #ebebeb",
                }}
              >
                <img
                  src={tech.src}
                  alt={tech.name}
                  width={14}
                  height={14}
                  loading="lazy"
                  style={ICON_STYLE}
                />
                <span
                  style={{
                    fontFamily: "ui-monospace, SFMono-Regular, monospace",
                    fontSize: "12px",
                    fontWeight: 500,
                    color: "#808080",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
