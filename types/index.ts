export interface StackCluster {
  label: string
  items: string[]
}

export interface NavCard {
  id: string
  label: string
}

// Portfolio project used in PortfolioCard and ProjectModal
export interface ShowcaseProject {
  id: number
  title: string
  titleEn?: string
  category: string
  desc: string
  descEn?: string
  stack: string[]
  metric: string
  metricEn?: string
  url: string
  status: string
  // Media — video takes priority over images when present
  video?: string          // URL de grabación (MP4/WebM) para proyectos con animaciones GSAP
  image?: string          // Foto genérica (fallback para todos los frames)
  imageDesktop?: string   // Captura específica del frame Desktop
  imageTablet?: string    // Captura específica del frame Tablet
  imageMobile?: string    // Captura específica del frame Mobile
  nda?: boolean           // Si está bajo NDA — ocultar URL, mostrar solo caso de estudio
  year?: string
  client?: string         // Nombre genérico del cliente (sector)
}

