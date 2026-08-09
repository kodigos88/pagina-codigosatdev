'use client'

import { useLanguage } from '@/context/LanguageContext'

const CARD_NUMBERS = ['01', '02', '03']

export default function StackCard() {
  const { t } = useLanguage()

  return (
    <section id="stack" className="card-section stack-section" aria-label="Stack técnico">
      <div className="stack-inner">
        <div className="section-tag" aria-hidden="true">{t.stack.tag}</div>
        <h2 className="section-title retro-glitch" style={{ marginBottom: 'var(--sp-6)' }}>
          {t.stack.title}
        </h2>

        {/* Stacking Cards Container */}
        <div className="stack-cards-container">
          {t.stack.clusters.map((cluster, index) => (
            <article
              key={cluster.label}
              className="hc-card stack-card"
              style={{
                top: `calc(72px + ${index * 42}px)`,
                zIndex: index + 1,
              }}
            >
              {/* Card Header Banner */}
              <div className="stack-card-header">
                <h3 className="stack-card-title">{cluster.label}</h3>
                <span className="stack-card-num">
                  {t.stack.cardNum.replace('{num}', CARD_NUMBERS[index])}
                </span>
              </div>

              {/* Card Checklist Body with 22px retro font */}
              <div className="stack-card-body">
                <ul className="stack-checklist" aria-label={cluster.label}>
                  {cluster.items.map((item) => (
                    <li key={item} className="stack-checklist-item">
                      <span className="check-icon">[✓]</span>
                      <span className="check-text">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

