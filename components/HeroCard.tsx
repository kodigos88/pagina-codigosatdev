'use client'

import { IconArrowDown, IconWhatsApp } from '@/components/icons'
import SystemStatus from './SystemStatus'
import Typewriter from './Typewriter'
import { useLanguage } from '@/context/LanguageContext'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? 'TUNUMERO'
const WA_MSG = encodeURIComponent('Hola, me interesa hablar sobre un proyecto')

interface HeroCardProps {
  userName?: string
}

export default function HeroCard({ userName }: HeroCardProps) {
  const { t } = useLanguage()

  const greetingText = userName
    ? t.hero.greetingUser.replace('{name}', userName)
    : t.hero.greetingDefault

  return (
    <section
      id="inicio"
      className="card-section hero-section hero-section--dithered"
      aria-label="Inicio"
    >
      <div className="hero-inner">
        <div className="hero-card-wrap animate-deal">
          {/* Peeking card stack behind the main card */}
          <div className="hero-peekers" aria-hidden="true">
            <div className="peeker peeker-1" />
            <div className="peeker peeker-2" />
            <div className="peeker peeker-3" />
          </div>

          {/* Main HyperCard */}
          <div className="hc-card hero-card">
            {/* System Status Terminal Widget */}
            <SystemStatus />

            <p className="hero-eyebrow" aria-label="Bienvenida personalizada">
              <Typewriter text={greetingText} speed={40} delay={150} />
            </p>

            <h1 className="hero-title retro-glitch">{t.hero.title}</h1>

            <p className="hero-tagline">
              {t.hero.tagline1}<br />
              {t.hero.tagline2}
            </p>

            <p className="hero-stack">
              {t.hero.stackLine}
            </p>

            <div className="hero-ctas">
              <a
                href="#servicios"
                className="hc-btn hc-btn--primary hc-btn--lg"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('servicios')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                {t.hero.btnServices}
              </a>
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
                className="hc-btn hc-btn--lg"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contactar por WhatsApp"
              >
                <IconWhatsApp />
                {t.hero.btnWhatsApp}
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-bottom" aria-hidden="true">
        <span className="scroll-hint">
          <IconArrowDown /> {t.hero.scrollHint}
        </span>
      </div>
    </section>
  )
}
