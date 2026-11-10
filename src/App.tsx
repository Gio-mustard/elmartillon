import { CatalogSection } from './components/home/CatalogSection'
import { CategoriesSection } from './components/home/CategoriesSection'
import { HeroCarousel } from './components/home/HeroCarousel'
import { SelectionSection } from './components/home/SelectionSection'
import { VisitSection } from './components/home/VisitSection'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { NavBar } from './components/layout/NavBar'
import { TopBar } from './components/layout/TopBar'
import { useCatalog } from './hooks/useCatalog'

function App() {
  // Estado compartido entre el buscador del header y el catálogo.
  const catalog = useCatalog()

  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <Header catalog={catalog} />
      <NavBar />

      <main className="flex-1">
        <HeroCarousel />
        <SelectionSection />
        <CategoriesSection />
        <CatalogSection catalog={catalog} />
        <VisitSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
