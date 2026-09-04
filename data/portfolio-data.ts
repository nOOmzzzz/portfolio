export interface SkillItem {
  name: string;
  category: "languages" | "frontend" | "backend" | "databases" | "mobile" | "tools";
  iconName?: string;
  level?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  tag: string;
  date: string;
  description: string;
  image: string;
  tags: string[];
  category: "Fullstack" | "Frontend" | "Backend" | "Mobile";
  githubUrl?: string;
  liveUrl?: string;
  featured: boolean;
  highlights: string[];
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  description: string;
  credentialUrl?: string;
}

export interface ProfileItem {
  name: string;
  actionText: string;
  url: string;
  icon: "Github" | "Linkedin" | "Phone" | "Mail";
  color: string;
  username: string;
}

export interface PortfolioContent {
  nav: {
    home: string;
    about: string;
    projects: string;
    skills: string;
    certifications: string;
    profiles: string;
    contact: string;
  };
  personal: {
    name: string;
    fullName: string;
    role: string;
    subtitle: string;
    university: string;
    location: string;
    tagline: string;
    bio: string;
    email: string;
    phone: string;
    resumeUrl: string;
    connectBtn: string;
    resumeBtn: string;
  };
  hero: {
    status: string;
    greeting: string;
    role: string;
    description: string;
    viewProjectsBtn: string;
  };
  education: {
    degree: string;
    institution: string;
    period: string;
    location: string;
    cycle: string;
  };
  aboutSection: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    pillars: {
      educationTitle: string;
      educationText: string;
      specialtyTitle: string;
      specialtyText: string;
      languagesTitle: string;
      languagesText: string;
    };
  };
  projectsSection: {
    title: string;
    subtitle: string;
    viewLive: string;
    github: string;
  };
  skillsSection: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      languages: string;
      frontend: string;
      backend: string;
      databases: string;
      mobile: string;
      tools: string;
    };
  };
  certificationsSection: {
    title: string;
    subtitle: string;
    officialBadge: string;
  };
  profilesSection: {
    title: string;
    subtitle: string;
  };
  contactSection: {
    title: string;
    subtitle: string;
    directEmail: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    subjectLabel: string;
    subjectPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitBtn: string;
    submittingFeedback: string;
  };
  modal: {
    title: string;
    subtitle: string;
    downloadBtn: string;
  };
  footer: {
    tagline: string;
    rights: string;
    tech: string;
  };
  heroTitles: string[];
  skills: SkillItem[];
  projects: ProjectItem[];
  certifications: CertificationItem[];
  profiles: ProfileItem[];
}

export const portfolioContent: Record<"en" | "es", PortfolioContent> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      skills: "Skills",
      certifications: "Certs",
      profiles: "Profiles",
      contact: "Contact",
    },
    personal: {
      name: "Axel Ordoñez",
      fullName: "Axel Randall Ordoñez Ricaldi",
      role: "Software & Mobile Engineer",
      subtitle: "Software Engineering Student (8th Term)",
      university: "Peruvian University of Applied Sciences (UPC)",
      location: "Lima, Peru",
      tagline: "Building scalable web and mobile solutions with Domain-Driven Design (DDD).",
      bio: "8th-term Software Engineering student with practical experience in Full Stack and mobile application development. Specialized in backend architectures with ASP.NET and Domain-Driven Design (DDD), modern web development with Vue, React, and Next.js, and mobile applications with Flutter and Kotlin. Solid background in Cloud Computing (Google Cloud, Azure) and Cybersecurity.",
      email: "axlord2004@outlook.com",
      phone: "+51 956199835",
      resumeUrl: "/CV_AxelOrd.pdf",
      connectBtn: "Let's Connect",
      resumeBtn: "View Resume (PDF)",
    },
    hero: {
      status: "Available for new opportunities",
      greeting: "Hello, I'm",
      role: "Software & Mobile Engineer",
      description: "Specialized in building innovative technology solutions and scalable software.",
      viewProjectsBtn: "View Projects",
    },
    education: {
      degree: "Software Engineering",
      institution: "Peruvian University of Applied Sciences (UPC)",
      period: "Mar 2022 – 2026",
      location: "Lima, Peru",
      cycle: "8th Term",
    },
    aboutSection: {
      title: "About Me",
      paragraph1:
        "I am a software developer focused on continuous learning, analytical problem solving, and designing robust software architectures. I am currently in my 8th term of Software Engineering at UPC.",
      paragraph2:
        "My expertise covers Full Stack development with technologies such as ASP.NET, Domain-Driven Design (DDD), Vue, React, and Next.js, as well as native and cross-platform mobile development with Flutter and Kotlin.",
      paragraph3:
        "I have specialized academic training in Cloud Computing (Google Cloud, Azure) and Cybersecurity. I prioritize clear communication, teamwork under Agile Scrum methodologies, and delivering software with high quality and maintainability standards.",
      pillars: {
        educationTitle: "Education",
        educationText: "UPC — Software Engineering (2022 – 2026)",
        specialtyTitle: "Core Focus",
        specialtyText: "Full Stack Web & Mobile (DDD, ASP.NET, Flutter)",
        languagesTitle: "Languages & Location",
        languagesText: "Spanish (Native) • English (Advanced) • Lima, Peru",
      },
    },
    projectsSection: {
      title: "Selected Projects",
      subtitle:
        "Software solutions, web platforms, and mobile apps built with clean architecture and robust engineering standards.",
      viewLive: "View Live",
      github: "GitHub",
    },
    skillsSection: {
      title: "Technical Skills",
      subtitle:
        "Core languages, frameworks, databases, and cloud tools I leverage for building production-grade software.",
      filters: {
        all: "All",
        languages: "Languages",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Databases",
        mobile: "Mobile",
        tools: "Tools & Cloud",
      },
    },
    certificationsSection: {
      title: "Certifications",
      subtitle:
        "Official credentials and specializations in Cybersecurity, Databases, Cloud Infrastructure, and Agile Methodologies.",
      officialBadge: "Official Credential",
    },
    profilesSection: {
      title: "Professional Network",
      subtitle:
        "Connect with me on professional platforms or explore my open-source code repositories.",
    },
    contactSection: {
      title: "Contact",
      subtitle:
        "Available for software engineering internships, freelance projects, and professional collaborations.",
      directEmail: "DIRECT EMAIL",
      nameLabel: "Your Name",
      namePlaceholder: "e.g. John Doe",
      emailLabel: "Your Email",
      emailPlaceholder: "john@company.com",
      subjectLabel: "Subject",
      subjectPlaceholder: "e.g. Project Inquiry / Software Opportunity",
      messageLabel: "Message",
      messagePlaceholder: "Tell me about your project, technical scope, or opportunity...",
      submitBtn: "Send Message",
      submittingFeedback: "Opening your email client to send the message...",
    },
    modal: {
      title: "Curriculum Vitae — Axel Randall Ordoñez Ricaldi",
      subtitle: "Official PDF Document • UPC Software Engineering",
      downloadBtn: "Download PDF",
    },
    footer: {
      tagline: "Software engineering, robust architectures, and scalable digital solutions.",
      rights: "All rights reserved.",
      tech: "Next.js 15 • Tailwind CSS • Revolut Design System",
    },
    heroTitles: [
      "ASP.NET Core & Domain-Driven Design",
      "Flutter & Kotlin Mobile Development",
      "React, Next.js & Vue Full Stack",
      "Cloud Infrastructure & Cybersecurity",
    ],
    skills: [
      { name: "C#", category: "languages", level: "Advanced" },
      { name: "TypeScript", category: "languages", level: "Advanced" },
      { name: "JavaScript", category: "languages", level: "Advanced" },
      { name: "Python", category: "languages", level: "Intermediate" },
      { name: "Java", category: "languages", level: "Intermediate" },
      { name: "C++", category: "languages", level: "Intermediate" },
      { name: "Dart", category: "languages", level: "Advanced" },
      { name: "Kotlin", category: "languages", level: "Intermediate" },
      { name: "Vue 3", category: "frontend", level: "Advanced" },
      { name: "React", category: "frontend", level: "Intermediate" },
      { name: "Next.js", category: "frontend", level: "Intermediate" },
      { name: "Angular", category: "frontend", level: "Intermediate" },
      { name: "HTML5 / CSS3", category: "frontend", level: "Advanced" },
      { name: "Tailwind CSS", category: "frontend", level: "Advanced" },
      { name: "i18n (Localization)", category: "frontend", level: "Advanced" },
      { name: "ASP.NET Core", category: "backend", level: "Advanced" },
      { name: "Domain-Driven Design", category: "backend", level: "Advanced" },
      { name: "FastAPI", category: "backend", level: "Intermediate" },
      { name: "Spring Boot", category: "backend", level: "Intermediate" },
      { name: "Node.js / Express", category: "backend", level: "Intermediate" },
      { name: "Microservices", category: "backend", level: "Intermediate" },
      { name: "MySQL", category: "databases", level: "Advanced" },
      { name: "SQL Server", category: "databases", level: "Advanced" },
      { name: "MongoDB", category: "databases", level: "Intermediate" },
      { name: "Flutter", category: "mobile", level: "Advanced" },
      { name: "Android (Kotlin)", category: "mobile", level: "Intermediate" },
      { name: "Google Cloud", category: "tools", level: "Intermediate" },
      { name: "Microsoft Azure", category: "tools", level: "Intermediate" },
      { name: "Git / GitHub", category: "tools", level: "Advanced" },
      { name: "Cloudinary", category: "tools", level: "Advanced" },
      { name: "Linux", category: "tools", level: "Intermediate" },
      { name: "Vercel / Render", category: "tools", level: "Advanced" },
      { name: "Scrum / Agile", category: "tools", level: "Advanced" },
    ],
    projects: [
      {
        id: "iobuild",
        title: "IoBuild",
        tag: "IoT & PropTech Platform",
        date: "2024 – 2026",
        description:
          "Comprehensive platform designed to centralize IoT device management in condominiums and apartments. Built with Domain-Driven Design (DDD) architecture, ASP.NET backend, and cross-platform mobile apps.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        tags: ["ASP.NET", "DDD", "Flutter", "Kotlin", "MySQL", "Cloudinary", "IoT"],
        category: "Fullstack",
        githubUrl: "https://github.com/nOOmzzzz",
        liveUrl:
          "https://upc-pre-1asi0730-7461-ccaritatech.github.io/landing-page-CcaritaTech/",
        featured: true,
        highlights: [
          "Developed backend with ASP.NET implementing Clients and Devices domains under Domain-Driven Design.",
          "Built mobile app for homeowners in Flutter and building management module in Kotlin.",
          "Integrated Cloudinary for image optimization and MySQL for relational structured storage.",
          "Led technical team coordination and agile sprint ceremonies.",
        ],
      },
      {
        id: "reliable",
        title: "Reliable One Insurance",
        tag: "Corporate Landing Page",
        date: "2025 – 2026",
        description:
          "Independently designed and developed a corporate landing page for Reliable One Insurance, optimized to present their value proposition with instantaneous multi-language support.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        tags: ["HTML5", "CSS3", "JavaScript", "i18n", "GitHub Pages"],
        category: "Frontend",
        githubUrl: "https://github.com/nOOmzzzz",
        liveUrl: "https://noomzzzz.github.io/Reliable/",
        featured: true,
        highlights: [
          "Full JavaScript internationalization (i18n) for dynamic bilingual content switching.",
          "High-performance responsive design meeting modern web accessibility standards.",
          "Continuous delivery and deployment pipeline via GitHub Pages.",
        ],
      },
      {
        id: "ojociudadano",
        title: "OjoCiudadano",
        tag: "Civic Platform & Open Data",
        date: "2024",
        description:
          "Collaborative web platform built to give Peruvian citizens transparent and direct access to public infrastructure projects in their local communities.",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        tags: ["HTML5", "CSS3", "JavaScript", "Open Data", "Accessible UI"],
        category: "Frontend",
        githubUrl: "https://github.com/nOOmzzzz",
        liveUrl:
          "https://ojociudadano.github.io/Landing-Page-OjoCiudadano/public/index.html",
        featured: false,
        highlights: [
          "Clear presentation of public project statuses, progress indicators, and budgets.",
          "User-centered design ensuring intuitive navigation for all citizens.",
        ],
      },
    ],
    certifications: [
      {
        id: "cert-1",
        title: "Cybersecurity Fundamentals",
        issuer: "Seguridad Cero",
        date: "Jan 2025",
        description:
          "Essential information security principles, vulnerability assessment, perimeter protection, and threat mitigation in software systems.",
      },
      {
        id: "cert-2",
        title: "Introduction to MongoDB",
        issuer: "MongoDB, Inc",
        date: "Apr 2024",
        description:
          "NoSQL data modeling, advanced CRUD operations, aggregations, indexing, and query performance optimization in MongoDB.",
      },
      {
        id: "cert-3",
        title: "Scrum Fundamentals Certified",
        issuer: "SCRUMstudy",
        date: "May 2024",
        description:
          "Agile project management under the Scrum framework, sprints, retrospectives, user stories, and continuous delivery leadership.",
      },
      {
        id: "cert-4",
        title: "Introduction to Web Development",
        issuer: "Universidad de los Andes (Coursera)",
        date: "Nov 2024",
        description:
          "Solid foundations of web development, HTML5 semantic structure, modern CSS3 styling, and web client architecture.",
      },
      {
        id: "cert-5",
        title: "Scrum Master Certification: Scaling Agile and the Team-of-Teams",
        issuer: "LearnQuest (Coursera)",
        date: "Nov 2024",
        description:
          "Scaling agile practices in enterprise organizations, multi-team Scrum coordination, and large-scale delivery frameworks.",
      },
      {
        id: "cert-6",
        title: "Google Cloud Computing Foundations (4 Courses)",
        issuer: "Google Cloud Academy & UPC",
        date: "Apr 2023",
        description:
          "4-course specialization in Google Cloud infrastructure: Compute Engine, Cloud Storage, Virtual VPC Networks, and Security.",
      },
    ],
    profiles: [
      {
        name: "LinkedIn",
        actionText: "Connect",
        url: "https://linkedin.com/in/axel-ordoñez-ricaldi-228669279",
        username: "in/axel-ordoñez-ricaldi",
        icon: "Linkedin",
        color: "#0077b5",
      },
      {
        name: "GitHub",
        actionText: "Repositories",
        url: "https://github.com/nOOmzzzz",
        username: "@nOOmzzzz",
        icon: "Github",
        color: "#ffffff",
      },
      {
        name: "WhatsApp",
        actionText: "Message",
        url: "https://wa.me/51956199835",
        username: "+51 956199835",
        icon: "Phone",
        color: "#25D366",
      },
      {
        name: "Email",
        actionText: "Write",
        url: "mailto:axlord2004@outlook.com",
        username: "axlord2004@outlook.com",
        icon: "Mail",
        color: "#4f55f1",
      },
    ],
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Sobre Mí",
      projects: "Proyectos",
      skills: "Habilidades",
      certifications: "Certificados",
      profiles: "Perfiles",
      contact: "Contacto",
    },
    personal: {
      name: "Axel Ordoñez",
      fullName: "Axel Randall Ordoñez Ricaldi",
      role: "Software & Mobile Engineer",
      subtitle: "Estudiante de Ingeniería de Software (8.º ciclo)",
      university: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      location: "Lima, Perú",
      tagline: "Construyendo soluciones escalables mediante Domain-Driven Design (DDD) y desarrollo multiplataforma.",
      bio: "Estudiante de Ingeniería de Software de 8.º ciclo con experiencia práctica en desarrollo Full Stack y aplicaciones móviles. Especializado en arquitecturas backend con ASP.NET y Domain-Driven Design (DDD), desarrollo web moderno con Vue, React y Next.js, y aplicaciones móviles con Flutter y Kotlin. Cuento con sólida formación en Cloud Computing (Google Cloud, Azure) y Ciberseguridad.",
      email: "axlord2004@outlook.com",
      phone: "+51 956199835",
      resumeUrl: "/CV_AxelOrd.pdf",
      connectBtn: "Let's Connect",
      resumeBtn: "Ver CV (PDF)",
    },
    hero: {
      status: "Disponible para nuevas oportunidades",
      greeting: "Hola, soy",
      role: "Software & Mobile Engineer",
      description: "Especializado en crear soluciones tecnológicas innovadoras y software escalable.",
      viewProjectsBtn: "Ver Proyectos",
    },
    education: {
      degree: "Ingeniería de Software",
      institution: "Universidad Peruana de Ciencias Aplicadas (UPC)",
      period: "Mar 2022 – 2026",
      location: "Lima, Perú",
      cycle: "8.º ciclo",
    },
    aboutSection: {
      title: "Sobre Mí",
      paragraph1:
        "Soy un desarrollador enfocado en el aprendizaje continuo, la resolución analítica de problemas y el diseño de arquitecturas de software sólidas. Actualmente curso el 8.º ciclo de Ingeniería de Software en la Universidad Peruana de Ciencias Aplicadas (UPC).",
      paragraph2:
        "Mi experiencia abarca el desarrollo Full Stack con tecnologías como ASP.NET, Domain-Driven Design (DDD), Vue, React y Next.js, así como el desarrollo de aplicaciones móviles nativas y multiplataforma con Flutter y Kotlin.",
      paragraph3:
        "Cuento con formación especializada en Cloud Computing (Google Cloud, Azure) y Ciberseguridad. Valoro la comunicación asertiva, el trabajo en equipo bajo metodologías ágiles Scrum y la entrega de software con altos estándares de calidad y mantenibilidad.",
      pillars: {
        educationTitle: "Formación",
        educationText: "UPC — Ingeniería de Software (2022 – 2026)",
        specialtyTitle: "Especialidad",
        specialtyText: "Full Stack Web & Mobile (DDD, ASP.NET, Flutter)",
        languagesTitle: "Idiomas & Sede",
        languagesText: "Español (Nativo) • Inglés (Avanzado) • Lima, Perú",
      },
    },
    projectsSection: {
      title: "Proyectos Seleccionados",
      subtitle:
        "Soluciones de software, plataformas web y aplicaciones móviles desarrolladas con estándares de arquitectura y código limpio.",
      viewLive: "View Live",
      github: "GitHub",
    },
    skillsSection: {
      title: "Habilidades Técnicas",
      subtitle:
        "Herramientas y tecnologías principales para el desarrollo web, móvil, backend y despliegue en la nube.",
      filters: {
        all: "Todas",
        languages: "Lenguajes",
        frontend: "Frontend",
        backend: "Backend",
        databases: "Bases de Datos",
        mobile: "Mobile",
        tools: "Tools & Cloud",
      },
    },
    certificationsSection: {
      title: "Certificaciones",
      subtitle:
        "Acreditaciones oficiales en Ciberseguridad, Bases de Datos, Cloud y Metodologías Ágiles.",
      officialBadge: "Acreditado Oficial",
    },
    profilesSection: {
      title: "Red Profesional",
      subtitle:
        "Conecta conmigo en redes profesionales o explora mis repositorios de código.",
    },
    contactSection: {
      title: "Contacto",
      subtitle:
        "Disponible para prácticas profesionales, proyectos freelance o colaboraciones de desarrollo de software.",
      directEmail: "CORREO DIRECTO",
      nameLabel: "Tu Nombre",
      namePlaceholder: "Ej. Carlos Mendoza",
      emailLabel: "Tu Correo Electrónico",
      emailPlaceholder: "carlos@empresa.com",
      subjectLabel: "Asunto",
      subjectPlaceholder: "Ej. Propuesta de Proyecto / Oportunidad Laboral",
      messageLabel: "Mensaje",
      messagePlaceholder: "Cuéntame sobre tu proyecto o requerimientos técnicos...",
      submitBtn: "Enviar Mensaje",
      submittingFeedback: "¡Abriendo tu cliente de correo para enviar el mensaje!...",
    },
    modal: {
      title: "Currículum Vitae — Axel Randall Ordoñez Ricaldi",
      subtitle: "Documento Oficial PDF • UPC Ingeniería de Software",
      downloadBtn: "Descargar PDF",
    },
    footer: {
      tagline: "Ingeniería de software, arquitecturas robustas y experiencias digitales escalables.",
      rights: "Todos los derechos reservados.",
      tech: "Next.js 15 • Tailwind CSS • Revolut Design System",
    },
    heroTitles: [
      "ASP.NET Core & Domain-Driven Design",
      "Desarrollo Móvil con Flutter y Kotlin",
      "Full Stack con React, Next.js y Vue",
      "Infraestructura Cloud y Ciberseguridad",
    ],
    skills: [
      { name: "C#", category: "languages", level: "Avanzado" },
      { name: "TypeScript", category: "languages", level: "Avanzado" },
      { name: "JavaScript", category: "languages", level: "Avanzado" },
      { name: "Python", category: "languages", level: "Intermedio" },
      { name: "Java", category: "languages", level: "Intermedio" },
      { name: "C++", category: "languages", level: "Intermedio" },
      { name: "Dart", category: "languages", level: "Avanzado" },
      { name: "Kotlin", category: "languages", level: "Intermedio" },
      { name: "Vue 3", category: "frontend", level: "Avanzado" },
      { name: "React", category: "frontend", level: "Intermedio" },
      { name: "Next.js", category: "frontend", level: "Intermedio" },
      { name: "Angular", category: "frontend", level: "Intermedio" },
      { name: "HTML5 / CSS3", category: "frontend", level: "Avanzado" },
      { name: "Tailwind CSS", category: "frontend", level: "Avanzado" },
      { name: "i18n (Internacionalización)", category: "frontend", level: "Avanzado" },
      { name: "ASP.NET Core", category: "backend", level: "Avanzado" },
      { name: "Domain-Driven Design (DDD)", category: "backend", level: "Avanzado" },
      { name: "FastAPI", category: "backend", level: "Intermedio" },
      { name: "Spring Boot", category: "backend", level: "Intermedio" },
      { name: "Node.js / Express", category: "backend", level: "Intermedio" },
      { name: "Microservicios", category: "backend", level: "Intermedio" },
      { name: "MySQL", category: "databases", level: "Avanzado" },
      { name: "SQL Server", category: "databases", level: "Avanzado" },
      { name: "MongoDB", category: "databases", level: "Intermedio" },
      { name: "Flutter", category: "mobile", level: "Avanzado" },
      { name: "Android (Kotlin)", category: "mobile", level: "Intermedio" },
      { name: "Google Cloud", category: "tools", level: "Intermedio" },
      { name: "Microsoft Azure", category: "tools", level: "Intermedio" },
      { name: "Git / GitHub", category: "tools", level: "Avanzado" },
      { name: "Cloudinary", category: "tools", level: "Avanzado" },
      { name: "Linux", category: "tools", level: "Intermedio" },
      { name: "Vercel / Render", category: "tools", level: "Avanzado" },
      { name: "Scrum / Agile", category: "tools", level: "Avanzado" },
    ],
    projects: [
      {
        id: "iobuild",
        title: "IoBuild",
        tag: "Plataforma IoT & PropTech",
        date: "2024 – 2026",
        description:
          "Plataforma integral orientada a centralizar la gestión de dispositivos IoT en condominios y departamentos. Implementada con arquitectura Domain-Driven Design (DDD), backend en ASP.NET y clientes móviles multiplataforma.",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
        tags: ["ASP.NET", "DDD", "Flutter", "Kotlin", "MySQL", "Cloudinary", "IoT"],
        category: "Fullstack",
        githubUrl: "https://github.com/nOOmzzzz",
        liveUrl:
          "https://upc-pre-1asi0730-7461-ccaritatech.github.io/landing-page-CcaritaTech/",
        featured: true,
        highlights: [
          "Backend desarrollado con ASP.NET implementando los dominios Clients y Devices bajo Domain-Driven Design.",
          "Aplicación móvil para propietarios en Flutter y módulo de obras para constructores en Kotlin.",
          "Integración de Cloudinary para procesamiento y almacenamiento de imágenes y persistencia en MySQL.",
          "Liderazgo en coordinación de equipo y ceremonias ágiles.",
        ],
      },
      {
        id: "reliable",
        title: "Reliable One Insurance",
        tag: "Landing Page Corporativa",
        date: "2025 – 2026",
        description:
          "Diseño y desarrollo integral e independiente de una landing page corporativa para Reliable One Insurance, optimizada para presentar su propuesta de valor con soporte multi-idioma instantáneo.",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
        tags: ["HTML5", "CSS3", "JavaScript", "i18n", "GitHub Pages"],
        category: "Frontend",
        githubUrl: "https://github.com/nOOmzzzz",
        liveUrl: "https://noomzzzz.github.io/Reliable/",
        featured: true,
        highlights: [
          "Internacionalización (i18n) completa en JavaScript para traducción instantánea de la interfaz.",
          "Diseño responsivo optimizado para máxima velocidad y estándares de accesibilidad.",
          "Despliegue y entrega continua mediante GitHub Pages.",
        ],
      },
      {
        id: "ojociudadano",
        title: "OjoCiudadano",
        tag: "Plataforma Cívica & Open Data",
        date: "2024",
        description:
          "Plataforma web desarrollada en equipo para facilitar a los ciudadanos peruanos el acceso transparente y directo a información pública sobre obras en su entorno comunitario.",
        image:
          "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=1200&q=80",
        tags: ["HTML5", "CSS3", "JavaScript", "Open Data", "UI Accesible"],
        category: "Frontend",
        githubUrl: "https://github.com/nOOmzzzz",
        liveUrl:
          "https://ojociudadano.github.io/Landing-Page-OjoCiudadano/public/index.html",
        featured: false,
        highlights: [
          "Estructuración y presentación clara del estado, avances y presupuestos de obras públicas.",
          "Enfoque centrado en la accesibilidad y navegación intuitiva para cualquier usuario.",
        ],
      },
    ],
    certifications: [
      {
        id: "cert-1",
        title: "Fundamentos de Ciberseguridad",
        issuer: "Seguridad Cero",
        date: "Ene 2025",
        description:
          "Principios esenciales de seguridad informática, análisis de vulnerabilidades, protección perimetral y mitigación de amenazas en sistemas de software.",
      },
      {
        id: "cert-2",
        title: "Introduction to MongoDB",
        issuer: "MongoDB, Inc",
        date: "Abr 2024",
        description:
          "Modelado de datos NoSQL, operaciones CRUD avanzadas, agregaciones, indexación y optimización de consultas en MongoDB.",
      },
      {
        id: "cert-3",
        title: "Scrum Fundamentals Certified",
        issuer: "SCRUMstudy",
        date: "May 2024",
        description:
          "Gestión ágil de proyectos bajo el marco Scrum, sprints, retrospectivas, historias de usuario y liderazgo de equipos de entrega continua.",
      },
      {
        id: "cert-4",
        title: "Introducción al desarrollo web",
        issuer: "Universidad de los Andes (Coursera)",
        date: "Nov 2024",
        description:
          "Fundamentos sólidos de desarrollo web, semántica HTML5, estilos avanzados CSS3 y arquitectura del cliente web.",
      },
      {
        id: "cert-5",
        title: "Scrum Master Certification: Scaling Agile and the Team-of-Teams",
        issuer: "LearnQuest (Coursera)",
        date: "Nov 2024",
        description:
          "Escalamiento ágil en organizaciones complejas, sincronización entre múltiples equipos Scrum y marcos de trabajo a gran escala.",
      },
      {
        id: "cert-6",
        title: "Google Cloud Computing Foundations (4 Cursos)",
        issuer: "Google Cloud Academy & UPC",
        date: "Abr 2023",
        description:
          "Especialización de 4 módulos en infraestructura en la nube de Google Cloud: Compute Engine, Cloud Storage, Redes Virtuales y Seguridad.",
      },
    ],
    profiles: [
      {
        name: "LinkedIn",
        actionText: "Conectar",
        url: "https://linkedin.com/in/axel-ordoñez-ricaldi-228669279",
        username: "in/axel-ordoñez-ricaldi",
        icon: "Linkedin",
        color: "#0077b5",
      },
      {
        name: "GitHub",
        actionText: "Repositorios",
        url: "https://github.com/nOOmzzzz",
        username: "@nOOmzzzz",
        icon: "Github",
        color: "#ffffff",
      },
      {
        name: "WhatsApp",
        actionText: "Mensaje",
        url: "https://wa.me/51956199835",
        username: "+51 956199835",
        icon: "Phone",
        color: "#25D366",
      },
      {
        name: "Email",
        actionText: "Escribir",
        url: "mailto:axlord2004@outlook.com",
        username: "axlord2004@outlook.com",
        icon: "Mail",
        color: "#4f55f1",
      },
    ],
  },
};
