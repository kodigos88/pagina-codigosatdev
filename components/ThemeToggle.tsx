'use client'

import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('kodigosat_theme')
    if (saved === 'dark') {
      setDark(true)
      document.documentElement.setAttribute('data-theme', 'dark')
    }
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    if (next) {
      document.documentElement.setAttribute('data-theme', 'dark')
      localStorage.setItem('kodigosat_theme', 'dark')
    } else {
      document.documentElement.removeAttribute('data-theme')
      localStorage.setItem('kodigosat_theme', 'light')
    }
  }

  // Avoid hydration mismatch — render nothing until mounted
  if (!mounted) return <div style={{ width: '56px' }} />

  return (
    <button
      onClick={toggle}
      aria-label={dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
      title={dark ? 'Modo claro' : 'Modo oscuro'}
      className="theme-toggle"
      aria-pressed={dark}
    >
      {/* Track */}
      <span className={`theme-toggle__track ${dark ? 'theme-toggle__track--dark' : ''}`}>
        {/* Sun icon */}
        <span className="theme-toggle__icon theme-toggle__icon--sun" aria-hidden="true">
          ☀
        </span>
        {/* Moon icon */}
        <span className="theme-toggle__icon theme-toggle__icon--moon" aria-hidden="true">
          ☽
        </span>
        {/* Thumb */}
        <span className={`theme-toggle__thumb ${dark ? 'theme-toggle__thumb--dark' : ''}`} />
      </span>
    </button>
  )
}
