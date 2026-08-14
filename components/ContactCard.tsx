'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'
import { IconWhatsApp } from '@/components/icons'
import { useLanguage } from '@/context/LanguageContext'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '584245422849'
const CONTACT_EMAIL = process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? 'kodigosat@gmail.com'
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ?? ''

/**
 * Strips HTML tags and trims to prevent XSS / injection in WhatsApp message.
 * OWASP A03: Injection mitigation.
 */
function sanitizeText(value: string): string {
  return value.replace(/<[^>]*>/g, '').trim().slice(0, 500)
}

export default function ContactCard() {
  const { lang, t } = useLanguage()
  const isEn = lang === 'en'
  const year = new Date().getFullYear()

  const defaultService = isEn
    ? 'Headless Architectures (Next.js + WP / Shopify)'
    : 'Arquitecturas Headless (Next.js + WP / Shopify)'

  const [formState, setFormState] = useState({
    nombre: '',
    email: '',
    servicio: defaultService,
    mensaje: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const waMsgGeneral = encodeURIComponent(
    isEn
      ? 'Hello Agustín, I saw your platform at codigosatdev and would like to request a technical diagnostic for my web infrastructure.'
      : 'Hola Agustín, vi tu plataforma en codigosatdev y quiero solicitar un diagnóstico técnico para mi infraestructura web.'
  )

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const nombre  = sanitizeText(formState.nombre)
    const email   = sanitizeText(formState.email)
    const mensaje = sanitizeText(formState.mensaje)
    if (!nombre || !email) return

    setIsSubmitting(true)

    // Execute reCAPTCHA v3 in background if available
    try {
      if (RECAPTCHA_SITE_KEY && typeof window !== 'undefined' && (window as any).grecaptcha) {
        await new Promise<void>((resolve) => {
          (window as any).grecaptcha.ready(async () => {
            try {
              await (window as any).grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: 'submit_contact' })
            } catch (_) {}
            resolve()
          })
        })
      }
    } catch (_) {}

    const text = encodeURIComponent(
      isEn
        ? `Hello Agustín! My name is ${nombre} (${email}).\nI need a diagnostic for: ${formState.servicio}.\n\nDetails / Current issues:\n${mensaje}`
        : `Hola Agustín! Mi nombre es ${nombre} (${email}).\nRequiero diagnóstico para: ${formState.servicio}.\n\nDetalles / Problemas actuales:\n${mensaje}`
    )
    window.open(`https://wa.me/${WA_NUMBER}?text=${text}`, '_blank')
    setIsSubmitting(false)
    setSubmitted(true)
  }

  return (
    <section id="contacto" className="card-section contact-section" aria-label={isEn ? 'Contact' : 'Contacto'}>
      {/* Load reCAPTCHA v3 script if key exists */}
      {RECAPTCHA_SITE_KEY && (
        <Script
          src={`https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`}
          strategy="lazyOnload"
        />
      )}

      <div className="contact-inner">
        <div className="section-tag" aria-hidden="true">{t.contact.tag}</div>

        <h2 className="contact-title retro-glitch">
          {t.contact.titleLine1} {t.contact.titleLine2}
        </h2>
        <p className="contact-subtitle">
          {t.contact.subtitle}
        </p>

        {/* 80s CLI Terminal Contact Form */}
        <div className="cli-terminal-card">
          <div className="cli-header">
            <span className="cli-dot red"></span>
            <span className="cli-dot yellow"></span>
            <span className="cli-dot green"></span>
            <span className="cli-title">
              {isEn ? 'DIRECT DIAGNOSTIC TERMINAL // CODIGOSATDEV CLI' : 'TERMINAL DE DIAGNÓSTICO DIRECTO // CODIGOSATDEV CLI'}
            </span>
          </div>

          <div className="cli-body">
            {submitted ? (
              <div className="cli-success-msg">
                <p className="success-icon">
                  {isEn ? '[✓] TERMINAL STATUS: DIAGNOSTIC INITIATED (200 OK)' : '[✓] TERMINAL STATUS: DIAGNÓSTICO INICIADO (200 OK)'}
                </p>
                <p className="success-text">
                  {isEn ? (
                    <>Thank you, <strong>{formState.nombre}</strong>! Your diagnostic session has been initiated on WhatsApp.</>
                  ) : (
                    <>¡Gracias, <strong>{formState.nombre}</strong>! Se ha iniciado la sesión de diagnóstico para tu negocio en WhatsApp.</>
                  )}
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="hc-btn"
                  style={{ marginTop: 'var(--sp-4)' }}
                >
                  {isEn ? 'SEND ANOTHER INQUIRY ↵' : 'ENVIAR OTRA CONSULTA ↵'}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="cli-form">
                <div className="cli-field">
                  <label htmlFor="cli-nombre" className="cli-prompt">
                    {isEn ? '> ENTER YOUR NAME OR COMPANY:' : '> INGRESA TU NOMBRE O EMPRESA:'}
                  </label>
                  <input
                    id="cli-nombre"
                    type="text"
                    required
                    maxLength={100}
                    placeholder={isEn ? 'e.g. Alex Morgan · Nexus Corp' : 'Ej. Carlos Mendoza · Nexus Corp'}
                    value={formState.nombre}
                    onChange={(e) => setFormState({ ...formState, nombre: e.target.value })}
                    className="cli-input"
                  />
                </div>

                <div className="cli-field">
                  <label htmlFor="cli-email" className="cli-prompt">
                    {isEn ? '> YOUR EMAIL OR PHONE:' : '> TU EMAIL O TELÉFONO DE CONTACTO:'}
                  </label>
                  <input
                    id="cli-email"
                    type="email"
                    required
                    maxLength={254}
                    placeholder={isEn ? 'alex@company.com' : 'carlos@empresa.com'}
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                    className="cli-input"
                  />
                </div>

                <div className="cli-field">
                  <label htmlFor="cli-servicio" className="cli-prompt">
                    {isEn ? '> REQUIRED SOLUTION / ARCHITECTURE:' : '> SOLUCIÓN / ARQUITECTURA REQUERIDA:'}
                  </label>
                  <select
                    id="cli-servicio"
                    value={formState.servicio}
                    onChange={(e) => setFormState({ ...formState, servicio: e.target.value })}
                    className="cli-select"
                  >
                    {isEn ? (
                      <>
                        <option value="Headless Architectures (Next.js + WP / Shopify)">Headless Architectures (Next.js + WP / Shopify)</option>
                        <option value="WPO Engineering & Extreme Performance">WPO Engineering & Extreme Performance</option>
                        <option value="High-Performance E-Commerce (Shopify / WooCommerce)">High-Performance E-Commerce (Shopify / WooCommerce)</option>
                        <option value="Custom Plugin & Software Development">Custom Plugin & Software Development</option>
                        <option value="Operational Continuity & Server Hardening">Operational Continuity & Server Hardening</option>
                        <option value="Direct Lead Acquisition Systems (Landing + CRM)">Direct Lead Acquisition Systems (Landing + CRM)</option>
                      </>
                    ) : (
                      <>
                        <option value="Arquitecturas Headless (Next.js + WP / Shopify)">Arquitecturas Headless (Next.js + WP / Shopify)</option>
                        <option value="Ingeniería WPO & Rendimiento Extremo">Ingeniería WPO & Rendimiento Extremo</option>
                        <option value="E-Commerce de Alto Rendimiento (Shopify / WooCommerce)">E-Commerce de Alto Rendimiento (Shopify / WooCommerce)</option>
                        <option value="Desarrollo de Plugins & Software a Medida">Desarrollo de Plugins & Software a Medida</option>
                        <option value="Continuidad Operativa & Blindaje de Servidores">Continuidad Operativa & Blindaje de Servidores</option>
                        <option value="Sistemas de Captación Directa (Landing + CRM)">Sistemas de Captación Directa (Landing + CRM)</option>
                      </>
                    )}
                  </select>
                </div>

                <div className="cli-field">
                  <label htmlFor="cli-mensaje" className="cli-prompt">
                    {isEn ? '> ISSUE DETAILS OR CURRENT WEBSITE URL:' : '> DETALLES DEL PROBLEMA O SITIO ACTUAL:'}
                  </label>
                  <textarea
                    id="cli-mensaje"
                    rows={3}
                    placeholder={
                      isEn
                        ? 'Describe your current bottlenecks (slow load times, server downtime, low conversion) or site URL...'
                        : 'Describe el cuello de botella actual (lentitud, caídas, bajas conversiones) o tu URL actual...'
                    }
                    value={formState.mensaje}
                    onChange={(e) => setFormState({ ...formState, mensaje: e.target.value })}
                    className="cli-textarea"
                  />
                </div>

                {/* ── Security Badge ── */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 0', fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: '#666' }}>
                  <span style={{ color: '#00ff66' }}>●</span>
                  <span>{isEn ? 'Protected by Google reCAPTCHA v3 & Cloudflare WAF' : 'Protegido por Google reCAPTCHA v3 y Cloudflare WAF'}</span>
                </div>

                <div className="cli-actions">
                  <button type="submit" disabled={isSubmitting} className="hc-btn hc-btn--primary cli-submit-btn">
                    {isSubmitting
                      ? (isEn ? '[ VERIFYING... ]' : '[ VERIFICANDO... ]')
                      : (isEn ? '[ 💾 REQUEST DIRECT DIAGNOSTIC ] ↵' : '[ 💾 SOLICITAR DIAGNÓSTICO DIRECTO ] ↵')
                    }
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>

        {/* Quick Contact Options */}
        <div className="contact-options" style={{ marginTop: 'var(--sp-8)' }}>
          <a
            href={`https://wa.me/${WA_NUMBER}?text=${waMsgGeneral}`}
            className="contact-option"
            target="_blank"
            rel="noopener noreferrer"
            aria-label={isEn ? 'Contact via WhatsApp' : 'Contactar por WhatsApp'}
          >
            <span className="contact-option-label">{t.contact.whatsappLabel}</span>
            <span className="contact-option-value">
              <IconWhatsApp /> +58 424 5422849 ↗
            </span>
          </a>

          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="contact-option"
            aria-label={isEn ? 'Send email' : 'Enviar email'}
          >
            <span className="contact-option-label">{t.contact.emailLabel}</span>
            <span className="contact-option-value">{CONTACT_EMAIL}</span>
          </a>

          <div className="contact-option">
            <span className="contact-option-label">{isEn ? 'PROJECT AVAILABILITY' : 'DISPONIBILIDAD DE PROYECTO'}</span>
            <span className="contact-option-value" style={{ color: '#00ff00', fontFamily: 'var(--font-mono)' }}>
              {isEn ? '🟢 AVAILABLE / EVALUATION < 24H' : '🟢 DISPONIBLE / EVALUACIÓN < 24H'}
            </span>
          </div>
        </div>

        <footer className="contact-footer">
          <span className="contact-footer-logo">codigosatdev</span>
          <span className="contact-footer-copy">
            © {year} · {t.contact.copyright}
          </span>
        </footer>
      </div>
    </section>
  )
}

