import { ProjectInformationDetailsType } from "@/features/project/enum/project-information-details-type.enum";
import type { Locale } from "@/i18n/locale";

/**
 * All hardcoded UI strings, per language. Content that lives in the data files
 * (projects, testimonials) is translated there; this is chrome/labels only.
 */

export interface PipelineStepText {
  label: string;
  title: string;
  description: string;
}

export interface UiStrings {
  nav: {
    home: string;
    linkedin: string;
    resume: string;
    viewCv: string;
    menu: string;
    cvPath: string;
  };
  hero: {
    role: string;
    description: string;
    contact: string;
    viewLinkedin: string;
    certifications: string;
    viewCredential: string;
    mailtoSubject: string;
    mailtoBody: string;
  };
  homepage: {
    approachLabel: string;
    approachTitle: string;
    projectsLabel: string;
    projectsTitle: string;
    moreProjects: string;
    testimonialsLabel: string;
    testimonialsTitle: string;
    moreTestimonials: string;
    pipeline: PipelineStepText[];
  };
  footer: {
    heading: string;
    subtext: string;
    sendEmail: string;
    viewCv: string;
    linkedin: string;
    mailtoSubject: string;
    mailtoBody: string;
  };
  stack: {
    label: string;
  };
  project: {
    team: string;
    role: string;
    year: string;
    duration: string;
    yearDuration: string;
    viewProject: string;
    marketplace: string;
    screenshotsPrivate: string;
    sectionLabels: Record<ProjectInformationDetailsType, string>;
  };
}

export const ui: Record<Locale, UiStrings> = {
  en: {
    nav: {
      home: "Home",
      linkedin: "LinkedIn",
      resume: "Resume",
      viewCv: "View CV",
      menu: "Menu",
      cvPath: "/assets/pdf/Sebastian_Hernando_CV_EN.pdf",
    },
    hero: {
      role: "Solutions Architect · Full-Stack Developer",
      description:
        "Next.js, Python and AWS — three years building real products for teams in Australia and Panama, from MVPs to production platforms used by banks and enterprises.",
      contact: "Get in touch",
      viewLinkedin: "View LinkedIn",
      certifications: "Certifications",
      viewCredential: "View credential ↗",
      mailtoSubject: "Job opportunity – Sebastián Hernando",
      mailtoBody:
        "Hi Sebastián,\n\nI'm reaching out about a job opportunity:\n\nCompany: \nRole: \nWork mode (remote / hybrid / on-site): \nEstimated salary range: \nAdditional details: \n\nLooking forward to your reply.\n\nBest regards,",
    },
    homepage: {
      approachLabel: "Approach",
      approachTitle: "What defines me",
      projectsLabel: "Projects",
      projectsTitle: "Selected work",
      moreProjects: "See more projects",
      testimonialsLabel: "Testimonials",
      testimonialsTitle: "What people I've worked with say",
      moreTestimonials: "See more testimonials",
      pipeline: [
        {
          label: "01 — Product-focused, not tech-focused",
          title: "I work wherever the problem demands",
          description:
            "I jumped into projects in Vue, .NET, Python and AWS at a depth I hadn't needed before. What I don't know, I learn on the way — I earned the AWS Security Specialty certification in 2 months because the company required it.",
        },
        {
          label: "02 — International remote from day one",
          title: "3 years working for teams in Australia and Panama",
          description:
            "No office, no micromanagement. I integrated, delivered and grew in environments where communication and autonomy are what matter.",
        },
        {
          label: "03 — Systems that generate real revenue",
          title: "I don't build demos, I build products",
          description:
            "A FinOps system published on the AWS Marketplace and used by banks, insurers and healthcare companies. A streaming platform with a payment gateway, agricultural tools with real-time sensors. Code that scales and clients that pay.",
        },
      ],
    },
    footer: {
      heading: "Interested in collaborating or a professional contact?",
      subtext: "I'll be glad to answer any question or proposal.",
      sendEmail: "Send an email",
      viewCv: "View CV",
      linkedin: "LinkedIn",
      mailtoSubject: "Job opportunity – Sebastián Hernando",
      mailtoBody:
        "Hi Sebastián,\n\nI'm reaching out about a job opportunity:\n\nCompany: \nRole: \nWork mode (remote / hybrid / on-site): \nEstimated salary range: \nAdditional details: \n\nLooking forward to your reply.\n\nBest regards,",
    },
    stack: {
      label: "Stack",
    },
    project: {
      team: "Team",
      role: "Role",
      year: "Year",
      duration: "Duration",
      yearDuration: "Year — Duration",
      viewProject: "View project",
      marketplace: "AWS Marketplace",
      screenshotsPrivate: "The screenshots are confidential and cannot be shown.",
      sectionLabels: {
        [ProjectInformationDetailsType.WHY_THIS_PROJECT]: "Why this project?",
        [ProjectInformationDetailsType.SOLUTION]: "Solution",
        [ProjectInformationDetailsType.MY_ROLE]: "My role",
        [ProjectInformationDetailsType.IMPACT]: "Impact",
        [ProjectInformationDetailsType.TECHNOLOGIES_USED]: "Technologies used",
        [ProjectInformationDetailsType.MAJOR_CHALLENGES]: "Major challenges",
        [ProjectInformationDetailsType.SCREENSHOTS]: "Screenshots",
      },
    },
  },
  es: {
    nav: {
      home: "Inicio",
      linkedin: "LinkedIn",
      resume: "Currículum",
      viewCv: "Ver CV",
      menu: "Menú",
      cvPath: "/assets/pdf/Sebastian_Hernando_CV_ES.pdf",
    },
    hero: {
      role: "Solutions Architect · Full-Stack Developer",
      description:
        "Next.js, Python y AWS — tres años construyendo productos reales para equipos en Australia y Panamá, desde MVPs hasta plataformas en producción usadas por bancos y empresas.",
      contact: "Contactar",
      viewLinkedin: "Ver LinkedIn",
      certifications: "Certificaciones",
      viewCredential: "Ver credencial ↗",
      mailtoSubject: "Oportunidad laboral – Sebastián Hernando",
      mailtoBody:
        "Hola Sebastián,\n\nMe comunico por una oportunidad laboral:\n\nEmpresa: \nRol: \nModalidad (remoto / híbrido / presencial): \nRango salarial estimado: \nDetalles adicionales: \n\nQuedo atento a tu respuesta.\n\nSaludos,",
    },
    homepage: {
      approachLabel: "Enfoque",
      approachTitle: "Lo que me define",
      projectsLabel: "Proyectos",
      projectsTitle: "Trabajo seleccionado",
      moreProjects: "Ver más proyectos",
      testimonialsLabel: "Testimonios",
      testimonialsTitle: "Lo que dicen quienes trabajaron conmigo",
      moreTestimonials: "Ver más testimonios",
      pipeline: [
        {
          label: "01 — Foco en producto, no en tecnología",
          title: "Trabajo donde el problema lo requiera",
          description:
            "Entré a proyectos en Vue, .NET, Python y AWS con una profundidad que no había necesitado antes. Lo que no sé lo aprendo en el camino — me certifiqué en AWS Security Specialty en 2 meses porque la empresa lo requería.",
        },
        {
          label: "02 — Remoto internacional desde el día uno",
          title: "3 años trabajando para equipos en Australia y Panamá",
          description:
            "Sin oficina, sin micromanagement. Me integré, entregué y crecí en entornos donde la comunicación y la autonomía son lo que importa.",
        },
        {
          label: "03 — Sistemas que generan ingresos reales",
          title: "No hago demos, hago productos",
          description:
            "Sistema FinOps publicado en AWS Marketplace y usado por bancos, aseguradoras y empresas de salud. Plataforma de streaming con pasarela de pago, herramientas agrícolas con sensores en tiempo real. Código que escala y clientes que pagan.",
        },
      ],
    },
    footer: {
      heading: "¿Interesado en colaborar o en contacto profesional?",
      subtext: "Estaré encantado de responder a cualquier consulta o propuesta.",
      sendEmail: "Enviar un E-Mail",
      viewCv: "Ver CV",
      linkedin: "LinkedIn",
      mailtoSubject: "Oportunidad laboral – Sebastián Hernando",
      mailtoBody:
        "Hola Sebastián,\n\nMe comunico por una oportunidad laboral:\n\nEmpresa: \nRol: \nModalidad (remoto / híbrido / presencial): \nRango salarial estimado: \nDetalles adicionales: \n\nQuedo atento a tu respuesta.\n\nSaludos,",
    },
    stack: {
      label: "Stack",
    },
    project: {
      team: "Equipo",
      role: "Rol",
      year: "Año",
      duration: "Duración",
      yearDuration: "Año — Duración",
      viewProject: "Ver proyecto",
      marketplace: "AWS Marketplace",
      screenshotsPrivate: "Las capturas son confidenciales y no pueden mostrarse.",
      sectionLabels: {
        [ProjectInformationDetailsType.WHY_THIS_PROJECT]: "¿Por qué este proyecto?",
        [ProjectInformationDetailsType.SOLUTION]: "Solución",
        [ProjectInformationDetailsType.MY_ROLE]: "Mi rol",
        [ProjectInformationDetailsType.IMPACT]: "Impacto",
        [ProjectInformationDetailsType.TECHNOLOGIES_USED]: "Tecnologías utilizadas",
        [ProjectInformationDetailsType.MAJOR_CHALLENGES]: "Principales desafíos",
        [ProjectInformationDetailsType.SCREENSHOTS]: "Capturas de pantalla",
      },
    },
  },
};
