export type Locale = 'en' | 'es'

export type ResumeContent = {
  localeLabel: string
  switchLabel: string
  download: string
  generating: string
  title: string
  locationLine: string
  profileTitle: string
  profile: string
  expertiseTitle: string
  expertise: string[]
  stackTitle: string
  stack: string[]
  achievementsTitle: string
  achievements: string[]
  experienceTitle: string
  experience: { role: string; period: string; description: string; bullets: string[] }[]
  projectsTitle: string
  projects: { name: string; description: string; technologies: string }[]
  educationTitle: string
  education: string[]
}

export const content: Record<Locale, ResumeContent> = {
  en: {
    localeLabel: 'English',
    switchLabel: 'Español',
    download: 'Download PDF',
    generating: 'Generating…',
    title: 'Senior Product Engineer | SaaS & Solution Architect | .NET · React · TypeScript · AWS · Docker',
    locationLine: 'Argentine & Italian citizen · Based in Buenos Aires · Open to remote work and relocation to the United States',
    profileTitle: 'Profile',
    profile: 'Senior Product Engineer and SaaS Architect with 20+ years of experience turning real business problems into reliable software products. I work across the full product lifecycle: user and business discovery, architecture, frontend and backend development, data, integrations, infrastructure and production operations. Founder of FewLines, where I build and evolve business-critical CRM/SaaS products in direct collaboration with customers.',
    expertiseTitle: 'Core Expertise',
    expertise: ['Product Engineering', 'SaaS & Solution Architecture', 'Full-Stack Development', 'Product Discovery', 'API & Fiscal Integrations', 'Cloud, DevOps & CI/CD', 'Database Design', 'Security & Authentication', 'Process Automation', 'Technical Leadership'],
    stackTitle: 'Technology',
    stack: ['.NET', 'C#', 'ASP.NET MVC', 'Web APIs', 'Entity Framework', 'React', 'TypeScript', 'JavaScript', 'SQL Server', 'DynamoDB', 'Docker', 'AWS', 'GitHub Actions', 'XUnit', 'Linux', 'SignalR', 'SwiftUI', 'Python'],
    achievementsTitle: 'Selected Impact',
    achievements: [
      'Founded FewLines and architected its CRM/SaaS platform for invoicing, purchasing, inventory, customers and financial workflows.',
      'Integrated AFIP/ARCA fiscal services, document generation and spreadsheet workflows into production business processes.',
      'Led product and technical delivery of a retail PWA for a major Argentine hardware-store chain with a four-person Agile XP team.',
      'Designed and operated production systems across application, database, cloud, containers, networking and automation.',
    ],
    experienceTitle: 'Experience',
    experience: [
      {
        role: 'Founder & Senior Product Engineer — FewLines',
        period: '2020 – Present · Argentina',
        description: 'Own the product lifecycle for a business-critical CRM/SaaS platform, from customer discovery and architecture to implementation and production operations.',
        bullets: [
          'Design and build secure role-based workflows with .NET, React/TypeScript, SQL Server, Docker and automated tests.',
          'Integrate AFIP/ARCA services, APIs, PDF generation and Excel-based workflows.',
          'Translate direct customer needs into product capabilities and technical decisions.',
        ],
      },
      {
        role: 'Senior Software Engineer & Technical Lead — Independent',
        period: '2018 – 2020 · Argentina',
        description: 'Led development of a large-scale retail PWA for a major Argentine hardware-store chain.',
        bullets: ['Worked with a four-person Agile XP team.', 'Built with ASP.NET MVC, JavaScript, AWS and DynamoDB.'],
      },
      {
        role: 'Software Engineer & IT Specialist — Smmart Internet',
        period: '2004 – 2018 · Argentina',
        description: 'Progressed from trainee developer to software engineer and infrastructure specialist.',
        bullets: [
          'Developed CRM, passenger-management, inventory and merchandise-management systems.',
          'Designed SQL Server databases and business workflows across ASP, ASP.NET, JavaScript, PHP and MySQL.',
          'Automated server operations with Python and managed servers, workstations and networks.',
        ],
      },
    ],
    projectsTitle: 'Selected Products',
    projects: [
      { name: 'Tu Evento en Fotos', description: 'Real-time B2B2C event-photo product covering media, interaction, storage, payments and live experiences.', technologies: 'React · TypeScript · Real-time systems · Storage · Payments' },
      { name: 'AlbumPanini', description: 'Collection-agnostic offline-first PWA with IndexedDB migrations, OCR scanning, compressed backups, analytics and serverless QR exchange.', technologies: 'React · TypeScript · IndexedDB · OCR · Playwright · CI/CD' },
      { name: 'AI Usage Menubar', description: 'Native macOS app that normalizes usage data from multiple AI platforms and protects credentials with Keychain.', technologies: 'Swift · SwiftUI · MVVM · APIs · Keychain' },
      { name: 'Local AI Chat', description: 'Private PWA that runs language models locally in the browser for customer-oriented conversations.', technologies: 'React · WebLLM · Transformers.js · PWA' },
    ],
    educationTitle: 'Education & Languages',
    education: ['UADE — Computer Engineering studies (2005–2010)', 'EF SET English Certificate: 75/100 — C2 Proficient', 'Spanish: Native · English: C2 Proficient'],
  },
  es: {
    localeLabel: 'Español',
    switchLabel: 'English',
    download: 'Descargar PDF',
    generating: 'Generando…',
    title: 'Senior Product Engineer | Arquitecto SaaS | .NET · React · TypeScript · AWS · Docker',
    locationLine: 'Ciudadano argentino e italiano · Residente en Buenos Aires · Disponible para trabajo remoto y relocalización en Estados Unidos',
    profileTitle: 'Perfil',
    profile: 'Senior Product Engineer y Arquitecto SaaS con más de 20 años de experiencia convirtiendo problemas reales de negocio en productos de software confiables. Trabajo sobre todo el ciclo de producto: descubrimiento de usuarios y negocio, arquitectura, frontend, backend, datos, integraciones, infraestructura y operación en producción. Soy fundador de FewLines, donde construyo y evoluciono productos CRM/SaaS críticos en colaboración directa con clientes.',
    expertiseTitle: 'Especialidades',
    expertise: ['Ingeniería de Producto', 'Arquitectura SaaS y de Soluciones', 'Desarrollo Full Stack', 'Descubrimiento de Producto', 'Integraciones de APIs y Fiscales', 'Cloud, DevOps y CI/CD', 'Diseño de Bases de Datos', 'Seguridad y Autenticación', 'Automatización de Procesos', 'Liderazgo Técnico'],
    stackTitle: 'Tecnologías',
    stack: ['.NET', 'C#', 'ASP.NET MVC', 'Web APIs', 'Entity Framework', 'React', 'TypeScript', 'JavaScript', 'SQL Server', 'DynamoDB', 'Docker', 'AWS', 'GitHub Actions', 'XUnit', 'Linux', 'SignalR', 'SwiftUI', 'Python'],
    achievementsTitle: 'Impacto Destacado',
    achievements: [
      'Fundé FewLines y diseñé la arquitectura de su plataforma CRM/SaaS para facturación, compras, inventario, clientes y finanzas.',
      'Integré servicios fiscales de AFIP/ARCA, generación de documentos y flujos con planillas dentro de procesos productivos.',
      'Lideré la entrega de producto y tecnología de una PWA para una importante cadena argentina de ferreterías con un equipo Agile XP de cuatro personas.',
      'Diseñé y operé sistemas productivos abarcando aplicación, datos, cloud, contenedores, redes y automatización.',
    ],
    experienceTitle: 'Experiencia',
    experience: [
      {
        role: 'Fundador y Senior Product Engineer — FewLines',
        period: '2020 – Actualidad · Argentina',
        description: 'Responsable del ciclo de producto de una plataforma CRM/SaaS crítica, desde el descubrimiento con clientes y la arquitectura hasta la implementación y operación.',
        bullets: [
          'Diseño y desarrollo flujos seguros basados en roles con .NET, React/TypeScript, SQL Server, Docker y pruebas automatizadas.',
          'Integro servicios de AFIP/ARCA, APIs, generación de PDF y procesos basados en Excel.',
          'Convierto necesidades directas de clientes en capacidades de producto y decisiones técnicas.',
        ],
      },
      {
        role: 'Senior Software Engineer y Líder Técnico — Independiente',
        period: '2018 – 2020 · Argentina',
        description: 'Lideré el desarrollo de una PWA de retail para una importante cadena argentina de ferreterías.',
        bullets: ['Trabajé con un equipo de cuatro personas utilizando Agile XP.', 'Construida con ASP.NET MVC, JavaScript, AWS y DynamoDB.'],
      },
      {
        role: 'Software Engineer y Especialista de TI — Smmart Internet',
        period: '2004 – 2018 · Argentina',
        description: 'Evolucioné desde desarrollador trainee hasta ingeniero de software y especialista de infraestructura.',
        bullets: [
          'Desarrollé sistemas CRM, gestión de pasajeros, inventario y acopio de mercadería.',
          'Diseñé bases SQL Server y procesos de negocio con ASP, ASP.NET, JavaScript, PHP y MySQL.',
          'Automaticé servidores con Python y administré servidores, puestos de trabajo y redes.',
        ],
      },
    ],
    projectsTitle: 'Productos Destacados',
    projects: [
      { name: 'Tu Evento en Fotos', description: 'Producto B2B2C en tiempo real para eventos, con contenido multimedia, interacción, almacenamiento, pagos y experiencias en vivo.', technologies: 'React · TypeScript · Tiempo real · Almacenamiento · Pagos' },
      { name: 'AlbumPanini', description: 'PWA offline-first independiente de una colección específica, con migraciones de IndexedDB, OCR, backups comprimidos, analítica e intercambio por QR sin servidor.', technologies: 'React · TypeScript · IndexedDB · OCR · Playwright · CI/CD' },
      { name: 'AI Usage Menubar', description: 'Aplicación nativa de macOS que normaliza el uso de múltiples plataformas de IA y protege credenciales con Keychain.', technologies: 'Swift · SwiftUI · MVVM · APIs · Keychain' },
      { name: 'Local AI Chat', description: 'PWA privada que ejecuta modelos de lenguaje localmente en el navegador para conversaciones orientadas al cliente.', technologies: 'React · WebLLM · Transformers.js · PWA' },
    ],
    educationTitle: 'Educación e Idiomas',
    education: ['UADE — Estudios de Ingeniería Informática (2005–2010)', 'Certificado EF SET: 75/100 — Inglés C2', 'Español: nativo · Inglés: C2'],
  },
}
