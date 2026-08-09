'use client'

import { useState, useEffect, useRef } from 'react'
import { IconWhatsApp } from '@/components/icons'
import { useLanguage } from '@/context/LanguageContext'
import type { ShowcaseProject } from '@/types'

interface ProjectModalProps {
  project: ShowcaseProject
  onClose: () => void
}

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? '584245422849'

/* ── Lightbox Overlay for Fullscreen Images ── */
function Lightbox({ src, alt, onClose }: { src: string; alt: string; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div
      className="lb-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      role="dialog"
      aria-modal="true"
      aria-label={`Vista completa: ${alt}`}
    >
      <div className="lb-toolbar">
        <span className="lb-toolbar__title">{alt}</span>
        <button className="lb-toolbar__close" onClick={onClose} aria-label="Cerrar vista completa">
          ✕ CERRAR
        </button>
      </div>

      <div className="lb-scroll-area">
        <img src={src} alt={alt} className="lb-full-img" />
      </div>
    </div>
  )
}

/* ── Device Media Component with Native Video Fullscreen ── */
function DeviceMedia({
  video,
  deviceImage,
  image,
  alt,
  onZoom,
}: {
  video?: string
  deviceImage?: string
  image?: string
  alt: string
  onZoom?: (src: string) => void
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null)

  const handleFullscreen = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!videoRef.current) return
    const el = videoRef.current as any
    if (el.requestFullscreen) {
      el.requestFullscreen()
    } else if (el.webkitRequestFullscreen) {
      el.webkitRequestFullscreen()
    } else if (el.msRequestFullscreen) {
      el.msRequestFullscreen()
    }
  }

  if (video) {
    return (
      <div style={{ position: 'relative', width: '100%', height: '100%' }}>
        <video
          ref={videoRef}
          src={video}
          autoPlay
          muted
          loop
          playsInline
          className="pm-device__media"
        />
        <button
          type="button"
          onClick={handleFullscreen}
          className="pm-video-fullscreen-btn"
          title="Ver video en pantalla completa HD (1080p)"
        >
          <span style={{ fontSize: '0.8rem' }}>🗖 PANTALLA COMPLETA 1080P</span>
        </button>
      </div>
    )
  }

  const src = deviceImage || image
  if (!src) return <div className="pm-device__no-preview">[ Sin captura ]</div>

  if (onZoom) {
    return (
      <button
        type="button"
        onClick={() => onZoom(src)}
        className="pm-device__zoom-btn"
        title="Haz clic para ampliar la imagen completa"
      >
        <img src={src} alt={alt} className="pm-device__media" />
        <span className="pm-device__zoom-hint">🔍 AMPLIA LA IMAGEN</span>
      </button>
    )
  }

  return <img src={src} alt={alt} className="pm-device__media" />
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const { lang } = useLanguage()
  const isEn = lang === 'en'
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null)

  const title = (isEn && project.titleEn) ? project.titleEn : project.title
  const desc = (isEn && project.descEn) ? project.descEn : project.desc
  const metric = (isEn && project.metricEn) ? project.metricEn : project.metric

  const isVideo = Boolean(project.video)
  const hasMedia = Boolean(project.video || project.image || project.imageDesktop)

  const waText = encodeURIComponent(
    isEn
      ? `Hello Agustín, I saw the project "${title}" in your portfolio and I would like to consult about a project.`
      : `Hola Agustín, vi el proyecto "${title}" en tu portafolio y quiero consultar por un proyecto.`
  )

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && !lightboxSrc) onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, lightboxSrc])

  return (
    <>
      {lightboxSrc && (
        <Lightbox
          src={lightboxSrc}
          alt={`Captura completa — ${title}`}
          onClose={() => setLightboxSrc(null)}
        />
      )}

      <div
        className="pm-overlay"
        role="dialog"
        aria-modal="true"
        aria-label={`${isEn ? 'Case Study' : 'Caso de estudio'}: ${title}`}
        onClick={(e) => { if (e.target === e.currentTarget) onClose() }}
      >
        <div className="pm-panel">

          {/* ── Header CLI ── */}
          <div className="pm-header">
            <div className="pm-header-dots">
              <span className="pm-dot red" />
              <span className="pm-dot yellow" />
              <span className="pm-dot green" />
            </div>
            <span className="pm-header-title">
              {isVideo ? '🎬 ' : ''}{isEn ? 'CASE STUDY' : 'CASO DE ESTUDIO'} // {title.toUpperCase()}
            </span>
            {project.nda && <span className="pm-nda-badge">⚠ NDA ACTIVE</span>}
            <button className="pm-header-close-btn" onClick={onClose} aria-label={isEn ? 'Close case study' : 'Cerrar caso de estudio'}>
              ✕ {isEn ? 'CLOSE' : 'CERRAR'}
            </button>
          </div>

          {/* ── Body ── */}
          <div className="pm-body">

            {/* ── GSAP Video notice ── */}
            {isVideo && (
              <div className="pm-video-notice">
                <span className="pm-video-notice__icon">▶</span>
                <span>
                  {isEn ? (
                    <>This project features <strong>live GSAP animations</strong> — the video showcases real site interactions.</>
                  ) : (
                    <>Este proyecto incluye <strong>animaciones GSAP en vivo</strong> — el video muestra las interacciones reales del sitio.</>
                  )}
                </span>
              </div>
            )}

            {/* ── Zoom hint ── */}
            {hasMedia && !isVideo && (
              <div className="pm-zoom-hint-banner">
                <span>{isEn ? '🔍 Click on any device mockup to view full scrollable page' : '🔍 Haz clic en cualquier dispositivo para ver el sitio completo'}</span>
              </div>
            )}

            {/* ── Device Mockup Row ── */}
            {hasMedia && (
              <div className={`pm-devices-row ${isVideo ? 'pm-devices-row--video' : ''}`}>

                {/* Desktop */}
                <div className={`pm-device pm-device--desktop ${isVideo ? 'pm-device--desktop-video' : ''}`}>
                  <div className="pm-device__screen">
                    <DeviceMedia
                      video={project.video}
                      deviceImage={project.imageDesktop}
                      image={project.image}
                      alt={`Desktop — ${title}`}
                      onZoom={setLightboxSrc}
                    />
                  </div>
                  <div className="pm-device__stand" />
                  <div className="pm-device__base" />
                  <span className="pm-device__label">DESKTOP (FULL GSAP SCREEN)</span>
                </div>

                {/* Tablet — Omitted for video projects */}
                {!isVideo && (
                  <div className="pm-device pm-device--tablet">
                    <div className="pm-device__screen">
                      <DeviceMedia
                        video={project.video}
                        deviceImage={project.imageTablet}
                        image={project.image}
                        alt={`Tablet — ${title}`}
                        onZoom={setLightboxSrc}
                      />
                    </div>
                    <span className="pm-device__label">TABLET (IPAD PRO)</span>
                  </div>
                )}

                {/* Mobile — Omitted for video projects */}
                {!isVideo && (
                  <div className="pm-device pm-device--mobile">
                    <div className="pm-device__screen">
                      <DeviceMedia
                        video={project.video}
                        deviceImage={project.imageMobile}
                        image={project.image}
                        alt={`Mobile — ${title}`}
                        onZoom={setLightboxSrc}
                      />
                    </div>
                    <span className="pm-device__label">MOBILE (IPHONE)</span>
                  </div>
                )}
              </div>
            )}

            {/* ── CLI Info Block ── */}
            <div className="pm-cli-info">
              <div className="pm-cli-row">
                <span className="pm-cli-key">&gt; {isEn ? 'PROJECT' : 'PROYECTO'}</span>
                <span className="pm-cli-val">{title}</span>
              </div>
              {project.client && (
                <div className="pm-cli-row">
                  <span className="pm-cli-key">&gt; {isEn ? 'CLIENT' : 'CLIENTE'}</span>
                  <span className="pm-cli-val">
                    {project.nda ? `${project.client} (${isEn ? 'NDA signed' : 'NDA firmado'})` : project.client}
                  </span>
                </div>
              )}
              {project.year && (
                <div className="pm-cli-row">
                  <span className="pm-cli-key">&gt; {isEn ? 'YEAR' : 'AÑO'}</span>
                  <span className="pm-cli-val">{project.year}</span>
                </div>
              )}
              <div className="pm-cli-row">
                <span className="pm-cli-key">&gt; STACK</span>
                <span className="pm-cli-val">{project.stack.join(' + ')}</span>
              </div>
              {isVideo && (
                <div className="pm-cli-row">
                  <span className="pm-cli-key">&gt; {isEn ? 'ANIMATIONS' : 'ANIMACIONES'}</span>
                  <span className="pm-cli-val pm-cli-val--anim">GSAP — ScrollTrigger / Timeline</span>
                </div>
              )}
              <div className="pm-cli-row">
                <span className="pm-cli-key">&gt; {isEn ? 'RESULT' : 'RESULTADO'}</span>
                <span className="pm-cli-val pm-cli-val--highlight">{metric}</span>
              </div>
              <div className="pm-cli-divider" />
              <div className="pm-cli-row pm-cli-row--desc">
                <span className="pm-cli-key">&gt; {isEn ? 'DESCRIPTION' : 'DESCRIPCIÓN'}</span>
                <span className="pm-cli-val">{desc}</span>
              </div>
            </div>

            {/* Stack Chips */}
            <div className="pm-chip-row">
              {project.stack.map((tech) => (
                <span key={tech} className="portfolio-tech-chip">{tech.trim()}</span>
              ))}
              {isVideo && <span className="portfolio-tech-chip pm-gsap-chip">GSAP</span>}
            </div>

            {/* Footer Actions */}
            <div className="pm-actions">
              {!project.nda && project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="hc-btn hc-btn--primary">
                  {isEn ? 'VIEW LIVE SITE ↗' : 'VER SITIO EN VIVO ↗'}
                </a>
              )}
              <a
                href={`https://wa.me/${WA_NUMBER}?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hc-btn"
              >
                <IconWhatsApp />
                {project.nda
                  ? (isEn ? 'REQUEST PRIVATE DETAILS ↗' : 'SOLICITAR DETALLES PRIVADOS ↗')
                  : (isEn ? 'DISCUSS A SIMILAR PROJECT ↗' : 'HABLAR DE UN PROYECTO SIMILAR ↗')
                }
              </a>
            </div>

          </div>
        </div>
      </div>
    </>
  )
}
