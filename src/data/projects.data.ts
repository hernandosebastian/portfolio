import { Project } from "@/interfaces/project.interface";

const PERSONAL = { en: "Personal project", es: "Proyecto personal" };
const BIGGER = { en: "Bigger", es: "Bigger" };

export const projectsData: Project[] = [
  {
    title: "ZenCost",
    description: {
      en: "A FinOps SaaS platform published on the AWS Marketplace by Alpha-IB. It gives AWS teams full visibility, automated control and maximum savings over their cloud resources. Agentless integration via IAM Role and CloudFormation StackSets, automatic resource scheduling, an optimization engine with security and billing findings, and a suite of operational reports.",
      es: "Plataforma SaaS de FinOps publicada en AWS Marketplace por Alpha-IB. Permite a equipos de AWS tener visibilidad total, control automatizado y ahorro máximo sobre sus recursos cloud. Integración agentless via IAM Role y CloudFormation StackSets, scheduling automático de recursos, motor de optimización con hallazgos de seguridad y billing, y suite de informes operativos.",
    },
    short_description: {
      en: "A FinOps SaaS platform published on the AWS Marketplace that unifies financial visibility and control of AWS for cloud teams.",
      es: "Plataforma SaaS de FinOps publicada en AWS Marketplace que unifica visibilidad y control financiero de AWS para equipos cloud.",
    },
    image: "/assets/projects/zencost/zencost-homepage.png",
    logo: "/assets/logos/ivcisa-logo.png",
    internal_link: "zencost",
    autority: { en: "Alpha-IB", es: "Alpha-IB" },
    hasVideo: false,
    screenshotsPrivate: true,
    team: { en: "Alpha-IB · IVCISA", es: "Alpha-IB · IVCISA" },
    role: {
      en: "Solutions Architect & Full-Stack Developer",
      es: "Solutions Architect & Full-Stack Developer",
    },
    year: "2025",
    timeline: { en: "11 months", es: "11 meses" },
    why_this_project_title: {
      en: "Unifying financial and operational cloud control in enterprise organizations",
      es: "Unificar el control financiero y operativo de la nube en organizaciones enterprise",
    },
    why_this_project_description: {
      en: "Organizations running on AWS lose between 20-30% of their spend on idle, mis-sized or unmonitored resources across multiple accounts. Alpha-IB needed a solution that unified financial and operational cloud control without compromising security or adding friction to onboarding.",
      es: "Las organizaciones que operan en AWS pierden entre 20-30% de su gasto en recursos ociosos, mal dimensionados o sin visibilidad entre múltiples cuentas. Alpha-IB necesitaba una solución que unificara el control financiero y operativo de la nube sin comprometer la seguridad ni introducir fricción en el onboarding.",
    },
    solution_title: {
      en: "Three plans on the AWS Marketplace with agentless integration",
      es: "Tres planes en AWS Marketplace con integración agentless",
    },
    solution_description: {
      en: "We built ZenCost with three tiered plans published on the AWS Marketplace:\n1. Essentials: EC2, RDS and Redshift visibility + automatic resource scheduling.\n2. Growth: multi-account with up to 10 accounts + optimization of security, billing and IAM findings + Cloud Excellence Model.\n3. Enterprise: unlimited accounts + multi-cloud visibility with EKS, Snowflake and Databricks + Reserved Instances and Savings Plans intelligence.\nIntegration is fully agentless via IAM Role and CloudFormation StackSets — nothing is installed on the client's instances.",
      es: "Desarrollamos ZenCost con tres planes escalonados publicados en AWS Marketplace:\n1. Essentials: visibilidad EC2, RDS y Redshift + scheduling automático de recursos.\n2. Growth: multi-cuenta con hasta 10 cuentas + optimización de hallazgos de seguridad, billing e IAM + Cloud Excellence Model.\n3. Enterprise: cuentas ilimitadas + visibilidad multi-cloud con EKS, Snowflake y Databricks + inteligencia de Reserved Instances y Savings Plans.\nLa integración es completamente agentless via IAM Role y CloudFormation StackSets — sin instalar nada en las instancias del cliente.",
    },
    my_role_title: {
      en: "One of the three lead developers, with end-to-end ownership",
      es: "Uno de los tres desarrolladores principales, con ownership de punta a punta",
    },
    my_role_description: {
      en: "I was one of the three lead developers of the product, with end-to-end ownership of features.\nI designed the AWS Cost & Usage Report (CUR) pipeline that replaced the Cost Explorer SDK, cutting a cost-attribution report from over 5 hours to under 5 minutes.\nI extended the platform to Snowflake and Databricks, and built the agentless multi-account onboarding via CloudFormation StackSets.\nI implemented multi-tenant access control with TOTP MFA, and owned much of the frontend UX/UI.",
      es: "Fui uno de los tres desarrolladores principales del producto, con ownership de features de punta a punta.\nDiseñé el pipeline de AWS Cost & Usage Report (CUR) que reemplazó al SDK de Cost Explorer, reduciendo un reporte de atribución de costos de más de 5 horas a menos de 5 minutos.\nExtendí la plataforma a Snowflake y Databricks, y construí el onboarding multi-cuenta agentless vía CloudFormation StackSets.\nImplementé el control de acceso multi-tenant con MFA TOTP, y fui responsable de gran parte del UX/UI del frontend.",
    },
    impact_title: {
      en: "Product published on the AWS Marketplace used by banks, insurers and healthcare companies",
      es: "Producto publicado en AWS Marketplace usado por bancos, aseguradoras y empresas de salud",
    },
    impact_description: {
      en: "ZenCost is publicly available on the AWS Marketplace with three plans. It is used by enterprise organizations in Latin America across sectors such as banking, insurance and healthcare. The ROI is recoverable from the first month through resource automation and the elimination of unnecessary cloud infrastructure spend.",
      es: "ZenCost está disponible públicamente en AWS Marketplace con tres planes. Es usado por organizaciones enterprise en Latinoamérica de sectores como banca, seguros y salud. El ROI es recuperable desde el primer mes mediante la automatización de recursos y la eliminación de gasto innecesario en infraestructura cloud.",
    },
    major_challenges_title: {
      en: "Enterprise security without friction and publishing on the AWS Marketplace",
      es: "Seguridad enterprise sin fricción y publicación en AWS Marketplace",
    },
    major_challenges_description: {
      en: "The agentless model with CloudFormation StackSets lets you deploy across multi-account organizations in minutes without installing anything on the client's instances, meeting enterprise security requirements without adding onboarding friction.\nPublishing the product on the AWS Marketplace meant meeting Amazon's security and review standards, which added an external layer of validation to the product.",
      es: "El modelo agentless con CloudFormation StackSets permite desplegar en organizaciones multi-cuenta en minutos sin instalar nada en las instancias del cliente, cumpliendo los requisitos de seguridad enterprise sin agregar fricción al onboarding.\nPublicar el producto en AWS Marketplace implicó cumplir con los estándares de seguridad y revisión de Amazon, lo que añadió una capa de validación externa al producto.",
    },
    technologies_used_description: {
      en: "- Frontend: React, Next.js, TypeScript. Tailwind CSS\n- Backend: Python, boto3. Node.js\n- Infrastructure and Cloud: AWS EC2, RDS, Redshift, EKS. AWS Cost Explorer, Organizations, CUR. AWS Security Hub, CloudTrail, CloudFormation, StackSets. AWS S3, Lambda, IAM. Snowflake, Databricks\n- Tools: GitHub, CI/CD Pipelines",
      es: "- Frontend: React, Next.js, TypeScript. Tailwind CSS\n- Backend: Python, boto3. Node.js\n- Infraestructura y Cloud: AWS EC2, RDS, Redshift, EKS. AWS Cost Explorer, Organizations, CUR. AWS Security Hub, CloudTrail, CloudFormation, StackSets. AWS S3, Lambda, IAM. Snowflake, Databricks\n- Herramientas: GitHub, CI/CD Pipelines",
    },
    marketplace_links: [
      { label: "Essentials", url: "https://aws.amazon.com/marketplace/pp/prodview-wgfhhjprisilk" },
      { label: "Growth", url: "https://aws.amazon.com/marketplace/pp/prodview-vyioayxbe62yo" },
      { label: "Enterprise", url: "https://aws.amazon.com/marketplace/pp/prodview-vy6poz7tqxf4u" },
    ],
    screenshots: [],
  },
  {
    title: "My Mood",
    description: {
      en: "A web app that lets users log and visualize their moods.\n It includes authentication with custom emails, profile management with customizable avatars, mood logging with personalized descriptions, and an interactive dashboard with real-time statistical visualizations of the moods recorded over time.",
      es: "Aplicación web que permite a usuarios registrar y visualizar sus estados de ánimo.\n Incluye sistema de autenticación con emails personalizados, gestión de perfiles con avatares personalizables, registro de estados de ánimo con descripción personalizadas y dashboard interactivo con visualizaciones estadísticas en tiempo real de los estados registrados a lo largo del tiempo.",
    },
    short_description: {
      en: "A web app that lets users log and visualize their moods.",
      es: "Aplicación web que permite a usuarios registrar y visualizar sus estados de ánimo.",
    },
    hidden: true,
    video: "/assets/projects/my-mood/my-mood-web-app-example.mp4",
    logo: "/assets/logos/my-mood-logo.png",
    internal_link: "my-mood",
    autority: PERSONAL,
    hasVideo: true,
    team: {
      en: "Built independently",
      es: "Desarrollado de forma independiente",
    },
    role: {
      en: "Creator, Designer & Developer",
      es: "Creador, Diseñador & Desarrollador",
    },
    year: "2025",
    timeline: { en: "4 months", es: "4 meses" },
    why_this_project_title: {
      en: "The lack of websites to track daily mood over time",
      es: "La falta de páginas web para registrar el humor diario a través de los días",
    },
    why_this_project_description: {
      en: "I got feedback from users who use mobile apps to track their mood but couldn't find similar platforms on the web.\n After researching the market, I confirmed there was an opportunity, since web solutions for this need are almost nonexistent.",
      es: "Recibí comentarios de usuarios que usan apps móviles para seguir su humor, pero no encontraron plataformas similares en la web.\n Tras investigar el mercado, confirmé que existe una oportunidad, ya que las soluciones web para esta necesidad son casi inexistentes.",
    },
    solution_title: {
      en: "Building the site around user needs",
      es: "Desarrollo de la página basada en las necesidades de los usuarios",
    },
    solution_description: {
      en: "I built the website around the features users told me they'd like to have in a platform for tracking their mood.\n I took their feedback and preferences into account to make sure the functionality and design were as useful and appealing as possible.",
      es: "Creé la página web basándome en las características que los usuarios me mencionaron que les gustaría tener en una plataforma para registrar su humor.\n Tomé en cuenta sus comentarios y preferencias para asegurar que la funcionalidad y el diseño fueran lo más útil y atractivo posible.",
    },
    impact_title: {
      en: "Better tracking of emotional wellbeing and self-understanding",
      es: "Mejora en el seguimiento del bienestar emocional y la autocomprensión",
    },
    impact_description: {
      en: "The platform let users easily and accessibly track their emotional state over time.\n This gave them the chance to understand their emotions better, spot patterns and get a clearer view of how their mood changed over time.\n By offering a web solution, we broadened the reach to people who prefer not to rely on mobile apps, improving self-understanding and overall wellbeing.",
      es: "La plataforma permitió a los usuarios hacer un seguimiento fácil y accesible de su estado emocional a lo largo de los días.\n Esto les dio la oportunidad de conocer mejor sus emociones, identificar patrones y tener una visión más clara de cómo su humor cambiaba con el tiempo.\n Al ofrecer una solución web, ampliamos el alcance a personas que prefieren no depender de aplicaciones móviles, mejorando así la autocomprensión y el bienestar general.",
    },
    major_challenges_title: {
      en: "Learning the app's domain and deploying under a custom domain",
      es: "Aprender el dominio de la aplicación y realizar el despliegue bajo un dominio propio",
    },
    major_challenges_description: {
      en: "The first challenge was understanding user requirements and translating them into a functional web app, which meant planning and diagramming the site.\n The second challenge was deploying to a custom domain, for which I learned to set up the deploy process and secure the site with Cloudflare, protecting it against potential attacks and improving its security.",
      es: "El primer desafío fue entender los requerimientos de los usuarios y traducirlos a una aplicación web funcional, lo que implicó planificar y diagramar el sitio.\n El segundo desafío fue el despliegue en un dominio propio, para lo cual aprendí a configurar el proceso de deploy y asegurar la página con Cloudflare, protegiéndola contra posibles ataques y mejorando su seguridad.",
    },
    technologies_used_description: {
      en: "- Frontend: React, TypeScript, React Query. HTML, CSS, Tailwind. Shadcn UI\n- Backend: NestJS, TypeScript. Docker\n- Testing and QA: Playwright, Jest, SuperTest\n- Infrastructure: AWS Cognito, AWS SES, AWS S3. Railway, Cloudflare\n- Databases: MySQL\n- Tools: GitHub, GitHub CI/CD. TablePlus, Postman Collection",
      es: "- Frontend: React, TypeScript, React Query. HTML, CSS, Tailwind. Shadcn UI\n- Backend: NestJS, TypeScript. Docker\n- Testing y Control de calidad: Playwright, Jest, SuperTest\n- Infraestructura: AWS Cognito, AWS SES, AWS S3. Railway, Cloudflare\n- Bases de datos: MySQL\n- Herramientas: GitHub, GitHub CI/CD. TablePlus, Postman Collection",
    },
    screenshots: [
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-homepage.png",
        alt: { en: "My Mood home page", es: "Página principal de My Mood" },
        legend: { en: "My Mood home page", es: "Página principal de My Mood" },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-homepage-logged.png",
        alt: {
          en: "My Mood home page with the user logged in",
          es: "Página principal de My Mood con el usuario logueado",
        },
        legend: {
          en: "My Mood home page with the user logged in",
          es: "Página principal de My Mood con el usuario logueado",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-create-track.png",
        alt: {
          en: "View to log a mood on a day not previously recorded",
          es: "Vista para registrar un humor en un día no registrado previamente",
        },
        legend: {
          en: "View to log a mood on a day not previously recorded",
          es: "Vista para registrar un humor en un día no registrado previamente",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-update-track.png",
        alt: {
          en: "View to update a mood on a previously recorded day",
          es: "Vista para actualizar un humor en un día registrado previamente",
        },
        legend: {
          en: "View to update a mood on a previously recorded day",
          es: "Vista para actualizar un humor en un día registrado previamente",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-edit-profile.png",
        alt: {
          en: "View to edit the user profile",
          es: "Vista para editar el perfil del usuario",
        },
        legend: {
          en: "View to edit the user profile",
          es: "Vista para editar el perfil del usuario",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-last-3-months.png",
        alt: {
          en: "User dashboard with statistics for the last 3 months",
          es: "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses",
        },
        legend: {
          en: "User dashboard with statistics for the last 3 months",
          es: "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-this-month-and-history.png",
        alt: {
          en: "User dashboard with this month's statistics and the mood history",
          es: "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo",
        },
        legend: {
          en: "User dashboard with this month's statistics and the mood history",
          es: "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-login.png",
        alt: {
          en: "My Mood login page",
          es: "Vista de la página de login de My Mood",
        },
        legend: {
          en: "My Mood login page",
          es: "Vista de la página de login de My Mood",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-registration.png",
        alt: {
          en: "My Mood registration page",
          es: "Vista de la página de registro de My Mood",
        },
        legend: {
          en: "My Mood registration page",
          es: "Vista de la página de registro de My Mood",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-confirm-sign-up.png",
        alt: {
          en: "My Mood sign-up confirmation page",
          es: "Vista de la página de confirmación de registro de My Mood",
        },
        legend: {
          en: "My Mood sign-up confirmation page",
          es: "Vista de la página de confirmación de registro de My Mood",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-forgot-password.png",
        alt: {
          en: "My Mood password recovery page",
          es: "Vista de la página de recuperación de contraseña de My Mood",
        },
        legend: {
          en: "My Mood password recovery page",
          es: "Vista de la página de recuperación de contraseña de My Mood",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-confirm-password.png",
        alt: {
          en: "My Mood password reset page",
          es: "Vista de la página de restablecimiento de contraseña de My Mood",
        },
        legend: {
          en: "My Mood password reset page",
          es: "Vista de la página de restablecimiento de contraseña de My Mood",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-email-authentication.jpg",
        alt: {
          en: "My Mood authentication email",
          es: "Correo de autenticación de My Mood",
        },
        legend: {
          en: "My Mood authentication email",
          es: "Correo de autenticación de My Mood",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-create-track-responsive.png",
        alt: {
          en: "View to log a mood on an unrecorded day, responsive version",
          es: "Vista para registrar un humor en un día no registrado previamente en versión responsive",
        },
        legend: {
          en: "View to log a mood on an unrecorded day, responsive version",
          es: "Vista para registrar un humor en un día no registrado previamente en versión responsive",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-update-track-responsive.png",
        alt: {
          en: "View to update a mood on a previously recorded day, responsive version",
          es: "Vista para actualizar un humor en un día registrado previamente en versión responsive",
        },
        legend: {
          en: "View to update a mood on a previously recorded day, responsive version",
          es: "Vista para actualizar un humor en un día registrado previamente en versión responsive",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-edit-profile-responsive.png",
        alt: {
          en: "View to edit the user profile, responsive version",
          es: "Vista para editar el perfil del usuario en versión responsive",
        },
        legend: {
          en: "View to edit the user profile, responsive version",
          es: "Vista para editar el perfil del usuario en versión responsive",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-last-3-months-responsive.png",
        alt: {
          en: "User dashboard with statistics for the last 3 months, responsive version",
          es: "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses en versión responsive",
        },
        legend: {
          en: "User dashboard with statistics for the last 3 months, responsive version",
          es: "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses en versión responsive",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-this-month-and-history-responsive.png",
        alt: {
          en: "User dashboard with this month's statistics and mood history, responsive version",
          es: "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo en versión responsive",
        },
        legend: {
          en: "User dashboard with this month's statistics and mood history, responsive version",
          es: "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo en versión responsive",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-sidebar-responsive.png",
        alt: {
          en: "My Mood sidebar, responsive version",
          es: "Vista del sidebar de My Mood en versión responsive",
        },
        legend: {
          en: "My Mood sidebar, responsive version",
          es: "Vista del sidebar de My Mood en versión responsive",
        },
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-sidebar-open-options-responsive.png",
        alt: {
          en: "My Mood sidebar with the options open, responsive version",
          es: "Vista del sidebar de My Mood en versión responsive con las opciones abiertas",
        },
        legend: {
          en: "My Mood sidebar with the options open, responsive version",
          es: "Vista del sidebar de My Mood en versión responsive con las opciones abiertas",
        },
      },
    ],
  },
  {
    title: "InformAG",
    description: {
      en: "InformAG is an agri-tech platform that processes real-time data from sensors to deliver accurate monitoring and analysis of crops and agricultural machinery.",
      es: "InformAG es una plataforma agrotecnológica que procesa datos en tiempo real desde sensores para brindar monitoreo y análisis precisos en cultivos y maquinaria agrícola.",
    },
    short_description: {
      en: "An agri-tech platform for monitoring and analyzing real-time data.",
      es: "Plataforma agrotecnológica para monitorear y analizar datos en tiempo real.",
    },
    image: "/assets/projects/informag/informag-homepage.png",
    logo: "/assets/logos/bigger-logo.jpg",
    internal_link: "informag",
    autority: BIGGER,
    hasVideo: false,
    team: { en: "With 2 TL, 1 PM", es: "Con 2 CL, 1PM" },
    role: { en: "Developer", es: "Desarrollador" },
    year: "2025",
    timeline: { en: "2 months", es: "2 meses" },
    why_this_project_title: {
      en: "Integrating and processing real-time agricultural data",
      es: "Integración y procesamiento de datos agrícolas en tiempo real",
    },
    why_this_project_description: {
      en: "I joined the project to build a solution that integrated data from agricultural sensors, transforming raw information into domain objects to be efficiently processed, validated and stored for later analysis.",
      es: "Me uní al proyecto para desarrollar una solución que integrara datos desde sensores agrícolas, transformando información cruda en objetos de dominio para ser procesados, validados y almacenados de forma eficiente para análisis posteriores.",
    },
    solution_title: {
      en: "Processing, validating and exporting data with .NET and Azure",
      es: "Procesamiento, validación y exportación de datos con .NET y Azure",
    },
    solution_description: {
      en: "Incoming data is processed in Azure Functions, where it is mapped with AutoMapper, calculations and validations are run, and it is exported in Avro blocks for storage in Azure Blob Storage. Automatic alerts were implemented for failures in data reception or integrity.",
      es: "Los datos recibidos se procesan en Azure Functions, donde se mapean con AutoMapper, se realizan cálculos y validaciones, y se exportan en bloques Avro para su almacenamiento en Azure Blob Storage. Se implementaron alertas automáticas ante fallas en la recepción o integridad de los datos.",
    },
    impact_title: {
      en: "Automation and reliability of agricultural monitoring processes",
      es: "Automatización y confiabilidad de procesos de monitoreo agrícola",
    },
    impact_description: {
      en: "The solution made it possible to monitor thousands of daily events from the field in real time, with automatic validation and alerts on errors, increasing system reliability and significantly reducing manual intervention.",
      es: "La solución permitió monitorear miles de eventos diarios provenientes del campo en tiempo real, con validación automática y alertas ante errores, aumentando la confiabilidad del sistema y reduciendo significativamente la intervención manual.",
    },
    major_challenges_title: {
      en: "Adopting new technologies and handling high data volumes",
      es: "Adopción de nuevas tecnologías y alto volumen de datos",
    },
    major_challenges_description: {
      en: "The biggest challenge was learning C# and .NET 8, along with the Azure services (Functions, Blob Storage, Azurite) in an environment with complex logic and processing of large daily data volumes. It required fast adaptation and a deep understanding of the domain.",
      es: "El mayor reto fue aprender C# y .NET 8, junto con los servicios de Azure (Functions, Blob Storage, Azurite) en un entorno con lógica compleja y procesamiento de grandes volúmenes de datos diarios. Requirió una adaptación rápida y comprensión profunda del dominio.",
    },
    technologies_used_description: {
      en: "- Backend: C#, .NET 8, Azure Functions, Apache Avro\n- Infrastructure: Azure Blob Storage, Azurite (local)\n- Testing and resilience: xUnit, Polly\n- Tools: AutoMapper, Azure DevOps, Azure Pipelines",
      es: "- Backend: C#, .NET 8, Azure Functions, Apache Avro\n- Infraestructura: Azure Blob Storage, Azurite (local)\n- Testing y resiliencia: xUnit, Polly\n- Herramientas: AutoMapper, Azure DevOps, Azure Pipelines",
    },
    website_url: "https://informag.com.au/",
    screenshots: [],
  },
  {
    title: "LotTrackr",
    description: {
      en: "LotTrackr is a real-estate tech platform focused on simplifying the process of buying and selling homes and land within planned urban developments.",
      es: "LotTrackr es una plataforma tecnológica inmobiliaria que se centra en simplificar el proceso de compra y venta de viviendas y terrenos dentro de desarrollos urbanos planificados.",
    },
    short_description: {
      en: "A real-estate platform to simplify buying and selling properties.",
      es: "Plataforma inmobiliaria para simplificar compra y venta de propiedades.",
    },
    video: "/assets/projects/lottrackr/lottrackr-builder-estimator.mp4",
    image: "/assets/projects/lottrackr/lottrackr-homepage.png",
    logo: "/assets/logos/bigger-logo.jpg",
    internal_link: "lottrackr",
    autority: BIGGER,
    hasVideo: false,
    team: { en: "With 1 TL, 1 PM", es: "Con 1 CL, 1PM" },
    role: { en: "Developer", es: "Desarrollador" },
    year: "2024",
    timeline: { en: "6 months", es: "6 meses" },
    why_this_project_title: {
      en: "Improvements and building the business estimation tool feature",
      es: "Mejoras e implementación de la funcionalidad herramienta de estimación de negocios",
    },
    why_this_project_description: {
      en: "I joined the project to make small improvements, such as ensuring lots could only be managed by owners within the same business, plus adding the assignment of businesses to lots and owners in the admin panel.\n Then I built the business estimation tool, which lets users pick a builder's home, view detailed information about it and select different upgrade options, then notify the builder of the user's interest.",
      es: "Me uní al proyecto para realizar mejoras pequeñas, como asegurar que los lotes solo pudieran ser gestionados por dueños con el mismo negocio, además de añadir la asignación de negocios a lotes y dueños en el panel de administración.\n Luego, desarrollé la funcionalidad de la herramienta de estimación de negocios, que permite a los usuarios seleccionar una casa de un constructor, ver información detallada sobre la misma y seleccionar distintas opciones de mejoras para después notificar al constructor sobre el interés del usuario.",
    },
    solution_title: {
      en: "Implementation from a mockup and email notification",
      es: "Implementación a partir de un mockup y notificación por correo",
    },
    solution_description: {
      en: "The client provided a mockup of the views and we worked on both frontend and backend to implement the desktop and responsive versions.\n On completion, a summary is generated as a PDF, whose link sits in a button within the email template sent to the user with the selected home's details.\n In addition, the builder receives an email notifying them of the user's details and the options chosen for the corresponding home.",
      es: "El cliente proporcionó un mockup de las vistas y trabajamos tanto en el frontend y backend para implementar la versión desktop y responsive.\n Al finalizar, se genera un resumen en un PDF, cuyo enlace está en un botón del template del email enviado al usuario con los datos de la casa seleccionada.\n Además, el constructor recibe un correo notificando los detalles del usuario y las opciones elegidas para la casa correspondiente.",
    },
    impact_title: {
      en: "Time savings for users and builders",
      es: "Optimización del tiempo para usuarios y constructores",
    },
    impact_description: {
      en: "Thanks to this implementation, users can explore homes and the customization options builders offer, saving time by making informed decisions.\n Builders also receive automatic notifications of interested users, letting them reach out quickly.\n This feature improves the efficiency of the process and ensures smooth communication between both parties.",
      es: "Gracias a esta implementación, los usuarios pueden explorar las casas y las opciones de personalización que ofrecen los constructores, ahorrando tiempo al tomar decisiones informadas.\n Además, los constructores reciben notificaciones automáticas de los usuarios interesados, lo que les permite contactarlos rápidamente.\n Esta funcionalidad mejora la eficiencia del proceso y asegura una comunicación ágil entre ambas partes.",
    },
    major_challenges_title: {
      en: "Adapting to a new framework and the app's broad domain",
      es: "Adaptación a un nuevo framework y dominio extenso de la aplicación",
    },
    major_challenges_description: {
      en: "The frontend code was written in Vue and the app's business logic was fairly complex due to its prior development.\n To adapt, I spent a week studying the repository code and making small tweaks.\n The team also gave me excellent onboarding, which let me quickly understand how the project worked and how all its parts fit together so I could start working on the implementation.",
      es: "El código del frontend estaba escrito en Vue y la lógica de negocio de la aplicación era bastante compleja debido a su desarrollo previo.\n Para adaptarme, dediqué una semana a estudiar el código del repositorio y realizar pequeños ajustes.\n Además, el equipo me brindó un excelente onboarding, lo que me permitió comprender rápidamente el funcionamiento del proyecto y cómo se integran todas las partes del mismo para empezar a trabajar en la implementación.",
    },
    technologies_used_description: {
      en: "- Frontend: Vue, TypeScript. Handlebars. HTML, CSS, SASS\n- Backend: NestJS, TypeScript. Docker\n- Testing and QA: Jest, SuperTest. Sentry, Sonarqube\n- Infrastructure: AWS SES, AWS S3. AWS Amplify, AWS AppRunner\n- Databases: MongoDB\n- Tools: GitHub, GitHub CI/CD, MongoDB Compass",
      es: "- Frontend: Vue, TypeScript. Handlebars. HTML, CSS, SASS\n- Backend: NestJS, TypeScript. Docker\n- Testing y Control de calidad: Jest, SuperTest. Sentry, Sonarqube\n- Infraestructura: AWS SES, AWS S3. AWS Amplify, AWS AppRunner\n- Bases de datos: MongoDB\n- Herramientas: GitHub, GitHub CI/CD, MongoDB Compass",
    },
    website_url: "https://lottrackr.com.au/",
    screenshots: [
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-house-information.png",
        alt: {
          en: "House information view in the business estimation tool",
          es: "Vista de la información de la casa en la herramienta de estimación de negocios",
        },
        legend: {
          en: "House information view in the business estimation tool",
          es: "Vista de la información de la casa en la herramienta de estimación de negocios",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-facade-selection.png",
        alt: {
          en: "Facade selection view in the business estimation tool",
          es: "Vista de la selección de fachadas en la herramienta de estimación de negocios",
        },
        legend: {
          en: "Facade selection view in the business estimation tool",
          es: "Vista de la selección de fachadas en la herramienta de estimación de negocios",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-facade-selection-with-quote-summary-open.png",
        alt: {
          en: "Facade selection view in the business estimation tool with the quote summary open",
          es: "Vista de la selección de fachadas en la herramienta de estimación de negocios con el resumen de la cotización abierto",
        },
        legend: {
          en: "Facade selection view in the business estimation tool with the quote summary open",
          es: "Vista de la selección de fachadas en la herramienta de estimación de negocios con el resumen de la cotización abierto",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-optional-upgrades.png",
        alt: {
          en: "Optional upgrades view in the business estimation tool",
          es: "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios",
        },
        legend: {
          en: "Optional upgrades view in the business estimation tool",
          es: "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-summary.png",
        alt: {
          en: "Summary view of the home with all its selected options in the business estimation tool",
          es: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios",
        },
        legend: {
          en: "Summary view of the home with all its selected options in the business estimation tool",
          es: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-summary-with-form-open.png",
        alt: {
          en: "Summary view of the home with all its selected options in the business estimation tool with the contact form open",
          es: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios con el formulario de contacto abierto",
        },
        legend: {
          en: "Summary view of the home with all its selected options in the business estimation tool with the contact form open",
          es: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios con el formulario de contacto abierto",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/email-builder-estimator-user-template.png",
        alt: {
          en: "Email notifying the user of the selected home",
          es: "Vista del correo de notificación de la casa seleccionada al usuario",
        },
        legend: {
          en: "Email notifying the user of the selected home",
          es: "Vista del correo de notificación de la casa seleccionada al usuario",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/admin-panel-add-inclusion.png",
        alt: {
          en: "LotTrackr admin panel with the form to add an inclusion",
          es: "Vista del panel de administración de LotTrackr con el formulario para añadir una inclusión",
        },
        legend: {
          en: "LotTrackr admin panel with the form to add an inclusion",
          es: "Vista del panel de administración de LotTrackr con el formulario para añadir una inclusión",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/admin-panel-view-inclusion.png",
        alt: {
          en: "LotTrackr admin panel with the inclusion list",
          es: "Vista del panel de administración de LotTrackr con la lista de inclusión",
        },
        legend: {
          en: "LotTrackr admin panel with the inclusion list",
          es: "Vista del panel de administración de LotTrackr con la lista de inclusión",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-summary-mobile-responsive.png",
        alt: {
          en: "Summary view of the home with all its selected options in the business estimation tool, mobile version",
          es: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios en versión mobile",
        },
        legend: {
          en: "Summary view of the home with all its selected options in the business estimation tool, mobile version",
          es: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios en versión mobile",
        },
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-optional-upgrades-mobile-responsive.png",
        alt: {
          en: "Optional upgrades view in the business estimation tool, mobile version",
          es: "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios en versión mobile",
        },
        legend: {
          en: "Optional upgrades view in the business estimation tool, mobile version",
          es: "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios en versión mobile",
        },
      },
    ],
  },
  {
    title: "CricConnect",
    description: {
      en: "CricConnect is a platform designed for cricket fans to connect and share their knowledge of the sport, offering a space for discussion.",
      es: "CricConnect es una plataforma diseñada para que los fanáticos del cricket se conecten y compartan su conocimiento sobre el deporte, ofreciendo un espacio para la discusión.",
    },
    short_description: {
      en: "A platform for cricket fans to share knowledge.",
      es: "Plataforma para fanáticos del cricket para compartir conocimientos.",
    },
    video: "/assets/projects/cricconnect/cricconnect-sponsors.mp4",
    image: "/assets/projects/cricconnect/cricconnect-homepage.png",
    logo: "/assets/logos/bigger-logo.jpg",
    internal_link: "cricconnect",
    autority: BIGGER,
    hasVideo: false,
    team: { en: "With 1 TL, 1 developer, 1 PM", es: "Con 1 CL, 1 desarrollador, 1PM" },
    role: { en: "Developer", es: "Desarrollador" },
    year: "2024",
    timeline: { en: "3 months", es: "3 meses" },
    why_this_project_title: {
      en: "Building a sponsor system to generate revenue",
      es: "Implementación de sistema de patrocinadores para generar ingresos",
    },
    why_this_project_description: {
      en: "The client wanted to monetize their platform by adding sponsor ads in a non-intrusive way, making sure the user experience wasn't affected.",
      es: "El cliente deseaba monetizar su plataforma mediante la incorporación de anuncios de patrocinadores de manera no intrusiva, asegurando que la experiencia del usuario no se viera afectada.",
    },
    solution_title: {
      en: "A sponsor system based on the user's country and region",
      es: "Sistema de patrocinadores basado en país y región del usuario",
    },
    solution_description: {
      en: "We implemented a sponsor ad system that adapts to the user's geographic location, allowing region- and country-specific ads to be shown, with sponsor tiers offering different benefits by category.\n We also built an admin panel to manage sponsors by geographic zone, giving full control over the ads.",
      es: "Implementamos un sistema de anuncios de patrocinadores que se adapta a la ubicación geográfica del usuario, permitiendo mostrar anuncios específicos por país y región, con niveles de patrocinadores que ofrecen distintos beneficios según la categoría del patrocinador.\n Además, desarrollamos un panel de administración para gestionar sponsors por zona geográfica, dando control total sobre los anuncios.",
    },
    impact_title: {
      en: "The client began generating revenue after years without this feature",
      es: "El cliente comenzó a generar ingresos después de años sin esta funcionalidad",
    },
    impact_description: {
      en: "Thanks to the sponsor system, the client can now display ads segmented by geographic location, letting them grow their sponsor base and sell ad space across various regions, maximizing monetization opportunities.",
      es: "Gracias a la implementación del sistema de patrocinadores, el cliente ahora puede mostrar anuncios segmentados por ubicación geográfica, lo que le permite ampliar su base de patrocinadores y vender espacios publicitarios en diversas regiones, maximizando las oportunidades de monetización.",
    },
    major_challenges_title: {
      en: "Undocumented legacy code and unfamiliar technologies",
      es: "Código legacy sin documentar y tecnologías desconocidas",
    },
    major_challenges_description: {
      en: "The project involved working with 6-year-old legacy code, undocumented, in unfamiliar technologies, which required learning new tools quickly.\n Together with the team, we implemented a sponsor admin panel using AWS API Gateway and AWS Lambda, setting up a CI/CD pipeline that transpiled the code, tested it and bundled it with its dependencies to then upload to AWS S3, generating a file connected to AWS Lambda.\n Once the TL set up the Docker environment, we connected the legacy PHP Laravel frontend with the admin panel we built to display sponsors on the page, segmented by category and across different ad spots with their respective benefits.\n The project was left technically documented and 100% tested on our sponsor manager implementation, ensuring clean, scalable code for future development.",
      es: "El proyecto implicó trabajar con un código legacy de 6 años, sin documentación, en tecnologías desconocidas, lo que requirió aprender rápidamente nuevas herramientas.\n Junto con el equipo, implementamos un panel de administración de patrocinadores utilizando AWS API Gateway y AWS Lambda, configurando un flujo CI/CD que transpilaba el código, lo testeaba y comprimía el mismo junto con las dependencias para posteriormente subir en AWS S3, generando un archivo conectado con AWS Lambda.\n Una vez que el CL configuró el entorno Docker, conectamos el frontend legacy hecho en PHP Laravel con el panel de administración desarrollado para mostrar los patrocinadores en la página, segmentados por categoría y en diferentes spots publicitarios con sus respectivos beneficios.\n El proyecto se dejó documentado técnicamente y testeado al 100% en nuestra implementación del administrador de patrocinadores, asegurando código limpio y escalable para futuros desarrollos.",
    },
    technologies_used_description: {
      en: "- Frontend: PHP, Laravel. TypeScript, React, React Query. LocalStack, Docker. HTML, CSS, Tailwind\n- Backend: .NET, JavaScript, TypeScript. Mongoose\n- Testing and QA: Cypress, Jest. Sentry\n- Infrastructure: AWS API Gateway, AWS Lambda, AWS S3. Amplify, AWS AppRunner\n- Databases: Microsoft SQL, DynamoDB\n- Tools: GitHub, GitHub CI/CD. NoSQL Workbench, SQL Server Management Studio",
      es: "- Frontend: PHP, Laravel. TypeScript, React, React Query. LocalStack, Docker. HTML, CSS, Tailwind\n- Backend: .NET, JavaScript, TypeScript. Mongoose\n- Testing y Control de calidad: Cypress, Jest. Sentry\n- Infraestructura: AWS API Gateway, AWS Lambda, AWS S3. Amplify, AWS AppRunner\n- Bases de datos: Microsoft SQL, DynamoDB\n- Herramientas: GitHub, GitHub CI/CD. NoSQL Workbench, SQL Server Management Studio",
    },
    website_url: "https://www.cricconnect.com/",
    screenshots: [
      {
        src: "/assets/projects/cricconnect/screenshots/homepage-platinum-sponsor.png",
        alt: {
          en: "CricConnect home page with a Platinum sponsor in the carousel",
          es: "Página principal de CricConnect con un patrocionador Platinum en el carrusel",
        },
        legend: {
          en: "CricConnect home page with a Platinum sponsor in the carousel",
          es: "Página principal de CricConnect con un patrocionador Platinum en el carrusel",
        },
      },
      {
        src: "/assets/projects/cricconnect/screenshots/homepage-premium-sponsor.png",
        alt: {
          en: "CricConnect home page with Premium sponsors in the sidebar",
          es: "Página principal de CricConnect con patrocinadores Premium en el sidebar",
        },
        legend: {
          en: "CricConnect home page with Premium sponsors in the sidebar",
          es: "Página principal de CricConnect con patrocinadores Premium en el sidebar",
        },
      },
      {
        src: "/assets/projects/cricconnect/screenshots/question-partner-and-sticky-premium-sponsor.png",
        alt: {
          en: "CricConnect home page with partner sponsors between a question and its answers, plus premium sponsors in the sidebar with a sticky style so they stay in view",
          es: "Página principal de CricConnect con patrocinadores partner entre una pregunta y respuestas, además de los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
        },
        legend: {
          en: "CricConnect home page with partner sponsors between a question and its answers, plus premium sponsors in the sidebar with a sticky style so they stay in view",
          es: "Página principal de CricConnect con patrocinadores partner entre una pregunta y respuestas, además de los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
        },
      },
      {
        src: "/assets/projects/cricconnect/screenshots/homepage-partner-and-sticky-premium-sponsor.png",
        alt: {
          en: "CricConnect home page with partner sponsors every 4 posts and premium sponsors in the sidebar with a sticky style so they stay in view",
          es: "Página principal de CricConnect con patrocinadores partner cada 4 publicaciones y los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
        },
        legend: {
          en: "CricConnect home page with partner sponsors every 4 posts and premium sponsors in the sidebar with a sticky style so they stay in view",
          es: "Página principal de CricConnect con patrocinadores partner cada 4 publicaciones y los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
        },
      },
      {
        src: "/assets/projects/cricconnect/screenshots/admin-panel.png",
        alt: {
          en: "CricConnect admin panel",
          es: "Panel de administración de CricConnect",
        },
        legend: {
          en: "CricConnect admin panel",
          es: "Panel de administración de CricConnect",
        },
      },
      {
        src: "/assets/projects/cricconnect/screenshots/admin-panel-create-modal.png",
        alt: {
          en: "CricConnect admin panel with a modal to create sponsors",
          es: "Panel de administración de CricConnect con modal para crear patrocinadores",
        },
        legend: {
          en: "CricConnect admin panel with a modal to create sponsors",
          es: "Panel de administración de CricConnect con modal para crear patrocinadores",
        },
      },
    ],
  },
  {
    title: "Poulz",
    description: {
      en: "Poulz is a streaming platform that's shaking up the digital market, letting content creators generate revenue through their paid broadcasts.",
      es: "Poulz es una plataforma de streaming que revoluciona el mercado digital, permitiendo a creadores de contenido generar ingresos a través de sus transmisiones de pago.",
    },
    short_description: {
      en: "A streaming platform that lets creators generate revenue.",
      es: "Plataforma de streaming que permite a creadores generar ingresos.",
    },
    video: "/assets/projects/poulz/poulz-example.mp4",
    image: "/assets/projects/poulz/poulz-homepage.png",
    logo: "/assets/logos/bigger-logo.jpg",
    internal_link: "poulz",
    autority: BIGGER,
    hasVideo: false,
    team: {
      en: "With 1 TL, 1 developer, 1 PM, 1 designer",
      es: "Con 1 CL, 1 desarrollador, 1PM, 1 diseñador",
    },
    role: { en: "Developer", es: "Desarrollador" },
    year: "2024",
    timeline: { en: "1 year and 2 months", es: "1 año y 2 meses" },
    why_this_project_title: {
      en: "Building an MVP for a platform streaming future events",
      es: "Desarrollo de un MVP para una plataforma de streaming de eventos futuros",
    },
    why_this_project_description: {
      en: "The client wanted to create a platform where users could buy tokens to access scheduled streaming events, like classes or other content, ahead of their date.\n Users spent tokens on these future events, and when the date arrived they could watch the content, while a small fee on transactions generated additional revenue for the client.",
      es: "El cliente quería crear una plataforma donde los usuarios pudieran comprar tokens para acceder a eventos de streaming programados, como clases u otros contenidos, antes de su fecha.\n Los usuarios gastaban tokens en estos eventos futuros, y al llegar la fecha, podían ver el contenido, mientras que un pequeño fee en las transacciones generaba ingresos adicionales al cliente.",
    },
    solution_title: {
      en: "Building the MVP with an agile Scrum approach in sprints",
      es: "Desarrollo del MVP con enfoque ágil Scrum por sprints",
    },
    solution_description: {
      en: "We worked on the MVP using agile methodologies under the Scrum framework, organizing work into sprints to reach big goals progressively.\nMain features implemented:\n1. User authentication and authorization, with roles and permissions to manage access to specific features.\n2. Email management for registration, account confirmation and authentication communication.\n3. Purchasing, withdrawing and using Poulz tokens (PLZC) via Stripe, with the option to withdraw tokens to USD through Stripe Connect and buy them to access paid broadcasts.\n4. One-way and two-way live streams, with webcam and microphone interaction, live chat and the option to share screen during broadcasts.\n5. A stream rating system, where users can rate content from 1 to 5 stars and leave comments.\n6. An admin dashboard to manage and schedule streams, with a detailed reporting system on stream activity.",
      es: "Trabajamos el MVP utilizando metodologías ágiles bajo el marco de Scrum, organizando el trabajo en sprints para alcanzar grandes objetivos de manera progresiva.\nPrincipales características implementadas: \n1. Autenticación y autorización de usuario, con roles y permisos para gestionar el acceso a funciones específicas.\n2. Gestión de emails para registro, confirmación de cuenta y comunicación de autenticación.\n3. Compra, retiro y uso de tokens Poulz (PLZC) mediante Stripe, con la opción de retirar tokens a USD a través de Stripe Connect y comprarlos para acceder a transmisiones pagas.\n4. Transmisiones en vivo unidireccionales y bidireccionales, con interacción mediante webcam y micrófono, habilitación de chat en vivo y opción de compartir pantalla durante las transmisiones.\n5. Sistema de clasificación de streams, donde los usuarios pueden puntuar los contenidos de 1 a 5 estrellas y dejar comentarios.\n6. Dashboard administrativo para gestionar y programar streams, con un sistema de reportes detallados de la actividad de los streams.",
    },
    impact_title: {
      en: "An average NPS of 5.0 across all sprints",
      es: "Promedio de NPS de 5.0 en todos los sprints",
    },
    impact_description: {
      en: "The client was extremely satisfied throughout the whole process, since live tests were run in every sprint demo, using a staging environment.\n As a result, the average NPS at the end of all sprints was 5.0, showing the client was completely happy with the work delivered.\n This level of satisfaction also left the company with an excellent overall NPS, reflecting the project's success and the team's high performance.",
      es: "El cliente estuvo sumamente satisfecho durante todo el proceso, ya que se realizaron pruebas en vivo en cada demo por sprint, utilizando un entorno de staging.\n Como resultado, el promedio de NPS al final de todos los sprints fue de 5.0, lo que demuestra que el cliente estuvo completamente conforme con el trabajo realizado.\n Este nivel de satisfacción también dejó a la empresa con una excelente puntuación en el NPS general, reflejando el éxito del proyecto y el alto rendimiento del equipo.",
    },
    major_challenges_title: {
      en: "Implementing live streaming and payments",
      es: "Implementación de transmisiones en vivo y pagos",
    },
    major_challenges_description: {
      en: "Implementing live streaming was a challenge, as it was a new feature for the company and we hadn't worked with this kind of integration before.\n We had to research the available documentation thoroughly and, after running several tests, chose to use AWS Interactive Video Service for its scalability and robustness in handling live streams, which let us deliver a stable, high-quality experience.\n\nFor payments, we needed to study the Stripe and Stripe Connect documentation to integrate them correctly, ensuring a secure, error-free payment process.\n We also used Stellar as the app's accounting system, making it easier to manage user payments and transactions. We ran numerous tests in test mode to make sure everything worked correctly before the final rollout.",
      es: "La implementación de transmisiones en vivo fue un reto, ya que era una funcionalidad nueva para la empresa y no habíamos trabajado con este tipo de integración antes.\n Tuvimos que investigar a fondo la documentación disponible y, tras realizar varias pruebas, optamos por usar AWS Interactive Video Service por su escalabilidad y robustez para gestionar las transmisiones en vivo, lo que nos permitió brindar una experiencia estable y de calidad.\n\nPara los pagos, fue necesario estudiar la documentación de Stripe y Stripe Connect para integrarlos correctamente, garantizando un proceso de pagos seguro y sin errores.\n Además, utilizamos Stellar como sistema contable dentro de la app, facilitando la gestión de pagos y transacciones de los usuarios. Realizamos numerosas pruebas en test mode para asegurarnos de que todo funcionara correctamente antes de la implementación final.",
    },
    technologies_used_description: {
      en: "- Frontend: React, TypeScript, React Query. HTML, CSS, Tailwind.\n- Backend: NestJS, NodeJS, TypeScript. Stripe, Stripe Connect, Stellar. Docker\n- Testing and QA: Cypress, Jest, SuperTest. SonarQube\n- Infrastructure: AWS Interactive Video Service, AWS IVS Chat. AWS Cognito, AWS SES, AWS S3. AWS Lambda, AWS AppRunner, AWS Amplify\n- Databases: MySQL\n- Tools: GitHub, GitHub CI/CD. Postman, AWS CloudWatch",
      es: "- Frontend: React, TypeScript, React Query. HTML, CSS, Tailwind.\n- Backend: NestJS, NodeJS, TypeScript. Stripe, Stripe Connect, Stellar. Docker\n- Testing y Control de calidad: Cypress, Jest, SuperTest. SonarQube\n- Infraestructura:  AWS Interactive Video Service, AWS IVS Chat. AWS Cognito, AWS SES, AWS S3. AWS Lambda, AWS AppRunner, AWS Amplify\n- Bases de datos: MySQL\n- Herramientas: GitHub, GitHub CI/CD. Postman, AWS CloudWatch",
    },
    screenshots: [
      {
        src: "/assets/projects/poulz/screenshots/poulz-streaming.png",
        alt: {
          en: "One-way Poulz live stream with a user interacting in the chat",
          es: "Vista de la transmisión en vivo de forma unidireccional de Poulz con un usuario interactuando en el chat",
        },
        legend: {
          en: "One-way Poulz live stream with a user interacting in the chat",
          es: "Vista de la transmisión en vivo de forma unidireccional de Poulz con un usuario interactuando en el chat",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-recharge.png",
        alt: {
          en: "Poulz token top-up page",
          es: "Vista de la página de recarga de tokens de Poulz",
        },
        legend: {
          en: "Poulz token top-up page",
          es: "Vista de la página de recarga de tokens de Poulz",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-create-stream.png",
        alt: {
          en: "Poulz stream creation page",
          es: "Vista de la página de creación de stream de Poulz",
        },
        legend: {
          en: "Poulz stream creation page",
          es: "Vista de la página de creación de stream de Poulz",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-homepage.png",
        alt: { en: "Poulz home page", es: "Página principal de Poulz" },
        legend: { en: "Poulz home page", es: "Página principal de Poulz" },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-profile-header.png",
        alt: {
          en: "Poulz profile header view",
          es: "Vista del header de perfil de Poulz",
        },
        legend: {
          en: "Poulz profile header view",
          es: "Vista del header de perfil de Poulz",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-admin-dashboard-refunds.png",
        alt: {
          en: "Poulz admin dashboard with the refunds section",
          es: "Vista del dashboard de administración de Poulz con la sección de reembolsos",
        },
        legend: {
          en: "Poulz admin dashboard with the refunds section",
          es: "Vista del dashboard de administración de Poulz con la sección de reembolsos",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-calendar.png",
        alt: { en: "Poulz calendar view", es: "Vista del calendario de Poulz" },
        legend: { en: "Poulz calendar view", es: "Vista del calendario de Poulz" },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-report-list.png",
        alt: {
          en: "Poulz report list view",
          es: "Vista de la lista de reportes de Poulz",
        },
        legend: {
          en: "Poulz report list view",
          es: "Vista de la lista de reportes de Poulz",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-report-modal.png",
        alt: {
          en: "Poulz report modal view",
          es: "Vista del modal de reporte de Poulz",
        },
        legend: {
          en: "Poulz report modal view",
          es: "Vista del modal de reporte de Poulz",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-stream-card-on-search.png",
        alt: {
          en: "Poulz stream card in the search list",
          es: "Vista de la tarjeta de stream de Poulz en la lista de búsqueda",
        },
        legend: {
          en: "Poulz stream card in the search list",
          es: "Vista de la tarjeta de stream de Poulz en la lista de búsqueda",
        },
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-stream-reports.png",
        alt: {
          en: "Poulz stream reports view",
          es: "Vista de los reportes de stream de Poulz",
        },
        legend: {
          en: "Poulz stream reports view",
          es: "Vista de los reportes de stream de Poulz",
        },
      },
    ],
  },
];
