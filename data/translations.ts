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
      { id: 'servicios', label: '02 SOLUCIONES' },
      { id: 'stack', label: '03 ARSENAL' },
      { id: 'portfolio', label: '04 CASOS' },
      { id: 'contacto', label: '05 DIAGNÓSTICO' },
    ],
    modal: {
      bootTag: '► SYSTEM BOOT // ACCESO AL PORTAFOLIO',
      title: '¿Cuál es tu nombre o empresa?',
      subtitle: 'Personalicemos tu sesión de diagnóstico técnico.',
      placeholder: 'Escribe tu nombre o marca...',
      btnEnter: 'INGRESAR AL SISTEMA →',
      btnSkip: 'Omitir',
    },
    hero: {
      greetingDefault: 'Consultoría Estratégica & Arquitectura Web de Alto Rendimiento',
      greetingUser: '¡Bienvenido a codigosatdev, {name}!',
      title: 'codigosatdev',
      tagline1: 'Infraestructura digital diseñada para facturar, no para romperse.',
      tagline2: 'Velocidad extrema, estabilidad operativa y blindaje contra caídas.',
      stackLine: 'Headless WordPress & Next.js · Shopify a Medida · WPO Extremo · Cloudflare & Seguridad 24/7',
      btnServices: 'Ver Soluciones de Negocio →',
      btnWhatsApp: 'Solicitar Diagnóstico',
      scrollHint: 'explorar infraestructura',
    },
    status: {
      header: 'SYSTEM STATUS // CTO OPERATIONAL',
      availabilityLabel: '> DISPONIBILIDAD:',
      availabilityVal: 'DISPONIBLE / AGENDA DE CONSULTORÍA ABIERTA',
      infraLabel: '> ARQUITECTURA & WPO:',
      infraVal: 'CLOUDFLARE WAF, TTFB < 200MS & CORE WEB VITALS [OPTIMIZED]',
      responseLabel: '> EVALUACIÓN TÉCNICA:',
      responseVal: '< 24 HORAS (DIAGNÓSTICO DIRECTO)',
      btnCopyEmail: '[ 📋 COPIAR EMAIL ]',
      btnCopied: '¡COPIADO! ✓',
    },
    services: {
      tag: '02 — SOLUCIONES & SISTEMAS DE ALTO VALOR',
      title: 'Sistemas diseñados para dar resultados',
      btnDiscuss: 'Solicitar Diagnóstico Técnico →',
      hoverPrompt: '[ PASE EL CURSOR PARA CARGAR DETALLES ]',
      loaderActive: '[██████████] 100% CARGADO',
      items: [
        {
          name: 'Arquitecturas Headless (Next.js + WP / Shopify)',
          desc: 'Web desacoplada: separamos el panel de control del diseño visual para lograr velocidad de carga instantánea, máxima seguridad y cero cuellos de botella.',
        },
        {
          name: 'Ingeniería WPO & Rendimiento Extremo',
          desc: 'Optimizamos el TTFB (tiempo que tarda tu servidor en responder al primer clic) y los Core Web Vitals (estándares de velocidad de Google) para que tu web abra de inmediato en conexiones móviles.',
        },
        {
          name: 'E-Commerce de Alto Rendimiento (Shopify / WooCommerce)',
          desc: 'Tiendas online escalables, optimización de base de datos y pasarelas de pago sin fricción para resistir alto volumen de tráfico y ventas sin caerse.',
        },
        {
          name: 'Desarrollo de Plugins & Software a Medida',
          desc: 'Funcionalidades avanzadas y extensiones creadas desde cero para automatizar tus ventas, conectar tu CRM y enlazar flujos directos con WhatsApp API.',
        },
        {
          name: 'Continuidad Operativa & Blindaje de Servidores',
          desc: 'Seguridad perimetral con Cloudflare WAF (cortafuegos contra ataques y caídas), servidores Linux blindados y monitoreo para que tu sitio nunca esté fuera de línea.',
        },
        {
          name: 'Sistemas de Captación Directa',
          desc: 'Páginas de aterrizaje (Landing Pages) ultrarrápidas de alta conversión, diseñadas para transformar visitas de anuncios en clientes potenciales por WhatsApp.',
        },
      ],
    },
    stack: {
      tag: '03 — ARSENAL TECNOLÓGICO & CRITERIO PROFESIONAL',
      title: 'La base técnica de nuestras soluciones',
      cardNum: 'CARD {num} // 03',
      clusters: [
        {
          label: 'FRONTEND & MODERN WEB',
          items: [
            'Headless WordPress',
            'Next.js (React)',
            'Astro.js',
            'TypeScript',
            'Tailwind CSS',
            'GraphQL APIs',
          ],
        },
        {
          label: 'E-COMMERCE & BACKEND ESCALABLE',
          items: [
            'Shopify (Liquid a Medida)',
            'WooCommerce Avanzado',
            'Plugins desde 0',
            'Optimización de Base de Datos',
            'PHP 8.x Moderno',
            'REST APIs & Webhooks',
          ],
        },
        {
          label: 'WPO, INFRAESTRUCTURA & SEGURIDAD',
          items: [
            'TTFB < 200ms (Respuesta Inmediata)',
            'Core Web Vitals (Velocidad Google)',
            'Cloudflare (WAF Cortafuegos & CDN)',
            'Hardening Linux (Blindaje de Servidor)',
            'SSL/TLS, CSP & Blindaje 24/7',
          ],
        },
      ],
    },
    portfolio: {
      tag: '04 — CASOS DE ESTUDIO & PRODUCCIÓN',
      title: 'Arquitecturas en producción',
      placeholderTitle: 'En construcción',
      placeholderBody:
        'Selección curada de arquitecturas y tiendas en producción. Escríbeme directamente para evaluar un caso técnico similar a tu modelo de negocio.',
      btnRequestCases: 'Solicitar Diagnóstico de Caso',
      placeholderNote: '[Portafolio en actualización — nuevos casos próximamente]',
      btnViewProject: 'Ver caso de estudio →',
      filters: {
        all: '[ TODOS ]',
        elementor: '[ WORDPRESS & ELEMENTOR ]',
        shopify: '[ SHOPIFY A MEDIDA ]',
        plugin: '[ PLUGINS A MEDIDA ]',
        animaciones: '[ ANIMACIONES GSAP ]',
        apps: '[ APPS & SAAS ]',
      },
      pagination: {
        prev: '← ANTERIOR',
        next: 'SIGUIENTE →',
      },
    },
    contact: {
      tag: '05 — DIAGNÓSTICO & TERMINAL DIRECTA',
      titleLine1: '¿Problemas de lentitud o caídas?',
      titleLine2: 'Evaluemos tu infraestructura.',
      subtitle: 'Diagnóstico técnico antes de presupuestar. Analizamos la arquitectura exacta que tu negocio necesita para operar y convertir de forma estable.',
      whatsappLabel: 'WHATSAPP DIRECTO',
      whatsappVal: 'Solicitar diagnóstico →',
      emailLabel: 'EMAIL DIRECTO',
      callLabel: 'LLAMADA DE DIAGNÓSTICO',
      callVal: 'Agendar 15 minutos →',
      copyright: 'Director de Tecnología (CTO) & Consultor Estratégico de Infraestructura Web · CODIGOSATDEV',
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
