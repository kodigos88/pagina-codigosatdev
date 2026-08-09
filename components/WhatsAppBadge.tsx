import { IconWhatsApp } from '@/components/icons'

const WA_NUMBER = process.env.NEXT_PUBLIC_WA_NUMBER ?? 'TUNUMERO'
const WA_MSG = encodeURIComponent('Hola, me interesa hablar sobre un proyecto')

export default function WhatsAppBadge() {
  return (
    <a
      href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
      className="wa-badge"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <IconWhatsApp />
      WhatsApp
    </a>
  )
}
