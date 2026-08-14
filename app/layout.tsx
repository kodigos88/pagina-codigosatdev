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
  metadataBase: new URL('https://codigosatdev.com'),
  title: 'codigosatdev — Director de Tecnología (CTO) & Consultor de Infraestructura Web',
  description:
    'Consultoría estratégica de infraestructura web, arquitecturas Headless (Next.js + WordPress), tiendas Shopify a medida, ingeniería WPO (Core Web Vitals) y blindaje con Cloudflare.',
  keywords: [
    'Consultor CTO',
    'Director de Tecnología',
    'WordPress Headless',
    'Next.js',
    'Shopify a Medida',
    'Cloudflare WAF',
    'Ingeniería WPO',
    'Core Web Vitals',
    'Seguridad de Servidores',
    'codigosatdev',
  ],
  openGraph: {
    title: 'codigosatdev — Director de Tecnología (CTO) & Consultor de Infraestructura Web',
    description:
      'Infraestructura digital diseñada para facturar, no para romperse. Headless WordPress, Next.js, Shopify, WPO y Cloudflare.',
    type: 'website',
    locale: 'es_ES',
    url: 'https://codigosatdev.com',
    siteName: 'codigosatdev',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'codigosatdev — Consultor Estratégico & Arquitectura Web de Alto Rendimiento',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'codigosatdev — Director de Tecnología (CTO) & Consultor de Infraestructura Web',
    description: 'Headless WordPress, Next.js, Shopify, WPO Extremo y Seguridad Cloudflare.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
    apple: '/favicon.svg',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://codigosatdev.com',
  },
}

/* ── Schema.org JSON-LD Structured Data ─────────────────── */
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://codigosatdev.com/#website',
      url: 'https://codigosatdev.com',
      name: 'codigosatdev — Director de Tecnología (CTO) & Consultor Web',
      description: 'Consultoría Estratégica, Headless WordPress, Next.js, Shopify, WPO y Seguridad Web.',
      inLanguage: 'es-ES',
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://codigosatdev.com/#service',
      name: 'codigosatdev',
      url: 'https://codigosatdev.com',
      image: 'https://codigosatdev.com/og-image.png',
      description:
        'Consultoría técnica y desarrollo de infraestructura web de alto rendimiento, Headless WordPress, Next.js, Shopify y WPO.',
      telephone: '+584245422849',
      email: 'kodigosat@gmail.com',
      priceRange: '$$$',
      areaServed: 'Worldwide',
      serviceType: [
        'Headless WordPress & Next.js',
        'Ingeniería WPO & Rendimiento Extremo',
        'E-Commerce de Alto Rendimiento Shopify / WooCommerce',
        'Desarrollo de Plugins & Software a Medida',
        'Continuidad Operativa & Seguridad Cloudflare',
        'Sistemas de Captación Directa',
      ],
    },
    {
      '@type': 'Person',
      '@id': 'https://codigosatdev.com/#person',
      name: 'Agustín',
      alternateName: 'codigosatdev',
      url: 'https://codigosatdev.com',
      jobTitle: 'Director de Tecnología (CTO) & Consultor de Infraestructura Web',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`${silkscreen.variable} ${courierPrime.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
