'use client'

import { useState, useEffect, useRef } from 'react'
import { useLanguage } from '@/context/LanguageContext'

interface WelcomeModalProps {
  onSetUserName: (name: string) => void
}

export default function WelcomeModal({ onSetUserName }: WelcomeModalProps) {
  const { t } = useLanguage()
  const [nameInput, setNameInput] = useState('')
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  // Ref to avoid stale closure — keeps onSetUserName always current without re-running the effect
  const onSetUserNameRef = useRef(onSetUserName)
  useEffect(() => { onSetUserNameRef.current = onSetUserName }, [onSetUserName])

  useEffect(() => {
    setMounted(true)
    const sessionName = sessionStorage.getItem('kodigosat_session_name')
    if (sessionName) {
      onSetUserNameRef.current(sessionName)
    } else {
      setIsOpen(true)
    }
  }, []) // empty dep array — runs exactly once on mount

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const trimmed = nameInput.trim()
    if (trimmed) {
      sessionStorage.setItem('kodigosat_session_name', trimmed)
      onSetUserNameRef.current(trimmed)
    }
    setIsOpen(false)
  }

  const handleSkip = () => {
    setIsOpen(false)
  }

  if (!mounted || !isOpen) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'rgba(0,0,0,0.85)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
      }}
    >
      <div
        className="hc-card animate-deal"
        style={{
          maxWidth: '480px',
          width: '100%',
          padding: '32px 28px',
          textAlign: 'center',
          background: 'var(--c-white)',
          color: 'var(--c-black)',
          border: 'var(--bdr-thick)',
          boxShadow: '8px 8px 0 var(--c-black)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '0.75rem',
            letterSpacing: '0.1em',
            marginBottom: '16px',
            color: 'var(--c-gray-600)',
          }}
        >
          {t.modal.bootTag}
        </div>

        <h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '1.5rem',
            marginBottom: '12px',
            lineHeight: 1.2,
          }}
        >
          {t.modal.title}
        </h2>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.9375rem',
            color: 'var(--c-gray-600)',
            marginBottom: '24px',
          }}
        >
          {t.modal.subtitle}
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <input
            type="text"
            value={nameInput}
            onChange={(e) => setNameInput(e.target.value)}
            placeholder={t.modal.placeholder}
            autoFocus
            style={{
              padding: '12px 16px',
              fontFamily: 'var(--font-mono)',
              fontSize: '1rem',
              border: 'var(--bdr-normal)',
              background: 'var(--c-white)',
              color: 'var(--c-black)',
              outline: 'none',
              textAlign: 'center',
            }}
          />

          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center' }}>
            <button type="submit" className="hc-btn hc-btn--primary hc-btn--lg" style={{ flex: 1 }}>
              {t.modal.btnEnter}
            </button>
            <button
              type="button"
              onClick={handleSkip}
              className="hc-btn"
              style={{ fontSize: '0.75rem' }}
            >
              {t.modal.btnSkip}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

