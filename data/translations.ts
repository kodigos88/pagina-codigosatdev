export type Language = 'es' | 'en'

export interface TranslationSchema {
  nav: Array<{ id: string; label: string }>
  modal: {
    bootTag: string
    title: string
    subtitle: string
    placeholder: string
    btnEnter: string
    btnSkip: string
  }
  hero: {
    greetingDefault: string
    greetingUser: string
    title: string
    tagline1: string
    tagline2: string
    stackLine: string
    btnServices: string
    btnWhatsApp: string
    scrollHint: string
  }
  status: {
    header: string
    availabilityLabel: string
    availabilityVal: string
    infraLabel: string
    infraVal: string
    responseLabel: string
    responseVal: string
    btnCopyEmail: string
    btnCopied: string
  }
  services: {
    tag: string
    title: string
    btnDiscuss: string
    hoverPrompt: string
    loaderActive: string
    items: Array<{ name: string; desc: string }>
  }
  stack: {
    tag: string
    title: string
    cardNum: string
    clusters: Array<{ label: string; items: string[] }>
  }
  portfolio: {
    tag: string
    title: string
    placeholderTitle: string
    placeholderBody: string
    btnRequestCases: string
    placeholderNote: string
    btnViewProject: string
    filters: {
      all: string
      elementor: string
      shopify: string
      plugin: string
      animaciones: string
      apps: string
    }
    pagination: {
      prev: string
      next: string
    }
  }
  contact: {
    tag: string
    titleLine1: string
    titleLine2: string
    subtitle: string
    whatsappLabel: string
    whatsappVal: string
    emailLabel: string
    callLabel: string
    callVal: string
    copyright: string
  }
}

export const translations: Record<Language, TranslationSchema> = {
  es: {
    nav: [
      { id: 'inicio', label: '01 INICIO' },
      { id: 'servicios', label: '02 SERVICIOS' },
      { id: 'stack', label: '03 STACK' },
      { id: 'portfolio', label: '04 PORTFOLIO' },
      { id: 'contacto', label: '05 CONTACTO' },
    ],
    modal: {
      bootTag: '► SYSTEM BOOT // ACCESO AL PORTAFOLIO',
      title: '¿Cuál es tu nombre?',
      subtitle: 'Personalicemos tu experiencia de navegación.',
      placeholder: 'Escribe tu nombre o apodo...',
      btnEnter: 'ENTRAR →',
      btnSkip: 'Omitir',
    },
    hero: {
      greetingDefault: 'Full Stack Developer · Web & Apps',
      greetingUser: '¡Bienvenido a codigosatdev, {name}!',
      title: 'codigosatdev',
      tagline1: 'Sitios web que duran.',
      tagline2: 'Infraestructura que protege.',
      stackLine: 'WordPress · Headless WP & Next.js · Shopify · Cloudflare · Security',
      btnServices: 'Ver Servicios →',
      btnWhatsApp: 'WhatsApp',
      scrollHint: 'explorar',
    },
    status: {
      header: 'SYSTEM STATUS // ONLINE',
      availabilityLabel: '> DISPONIBILIDAD:',
      availabilityVal: 'DISPONIBLE / AGENDA ABIERTA',
      infraLabel: '> INFRAESTRUCTURA:',
      infraVal: 'CLOUDFLARE WAF & SSL [PROTECTED]',
      responseLabel: '> RESPUESTA ESTIMADA:',
      responseVal: '< 24 HORAS',
      btnCopyEmail: '[ 📋 COPIAR EMAIL ]',
      btnCopied: '¡COPIADO! ✓',
    },
    services: {
      tag: '02 — SERVICIOS',
      title: 'Lo que construyo',
      btnDiscuss: 'Hablar de un proyecto →',
      hoverPrompt: '[ PASE EL CURSOR PARA CARGAR DETALLES ]',
      loaderActive: '[██████████] 100% CARGADO',
      items: [
        {
          name: 'WordPress Headless & Next.js',
          desc: 'Arquitecturas desacopladas con WordPress como CMS backend y Next.js como frontend. Velocidad extrema y SEO nativo.',
        },
        {
          name: 'WordPress & Elementor PRO desde 0',
          desc: 'Desarrollo de sitios web 100% a medida sin plantillas pesadas. Maquetación exacta en Elementor PRO, limpia, optimizada y responsive.',
        },
        {
          name: 'Desarrollo de Plugins a Medida',
          desc: 'Creación de plugins WordPress personalizados para extender funcionalidades avanzadas, integraciones con APIs y sistemas a medida.',
        },
        {
          name: 'Next.js / React Web Apps',
          desc: 'Aplicaciones web modernas con SSR, SSG e ISR. Prototipado rápido y sistemas listos para producción real.',
        },
        {
          name: 'Shopify Development',
          desc: 'Tiendas online de alto rendimiento con Liquid templates personalizadas, Shopify Headless o integraciones avanzadas.',
        },
        {
          name: 'Cloudflare & Seguridad Servidores',
          desc: 'Protección DDoS con Cloudflare WAF, hardening de servidores Linux, cortafuegos Fail2ban/UFW y auditorías de seguridad.',
        },
      ],
    },
    stack: {
      tag: '03 — STACK TÉCNICO',
      title: 'Herramientas de producción',
      cardNum: 'CARD {num} // 03',
      clusters: [
        {
          label: 'FRONTEND',
          items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
        },
        {
          label: 'CMS & E-COMMERCE',
          items: [
            'WordPress (Headless)',
            'Elementor PRO',
            'Plugins desde 0',
            'Desarrollo de Temas desde 0',
            'WooCommerce',
            'Shopify & Liquid',
          ],
        },
        {
          label: 'INFRA & SEGURIDAD',
          items: [
            'Cloudflare (WAF/CDN)',
            'Linux (Ubuntu/Debian)',
            'Nginx / Apache',
            'Fail2ban / UFW',
            'SSL/TLS, CSP',
          ],
        },
      ],
    },
    portfolio: {
      tag: '04 — PORTAFOLIO',
      title: 'Proyectos',
      placeholderTitle: 'En construcción',
      placeholderBody:
        'Estoy curando una selección de proyectos reales. Mientras tanto, escríbeme directamente para ver casos de trabajo relevantes a tu industria.',
      btnRequestCases: 'Pedir casos de trabajo',
      placeholderNote: '[Portafolio en construcción — nuevos proyectos próximamente]',
      btnViewProject: 'Ver proyecto →',
      filters: {
        all: '[ TODOS ]',
        elementor: '[ WORDPRESS & ELEMENTOR ]',
        shopify: '[ SHOPIFY ]',
        plugin: '[ PLUGINS A MEDIDA ]',
        animaciones: '[ ANIMACIONES GSAP ]',
        apps: '[ APPS MÓVILES & SAAS ]',
      },
      pagination: {
        prev: '← ANTERIOR',
        next: 'SIGUIENTE →',
      },
    },
    contact: {
      tag: '05 — CONTACTO',
      titleLine1: '¿Tienes un proyecto?',
      titleLine2: 'Hablemos.',
      subtitle: 'Respondo en menos de 24 horas. Sin formularios, sin esperas innecesarias.',
      whatsappLabel: 'WHATSAPP',
      whatsappVal: 'Escribir ahora →',
      emailLabel: 'EMAIL',
      callLabel: 'LLAMADA',
      callVal: 'Agendar consulta →',
      copyright: 'Full Stack Developer · WordPress · Next.js · Shopify · AI-Powered Development',
    },
  },
  en: {
    nav: [
      { id: 'inicio', label: '01 HOME' },
      { id: 'servicios', label: '02 SERVICES' },
      { id: 'stack', label: '03 STACK' },
      { id: 'portfolio', label: '04 PORTFOLIO' },
      { id: 'contacto', label: '05 CONTACT' },
    ],
    modal: {
      bootTag: '► SYSTEM BOOT // PORTFOLIO ACCESS',
      title: 'What is your name?',
      subtitle: "Let's customize your browsing experience.",
      placeholder: 'Enter your name or nickname...',
      btnEnter: 'ENTER →',
      btnSkip: 'Skip',
    },
    hero: {
      greetingDefault: 'Full Stack Developer · Web & Apps',
      greetingUser: 'Welcome to codigosatdev, {name}!',
      title: 'codigosatdev',
      tagline1: 'Websites built to last.',
      tagline2: 'Infrastructure that protects.',
      stackLine: 'WordPress · Headless WP & Next.js · Shopify · Cloudflare · Security',
      btnServices: 'View Services →',
      btnWhatsApp: 'WhatsApp',
      scrollHint: 'explore',
    },
    status: {
      header: 'SYSTEM STATUS // ONLINE',
      availabilityLabel: '> AVAILABILITY:',
      availabilityVal: 'AVAILABLE / ACCEPTING PROJECTS',
      infraLabel: '> INFRASTRUCTURE:',
      infraVal: 'CLOUDFLARE WAF & SSL [PROTECTED]',
      responseLabel: '> ESTIMATED RESPONSE:',
      responseVal: '< 24 HOURS',
      btnCopyEmail: '[ 📋 COPY EMAIL ]',
      btnCopied: 'COPIED! ✓',
    },
    services: {
      tag: '02 — SERVICES',
      title: 'What I Build',
      btnDiscuss: 'Discuss a Project →',
      hoverPrompt: '[ HOVER TO LOAD DETAILS ]',
      loaderActive: '[██████████] 100% LOADED',
      items: [
        {
          name: 'Headless WordPress & Next.js',
          desc: 'Decoupled architectures using WordPress as a backend CMS and Next.js on the frontend. Blazing speed and native SEO.',
        },
        {
          name: 'WordPress & Elementor PRO Custom',
          desc: '100% bespoke website development without heavy bloatware templates. Pixel-perfect Elementor PRO builds—clean, optimized, and responsive.',
        },
        {
          name: 'Custom Plugin Development',
          desc: 'Creation of custom WordPress plugins for advanced features, third-party API integrations, and tailored business systems.',
        },
        {
          name: 'Next.js / React Web Apps',
          desc: 'Modern web applications leveraging SSR, SSG, and ISR. Rapid prototyping and production-ready systems.',
        },
        {
          name: 'Shopify Development',
          desc: 'High-performance e-commerce stores with custom Liquid templates, Headless Shopify, or complex app integrations.',
        },
        {
          name: 'Cloudflare & Server Security',
          desc: 'DDoS mitigation with Cloudflare WAF, Linux server hardening, Fail2ban/UFW firewalls, and comprehensive security audits.',
        },
      ],
    },
    stack: {
      tag: '03 — TECHNICAL STACK',
      title: 'Production Tools',
      cardNum: 'CARD {num} // 04',
      clusters: [
        {
          label: 'FRONTEND',
          items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
        },
        {
          label: 'CMS & E-COMMERCE',
          items: [
            'WordPress (Headless)',
            'Elementor PRO',
            'Custom Plugins from Scratch',
            'Custom Themes from Scratch',
            'WooCommerce',
            'Shopify & Liquid',
          ],
        },
        {
          label: 'INFRA & SECURITY',
          items: [
            'Cloudflare (WAF/CDN)',
            'Linux (Ubuntu/Debian)',
            'Nginx / Apache',
            'Fail2ban / UFW',
            'SSL/TLS, CSP',
          ],
        },
        {
          label: 'MOBILE & SAAS APPS',
          items: [
            'React Native / Expo',
            'iOS App Store & Android Play',
            'Next.js SaaS Dashboard',
            'Node.js REST APIs',
          ],
        },
      ],
    },
    portfolio: {
      tag: '04 — PORTFOLIO',
      title: 'Projects',
      placeholderTitle: 'Under Construction',
      placeholderBody:
        'I am curating a selection of real-world projects. In the meantime, message me directly to see case studies relevant to your industry.',
      btnRequestCases: 'Request Case Studies',
      placeholderNote: '[Portfolio in progress — more projects coming soon]',
      btnViewProject: 'View project →',
      filters: {
        all: '[ ALL PROJECTS ]',
        elementor: '[ WORDPRESS & ELEMENTOR ]',
        shopify: '[ SHOPIFY ]',
        plugin: '[ CUSTOM PLUGINS ]',
        animaciones: '[ GSAP ANIMATIONS ]',
        apps: '[ MOBILE APPS & SAAS ]',
      },
      pagination: {
        prev: '← PREVIOUS',
        next: 'NEXT →',
      },
    },
    contact: {
      tag: '05 — CONTACT',
      titleLine1: 'Have a project in mind?',
      titleLine2: "Let's talk.",
      subtitle: 'I reply in under 24 hours. No forms, no unnecessary delays.',
      whatsappLabel: 'WHATSAPP',
      whatsappVal: 'Message Now →',
      emailLabel: 'EMAIL',
      callLabel: 'CALL',
      callVal: 'Schedule Call →',
      copyright: 'Full Stack Developer · WordPress · Next.js · Shopify · AI-Powered Development',
    },
  },
}
