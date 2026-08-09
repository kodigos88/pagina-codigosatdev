'use client'

import { useState } from 'react'
import dynamic from 'next/dynamic'
import { IconWhatsApp } from '@/components/icons'
import { useLanguage } from '@/context/LanguageContext'
import type { ShowcaseProject } from '@/types'

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
    title: 'E-Commerce Shopify & Custom Liquid Modules',
    titleEn: 'Jumex — Shopify E-Commerce & Custom Liquid Modules',
    category: 'SHOPIFY',
    client: 'Jumex (Marca Internacional de Bebidas)',
    year: '2024',
    desc: 'Desarrollo a medida sobre Shopify Liquid para la icónica marca internacional de jugos y bebidas Jumex. Programación desde cero de arquitectura de módulos dinámicos, navegación avanzada con MegaMenu multinivel, sliders interactivos de catálogo por categorías y maquetación responsiva de alta conversión.',
    descEn: 'Bespoke Shopify Liquid development for iconic international beverage brand Jumex. Engineered custom dynamic module architecture from scratch, featuring multi-level MegaMenu navigation, interactive catalog sliders by category, and high-converting responsive layouts.',
    stack: ['Shopify', 'Liquid Custom Engine', 'JavaScript ES6', 'CSS3 Modules', 'MegaMenu'],
    metric: '🚀 Arquitectura Liquid 100% Personalizada',
    metricEn: '🚀 100% Bespoke Liquid Engine Architecture',
    url: 'https://codigosatdev.com',
    status: 'ONLINE',
    nda: true,
    image: '/portfolio/jumex-proyecto-completo.png',
  },
  {
    id: 103,
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
    id: 104,
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
    id: 105,
    title: 'E-Commerce Shopify & Customization Liquid de Tema',
    titleEn: 'Odwalla — Custom Shopify Theme Template Modification',
    category: 'SHOPIFY',
    client: 'Odwalla (Marca de Jugos & Bebidas)',
    year: '2024',
    desc: 'Desarrollo y personalización avanzada sobre Shopify para la marca Odwalla. Modificación profunda en Liquid de múltiples plantillas de tema preexistente, extendiendo sus capacidades nativas para implementar la arquitectura de diseño, componentes dinámicos y flujos que la marca requería.',
    descEn: 'Advanced modification and customization of purchased Shopify theme templates for Odwalla. Developed custom Liquid sections, interactive product pickers, and dynamic UI modules tailored to exact business requirements.',
    stack: ['Shopify', 'Liquid Customization', 'JavaScript ES6', 'Theme Custom Layouts', 'CSS Modules'],
    metric: '🛠️ Modificación & Adaptación Liquid de Tema',
    metricEn: '🛠️ Bespoke Shopify Theme Modification',
    url: 'https://codigosatdev.com',
    status: 'ONLINE',
    nda: true,
    video: '/portfolio/odwalla-proyecto.mp4',
  },
  {
    id: 106,
    title: 'Migración Divi a Elementor & MegaMenu Custom',
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
    id: 107,
    title: 'HomePro — Tema Personalizado desde 0 & Animaciones Scroll',
    titleEn: 'HomePro Naples — Custom Theme from Scratch & Scroll Animations',
    category: 'ANIMACIONES',
    client: 'HomePro Naples',
    year: '2025',
    desc: 'Proyecto actualmente en desarrollo activo para HomePro Naples. Creación desde cero de tema WordPress personalizado sin plantillas genéricas pesadas, maquetación avanzada en Elementor PRO e integración de animaciones dinámicas al hacer scroll en el área de servicios.',
    descEn: 'Active custom development for HomePro Naples. Created a lightweight custom WordPress theme from scratch without bloated templates, featuring advanced Elementor PRO layouts and dynamic scroll-triggered animations in the services area.',
    stack: ['WordPress', 'Tema desde 0', 'Elementor PRO', 'Animaciones Scroll', 'CSS3 / JS'],
    metric: '🛠️ Tema WP desde 0 & Scroll Animations',
    metricEn: '🛠️ Custom WP Theme & Scroll Animations',
    url: 'https://homepronaples.com/',
    status: 'EN DESARROLLO',
    nda: false,
    video: '/portfolio/homepro-proyecto.mp4',
  },
  {
    id: 108,
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
    id: 109,
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
]

const FILTER_CATEGORIES = [
  { id: 'ALL', label: '[ TODOS ]' },
  { id: 'ELEMENTOR', label: '[ WORDPRESS & ELEMENTOR ]' },
  { id: 'SHOPIFY', label: '[ SHOPIFY ]' },
  { id: 'PLUGIN', label: '[ PLUGINS A MEDIDA ]' },
  { id: 'ANIMACIONES', label: '[ ANIMACIONES GSAP ]' },
  { id: 'APPS', label: '[ APPS MÓVILES & SAAS ]' },
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
    { id: 'SHOPIFY', label: t.portfolio.filters.shopify },
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
                        <video
                          src={item.video}
                          autoPlay
                          muted
                          loop
                          playsInline
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
