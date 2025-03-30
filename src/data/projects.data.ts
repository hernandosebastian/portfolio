import { Project } from "@/interfaces/project.interface";

enum Autority {
  PERSONAL = "Proyecto personal",
  BIGGER = "Bigger",
}

export const projectsData: Project[] = [
  {
    title: "My Mood",
    description:
      "Aplicación web que permite a usuarios registrar y visualizar sus estados de ánimo.\n Incluye sistema de autenticación con emails personalizados, gestión de perfiles con avatares personalizables, registro de estados de ánimo con descripción personalizadas y dashboard interactivo con visualizaciones estadísticas en tiempo real de los estados registrados a lo largo del tiempo.",
    short_description:
      "Aplicación web que permite a usuarios registrar y visualizar sus estados de ánimo.",
    video: "/assets/projects/my-mood/my-mood-web-app-example.mp4",
    logo: "/assets/logos/my-mood-logo.png",
    internal_link: "my-mood",
    autority: Autority.PERSONAL,
    hasVideo: true,
    team: "Desarrollado de forma independiente",
    role: "Creador, Diseñador & Desarrollador",
    year: "2025",
    timeline: "4 meses",
    why_this_project_title:
      "La falta de páginas web para registrar el humor diario a través de los días",
    why_this_project_description:
      "Recibí comentarios de usuarios que usan apps móviles para seguir su humor, pero no encontraron plataformas similares en la web.\n Tras investigar el mercado, confirmé que existe una oportunidad, ya que las soluciones web para esta necesidad son casi inexistentes.",
    solution_title:
      "Desarrollo de la página basada en las necesidades de los usuarios",
    solution_description:
      "Creé la página web basándome en las características que los usuarios me mencionaron que les gustaría tener en una plataforma para registrar su humor.\n Tomé en cuenta sus comentarios y preferencias para asegurar que la funcionalidad y el diseño fueran lo más útil y atractivo posible.",
    impact_title:
      "Mejora en el seguimiento del bienestar emocional y la autocomprensión",
    impact_description:
      "La plataforma permitió a los usuarios hacer un seguimiento fácil y accesible de su estado emocional a lo largo de los días.\n Esto les dio la oportunidad de conocer mejor sus emociones, identificar patrones y tener una visión más clara de cómo su humor cambiaba con el tiempo.\n Al ofrecer una solución web, ampliamos el alcance a personas que prefieren no depender de aplicaciones móviles, mejorando así la autocomprensión y el bienestar general.",
    major_challenges_title:
      "Aprender el dominio de la aplicación y realizar el despliegue bajo un dominio propio",
    major_challenges_description:
      "El primer desafío fue entender los requerimientos de los usuarios y traducirlos a una aplicación web funcional, lo que implicó planificar y diagramar el sitio.\n El segundo desafío fue el despliegue en un dominio propio, para lo cual aprendí a configurar el proceso de deploy y asegurar la página con Cloudflare, protegiéndola contra posibles ataques y mejorando su seguridad.",
    technologies_used_description:
      "- Frontend: React, TypeScript, React Query. HTML, CSS, Tailwind. Shadcn UI\n- Backend: NestJS, TypeScript. Docker\n- Testing y Control de calidad: Playwright, Jest, SuperTest\n- Infraestructura: AWS Cognito, AWS SES, AWS S3. Railway, Cloudflare\n- Bases de datos: MySQL\n- Herramientas: GitHub, GitHub CI/CD. TablePlus, Postman Collection",
    website_url: "https://my-mood.com.ar/",
    screenshots: [
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-homepage.png",
        alt: "Página principal de My Mood",
        legend: "Página principal de My Mood",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-homepage-logged.png",
        alt: "Página principal de My Mood con el usuario logueado",
        legend: "Página principal de My Mood con el usuario logueado",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-create-track.png",
        alt: "Vista para registrar un humor en un día no registrado previamente",
        legend:
          "Vista para registrar un humor en un día no registrado previamente",
      },

      {
        src: "/assets/projects/my-mood/screenshots/my-mood-update-track.png",
        alt: "Vista para actualizar un humor en un día registrado previamente",
        legend:
          "Vista para actualizar un humor en un día registrado previamente",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-edit-profile.png",
        alt: "Vista para editar el perfil del usuario",
        legend: "Vista para editar el perfil del usuario",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-last-3-months.png",
        alt: "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses",
        legend:
          "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-this-month-and-history.png",
        alt: "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo",
        legend:
          "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-login.png",
        alt: "Vista de la página de login de My Mood",
        legend: "Vista de la página de login de My Mood",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-registration.png",
        alt: "Vista de la página de registro de My Mood",
        legend: "Vista de la página de registro de My Mood",
      },

      {
        src: "/assets/projects/my-mood/screenshots/my-mood-confirm-sign-up.png",
        alt: "Vista de la página de confirmación de registro de My Mood",
        legend: "Vista de la página de confirmación de registro de My Mood",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-forgot-password.png",
        alt: "Vista de la página de recuperación de contraseña de My Mood",
        legend: "Vista de la página de recuperación de contraseña de My Mood",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-confirm-password.png",
        alt: "Vista de la página de restablecimiento de contraseña de My Mood",
        legend:
          "Vista de la página de restablecimiento de contraseña de My Mood",
      },

      {
        src: "/assets/projects/my-mood/screenshots/my-mood-email-authentication.jpg",
        alt: "Correo de autenticación de My Mood",
        legend: "Correo de autenticación de My Mood",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-create-track-responsive.png",
        alt: "Vista para registrar un humor en un día no registrado previamente en versión responsive",
        legend:
          "Vista para registrar un humor en un día no registrado previamente en versión responsive",
      },

      {
        src: "/assets/projects/my-mood/screenshots/my-mood-update-track-responsive.png",
        alt: "Vista para actualizar un humor en un día registrado previamente en versión responsive",
        legend:
          "Vista para actualizar un humor en un día registrado previamente en versión responsive",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-edit-profile-responsive.png",
        alt: "Vista para editar el perfil del usuario en versión responsive",
        legend: "Vista para editar el perfil del usuario en versión responsive",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-last-3-months-responsive.png",
        alt: "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses en versión responsive",
        legend:
          "Vista del dashboard del usuario con las estadísticas de los últimos 3 meses en versión responsive",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-stats-this-month-and-history-responsive.png",
        alt: "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo en versión responsive",
        legend:
          "Vista del dashboard del usuario con las estadísticas de este mes y el historial de estados de ánimo en versión responsive",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-sidebar-responsive.png",
        alt: "Vista del sidebar de My Mood en versión responsive",
        legend: "Vista del sidebar de My Mood en versión responsive",
      },
      {
        src: "/assets/projects/my-mood/screenshots/my-mood-sidebar-open-options-responsive.png",
        alt: "Vista del sidebar de My Mood en versión responsive con las opciones abiertas",
        legend:
          "Vista del sidebar de My Mood en versión responsive con las opciones abiertas",
      },
    ],
  },
  {
    title: "LotTrackr",
    description:
      "LotTrackr es una plataforma tecnológica inmobiliaria que se centra en simplificar el proceso de compra y venta de viviendas y terrenos dentro de desarrollos urbanos planificados.",
    short_description:
      "Plataforma inmobiliaria para simplificar compra y venta de propiedades.",
    video: "/assets/projects/lottrackr/lottrackr-builder-estimator.mp4",
    image: "/assets/projects/lottrackr/lottrackr-homepage.png",
    logo: "src/assets/logos/bigger-logo.jpg",
    internal_link: "lottrackr",
    autority: Autority.BIGGER,
    hasVideo: false,
    team: "Con un 1 CL, 1PM",
    role: "Desarrollador",
    year: "2024",
    timeline: "4 meses",
    why_this_project_title:
      "Mejoras e implementación de la funcionalidad herramienta de estimación de negocios",
    why_this_project_description:
      "Me uní al proyecto para realizar mejoras pequeñas, como asegurar que los lotes solo pudieran ser gestionados por dueños con el mismo negocio, además de añadir la asignación de negocios a lotes y dueños en el panel de administración.\n Luego, desarrollé la funcionalidad de la herramienta de estimación de negocios, que permite a los usuarios seleccionar una casa de un constructor, ver información detallada sobre la misma y seleccionar distintas opciones de mejoras para después notificar al constructor sobre el interés del usuario.",
    solution_title:
      "Implementación a partir de un mockup y notificación por correo",
    solution_description:
      "El cliente proporcionó un mockup de las vistas y trabajamos tanto en el frontend y backend para implementar la versión desktop y responsive.\n Al finalizar, se genera un resumen en un PDF, cuyo enlace está en un botón del template del email enviado al usuario con los datos de la casa seleccionada.\n Además, el constructor recibe un correo notificando los detalles del usuario y las opciones elegidas para la casa correspondiente.",
    impact_title: "Optimización del tiempo para usuarios y constructores",
    impact_description:
      "Gracias a esta implementación, los usuarios pueden explorar las casas y las opciones de personalización que ofrecen los constructores, ahorrando tiempo al tomar decisiones informadas.\n Además, los constructores reciben notificaciones automáticas de los usuarios interesados, lo que les permite contactarlos rápidamente.\n Esta funcionalidad mejora la eficiencia del proceso y asegura una comunicación ágil entre ambas partes.",
    major_challenges_title:
      "Adaptación a un nuevo framework y dominio extenso de la aplicación",
    major_challenges_description:
      "El código del frontend estaba escrito en Vue y la lógica de negocio de la aplicación era bastante compleja debido a su desarrollo previo.\n Para adaptarme, dediqué una semana a estudiar el código del repositorio y realizar pequeños ajustes.\n Además, el equipo me brindó un excelente onboarding, lo que me permitió comprender rápidamente el funcionamiento del proyecto y cómo se integran todas las partes del mismo para empezar a trabajar en la implementación.",
    technologies_used_description:
      "- Frontend: Vue, TypeScript. Handlebars. HTML, CSS, SASS\n- Backend: NestJS, TypeScript. Docker\n- Testing y Control de calidad: Jest, SuperTest. Sentry, Sonarqube\n- Infraestructura: AWS SES, AWS S3. AWS Amplify, AWS AppRunner\n- Bases de datos: MongoDB\n- Herramientas: GitHub, GitHub CI/CD, MongoDB Compass",
    website_url: "https://lottrackr.com.au/",
    screenshots: [
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-house-information.png",
        alt: "Vista de la información de la casa en la herramienta de estimación de negocios",
        legend:
          "Vista de la información de la casa en la herramienta de estimación de negocios",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-facade-selection.png",
        alt: "Vista de la selección de fachadas en la herramienta de estimación de negocios",
        legend:
          "Vista de la selección de fachadas en la herramienta de estimación de negocios",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-facade-selection-with-quote-summary-open.png",
        alt: "Vista de la selección de fachadas en la herramienta de estimación de negocios con el resumen de la cotización abierto",
        legend:
          "Vista de la selección de fachadas en la herramienta de estimación de negocios con el resumen de la cotización abierto",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-optional-upgrades.png",
        alt: "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios",
        legend:
          "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-summary.png",
        alt: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios",
        legend:
          "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios",
      },

      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-summary-with-form-open.png",
        alt: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios con el formulario de contacto abierto",
        legend:
          "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios con el formulario de contacto abierto",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/email-builder-estimator-user-template.png",
        alt: "Vista del correo de notificación de la casa seleccionada al usuario",
        legend:
          "Vista del correo de notificación de la casa seleccionada al usuario",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/admin-panel-add-inclusion.png",
        alt: "Vista del panel de administración de LotTrackr con el formulario para añadir una inclusión",
        legend:
          "Vista del panel de administración de LotTrackr con el formulario para añadir una inclusión",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/admin-panel-view-inclusion.png",
        alt: "Vista del panel de administración de LotTrackr con la lista de inclusión",
        legend:
          "Vista del panel de administración de LotTrackr con la lista de inclusión",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-summary-mobile-responsive.png",
        alt: "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios en versión mobile",
        legend:
          "Vista del resumen de la casa con todas sus opciones seleccionadas en la herramienta de estimación de negocios en versión mobile",
      },
      {
        src: "/assets/projects/lottrackr/screenshots/builder-estimator-optional-upgrades-mobile-responsive.png",
        alt: "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios en versión mobile",
        legend:
          "Vista de las opciones de mejoras opcionales en la herramienta de estimación de negocios en versión mobile",
      },
    ],
  },
  {
    title: "CricConnect",
    description:
      "CricConnect es una plataforma diseñada para que los fanáticos del cricket se conecten y compartan su conocimiento sobre el deporte, ofreciendo un espacio para la discusión.",
    short_description:
      "Plataforma para fanáticos del cricket para compartir conocimientos.",
    video: "/assets/projects/cricconnect/cricconnect-sponsors.mp4",
    image: "/assets/projects/cricconnect/cricconnect-homepage.png",
    logo: "src/assets/logos/bigger-logo.jpg",
    internal_link: "cricconnect",
    autority: Autority.BIGGER,
    hasVideo: false,
    team: "Con un 1 CL, 1 desarrollador, 1PM",
    role: "Desarrollador",
    year: "2024",
    timeline: "3 meses",
    why_this_project_title:
      "Implementación de sistema de patrocinadores para generar ingresos",
    why_this_project_description:
      "El cliente deseaba monetizar su plataforma mediante la incorporación de anuncios de patrocinadores de manera no intrusiva, asegurando que la experiencia del usuario no se viera afectada.",
    solution_title:
      "Sistema de patrocinadores basado en país y región del usuario",
    solution_description:
      "Implementamos un sistema de anuncios de patrocinadores que se adapta a la ubicación geográfica del usuario, permitiendo mostrar anuncios específicos por país y región, con niveles de patrocinadores que ofrecen distintos beneficios según la categoría del patrocinador.\n Además, desarrollamos un panel de administración para gestionar sponsors por zona geográfica, dando control total sobre los anuncios.",
    impact_title:
      "El cliente comenzó a generar ingresos después de años sin esta funcionalidad",
    impact_description:
      "Gracias a la implementación del sistema de patrocinadores, el cliente ahora puede mostrar anuncios segmentados por ubicación geográfica, lo que le permite ampliar su base de patrocinadores y vender espacios publicitarios en diversas regiones, maximizando las oportunidades de monetización.",
    major_challenges_title:
      "Código legacy sin documentar y tecnologías desconocidas",
    major_challenges_description:
      "El proyecto implicó trabajar con un código legacy de 6 años, sin documentación, en tecnologías desconocidas, lo que requirió aprender rápidamente nuevas herramientas.\n Junto con el equipo, implementamos un panel de administración de patrocinadores utilizando AWS API Gateway y AWS Lambda, configurando un flujo CI/CD que transpilaba el código, lo testeaba y comprimía el mismo junto con las dependencias para posteriormente subir en AWS S3, generando un archivo conectado con AWS Lambda.\n Una vez que el CL configuró el entorno Docker, conectamos el frontend legacy hecho en PHP Laravel con el panel de administración desarrollado para mostrar los patrocinadores en la página, segmentados por categoría y en diferentes spots publicitarios con sus respectivos beneficios.\n El proyecto se dejó documentado técnicamente y testeado al 100% en nuestra implementación del administrador de patrocinadores, asegurando código limpio y escalable para futuros desarrollos.",
    technologies_used_description:
      "- Frontend: PHP, Laravel. TypeScript, React, React Query. LocalStack, Docker. HTML, CSS, Tailwind\n- Backend: .NET, JavaScript, TypeScript. Mongoose\n- Testing y Control de calidad: Cypress, Jest. Sentry\n- Infraestructura: AWS API Gateway, AWS Lambda, AWS S3. Amplify, AWS AppRunner\n- Bases de datos: Microsoft SQL, DynamoDB\n- Herramientas: GitHub, GitHub CI/CD. NoSQL Workbench, SQL Server Management Studio",
    website_url: "https://www.cricconnect.com/",
    screenshots: [
      {
        src: "/assets/projects/cricconnect/screenshots/homepage-platinum-sponsor.png",
        alt: "Página principal de CricConnect con un patrocionador Platinum en el carrusel",
        legend:
          "Página principal de CricConnect con un patrocionador Platinum en el carrusel",
      },
      {
        src: "/assets/projects/cricconnect/screenshots/homepage-premium-sponsor.png",
        alt: "Página principal de CricConnect con patrocinadores Premium en el sidebar",
        legend:
          "Página principal de CricConnect con patrocinadores Premium en el sidebar",
      },
      {
        src: "/assets/projects/cricconnect/screenshots/question-partner-and-sticky-premium-sponsor.png",
        alt: "Página principal de CricConnect con patrocinadores partner entre una pregunta y respuestas, además de los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
        legend:
          "Página principal de CricConnect con patrocinadores partner entre una pregunta y respuestas, además de los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
      },
      {
        src: "/assets/projects/cricconnect/screenshots/homepage-partner-and-sticky-premium-sponsor.png",
        alt: "Página principal de CricConnect con patrocinadores partner cada 4 publicaciones y los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
        legend:
          "Página principal de CricConnect con patrocinadores partner cada 4 publicaciones y los patrocinadores premium en el sidebar con estilo sticky para que no se pierda de vista",
      },
      {
        src: "/assets/projects/cricconnect/screenshots/admin-panel.png",
        alt: "Panel de administración de CricConnect",
        legend: "Panel de administración de CricConnect",
      },
      {
        src: "/assets/projects/cricconnect/screenshots/admin-panel-create-modal.png",
        alt: "Panel de administración de CricConnect con modal para crear patrocinadores",
        legend:
          "Panel de administración de CricConnect con modal para crear patrocinadores",
      },
    ],
  },

  {
    title: "Poulz",
    description:
      "Poulz es una plataforma de streaming que revoluciona el mercado digital, permitiendo a creadores de contenido generar ingresos a través de sus transmisiones de pago.",
    short_description:
      "Plataforma de streaming que permite a creadores generar ingresos.",
    video: "/assets/projects/poulz/poulz-example.mp4",
    image: "/assets/projects/poulz/poulz-homepage.png",
    logo: "src/assets/logos/bigger-logo.jpg",
    internal_link: "poulz",
    autority: Autority.BIGGER,
    hasVideo: false,
    team: "Con un 1 CL, 1 desarrollador, 1PM, 1 diseñador",
    role: "Desarrollador",
    year: "2024",
    timeline: "1 año y 2 meses",
    why_this_project_title:
      "Desarrollo de un MVP para una plataforma de streaming de eventos futuros",
    why_this_project_description:
      "El cliente quería crear una plataforma donde los usuarios pudieran comprar tokens para acceder a eventos de streaming programados, como clases u otros contenidos, antes de su fecha.\n Los usuarios gastaban tokens en estos eventos futuros, y al llegar la fecha, podían ver el contenido, mientras que un pequeño fee en las transacciones generaba ingresos adicionales al cliente.",
    solution_title: "Desarrollo del MVP con enfoque ágil Scrum por sprints",
    solution_description:
      "Trabajamos el MVP utilizando metodologías ágiles bajo el marco de Scrum, organizando el trabajo en sprints para alcanzar grandes objetivos de manera progresiva.\nPrincipales características implementadas: \n1. Autenticación y autorización de usuario, con roles y permisos para gestionar el acceso a funciones específicas.\n2. Gestión de emails para registro, confirmación de cuenta y comunicación de autenticación.\n3. Compra, retiro y uso de tokens Poulz (PLZC) mediante Stripe, con la opción de retirar tokens a USD a través de Stripe Connect y comprarlos para acceder a transmisiones pagas.\n4. Transmisiones en vivo unidireccionales y bidireccionales, con interacción mediante webcam y micrófono, habilitación de chat en vivo y opción de compartir pantalla durante las transmisiones.\n5. Sistema de clasificación de streams, donde los usuarios pueden puntuar los contenidos de 1 a 5 estrellas y dejar comentarios.\n6. Dashboard administrativo para gestionar y programar streams, con un sistema de reportes detallados de la actividad de los streams.",
    impact_title: "Promedio de NPS de 5.0 en todos los sprints",
    impact_description:
      "El cliente estuvo sumamente satisfecho durante todo el proceso, ya que se realizaron pruebas en vivo en cada demo por sprint, utilizando un entorno de staging.\n Como resultado, el promedio de NPS al final de todos los sprints fue de 5.0, lo que demuestra que el cliente estuvo completamente conforme con el trabajo realizado.\n Este nivel de satisfacción también dejó a la empresa con una excelente puntuación en el NPS general, reflejando el éxito del proyecto y el alto rendimiento del equipo.",
    major_challenges_title: "Implementación de transmisiones en vivo y pagos",
    major_challenges_description:
      "La implementación de transmisiones en vivo fue un reto, ya que era una funcionalidad nueva para la empresa y no habíamos trabajado con este tipo de integración antes.\n Tuvimos que investigar a fondo la documentación disponible y, tras realizar varias pruebas, optamos por usar AWS Interactive Video Service por su escalabilidad y robustez para gestionar las transmisiones en vivo, lo que nos permitió brindar una experiencia estable y de calidad.\n\nPara los pagos, fue necesario estudiar la documentación de Stripe y Stripe Connect para integrarlos correctamente, garantizando un proceso de pagos seguro y sin errores.\n Además, utilizamos Stellar como sistema contable dentro de la app, facilitando la gestión de pagos y transacciones de los usuarios. Realizamos numerosas pruebas en test mode para asegurarnos de que todo funcionara correctamente antes de la implementación final.",
    technologies_used_description:
      "- Frontend: React, TypeScript, React Query. HTML, CSS, Tailwind.\n- Backend: NestJS, NodeJS, TypeScript. Stripe, Stripe Connect, Stellar. Docker\n- Testing y Control de calidad: Cypress, Jest, SuperTest. SonarQube\n- Infraestructura:  AWS Interactive Video Service, AWS IVS Chat. AWS Cognito, AWS SES, AWS S3. AWS Lambda, AWS AppRunner, AWS Amplify\n- Bases de datos: MySQL\n- Herramientas: GitHub, GitHub CI/CD. Postman, AWS CloudWatch",
    screenshots: [
      {
        src: "/assets/projects/poulz/screenshots/poulz-streaming.png",
        alt: "Vista de la transmisión en vivo de forma unidireccional de Poulz con un usuario interactuando en el chat",
        legend:
          "Vista de la transmisión en vivo de forma unidireccional de Poulz con un usuario interactuando en el chat",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-recharge.png",
        alt: "Vista de la página de recarga de tokens de Poulz",
        legend: "Vista de la página de recarga de tokens de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-create-stream.png",
        alt: "Vista de la página de creación de stream de Poulz",
        legend: "Vista de la página de creación de stream de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-homepage.png",
        alt: "Página principal de Poulz",
        legend: "Página principal de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-profile-header.png",
        alt: "Vista del header de perfil de Poulz",
        legend: "Vista del header de perfil de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-admin-dashboard-refunds.png",
        alt: "Vista del dashboard de administración de Poulz con la sección de reembolsos",
        legend:
          "Vista del dashboard de administración de Poulz con la sección de reembolsos",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-calendar.png",
        alt: "Vista del calendario de Poulz",
        legend: "Vista del calendario de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-report-list.png",
        alt: "Vista de la lista de reportes de Poulz",
        legend: "Vista de la lista de reportes de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-report-modal.png",
        alt: "Vista del modal de reporte de Poulz",
        legend: "Vista del modal de reporte de Poulz",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-stream-card-on-search.png",
        alt: "Vista de la tarjeta de stream de Poulz en la lista de búsqueda",
        legend:
          "Vista de la tarjeta de stream de Poulz en la lista de búsqueda",
      },
      {
        src: "/assets/projects/poulz/screenshots/poulz-stream-reports.png",
        alt: "Vista de los reportes de stream de Poulz",
        legend: "Vista de los reportes de stream de Poulz",
      },
    ],
  },
];
