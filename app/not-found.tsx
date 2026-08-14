import Link from 'next/link'

export const metadata = {
  title: '404 // Error de Sistema — codigosatdev',
  description: 'El sector o página solicitada no existe en la infraestructura de codigosatdev.',
}

export default function NotFound() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        background: 'var(--c-white)',
        color: 'var(--c-black)',
      }}
    >
      <div
        className="hc-card animate-deal"
        style={{
          maxWidth: '560px',
          width: '100%',
          padding: '36px 32px',
          textAlign: 'center',
          border: 'var(--bdr-thick)',
          boxShadow: '8px 8px 0 var(--c-black)',
        }}
      >
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            letterSpacing: '0.12em',
            color: 'var(--c-gray-600)',
            marginBottom: '16px',
          }}
        >
          ► SYSTEM ERROR // HTTP STATUS 404
        </div>

        <h1
          className="retro-glitch"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2rem, 6vw, 3.5rem)',
            lineHeight: 1.1,
            marginBottom: '16px',
          }}
        >
          404: SECTOR NO ENCONTRADO
        </h1>

        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.9375rem',
            color: 'var(--c-gray-800)',
            marginBottom: '28px',
            lineHeight: 1.6,
          }}
        >
          La ruta solicitada no existe o ha sido reubicada en la infraestructura.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link href="/" className="hc-btn hc-btn--primary hc-btn--lg">
            [ ↵ REGRESAR AL SISTEMA PRINCIPAL ]
          </Link>
        </div>
      </div>
    </main>
  )
}
