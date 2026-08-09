import type { Metadata } from 'next'
import { Silkscreen, Courier_Prime, Inter } from 'next/font/google'
import './globals.css'
import '../styles/sections.css'
import CardNav from '@/components/CardNav'
import WhatsAppBadge from '@/components/WhatsAppBadge'
import { LanguageProvider } from '@/context/LanguageContext'

/* ── Google Fonts via next/font (zero FOUT, self-hosted) ── */
const silkscreen = Silkscreen({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-silkscreen',
  display: 'swap',
})

const courierPrime = Courier_Prime({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  variable: '--font-courier-prime',
  display: 'swap',
})

/* Inter — body / paragraph / UI text */
const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

/* ── Site Metadata ─────────────────────────────────────── */
export const metadata: Metadata = {
  title: 'codigosatdev — Full Stack Developer',
  description:
    'Full Stack WordPress Developer, Headless WP & Next.js, Shopify y experto en Infraestructura Web y Seguridad. Sitios web que duran.',
  keywords: [
    'WordPress Headless',
    'Next.js',
    'Shopify',
    'Cloudflare',
    'Server Security',
    'Full Stack Developer',
    'codigosatdev',
  ],
  openGraph: {
    title: 'codigosatdev — Full Stack Developer',
    description:
      'WordPress Headless, Next.js, Shopify, Cloudflare y Server Security. Soluciones web que funcionan en producción.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://codigosatdev.com',
    siteName: 'codigosatdev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'codigosatdev — Full Stack Developer',
    description: 'WordPress Headless, Next.js, Shopify, Cloudflare y Server Security.',
  },
  icons: {
    icon: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://codigosatdev.com',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${silkscreen.variable} ${courierPrime.variable} ${inter.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <LanguageProvider>
          <div className="app">
            <div className="crt-overlay" aria-hidden="true" />
            <CardNav />
            {children}
            <WhatsAppBadge />
          </div>
        </LanguageProvider>
      </body>
    </html>
  )
}
