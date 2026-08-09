'use client'

import { useLanguage } from '@/context/LanguageContext'

export default function LanguageToggle() {
  const { lang, setLang } = useLanguage()

  return (
    <div
      className="lang-toggle"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        border: 'var(--bdr-thin)',
        background: 'var(--c-white)',
        fontFamily: 'var(--font-display)',
        fontSize: '0.6875rem',
        letterSpacing: '0.05em',
      }}
      aria-label="Seleccionar idioma / Select language"
    >
      <button
        type="button"
        onClick={() => setLang('es')}
        style={{
          padding: '3px 8px',
          background: lang === 'es' ? 'var(--c-black)' : 'transparent',
          color: lang === 'es' ? 'var(--c-white)' : 'var(--c-black)',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.15s ease, color 0.15s ease',
        }}
        aria-pressed={lang === 'es'}
      >
        ES
      </button>
      <span style={{ color: 'var(--c-gray-400)', userSelect: 'none' }}>|</span>
      <button
        type="button"
        onClick={() => setLang('en')}
        style={{
          padding: '3px 8px',
          background: lang === 'en' ? 'var(--c-black)' : 'transparent',
          color: lang === 'en' ? 'var(--c-white)' : 'var(--c-black)',
          border: 'none',
          cursor: 'pointer',
          transition: 'background 0.15s ease, color 0.15s ease',
        }}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}
