import HeroWithModal from '@/components/HeroWithModal'
import ServicesCard from '@/components/ServicesCard'
import StackCard from '@/components/StackCard'
import PortfolioCard from '@/components/PortfolioCard'
import ContactCard from '@/components/ContactCard'

/**
 * Home page — arquitectura 100% Next.js.
 * Los proyectos del portafolio viven en data/projects.ts
 * No se usa WordPress API.
 */
export default function HomePage() {
  return (
    <main className="card-scroll" aria-label="Contenido principal">
      <HeroWithModal />
      <ServicesCard />
      <StackCard />
      <PortfolioCard />
      <ContactCard />
    </main>
  )
}
