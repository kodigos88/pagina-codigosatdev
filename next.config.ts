import type { NextConfig } from 'next'

// ─────────────────────────────────────────────────────────────────────────────
// Security Headers — OWASP A05: Security Misconfiguration
// Applied on every response via the headers() hook.
// ─────────────────────────────────────────────────────────────────────────────
const securityHeaders = [
  // Prevents clickjacking — blocks embedding in iframes from other origins
  { key: 'X-Frame-Options', value: 'SAMEORIGIN' },

  // Stops browsers from MIME-sniffing the content-type
  { key: 'X-Content-Type-Options', value: 'nosniff' },

  // Controls referrer information sent with requests
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },

  // Enables HSTS — forces HTTPS for 1 year (only enable once HTTPS is confirmed)
  { key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' },

  // Restricts browser features (camera, mic, geolocation, etc.)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), interest-cohort=()',
  },

  // Content Security Policy — prevents XSS and data injection attacks
  // OWASP A03: Injection
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      // Inline styles needed for CSS-in-JS / global CSS variables
      "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
      // Google Fonts + self
      "font-src 'self' https://fonts.gstatic.com",
      // Scripts: self + inline for Next.js hydration
      "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
      // Images: self + data URIs + blob (for portfolio screenshots)
      "img-src 'self' data: blob: https://codigosatdev.com",
      // API / fetch targets
      "connect-src 'self' https://codigosatdev.com",
      // WhatsApp redirect — external navigation only (not fetch)
      "form-action 'self'",
      // Block all plugins (Flash, etc.)
      "object-src 'none'",
      // Prevents framing from foreign origins
      "frame-ancestors 'self'",
      // Force HTTPS upgrade for mixed content
      'upgrade-insecure-requests',
    ].join('; '),
  },
]

const nextConfig: NextConfig = {
  reactStrictMode: true,

  // Security headers applied on every response
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ]
  },
}

export default nextConfig
