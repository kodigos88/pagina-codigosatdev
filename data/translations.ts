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
      { id: 'servicios', label: '02 SOLUTIONS' },
      { id: 'stack', label: '03 ARSENAL' },
      { id: 'portfolio', label: '04 CASES' },
      { id: 'contacto', label: '05 DIAGNOSTIC' },
    ],
    modal: {
      bootTag: '► SYSTEM BOOT // PORTFOLIO ACCESS',
      title: 'What is your name or company?',
      subtitle: "Let's customize your technical diagnostic session.",
      placeholder: 'Enter your name or brand...',
      btnEnter: 'ENTER SYSTEM →',
      btnSkip: 'Skip',
    },
    hero: {
      greetingDefault: 'Strategic Consulting & High-Performance Web Architecture',
      greetingUser: 'Welcome to codigosatdev, {name}!',
      title: 'codigosatdev',
      tagline1: 'Digital infrastructure engineered to convert and scale, not to break.',
      tagline2: 'Extreme speed, operational stability, and uptime protection.',
      stackLine: 'Headless WordPress & Next.js · Bespoke Shopify · Extreme WPO · Cloudflare & 24/7 Security',
      btnServices: 'View Business Solutions →',
      btnWhatsApp: 'Request Diagnostic',
      scrollHint: 'explore infrastructure',
    },
    status: {
      header: 'SYSTEM STATUS // CTO OPERATIONAL',
      availabilityLabel: '> AVAILABILITY:',
      availabilityVal: 'AVAILABLE / CONSULTING SCHEDULE OPEN',
      infraLabel: '> ARCHITECTURE & WPO:',
      infraVal: 'CLOUDFLARE WAF, TTFB < 200MS & CORE WEB VITALS [OPTIMIZED]',
      responseLabel: '> TECHNICAL EVALUATION:',
      responseVal: '< 24 HOURS (DIRECT DIAGNOSTIC)',
      btnCopyEmail: '[ 📋 COPY EMAIL ]',
      btnCopied: 'COPIED! ✓',
    },
    services: {
      tag: '02 — HIGH-VALUE SOLUTIONS & SYSTEMS',
      title: 'Systems engineered for real business outcomes',
      btnDiscuss: 'Request Technical Diagnostic →',
      hoverPrompt: '[ HOVER TO LOAD DETAILS ]',
      loaderActive: '[██████████] 100% LOADED',
      items: [
        {
          name: 'Headless Architectures (Next.js + WP / Shopify)',
          desc: 'Decoupled web: we separate the backend CMS from the visual interface to achieve instant load speed, top-tier security, and zero bottlenecks.',
        },
        {
          name: 'WPO Engineering & Extreme Performance',
          desc: 'We optimize TTFB (server response time to the first click) and Core Web Vitals (Google speed benchmarks) so your web loads instantly even on mobile data.',
        },
        {
          name: 'High-Performance E-Commerce (Shopify / WooCommerce)',
          desc: 'Scalable online stores, database optimization, and friction-free checkouts engineered to handle heavy traffic and sales spikes without crashing.',
        },
        {
          name: 'Custom Plugin & Software Development',
          desc: 'Advanced bespoke features and extensions built from scratch to automate sales pipelines, sync your CRM, and connect direct WhatsApp API workflows.',
        },
        {
          name: 'Operational Continuity & Server Hardening',
          desc: 'Perimeter security with Cloudflare WAF (firewall against attacks and downtime), hardened Linux servers, and proactive monitoring so your site never goes offline.',
        },
        {
          name: 'Direct Lead Acquisition Systems',
          desc: 'Ultra-fast, high-converting Landing Pages engineered to transform paid ad traffic into qualified WhatsApp leads.',
        },
      ],
    },
    stack: {
      tag: '03 — TECH ARSENAL & PROFESSIONAL CRITERIA',
      title: 'The technical foundation behind our solutions',
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
          label: 'E-COMMERCE & SCALABLE BACKEND',
          items: [
            'Shopify (Bespoke Liquid)',
            'Advanced WooCommerce',
            'Plugins from Scratch',
            'Database Optimization',
            'Modern PHP 8.x',
            'REST APIs & Webhooks',
          ],
        },
        {
          label: 'WPO, INFRASTRUCTURE & SECURITY',
          items: [
            'TTFB < 200ms (Instant Response)',
            'Core Web Vitals (Google Speed Standards)',
            'Cloudflare (WAF Firewall & CDN)',
            'Linux Hardening (Server Protection)',
            'SSL/TLS, CSP & 24/7 Shield',
          ],
        },
      ],
    },
    portfolio: {
      tag: '04 — CASE STUDIES & PRODUCTION',
      title: 'Architectures in production',
      placeholderTitle: 'Under Construction',
      placeholderBody:
        'Curated selection of production architectures and online stores. Contact me directly to evaluate a technical case study tailored to your business model.',
      btnRequestCases: 'Request Case Study Diagnostic',
      placeholderNote: '[Portfolio updating — new case studies coming soon]',
      btnViewProject: 'View case study →',
      filters: {
        all: '[ ALL ]',
        elementor: '[ WORDPRESS & ELEMENTOR ]',
        shopify: '[ BESPOKE SHOPIFY ]',
        plugin: '[ BESPOKE PLUGINS ]',
        animaciones: '[ GSAP ANIMATIONS ]',
        apps: '[ APPS & SAAS ]',
      },
      pagination: {
        prev: '← PREVIOUS',
        next: 'NEXT →',
      },
    },
    contact: {
      tag: '05 — DIAGNOSTIC & DIRECT TERMINAL',
      titleLine1: 'Slow performance or downtime issues?',
      titleLine2: "Let's assess your infrastructure.",
      subtitle:
        'Technical diagnostic before quoting. We analyze the exact architecture your business needs to operate and convert reliably.',
      whatsappLabel: 'DIRECT WHATSAPP',
      whatsappVal: 'Request diagnostic →',
      emailLabel: 'DIRECT EMAIL',
      callLabel: 'DIAGNOSTIC CALL',
      callVal: 'Schedule 15 minutes →',
      copyright: 'Chief Technology Officer (CTO) & Strategic Web Infrastructure Consultant · CODIGOSATDEV',
    },
  },
}
