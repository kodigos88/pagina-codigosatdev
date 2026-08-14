'use client'

import { useState, useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import { IconWhatsApp } from '@/components/icons'
import { useLanguage } from '@/context/LanguageContext'
import type { ShowcaseProject } from '@/types'

// ── Instant Video Thumbnail (Preloaded & Faststart) ──
function PortfolioVideo({ src, className }: { src: string; className?: string }) {
  const ref = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    // Ensure autoplay plays smoothly as soon as ready
    if (ref.current) {
      ref.current.play().catch(() => {})
    }
  }, [src])

  return (
    <video
      ref={ref}
      src={src}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className={className}
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        display: 'block',
        background: '#000',
      }}
    />
  )
}


// Lazy-load the modal so it doesn't block initial page paint
const ProjectModal = dynamic(() => import('@/components/ProjectModal'), { ssr: false })

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '584120000000'

// Portfolio projects — add new projects here
const PROJECTS: ShowcaseProject[] = [
  {
    id: 101,
    title: 'ESB Puerto Rico — E-Commerce Baterías de Auto a Medida',
    titleEn: 'ESB Puerto Rico — Custom Auto Battery E-Commerce',
    category: 'PLUGIN',
    client: 'ESB Puerto Rico',
    year: '2025',
    desc: 'Tienda industrial completa para empresa con 60+ años en el mercado. Plugin PHP desde cero para filtrar baterías automotrices por CCA, tecnología y marca — convirtiendo un catálogo técnico de +500 referencias en una búsqueda de 3 clics.',
    descEn: 'Full industrial e-commerce for a 60+ year market leader. Custom PHP plugin built from scratch to filter automotive batteries by CCA, technology, and brand—converting a 500+ SKU technical catalog into a 3-click search.',
    stack: ['WordPress', 'WooCommerce', 'PHP 8.2', 'Plugin a Medida', 'JavaScript'],
    metric: '⚡ Filtrado instantáneo de +500 referencias',
    metricEn: '⚡ Instant filtering for 500+ SKUs',
    url: 'https://esbpr.com/',
    status: 'ONLINE',
    nda: false,
    image: '/portfolio/imagen-proyecto-completo.webp',
  },
  {
    id: 102,
    title: 'Logísticas Flash — Experiencia Web & Animaciones GSAP',
    titleEn: 'Logísticas Flash — Web Experience & GSAP Animations',
    category: 'ANIMACIONES',
    client: 'Logísticas Flash',
    year: '2024',
    desc: 'Desarrollo de experiencia web de alto impacto visual para Logísticas Flash utilizando WordPress y Elementor PRO, enriquecida con animaciones avanzadas en GSAP (GreenSock). Integración de micro-interacciones, efectos de scroll fluido a 60fps y presentación dinámica corporativa.',
    descEn: 'High-impact web experience for Logísticas Flash built with WordPress and Elementor PRO, enhanced with advanced GSAP (GreenSock) animations. Features rich micro-interactions, smooth 60fps scroll effects, and dynamic corporate presentation.',
    stack: ['WordPress', 'GSAP Animations', 'Elementor PRO', 'JavaScript ES6', 'CSS3'],
    metric: '✨ Animaciones GSAP a 60fps & Scroll Fluido',
    metricEn: '✨ 60fps GSAP Animations & Fluid Scroll',
    url: 'https://logisticasflash.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/flash-proyecto.mp4',
  },
  {
    id: 103,
    title: 'AWD Media — Sitio Corporativo & Animaciones GSAP',
    titleEn: 'AWD Media — Corporate Web & GSAP Scroll Timelines',
    category: 'ANIMACIONES',
    client: 'AWD Media',
    year: '2024',
    desc: 'Desarrollo de sitio web corporativo de alta gama para la agencia creativa AWD Media en Argentina. Construcción desde cero en WordPress y Elementor PRO con animaciones dinámicas en GSAP (GreenSock), efectos de scroll interactivos y diseño responsivo enfocado en conversión.',
    descEn: 'Corporate website for creative agency AWD Media in Argentina built on WordPress + Elementor PRO, powered by interactive GSAP scroll timelines. Includes interactive service cards, custom micro-interactions, and conversion-focused responsive design.',
    stack: ['WordPress', 'GSAP Animations', 'Elementor PRO', 'JavaScript ES6', 'CSS3'],
    metric: '🚀 Animaciones GSAP & 60fps Performance',
    metricEn: '🚀 GSAP Animations & 60fps Performance',
    url: 'https://awdmedia.com.ar/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/awdmedia-proyecto.mp4',
  },
  {
    id: 104,
    title: 'Biwott — Migración Divi a Elementor & MegaMenu Custom',
    titleEn: 'Biwott — Divi to Elementor Migration & Custom MegaMenu',
    category: 'ELEMENTOR',
    client: 'Biwott',
    year: '2024',
    desc: 'Reconstrucción y migración integral del sitio web de Biwott desde Divi Builder a Elementor PRO. Recreación fiel pixel por pixel de todos los efectos, animaciones y micro-interacciones del diseño original, eliminando código acumulado y agregando un MegaMenu dinámico personalizado.',
    descEn: 'Pixel-perfect 1:1 migration of existing design from Divi builder to Elementor PRO. Preserved all subtle visual details, interactive animations, and custom CSS effects, while developing an advanced custom MegaMenu and boosting page load speed.',
    stack: ['WordPress', 'Elementor PRO', 'Divi Migration', 'MegaMenu Engine', 'CSS3 / JS'],
    metric: '⚡ Migración 1:1 & Optimización de Carga',
    metricEn: '⚡ 1:1 Migration & Speed Optimization',
    url: 'https://biwott.com',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/biwott-proyecto.mp4',
  },
  {
    id: 105,
    title: 'HomePro Naples — Tema Personalizado desde 0 & Animaciones Scroll',
    titleEn: 'HomePro Naples — Custom Theme from Scratch & Scroll Animations',
    category: 'ANIMACIONES',
    client: 'HomePro Naples',
    year: '2025',
    desc: 'Creación desde cero de tema WordPress personalizado sin plantillas genéricas pesadas, maquetación avanzada en Elementor PRO e integración de animaciones dinámicas al hacer scroll en el área de servicios.',
    descEn: 'Created a lightweight custom WordPress theme from scratch without bloated templates, featuring advanced Elementor PRO layouts and dynamic scroll-triggered animations in the services area.',
    stack: ['WordPress', 'Tema desde 0', 'Elementor PRO', 'Animaciones Scroll', 'CSS3 / JS'],
    metric: '🛠️ Tema WP desde 0 & Scroll Animations',
    metricEn: '🛠️ Custom WP Theme & Scroll Animations',
    url: 'https://homepronaples.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/homepro-proyecto.mp4',
  },
  {
    id: 106,
    title: 'MLH Insurance — Sitio Corporativo & Estrategia Digital',
    titleEn: 'MLH Insurance — Corporate Site & Digital Strategy',
    category: 'ELEMENTOR',
    client: 'MLH Insurance',
    year: '2024',
    desc: 'Desarrollo web integral para MLH Insurance partiendo desde cero (sin diseño previo, paleta ni arquitectura técnica). Proceso continuo de acompañamiento estratégico para definir la imagen de marca, seleccionar el mejor stack técnico en WordPress y maquetar una presencia digital confiable.',
    descEn: 'End-to-end web development for MLH Insurance from a blank slate (no previous brand assets, color palette, or tech stack). Provided strategic guidance to define visual identity, select optimal WordPress stack, and build a high-trust digital presence.',
    stack: ['WordPress', 'Elementor PRO', 'Asesoría de Marca', 'UX/UI Design', 'CSS3'],
    metric: '💡 Desarrollo & Asesoría Integral desde 0',
    metricEn: '💡 End-to-End Consulting & Brand Build',
    url: 'https://mlhowellinsurance.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/mlh-proyecto.mp4',
  },
  {
    id: 107,
    title: 'Pro Elite Cleaning — Ecosistema Web, Dashboard SaaS & Apps (iOS & Android)',
    titleEn: 'Pro Elite Cleaning — Web Ecosystem, SaaS Dashboard & Apps (iOS & Android)',
    category: 'APPS',
    client: 'Pro Elite Cleaning Services',
    year: '2025',
    desc: 'Ecosistema tecnológico integral a medida. Retoque de identidad visual, desarrollo de sitio web corporativo en WordPress, creación de Dashboard SaaS personalizado en Node.js & Next.js para control operativo de servicios de limpieza, y despliegue de App Móvil en App Store (iOS) y Google Play (Android).',
    descEn: 'Full-scale custom tech ecosystem. Brand identity touch-up, corporate WordPress site, custom Node.js & Next.js SaaS operational dashboard for cleaning service management, and native mobile app deployment on App Store (iOS) and Google Play (Android).',
    stack: ['WordPress', 'Next.js (SaaS)', 'Node.js API', 'App iOS & Android', 'React Native'],
    metric: '🚀 Web + Dashboard SaaS + Apps iOS & Android',
    metricEn: '🚀 Web + SaaS Dashboard + iOS & Android Apps',
    url: 'https://proelitecleaningservices.net/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/proelite-proyecto.mp4',
  },
  {
    id: 108,
    title: 'Studio 23 Sports — Sitio Bilingüe, SEO & Rendimiento Web',
    titleEn: 'Studio 23 Sports — Bilingual Site, SEO & Web Performance',
    category: 'ELEMENTOR',
    client: 'Studio 23 Sports',
    year: '2025',
    desc: 'Sitio web corporativo bilingüe (Español/Inglés) para Studio 23 Sports, empresa de servicios deportivos en USA. Desarrollado en WordPress & Elementor PRO desde cero con arquitectura SEO completa: etiquetas hreflang, metadatos optimizados por idioma, estructura de encabezados limpia y Core Web Vitals en verde. El resultado: presencia digital profesional con carga rápida y capacidad de captar clientes tanto en mercado hispano como anglosajón.',
    descEn: 'Bilingual (Spanish/English) corporate website for Studio 23 Sports, a US-based sports services company. Built from scratch on WordPress & Elementor PRO with full SEO architecture: hreflang tags, per-language optimized metadata, clean heading structure, and green Core Web Vitals. Result: a fast-loading professional presence that captures both Hispanic and English-speaking markets.',
    stack: ['WordPress', 'Elementor PRO', 'SEO Técnico', 'Bilingüe hreflang', 'WPO'],
    metric: '🌎 Sitio Bilingüe + SEO Técnico + Core Web Vitals',
    metricEn: '🌎 Bilingual Site + Technical SEO + Core Web Vitals',
    url: 'https://studio23sports.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/studio23sports-proyecto.mp4',
  },
  {
    id: 109,
    title: '7 Winds — Sitio Corporativo en España & Optimización WPO',
    titleEn: '7 Winds — Corporate Site in Spain & WPO Optimization',
    category: 'ELEMENTOR',
    client: '7 Winds',
    year: '2025',
    desc: 'Desarrollo web completo para 7 Winds, empresa establecida en España. El sitio anterior era lento, sin identidad visual definida y no generaba confianza. Se construyó desde cero en WordPress & Elementor PRO aplicando WPO agresivo (lazy load, minificación, imágenes en WebP, caché avanzada) y SEO on-page con estructura de contenidos clara. Tiempo de carga reducido drásticamente, mejorando la experiencia del usuario y la tasa de contacto.',
    descEn: 'Full web development for 7 Winds, a company based in Spain. The old site was slow, visually inconsistent, and failed to generate trust. Rebuilt from scratch on WordPress & Elementor PRO with aggressive WPO (lazy load, minification, WebP images, advanced caching) and on-page SEO with a clean content structure. Load time drastically reduced, improving both user experience and contact rate.',
    stack: ['WordPress', 'Elementor PRO', 'WPO Avanzado', 'SEO On-Page', 'WebP & Caché'],
    metric: '⚡ WPO Agresivo & Carga Ultrarrápida',
    metricEn: '⚡ Aggressive WPO & Ultra-Fast Load',
    url: 'https://7winds.es/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/7winds-proyecto.mp4',
  },
  {
    id: 110,
    title: 'Casa Magnos — E-Commerce Premium para Destilería de Cocuy Venezolano',
    titleEn: 'Casa Magnos — Premium E-Commerce for Venezuelan Cocuy Distillery',
    category: 'ELEMENTOR',
    client: 'Casa Magnos (Destilería Jadelur)',
    year: '2025',
    desc: 'Plataforma web & e-commerce premium para Casa Magnos, destilería artesanal venezolana ganadora de 4 medallas en la New York International Spirits Competition 2024. Desarrollado en WordPress & Elementor PRO con WooCommerce a medida, catálogo de productos (Silver, Reposado & Añejo), sección de recetas, blog editorial de marca y arquitectura SEO completa. El reto: transmitir lujo artesanal y tradición centenaria en un sitio que también vende online.',
    descEn: 'Premium web & e-commerce platform for Casa Magnos, a Venezuelan craft distillery that won 4 medals at the 2024 New York International Spirits Competition. Built on WordPress & Elementor PRO with custom WooCommerce, product catalog (Silver, Reposado & Añejo), recipe section, brand editorial blog, and full SEO architecture. The challenge: convey artisan luxury and century-old tradition in a site that also sells online.',
    stack: ['WordPress', 'WooCommerce', 'Elementor PRO', 'SEO Editorial', 'WPO'],
    metric: '🥃 E-Commerce Artesanal + SEO + 4 Medallas NYC',
    metricEn: '🥃 Artisan E-Commerce + SEO + 4 NYC Medals',
    url: 'https://www.cocuycasamagnos.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/casamagnos-proyecto.mp4',
  },
  {
    id: 111,
    title: 'ISB Consultoría — Plataforma Corporativa con SEO & Datos Estructurados',
    titleEn: 'ISB Consultoría — Corporate Platform with SEO & Structured Data',
    category: 'ELEMENTOR',
    client: 'ISB Consultoría, Auditoría y Formación',
    year: '2025',
    desc: 'Desarrollo completo de plataforma web para ISB Consultoría, firma especializada en normas ISO 9001, ISO 45001 y consultoría medioambiental en Bilbao, España. Construcción en WordPress con SEO técnico profesional (Yoast configurado a fondo, datos estructurados JSON-LD, canonicals, Open Graph y sitemap dinámico), arquitectura de información orientada a conversión y diseño que proyecta la autoridad y seriedad que exige el sector de auditoría y certificación.',
    descEn: 'Full web platform development for ISB Consultoría, a firm specializing in ISO 9001, ISO 45001, and environmental consulting in Bilbao, Spain. Built on WordPress with professional technical SEO (deeply configured Yoast, JSON-LD structured data, canonicals, Open Graph, and dynamic sitemap), conversion-oriented information architecture, and a design that projects the authority the auditing and certification sector demands.',
    stack: ['WordPress', 'Elementor PRO', 'SEO Técnico', 'JSON-LD & Schema', 'Yoast SEO'],
    metric: '📋 SEO Técnico Completo + Datos Estructurados',
    metricEn: '📋 Full Technical SEO + Structured Data',
    url: 'https://isbconsultoria.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/isbconsultoria-proyecto.mp4',
  },
  {
    id: 112,
    title: 'Zicsal — Rescate Web: Hackeo, Desinfección & Rediseño Industrial',
    titleEn: 'Zicsal — Web Rescue: Hack, Cleanup & Industrial Redesign',
    category: 'ELEMENTOR',
    client: 'Zicsal (Fabricación Industrial desde 1966)',
    year: '2025',
    desc: 'Zicsal, empresa industrial española con +60 años fabricando fondos para depósitos y recipientes a presión, llegó a nosotros con una crisis mayor: su sitio web estaba hackeado, inyectado con malware y penalizado por Google. Primero ejecutamos el rescate completo — eliminación de malware, limpieza de código malicioso, restauración de reputación ante los motores de búsqueda y refuerzo de seguridad. Con el sitio saneado, el cliente decidió aprovechar para un rediseño completo: nuevo WordPress & Elementor PRO con versiones en Español, Inglés, Francés y Portugués (WPML), SEO multilingüe, datos estructurados y WPO optimizado para el sector industrial B2B.',
    descEn: 'Zicsal, a Spanish industrial manufacturer with 60+ years making tank heads and pressure vessel components, came to us with a critical crisis: their website had been hacked, injected with malware, and penalized by Google. We first executed a full rescue — malware removal, malicious code cleanup, search engine reputation restoration, and security hardening. With the site sanitized, the client chose to take it further with a complete redesign: new WordPress & Elementor PRO with Spanish, English, French, and Portuguese (WPML), multilingual SEO, structured data, and WPO optimized for the B2B industrial sector.',
    stack: ['WordPress', 'Elementor PRO', 'WPML 4 Idiomas', 'Rescate & Anti-Malware', 'SEO Multilingüe'],
    metric: '🛡️ Hackeo → Rescate → Rediseño Multilingüe',
    metricEn: '🛡️ Hacked → Rescued → Multilingual Redesign',
    url: 'https://www.zicsal.com/',
    status: 'ONLINE',
    nda: false,
    video: '/portfolio/zicsal-proyecto.mp4',
  },
]

const ITEMS_PER_PAGE = 3

export default function PortfolioCard() {
  const { lang, t } = useLanguage()
  const isEn = lang === 'en'
  const [activeFilter, setActiveFilter] = useState('ALL')
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedProject, setSelectedProject] = useState<ShowcaseProject | null>(null)

  const showcaseItems: ShowcaseProject[] = PROJECTS

  const filterCategories = [
    { id: 'ALL', label: t.portfolio.filters.all },
    { id: 'ELEMENTOR', label: t.portfolio.filters.elementor },
    { id: 'PLUGIN', label: t.portfolio.filters.plugin },
    { id: 'ANIMACIONES', label: t.portfolio.filters.animaciones },
    { id: 'APPS', label: t.portfolio.filters.apps },
  ]

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId)
    setCurrentPage(1)
  }

  const filteredItems = activeFilter === 'ALL'
    ? showcaseItems
    : showcaseItems.filter((item) => item.category === activeFilter)

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE) || 1

  const paginatedItems = filteredItems.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  )

  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
      document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <section id="portfolio" className="card-section portfolio-section" aria-label="Portafolio">
        <div className="portfolio-inner">
          <div className="section-tag" aria-hidden="true">{t.portfolio.tag}</div>
          <h2 className="section-title retro-glitch" style={{ marginBottom: 'var(--sp-6)' }}>
            {t.portfolio.title}
          </h2>

          {/* 1-Bit Retro Filter Buttons */}
          <div className="portfolio-filters" role="tablist" aria-label="Filtros de portafolio">
            {filterCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleFilterChange(cat.id)}
                className={`portfolio-filter-btn ${activeFilter === cat.id ? 'active' : ''}`}
                role="tab"
                aria-selected={activeFilter === cat.id}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Projects Grid — Paginated 3 items at a time */}
          <div className="portfolio-grid">
            {paginatedItems.map((item) => {
              const displayTitle = (isEn && item.titleEn) ? item.titleEn : item.title
              const displayDesc = (isEn && item.descEn) ? item.descEn : item.desc
              const displayMetric = (isEn && item.metricEn) ? item.metricEn : item.metric
              const btnLabel = item.nda
                ? (isEn ? '[ 📋 VIEW CASE STUDY ]' : '[ 📋 VER CASO DE ESTUDIO ]')
                : (isEn ? '[ VIEW PROJECT ↗ ]' : '[ VER PROYECTO ↗ ]')

              return (
                <article key={item.id} className="hc-card portfolio-item-card">
                  <div className="portfolio-card-header">
                    <span className="portfolio-status-badge">
                      <span className="status-dot">●</span> {item.status}
                    </span>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      {item.nda && (
                        <span className="portfolio-nda-chip" title="Bajo acuerdo de no divulgación">
                          NDA
                        </span>
                      )}
                      <span className="portfolio-metric-badge">{displayMetric}</span>
                    </div>
                  </div>

                  {/* Project thumbnail preview */}
                  {(item.image || item.video) && (
                    <div className="portfolio-thumb">
                      {item.video ? (
                        <PortfolioVideo
                          src={item.video}
                          className="portfolio-thumb__img"
                        />
                      ) : (
                        <img
                          src={item.image}
                          alt={`Preview de ${displayTitle}`}
                          className="portfolio-thumb__img"
                          loading="lazy"
                        />
                      )}
                    </div>
                  )}

                  <h3 className="portfolio-item-title">{displayTitle}</h3>
                  <p className="portfolio-item-desc">{displayDesc}</p>

                  {/* Stack Chips */}
                  <div className="portfolio-item-stack">
                    {item.stack.map((tech) => (
                      <span key={tech} className="portfolio-tech-chip">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>

                  <div className="portfolio-card-footer">
                    <button
                      onClick={() => setSelectedProject(item)}
                      className="hc-btn hc-btn--primary"
                      style={{ width: '100%', justifyContent: 'center' }}
                    >
                      {btnLabel}
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          {/* Retro Pagination Bar */}
          {totalPages > 1 && (
            <div className="portfolio-pagination" role="navigation" aria-label="Paginación de proyectos">
              <button
                className="hc-btn portfolio-page-btn"
                disabled={currentPage === 1}
                onClick={() => handlePageChange(currentPage - 1)}
                aria-label="Página anterior"
              >
                {t.portfolio.pagination.prev}
              </button>

              <div className="portfolio-page-numbers">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
                  <button
                    key={pageNum}
                    className={`portfolio-num-btn ${currentPage === pageNum ? 'active' : ''}`}
                    onClick={() => handlePageChange(pageNum)}
                    aria-label={`Página ${pageNum}`}
                    aria-current={currentPage === pageNum ? 'page' : undefined}
                  >
                    [ {pageNum} ]
                  </button>
                ))}
              </div>

              <button
                className="hc-btn portfolio-page-btn"
                disabled={currentPage === totalPages}
                onClick={() => handlePageChange(currentPage + 1)}
                aria-label="Página siguiente"
              >
                {t.portfolio.pagination.next}
              </button>
            </div>
          )}

          {/* Custom Project CTA */}
          <div className="portfolio-cta-banner hc-card" style={{ marginTop: 'var(--sp-10)' }}>
            <p className="portfolio-cta-text">
              ¿Tienes un proyecto especial o necesitas un desarrollo a medida en WordPress / Next.js?
            </p>
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola Agustín, me gustaría cotizar un proyecto web a medida.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hc-btn"
            >
              <IconWhatsApp />
              COTIZAR PROYECTO POR WHATSAPP ↗
            </a>
          </div>
        </div>
      </section>

      {/* Project Modal — lazy loaded */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </>
  )
}
