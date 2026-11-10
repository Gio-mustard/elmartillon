import { CatalogSection } from './components/home/CatalogSection'
import { CategoriesSection } from './components/home/CategoriesSection'
import { HeroCarousel } from './components/home/HeroCarousel'
import { SelectionSection } from './components/home/SelectionSection'
import { VisitSection } from './components/home/VisitSection'
import { Footer } from './components/layout/Footer'
import { Header } from './components/layout/Header'
import { NavBar } from './components/layout/NavBar'
import { TopBar } from './components/layout/TopBar'

function App() {
  return (
    <div className="flex min-h-dvh flex-col">
      <TopBar />
      <Header />
      <NavBar />

      <main className="flex-1">
        <HeroCarousel />
        <SelectionSection />
        <CategoriesSection />
        <CatalogSection />
        <VisitSection />
      </main>

      <Footer />
    </div>
  )
}

export default App
