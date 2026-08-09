'use client'

import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

export default function SystemStatus() {
  const { t } = useLanguage()
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    const email = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'kodigosat@gmail.com'
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <aside
      className="system-status-widget"
      style={{
        border: 'var(--bdr-thin)',
        background: 'var(--c-white)',
        marginBottom: 'var(--sp-6)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-xs)',
      }}
      aria-label="Estado del sistema e infraestructura"
    >
      {/* Terminal Header */}
      <div
        style={{
          background: 'var(--c-black)',
          color: 'var(--c-white)',
          padding: 'var(--sp-1) var(--sp-3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          fontFamily: 'var(--font-display)',
          fontSize: '0.625rem',
          letterSpacing: '0.08em',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span
            style={{
              display: 'inline-block',
              width: '6px',
              height: '6px',
              background: '#00ff66',
              borderRadius: '50%',
              boxShadow: '0 0 6px #00ff66',
            }}
          />
          <span>{t.status.header}</span>
        </div>
        <span style={{ opacity: 0.7 }}>v1.0.4</span>
      </div>

      {/* Terminal Content */}
      <div
        style={{
          padding: 'var(--sp-3) var(--sp-4)',
          display: 'flex',
          flexDirection: 'column',
          gap: 'var(--sp-2)',
          color: 'var(--c-black)',
        }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
          <span>{t.status.availabilityLabel}</span>
          <strong style={{ color: 'var(--c-black)' }}>{t.status.availabilityVal}</strong>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px' }}>
          <span>{t.status.infraLabel}</span>
          <span>{t.status.infraVal}</span>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '4px', alignItems: 'center' }}>
          <span>{t.status.responseLabel}</span>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span>{t.status.responseVal}</span>
            <button
              onClick={handleCopyEmail}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.625rem',
                padding: '2px 6px',
                border: 'var(--bdr-thin)',
                background: copied ? 'var(--c-black)' : 'transparent',
                color: copied ? 'var(--c-white)' : 'var(--c-black)',
                cursor: 'pointer',
                transition: 'all 0.15s ease',
              }}
              title="Copiar correo de contacto"
            >
              {copied ? t.status.btnCopied : t.status.btnCopyEmail}
            </button>
          </div>
        </div>
      </div>
    </aside>
  )
}

