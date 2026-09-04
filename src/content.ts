export type Locale = 'en' | 'es'
type Group = { title: string; items: string[] }
export type ResumeContent = {
  localeLabel: string; switchLabel: string; skipLabel: string; brandLabel: string
  download: string; downloadAria: string; generating: string; title: string; locationLine: string
  profileTitle: string; profile: string; expertiseTitle: string; expertise: Group[]
  stackTitle: string; stack: Group[]; achievementsTitle: string; achievements: string[]
  experienceTitle: string; experience: { role: string; period: string; description: string; bullets: string[] }[]
  projectsTitle: string; projects: { name: string; description: string; technologies: string }[]
  educationTitle: string; education: string[]; languagesTitle: string; languages: string[]
  metaTitle: string; metaDescription: string
}

export const content: Record<Locale, ResumeContent> = {
  en: {
    localeLabel: 'English', switchLabel: 'Español', skipLabel: 'Skip to resume content', brandLabel: 'Diego Minetti · Resume',
    download: 'Download PDF', downloadAria: 'Download resume as PDF', generating: 'Generating…',
    title: 'Senior Full-Stack & Product Engineer | SaaS Architecture | .NET · React · TypeScript · Cloud · AI',
    locationLine: 'Argentine & Italian citizen · Based in Buenos Aires (UTC−3) · Available for fully remote international roles',
    profileTitle: 'Profile',
    profile: 'Senior Full-Stack & Product Engineer with 20+ years of experience designing, building and operating business-critical software. Specialized in .NET, React and TypeScript, with end-to-end ownership across architecture, backend, frontend, databases, integrations, infrastructure and production. Founder of FewLines, where I turn real customer and business problems into production software, combining hands-on engineering with product and technical decision-making.',
    expertiseTitle: 'Core Expertise',
    expertise: [
      { title: 'Engineering', items: ['Full-Stack Engineering', 'SaaS Architecture', 'Real-Time Systems', 'API Design', 'Database Architecture'] },
      { title: 'Product', items: ['Product Engineering', 'Business Process Automation', 'Technical Discovery', 'Third-Party Integrations'] },
      { title: 'Delivery', items: ['Cloud & Infrastructure', 'Docker', 'CI/CD', 'Production Operations', 'Technical Leadership'] },
    ],
    stackTitle: 'Technology Stack',
    stack: [
      { title: 'Backend', items: ['C#', '.NET / ASP.NET Core', 'Node.js', 'Fastify', 'Express', 'Web APIs', 'Entity Framework Core', 'Drizzle ORM', 'SignalR'] },
      { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'PWA'] },
      { title: 'Data', items: ['SQL Server', 'PostgreSQL', 'Redis', 'DynamoDB', 'SQLite', 'IndexedDB / Dexie'] },
      { title: 'Cloud & DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'AWS', 'Linux'] },
      { title: 'AI & Automation', items: ['LLM APIs', 'AI Coding Agents', 'GitHub Copilot', 'Codex', 'Local LLMs', 'Python'] },
      { title: 'Testing & Quality', items: ['Vitest', 'Playwright', 'XUnit', 'TypeScript', 'ESLint'] },
    ],
    achievementsTitle: 'Selected Impact',
    achievements: [
      'Founded and architected FewLines, a production business-management platform covering invoicing, purchasing, inventory, customer accounts, financial workflows and fiscal integrations.',
      'Designed and implemented production integrations with AFIP/ARCA fiscal services, automating electronic invoicing, document generation and business-critical fiscal workflows.',
      'Led technical delivery of a production retail platform for a major Argentine hardware-store chain, working in a four-engineer Agile XP team across application architecture, development and deployment.',
    ],
    experienceTitle: 'Experience',
    experience: [
      { role: 'Founder & Senior Product Engineer — FewLines', period: '2020 – Present · Argentina', description: 'Own FewLines end-to-end, from customer discovery and product decisions to architecture, development, deployment and production operations.', bullets: [
        'Architect and develop business-critical workflows for sales, purchasing, inventory, invoicing, customer accounts and financial operations using .NET, React/TypeScript and SQL Server.',
        'Design and maintain integrations with AFIP/ARCA fiscal services and third-party APIs, including electronic invoicing, document generation and automated data workflows.',
        'Work directly with customers to identify operational problems, define product requirements and turn them into maintainable production solutions.',
        'Own production infrastructure and delivery workflows using Docker, Linux and CI/CD, including deployments, monitoring, backups and operational automation.',
      ] },
      { role: 'Senior Software Engineer & Technical Lead — Independent', period: '2018 – 2020 · Argentina', description: 'Led technical development of a production PWA supporting purchasing, receiving, distribution and retail operations for a major Argentine hardware-store chain.', bullets: [
        'Worked in a four-engineer Agile XP team, contributing across architecture, backend, frontend, data and production delivery.',
        'ASP.NET MVC · JavaScript · AWS · DynamoDB · PWA',
      ] },
      { role: 'Software Engineer & IT Specialist — Smmart Internet', period: '2004 – 2018 · Argentina', description: 'Progressed from trainee developer to senior software and infrastructure responsibilities across 14 years, building and operating business-critical systems for multiple industries.', bullets: [
        'Developed CRM, transportation, inventory and merchandise-management platforms using ASP.NET, JavaScript and SQL Server.',
        'Combined software engineering with infrastructure ownership, including databases, servers, networking and production automation.',
      ] },
    ],
    projectsTitle: 'Selected Products',
    projects: [
      { name: 'FewLines', description: 'Business-management platform covering invoicing, purchasing, inventory, customer accounts, fiscal integrations and financial workflows.', technologies: '.NET · React · TypeScript · SQL Server · Docker · AFIP/ARCA' },
      { name: 'ChatCentral', description: 'Multi-tenant omnichannel customer communications platform integrating WhatsApp, Facebook, Instagram, Telegram and web chat, with real-time messaging, conversation management and AI-assisted workflows.', technologies: 'Multi-Tenant SaaS · Real-Time Messaging · Third-Party Integrations · AI/LLM' },
      { name: 'Tu Evento en Fotos', description: 'Production SaaS platform enabling event guests to upload, share and interact with photos and videos in real time through QR-based experiences, including media processing, storage, payments and live displays.', technologies: 'React · TypeScript · Real-Time Systems · Storage · Payments' },
      { name: 'Hardware-chain Retail Platform', description: 'Production PWA supporting purchasing, receiving, distribution and retail operations, delivered with a four-engineer Agile XP team.', technologies: 'ASP.NET MVC · JavaScript · AWS · DynamoDB · PWA' },
      { name: 'AI Usage Menubar', description: 'Native macOS application that aggregates usage and quota data across multiple AI providers, providing developers with a unified real-time view while securely storing credentials in macOS Keychain.', technologies: 'Swift · SwiftUI · MVVM · REST APIs · Keychain' },
    ],
    educationTitle: 'Education', education: ['Computer Engineering — Coursework', 'UADE · 2005–2010'],
    languagesTitle: 'Languages', languages: ['Spanish: Native', 'English: C2 Proficient — EF SET 75/100'],
    metaTitle: 'Diego Minetti | Senior Full-Stack & Product Engineer',
    metaDescription: 'Senior Full-Stack & Product Engineer with 20+ years of experience building SaaS and business-critical software with .NET, React and TypeScript.',
  },
  es: {
    localeLabel: 'Español', switchLabel: 'English', skipLabel: 'Ir al contenido del CV', brandLabel: 'Diego Minetti · CV',
    download: 'Descargar PDF', downloadAria: 'Descargar CV en PDF', generating: 'Generando…',
    title: 'Senior Full-Stack & Product Engineer | Arquitectura SaaS | .NET · React · TypeScript · Cloud · AI',
    locationLine: 'Ciudadano argentino e italiano · Buenos Aires (UTC−3) · Disponible para posiciones internacionales 100% remotas',
    profileTitle: 'Perfil',
    profile: 'Senior Full-Stack & Product Engineer con más de 20 años de experiencia diseñando, construyendo y operando software crítico para negocios. Especializado en .NET, React y TypeScript, con responsabilidad integral sobre arquitectura, backend, frontend, bases de datos, integraciones, infraestructura y producción. Fundador de FewLines, donde convierto problemas reales de clientes y del negocio en software productivo, combinando ingeniería hands-on con decisiones de producto y tecnología.',
    expertiseTitle: 'Especialidades',
    expertise: [
      { title: 'Ingeniería', items: ['Ingeniería Full-Stack', 'Arquitectura SaaS', 'Sistemas en Tiempo Real', 'Diseño de APIs', 'Arquitectura de Bases de Datos'] },
      { title: 'Producto', items: ['Ingeniería de Producto', 'Automatización de Procesos de Negocio', 'Descubrimiento Técnico', 'Integraciones con Terceros'] },
      { title: 'Entrega', items: ['Cloud e Infraestructura', 'Docker', 'CI/CD', 'Operaciones de Producción', 'Liderazgo Técnico'] },
    ],
    stackTitle: 'Stack Tecnológico',
    stack: [
      { title: 'Backend', items: ['C#', '.NET / ASP.NET Core', 'Node.js', 'Fastify', 'Express', 'Web APIs', 'Entity Framework Core', 'Drizzle ORM', 'SignalR'] },
      { title: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'Vite', 'Tailwind CSS', 'TanStack Query', 'PWA'] },
      { title: 'Datos', items: ['SQL Server', 'PostgreSQL', 'Redis', 'DynamoDB', 'SQLite', 'IndexedDB / Dexie'] },
      { title: 'Cloud y DevOps', items: ['Docker', 'Docker Compose', 'GitHub Actions', 'CI/CD', 'AWS', 'Linux'] },
      { title: 'IA y Automatización', items: ['APIs de LLMs', 'Agentes de IA para Desarrollo', 'GitHub Copilot', 'Codex', 'LLMs Locales', 'Python'] },
      { title: 'Testing y Calidad', items: ['Vitest', 'Playwright', 'XUnit', 'TypeScript', 'ESLint'] },
    ],
    achievementsTitle: 'Impacto Destacado',
    achievements: [
      'Fundé FewLines y diseñé la arquitectura de una plataforma productiva de gestión empresarial que abarca facturación, compras, inventario, cuentas de clientes, flujos financieros e integraciones fiscales.',
      'Diseñé e implementé integraciones productivas con servicios fiscales de AFIP/ARCA, automatizando facturación electrónica, generación de documentos y procesos fiscales críticos para el negocio.',
      'Lideré la entrega técnica de una plataforma productiva de retail para una importante cadena argentina de ferreterías, trabajando en un equipo Agile XP de cuatro ingenieros sobre arquitectura, desarrollo y despliegue.',
    ],
    experienceTitle: 'Experiencia',
    experience: [
      { role: 'Fundador y Senior Product Engineer — FewLines', period: '2020 – Actualidad · Argentina', description: 'Lidero FewLines de punta a punta: desde el descubrimiento con clientes y las decisiones de producto hasta la arquitectura, el desarrollo, el despliegue y la operación en producción.', bullets: [
        'Diseño y desarrollo procesos críticos para ventas, compras, inventario, facturación, cuentas de clientes y operaciones financieras con .NET, React/TypeScript y SQL Server.',
        'Diseño y mantengo integraciones con servicios fiscales de AFIP/ARCA y APIs de terceros, incluyendo facturación electrónica, generación de documentos y flujos de datos automatizados.',
        'Trabajo directamente con clientes para detectar problemas operativos, definir requisitos de producto y convertirlos en soluciones productivas mantenibles.',
        'Gestiono la infraestructura productiva y los flujos de entrega con Docker, Linux y CI/CD, incluyendo despliegues, monitoreo, backups y automatización operativa.',
      ] },
      { role: 'Senior Software Engineer y Líder Técnico — Independiente', period: '2018 – 2020 · Argentina', description: 'Lideré el desarrollo técnico de una PWA productiva para compras, recepción, distribución y operaciones de retail de una importante cadena argentina de ferreterías.', bullets: [
        'Trabajé en un equipo Agile XP de cuatro ingenieros, contribuyendo en arquitectura, backend, frontend, datos y entrega a producción.',
        'ASP.NET MVC · JavaScript · AWS · DynamoDB · PWA',
      ] },
      { role: 'Software Engineer y Especialista de TI — Smmart Internet', period: '2004 – 2018 · Argentina', description: 'Evolucioné desde desarrollador trainee hasta asumir responsabilidades senior de software e infraestructura durante 14 años, construyendo y operando sistemas críticos para múltiples industrias.', bullets: [
        'Desarrollé plataformas de CRM, transporte, inventario y gestión de mercadería con ASP.NET, JavaScript y SQL Server.',
        'Combiné ingeniería de software con responsabilidad sobre infraestructura, incluyendo bases de datos, servidores, redes y automatización productiva.',
      ] },
    ],
    projectsTitle: 'Productos Destacados',
    projects: [
      { name: 'FewLines', description: 'Plataforma de gestión empresarial para facturación, compras, inventario, cuentas de clientes, integraciones fiscales y flujos financieros.', technologies: '.NET · React · TypeScript · SQL Server · Docker · AFIP/ARCA' },
      { name: 'ChatCentral', description: 'Plataforma SaaS multi-tenant de comunicación omnicanal que integra WhatsApp, Facebook, Instagram, Telegram y chat web, con mensajería en tiempo real, gestión de conversaciones y flujos asistidos por IA.', technologies: 'SaaS Multi-Tenant · Mensajería en Tiempo Real · Integraciones con Terceros · IA/LLM' },
      { name: 'Tu Evento en Fotos', description: 'Plataforma SaaS productiva que permite a invitados de eventos subir, compartir e interactuar con fotos y videos en tiempo real mediante experiencias basadas en QR, incluyendo procesamiento multimedia, almacenamiento, pagos y pantallas en vivo.', technologies: 'React · TypeScript · Sistemas en Tiempo Real · Almacenamiento · Pagos' },
      { name: 'Plataforma de Retail para Cadena de Ferreterías', description: 'PWA productiva para compras, recepción, distribución y operaciones de retail, entregada con un equipo Agile XP de cuatro ingenieros.', technologies: 'ASP.NET MVC · JavaScript · AWS · DynamoDB · PWA' },
      { name: 'AI Usage Menubar', description: 'Aplicación nativa para macOS que consolida datos de uso y cuotas de múltiples proveedores de IA, ofreciendo a desarrolladores una vista unificada en tiempo real y almacenando credenciales de forma segura en macOS Keychain.', technologies: 'Swift · SwiftUI · MVVM · REST APIs · Keychain' },
    ],
    educationTitle: 'Educación', education: ['Ingeniería Informática — Estudios universitarios', 'UADE · 2005–2010'],
    languagesTitle: 'Idiomas', languages: ['Español: Nativo', 'Inglés: C2 Proficient — EF SET 75/100'],
    metaTitle: 'Diego Minetti | Senior Full-Stack & Product Engineer',
    metaDescription: 'Senior Full-Stack & Product Engineer con más de 20 años de experiencia construyendo productos SaaS y software crítico con .NET, React y TypeScript.',
  },
}
