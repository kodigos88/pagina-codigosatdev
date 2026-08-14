'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { IconWhatsApp } from '@/components/icons'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '584245422849'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'kodigosat@gmail.com'
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

const WA_MSG = encodeURIComponent('Hola Agustín, vi tu plataforma en codigosatdev y quiero solicitar un diagnóstico técnico para mi infraestructura web.')

/**
 * Strips HTML tags and trims to prevent XSS / injection in WhatsApp message.
 * OWASP A03: Injection mitigation.
 */
function sanitizeText(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim().slice(0, 500)
}

export default function ContactCard() {
  const year = new Date().getFullYear()
  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    servicio: 'Arquitecturas Headless (Next.js + WP / Shopify)',
    mensaje: '',
  })
  const [captchaVerified, setCaptchaVerified] = useState(false)
  const [captchaError, setCaptchaError] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    // Global callback for Google reCAPTCHA v2
    (window as any).onCaptchaSuccess = () => {
      setCaptchaVerified(true)
      setCaptchaError(false)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const nombre  = sanitizeText(formState.nombre)
    const email   = sanitizeText(formState.email)
    const mensaje = sanitizeText(formState.mensaje)
    if (!nombre || !email) return

    if (!captchaVerified) {
      setCaptchaError(true)
      return
    }
    setCaptchaError(false)

    const text = encodeURIComponent(
      `Hola Agustín! Mi nombre es ${nombre} (${email}).\nRequiero diagnóstico para: ${formState.servicio}.\n\nDetalles / Problemas actuales:\n${mensaje}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="card-section contact-section" aria-label="Contacto">
      <div className="contact-inner">
        <div className="section-tag" aria-hidden="true">05 — DIAGNÓSTICO & DIRECT TERMINAL</div>

        <h2 className="contact-title retro-glitch">
          ¿Problemas de lentitud o caídas en tu sitio?
        </h2>
        <p className="contact-subtitle">
          Evaluemos tu infraestructura antes de presupuestar. Completa la terminal de mensaje o contáctame directamente por WhatsApp para agendar una llamada de diagnóstico.
        </p>

        {/* 80s CLI Terminal Contact Form */}
        <div className="cli-terminal-card">
          <div className="cli-header">
            <span className="cli-dot red"></span>
            <span className="cli-dot yellow"></span>
            <span className="cli-dot green"></span>
            <span className="cli-title">TERMINAL DE DIAGNÓSTICO DIRECTO // CODIGOSATDEV CLI</span>
          </div>

          <div className="cli-body">
            {submitted ? (
              <div className="cli-success-msg">
                <p className="success-icon">[✓] TERMINAL STATUS: DIAGNÓSTICO INICIADO (200 OK)</p>
                <p className="success-text">
                  ¡Gracias, <strong>{formState.nombre}</strong>! Se ha iniciado la sesión de diagnóstico para tu negocio en WhatsApp.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="hc-btn"
                  style={{ marginTop: 'var(--sp-4)' }}
                >
                  ENVIAR OTRA CONSULTA ↵
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cli-form">
                <div className="cli-field">
                  <label htmlFor="cli-nombre" className="cli-prompt">
                    &gt; INGRESA TU NOMBRE O EMPRESA:
                  </label>
                  <input
                    id="cli-nombre"
                    type="text"
                    required
                    maxLength={100}
                    placeholder="Ej. Carlos Mendoza · Nexus Corp"
                    value={formState.nombre}
                    onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    className="cli-input"
                  />
                </div>

                <div className="cli-field">
                  <label htmlFor="cli-email" className="cli-prompt">
                    &gt; TU EMAIL O TELÉFONO DE CONTACTO:
                  </label>
                  <input
                    id="cli-email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder="carlos@empresa.com"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="cli-input"
                  />
                </div>

                <div className="cli-field">
                  <label htmlFor="cli-servicio" className="cli-prompt">
                    &gt; SOLUCIÓN / ARQUITECTURA REQUERIDA:
                  </label>
                  <select
                    id="cli-servicio"
                    value={formState.servicio}
                    onChange={(e) => setFormState({ ...formState, servicio: e.target.value })}
                    className="cli-select"
                  >
                    <option value="Arquitecturas Headless (Next.js + WP / Shopify)">Arquitecturas Headless (Next.js + WP / Shopify)</option>
                    <option value="Ingeniería WPO & Rendimiento Extremo">Ingeniería WPO & Rendimiento Extremo</option>
                    <option value="E-Commerce de Alto Rendimiento (Shopify / WooCommerce)">E-Commerce de Alto Rendimiento (Shopify / WooCommerce)</option>
                    <option value="Desarrollo de Plugins & Software a Medida">Desarrollo de Plugins & Software a Medida</option>
                    <option value="Continuidad Operativa & Blindaje de Servidores">Continuidad Operativa & Blindaje de Servidores</option>
                    <option value="Sistemas de Captación Directa (Landing + CRM)">Sistemas de Captación Directa (Landing + CRM)</option>
                  </select>
                </div>

                <div className="cli-field">
                  <label htmlFor="cli-mensaje" className="cli-prompt">
                    &gt; DETALLES DEL PROBLEMA O SITIO ACTUAL:
                  </label>
                  <textarea
                    id="cli-mensaje"
                    rows={3}
                    placeholder="Describe el cuello de botella actual (lentitud, caídas, bajas conversiones) o tu URL actual..."
                    value={formState.mensaje}
                    onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                    className="cli-textarea"
                  />
                </div>

                {/* ── Security & Anti-Spam Verification Box ── */}
                <div
                  className="cli-field cli-recaptcha-box"
                  style={{
                    border: '1px solid #333',
                    background: '#111',
                    padding: '14px 16px',
                    margin: '16px 0',
                    borderRadius: '4px',
                  }}
                >
                  <label htmlFor="cli-captcha-check" className="cli-prompt" style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', margin: 0, color: captchaVerified ? '#00ff66' : '#fff' }}>
                    <input
                      id="cli-captcha-check"
                      type="checkbox"
                      checked={captchaVerified}
                      onChange={(e) => {
                        setCaptchaVerified(e.target.checked)
                        if (e.target.checked) setCaptchaError(false)
                      }}
                      style={{
                        width: '20px',
                        height: '20px',
                        cursor: 'pointer',
                        accentColor: '#00ff66',
                      }}
                    />
                    <span>
                      &gt; VERIFICACIÓN ANTI-SPAM: <strong>No soy un robot</strong> {captchaVerified ? '[VERIFICADO ✓]' : '[PENDIENTE]'}
                    </span>
                  </label>

                  {/* Google reCAPTCHA iframe container if loaded by browser */}
                  <div
                    className="g-recaptcha"
                    data-sitekey={RECAPTCHA_SITE_KEY}
                    data-callback="onCaptchaSuccess"
                    data-theme="dark"
                    style={{ marginTop: '12px' }}
                  />

                  {captchaError && (
                    <p style={{ color: '#ff4444', fontFamily: 'var(--font-mono)', fontSize: '0.75rem', marginTop: '8px' }}>
                      ⚠ ERROR: POR FAVOR MARCA LA CASILLA "NO SOY UN ROBOT" PARA HABILITAR EL ENVÍO.
                    </p>
                  )}
                </div>
                <Script
                  src={`https://www.google.com/recaptcha/api.js?hl=es`}
                  strategy="lazyOnload"
                />

                <div className="cli-actions">
                  <button type="submit" className="hc-btn hc-btn--primary cli-submit-btn">
                    [ 💾 SOLICITAR DIAGNÓSTICO DIRECTO ] ↵
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="contact-options" style={{ marginTop: 'var(--sp-8)' }}>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
            className="contact-option"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contactar por WhatsApp"
          >
            <span className="contact-option-label">WHATSAPP DIRECTO</span>
            <span className="contact-option-value">
              <IconWhatsApp /> +58 424 5422849 ↗
            </span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="contact-option"
            aria-label="Enviar email"
          >
            <span className="contact-option-label">CORREO DIRECTO</span>
            <span className="contact-option-value">{CONTACT_EMAIL}</span>
          </a>

          <div className="contact-option">
            <span className="contact-option-label">DISPONIBILIDAD DE PROYECTO</span>
            <span className="contact-option-value" style={{ color: '#00ff00', fontFamily: 'var(--font-mono)' }}>
              🟢 DISPONIBLE / EVALUACIÓN &lt; 24H
            </span>
          </div>
        </div>

        <footer className="contact-footer">
          <span className="contact-footer-logo">codigosatdev</span>
          <span className="contact-footer-copy">
            © {year} · Director de Tecnología (CTO) & Consultor Estratégico de Infraestructura Web
          </span>
        </footer>
      </div>
    </section>
  )
}
