import type { StackCluster, NavCard } from '@/types'

export const NAV_CARDS: NavCard[] = [
  { id: 'inicio',    label: '01 INICIO' },
  { id: 'servicios', label: '02 SERVICIOS' },
  { id: 'stack',     label: '03 STACK' },
  { id: 'portfolio', label: '04 PORTFOLIO' },
  { id: 'contacto',  label: '05 CONTACTO' },
]

export const STACK_DATA: StackCluster[] = [
  {
    label: 'FRONTEND',
    items: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'GraphQL'],
  },
  {
    label: 'CMS & E-COMMERCE',
    items: [
      'WordPress (Headless)',
      'Elementor PRO',
      'Plugins desde 0',
      'Desarrollo de Temas desde 0',
      'WooCommerce',
      'Shopify & Liquid',
    ],
  },
  {
    label: 'INFRA & SEGURIDAD',
    items: [
      'Cloudflare (WAF/CDN)',
      'Linux (Ubuntu/Debian)',
      'Nginx / Apache',
      'Fail2ban / UFW',
      'SSL/TLS, CSP',
    ],
  },
]
