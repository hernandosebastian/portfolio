# Portfolio — Sebastián Hernando

Sitio web de portfolio personal, bilingüe (inglés / español), construido como SPA con React + Vite y desplegado en Vercel.

🌐 **Producción:** [www.sebastianhernando.dev](https://www.sebastianhernando.dev)

---

## Stack

| Herramienta | Versión | Rol |
|---|---|---|
| [React](https://react.dev/) | 19 | UI |
| [React Router](https://reactrouter.com/) | 7 | Enrutamiento (SPA, rutas por idioma) |
| [Vite](https://vite.dev/) | 8 | Dev server y bundler |
| [TypeScript](https://www.typescriptlang.org/) | 6 | Tipado |
| [Tailwind CSS](https://tailwindcss.com/) | 4 | Estilos (vía plugin `@tailwindcss/vite`) |
| [react-helmet-async](https://github.com/staylor/react-helmet-async) | 3 | SEO por ruta e idioma |
| [react-slick](https://react-slick.neostack.com/) | 0.31 | Carruseles de screenshots |
| [@vercel/analytics](https://vercel.com/docs/analytics) + [speed-insights](https://vercel.com/docs/speed-insights) | 2 | Métricas |

---

## Requisitos

- **Node.js** ≥ 20 (desarrollado con `20.19.4`)
- **npm** ≥ 10 (desarrollado con `10.8.2`)

> El proyecto usa ESM (`"type": "module"`).

---

## Puesta en marcha

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el entorno de desarrollo (http://localhost:5173)
npm run dev
```

### Scripts disponibles

| Script | Descripción |
|---|---|
| `npm run dev` | Arranca Vite en modo desarrollo con HMR. |
| `npm run build` | Genera el `sitemap.xml`, compila los tipos (`tsc -b`) y hace el build de producción en `dist/`. |
| `npm run preview` | Sirve localmente el build de `dist/` para verificarlo. |
| `npm run lint` | Ejecuta ESLint sobre todo el proyecto. |

El paso de `build` ejecuta primero [`scripts/generate-sitemap.mjs`](scripts/generate-sitemap.mjs), que deriva las rutas visibles desde [`src/data/projects.data.ts`](src/data/projects.data.ts) y escribe `public/sitemap.xml` (una entrada por idioma con sus alternates `hreflang`). Ese archivo se genera en cada build y está en `.gitignore`.

---

## Estructura

```
portfolio/
├── public/               # Assets estáticos (fuentes, imágenes, PDFs de CV, favicons, robots.txt)
├── scripts/
│   └── generate-sitemap.mjs   # Genera public/sitemap.xml en build
├── src/
│   ├── config/routes/    # Definición del router (rutas por idioma)
│   ├── data/             # Datos de proyectos y testimonios
│   ├── features/         # Componentes por dominio (homepage, project, common)
│   │   └── common/seo/   # SEO por ruta e idioma con react-helmet-async
│   ├── i18n/             # Locales, contexto de idioma y textos de UI
│   ├── hooks/ · icons/ · interfaces/
│   └── main.tsx          # Punto de entrada
├── index.html
├── vite.config.ts        # Alias "@" → /src, plugins react + tailwind
├── vercel.json           # Rewrites SPA
└── tsconfig*.json
```

### Alias de imports

`@` apunta a `src/` (configurado en [`vite.config.ts`](vite.config.ts) y `tsconfig`). Ej: `import { router } from "@/config/routes"`.

---

## ¿Dónde se edita cada contenido?

Casi todo el contenido vive separado del layout. Los textos traducibles usan objetos `{ en: "...", es: "..." }`.

| Contenido | Archivo / carpeta | Notas |
|---|---|---|
| **Proyectos** | [`src/data/projects.data.ts`](src/data/projects.data.ts) | Un objeto por proyecto (título, descripciones bilingües, rol, tecnologías, links, screenshots…). El campo `internal_link` define la URL (`/:locale/proyecto/<internal_link>`). Poné `hidden: true` para ocultarlo del home y del sitemap. |
| **Imágenes de proyectos** | [`public/assets/projects/<proyecto>/`](public/assets/projects/) | Se referencian por ruta absoluta desde `public`, ej. `image: "/assets/projects/zencost/zencost-homepage.png"`. Los screenshots van en la subcarpeta `screenshots/`. |
| **Testimonios** | [`src/data/testimonials.data.ts`](src/data/testimonials.data.ts) | Un objeto por testimonio (nombre, texto bilingüe, rol, empresa). |
| **Hero (nombre, CTAs, badges)** | [`src/features/homepage/components/hero.tsx`](src/features/homepage/components/hero.tsx) | El nombre, el email de contacto, el link de LinkedIn y las tarjetas de certificaciones AWS (con su link a Credly) están en este componente. |
| **Textos del hero traducibles** | [`src/i18n/ui.ts`](src/i18n/ui.ts) → `hero` | El rol, la descripción y las etiquetas (`role`, `description`, `contact`, `certifications`…) por idioma. |
| **Certificaciones (imágenes/badges)** | [`public/assets/certifications/`](public/assets/certifications/) | Los `.png` de los badges; se enlazan desde `hero.tsx`. |
| **Logos** | [`public/assets/logos/`](public/assets/logos/) | Logos de empresas/proyectos usados en las cards. |
| **CV (PDF)** | [`public/assets/pdf/`](public/assets/pdf/) | `Sebastian_Hernando_CV_EN.pdf` y `..._CV_ES.pdf`; se sirve el que corresponde al idioma activo. |
| **Textos generales de UI** | [`src/i18n/ui.ts`](src/i18n/ui.ts) | Toda la "chrome" (nav, home, footer, secciones de proyecto) por idioma. |
| **Stack / tech marquee** | [`src/features/homepage/components/tech-marquee.tsx`](src/features/homepage/components/tech-marquee.tsx) | Lista de tecnologías del carrusel del home. |

> El `sitemap.xml` se genera automáticamente a partir de los proyectos **visibles** de `projects.data.ts` en cada `npm run build` — al agregar u ocultar un proyecto no hay que tocar el sitemap a mano.

---

## Diseño

El diseño visual está **inspirado en el sistema de diseño de [Vercel](https://vercel.com/) (Geist)**: canvas blanco (`#ffffff`), texto casi-negro (`#171717`), la técnica de *shadow-as-border* (`box-shadow: 0 0 0 1px …` en vez de bordes tradicionales), tipografía con letter-spacing negativo agresivo y una escala de grises muy restringida.

La referencia completa — paleta de colores, roles, sombras, tipografía y patrones de componentes — está documentada en [`DESIGN-vercel.md`](DESIGN-vercel.md). Es la guía a seguir al crear o ajustar componentes para mantener la coherencia visual.

---

## Internacionalización (i18n)

- Idiomas soportados: **inglés (`en`, por defecto)** y **español (`es`)** — ver [`src/i18n/locale.ts`](src/i18n/locale.ts).
- Todas las rutas llevan prefijo de idioma: `/:locale` (`/en`, `/es/proyecto/:internal_link`, …).
- Cualquier ruta sin prefijo válido (incluida `/`) redirige al idioma detectado del navegador o al guardado en `localStorage`.
- El SEO (title, description, canonical, `hreflang`, Open Graph, Twitter Card) se resuelve en runtime por ruta e idioma vía `react-helmet-async`. `index.html` no lleva tags estáticos a propósito (ver comentario en el archivo).

---

## Despliegue (Vercel)

El proyecto se despliega en **Vercel** como sitio estático:

- **Build command:** `npm run build`
- **Output directory:** `dist`
- **Install command:** `npm install`

[`vercel.json`](vercel.json) define un rewrite que envía todas las rutas a `/index.html`, necesario para que el enrutamiento client-side de la SPA funcione en recargas y enlaces directos:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

Cada push a la rama conectada dispara un deploy automático. Analytics y Speed Insights se activan a través de los paquetes de `@vercel/*` incluidos en la app.
