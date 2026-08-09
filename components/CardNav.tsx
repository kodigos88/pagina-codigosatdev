'use client'

import { useState, useEffect, useRef } from 'react'
import ThemeToggle from './ThemeToggle'
import LanguageToggle from './LanguageToggle'
import { useLanguage } from '@/context/LanguageContext'

export default function CardNav() {
  const { t } = useLanguage()
  const [activeSection, setActiveSection] = useState('inicio')
  const scrollRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Reference the scroll container
    const container = document.querySelector('.card-scroll') as HTMLElement | null
    scrollRef.current = container
    if (!container) return

    const sections = t.nav
      .map(c => document.getElementById(c.id))
      .filter(Boolean) as HTMLElement[]

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find(e => e.isIntersecting)
        if (visible) setActiveSection(visible.target.id)
      },
      { root: container, threshold: 0.5 }
    )

    sections.forEach(s => observer.observe(s))
    return () => observer.disconnect()
  }, [t.nav])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="card-nav" aria-label="Navegación de secciones">
      <button
        className="card-nav__logo"
        onClick={() => scrollTo('inicio')}
        aria-label="Ir al inicio"
      >
        codigosatdev
      </button>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <LanguageToggle />
        <ThemeToggle />

        <div className="card-nav__index" role="list" aria-label="Secciones">
          {t.nav.map((card) => (
            <button
              key={card.id}
              role="listitem"
              className={`card-nav__dot ${activeSection === card.id ? 'active' : ''}`}
              onClick={() => scrollTo(card.id)}
              aria-label={card.label}
              aria-current={activeSection === card.id ? 'true' : undefined}
              title={card.label}
            />
          ))}
          <span className="card-nav__label" aria-hidden="true">
            {t.nav.findIndex(c => c.id === activeSection) + 1} / {t.nav.length}
          </span>
        </div>
      </div>
    </nav>
  )
}
