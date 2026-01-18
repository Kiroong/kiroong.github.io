import { useState } from "react"
import { HeroSection } from "./sections/HeroSection"
import { ResearchFocusSection } from "./sections/ResearchFocusSection"
import { StrengthsSection } from "./sections/StrengthsSection"
import { PublicationsSection } from "./sections/PublicationsSection"
import { ImageModal } from "./components/ImageModal"

const App = () => {
  const [modalImage, setModalImage] = useState<string | null>(null)
  const [highlightedPub, setHighlightedPub] = useState<string | null>(null)

  const scrollToPub = (pubId: string) => {
    const element = document.getElementById(pubId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'center' })
      setHighlightedPub(pubId)
      setTimeout(() => setHighlightedPub(null), 2000)
    }
  }

  return (
    <div className="bg-white min-h-screen">
      <HeroSection />
      <ResearchFocusSection />
      <StrengthsSection
        onImageClick={setModalImage}
        onPubClick={scrollToPub}
      />
      <PublicationsSection highlightedPub={highlightedPub} />

      {/* Footer */}
      <footer className="py-8 bg-white border-t text-center text-sm text-gray-400">
        <p>Last updated: January 2026</p>
      </footer>

      <ImageModal imageSrc={modalImage} onClose={() => setModalImage(null)} />
    </div>
  )
}

export default App
