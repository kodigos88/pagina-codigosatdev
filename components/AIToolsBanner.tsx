'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import gsap from 'gsap'

/* ─────────────────────────────────────────────────────────────
   AI Tools data
───────────────────────────────────────────────────────────── */
const AI_TOOLS = [
  {
    id: 'cursor',
    name: 'CURSOR',
    cat: 'AI CODE EDITOR',
    desc: 'Editor de código potenciado por IA. Autocompletado contextual, generación inteligente y debugging asistido que multiplica la velocidad de desarrollo.',
    descEn: 'AI-powered code editor with contextual autocomplete, intelligent code generation and assisted debugging that multiplies development speed.',
    badge: '⌨_',
  },
  {
    id: 'antigravity',
    name: 'ANTIGRAVITY',
    cat: 'GOOGLE DEEPMIND',
    desc: 'Agente de programación avanzado de Google DeepMind. Planifica, investiga y ejecuta tareas complejas de desarrollo de forma autónoma en el IDE.',
    descEn: 'Advanced coding agent by Google DeepMind. Plans, researches and autonomously executes complex development tasks directly inside the IDE.',
    badge: '◈_',
  },
  {
    id: 'windsurf',
    name: 'WINDSURF',
    cat: 'CODEIUM',
    desc: 'IDE de nueva generación con Cascade Flow: el agente entiende el contexto completo del proyecto y mantiene coherencia en cambios a gran escala.',
    descEn: 'Next-gen IDE with Cascade Flow: the agent understands full project context and maintains coherence across large-scale changes.',
    badge: '◎_',
  },
  {
    id: 'impeccable',
    name: 'IMPECCABLE',
    cat: 'AI DESIGN',
    desc: 'Generación de interfaces y assets de diseño mediante IA. Prototipado visual de alta fidelidad a partir de descripciones en lenguaje natural.',
    descEn: 'AI-driven UI and design asset generation. High-fidelity visual prototyping from natural language descriptions.',
    badge: '◉_',
  },
  {
    id: 'chatgpt',
    name: 'CHATGPT',
    cat: 'OPENAI',
    desc: 'Razonamiento avanzado, generación de código y análisis de arquitecturas. Asistente de IA líder en capacidades de comprensión y síntesis de problemas complejos.',
    descEn: 'Advanced reasoning, code generation and architecture analysis. Leading AI assistant for understanding and solving complex problems.',
    badge: '◐_',
  },
  {
    id: 'claude',
    name: 'CLAUDE',
    cat: 'ANTHROPIC',
    desc: 'Modelo de IA con ventana de contexto extendida, ideal para analizar bases de código grandes, refactorización a gran escala y documentación técnica detallada.',
    descEn: 'AI model with extended context window, ideal for analyzing large codebases, large-scale refactoring and detailed technical documentation.',
    badge: '◑_',
  },
  {
    id: 'deepseek',
    name: 'DEEPSEEK',

    cat: 'DEEPSEEK AI',
    desc: 'Modelo de razonamiento avanzado y código abierto. Excelente capacidad lógica para resolver algoritmos complejos, matemáticas y optimización de software.',
    descEn: 'Advanced open-source reasoning model. Excellent logical capability for solving complex algorithms, math, and software optimization.',
    badge: '⚡_',
  },
  {
    id: 'opencode',
    name: 'OPENCODE',
    cat: 'OPEN SOURCE AGENT',
    desc: 'Entorno y agente de código abierto para automatización de refactorización, generación de tests y asistencia de programación sin dependencias propietarias.',
    descEn: 'Open-source coding agent and environment for automated refactoring, test generation, and programming assistance.',
    badge: '⚙_',
  },
  {
    id: 'kimi',
    name: 'KIMI 3',
    cat: 'MOONSHOT AI',
    desc: 'IA especializada en procesamiento de contextos masivos. Análisis ultra-profundo de proyectos enteros, documentación extensa y repositorios masivos.',
    descEn: 'AI specialized in massive context processing. Ultra-deep analysis of entire projects, extensive documentation, and massive repos.',
    badge: '🌙_',
  },
  {
    id: 'qwen',
    name: 'QWEN',
    cat: 'ALIBABA CLOUD',
    desc: 'Potente modelo multilenguaje entrenado específicamente para desarrollo de software, generación de APIs y arquitectura de bases de datos.',
    descEn: 'Powerful multilingual model trained specifically for software development, API generation, and database architecture.',
    badge: '✦_',
  },
]


const DWELL_SECONDS = 4.0

export default function AIToolsCard() {
  const { lang } = useLanguage()
  const isEn = lang === 'en'

  const [activeIndex, setActiveIndex] = useState(0)
  const isTransitioningRef = useRef(false)
  const timerTweenRef = useRef<gsap.core.Tween | null>(null)
  const barRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  // Function to switch active index with smooth GSAP text transition
  const goToTool = useCallback((nextIndex: number) => {
    if (isTransitioningRef.current) return
    isTransitioningRef.current = true

    // Kill existing progress bar animation
    if (timerTweenRef.current) {
      timerTweenRef.current.kill()
    }

    const contentEl = contentRef.current
    if (contentEl) {
      // Slide out current text
      gsap.to(contentEl, {
        y: -16,
        opacity: 0,
        duration: 0.22,
        ease: 'power2.in',
        onComplete: () => {
          setActiveIndex(nextIndex)
          // Slide in new text
          gsap.fromTo(
            contentEl,
            { y: 16, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.35,
              ease: 'power2.out',
              onComplete: () => {
                isTransitioningRef.current = false
              },
            }
          )
        },
      })
    } else {
      setActiveIndex(nextIndex)
      isTransitioningRef.current = false
    }
  }, [])

  // Auto advance loop via GSAP timer tween
  useEffect(() => {
    const bar = barRef.current
    if (!bar) return

    // Reset bar scale
    gsap.set(bar, { scaleX: 0, transformOrigin: 'left center' })

    // Animate bar fill
    timerTweenRef.current = gsap.to(bar, {
      scaleX: 1,
      duration: DWELL_SECONDS,
      ease: 'none',
      onComplete: () => {
        const next = (activeIndex + 1) % AI_TOOLS.length
        goToTool(next)
      },
    })

    return () => {
      if (timerTweenRef.current) {
        timerTweenRef.current.kill()
      }
    }
  }, [activeIndex, goToTool])

  const activeTool = AI_TOOLS[activeIndex]

  return (
    <section
      id="ai-tools"
      className="card-section ait-section"
      aria-label={isEn ? 'AI Tools Used' : 'Herramientas de IA'}
    >
      <div className="ait-inner">
        {/* Header */}
        <div className="ait-header">
          <div className="section-tag" aria-hidden="true">
            {isEn ? '// AI_STACK' : '// AI_STACK'}
          </div>
          <h2 className="ait-title retro-glitch">
            {isEn ? 'Potenciado con IA' : 'Potenciado con IA'}
          </h2>
          <p className="ait-subtitle">
            {isEn
              ? 'The AI tools I use daily to build faster, smarter and better.'
              : 'Las herramientas de IA que uso a diario para construir más rápido, mejor y con mayor precisión.'}
          </p>
        </div>

        {/* Main Featured Card Container */}
        <div className="ait-featured-wrap">
          <div className="hc-card ait-featured">
            {/* Timer bar */}
            <div className="ait-bar-track" aria-hidden="true">
              <div ref={barRef} className="ait-bar-fill" />
            </div>

            {/* Content area with text transition */}
            <div ref={contentRef} className="ait-feat-content">
              <div className="ait-feat-top">
                <span className="ait-feat-badge">{activeTool.badge}</span>
                <span className="ait-feat-cat">// {activeTool.cat}</span>
              </div>
              <h3 className="ait-feat-name">{activeTool.name}</h3>
              <p className="ait-feat-desc">
                {isEn ? activeTool.descEn : activeTool.desc}
              </p>
            </div>

            {/* Dots / indicator counter */}
            <div className="ait-feat-counter" aria-hidden="true">
              {AI_TOOLS.map((tool, idx) => (
                <button
                  key={tool.id}
                  type="button"
                  onClick={() => goToTool(idx)}
                  className={`ait-dot ${idx === activeIndex ? 'ait-dot--active' : ''}`}
                  title={tool.name}
                  aria-label={`Ir a ${tool.name}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Thumbnails Row — Cleanly positioned below the featured card */}
        <div className="ait-thumbs-row" role="tablist" aria-label="Herramientas de IA">
          {AI_TOOLS.map((tool, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={tool.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => goToTool(idx)}
                className={`hc-card ait-thumb ${isActive ? 'ait-thumb--active' : ''}`}
              >
                <div className="ait-thumb-header">
                  <span className="ait-thumb-badge">{tool.badge}</span>
                  {isActive && <span className="ait-thumb-live-tag">ACTIVE</span>}
                </div>
                <span className="ait-thumb-name">{tool.name}</span>
                <span className="ait-thumb-cat">// {tool.cat}</span>
              </button>
            )
          })}
        </div>
      </div>
    </section>
  )
}
