'use client'

import { IconWP, IconReact, IconShop, IconCloud } from '@/components/icons'
import { useLanguage } from '@/context/LanguageContext'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '584245422849'
const WA_MSG_PROJECT = encodeURIComponent('Hola Agustín, vi las soluciones en codigosatdev y quiero consultar sobre la arquitectura técnica de mi negocio.')

const SERVICE_ICONS = [
  <IconWP key="wp1" />,
  <IconWP key="wp2" />,
  <IconWP key="wp3" />,
  <IconReact key="react" />,
  <IconShop key="shop" />,
  <IconCloud key="cloud" />,
]

export default function ServicesCard() {
  const { t } = useLanguage()

  return (
    <section id="servicios" className="card-section services-section" aria-label="Servicios">
      <div className="services-inner">
        <div className="services-header">
          <div>
            <div className="section-tag" aria-hidden="true">{t.services.tag}</div>
            <h2 className="section-title retro-glitch">{t.services.title}</h2>
          </div>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG_PROJECT}`}
            className="hc-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Hablar de un proyecto por WhatsApp"
          >
            {t.services.btnDiscuss}
          </a>
        </div>

        <ul className="services-grid">
          {t.services.items.map((s, idx) => (
            <li key={s.name} className="service-item service-item--interactive">
              <div className="service-icon" aria-hidden="true">{SERVICE_ICONS[idx]}</div>
              <h3 className="service-name">{s.name}</h3>

              {/* Video game retro loader prompt & bar */}
              <div className="service-loader-bar" aria-hidden="true">
                <span className="loader-prompt">{t.services.hoverPrompt}</span>
                <span className="loader-active">{t.services.loaderActive}</span>
              </div>

              {/* Service description revealed on hover */}
              <p className="service-desc">{s.desc}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

