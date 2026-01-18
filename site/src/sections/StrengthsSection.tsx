import { useState, useEffect } from "react"
import { FiExternalLink } from "react-icons/fi"
import {
  GifCrosslit,
  GifClvp,
  GifLitweaver,
  ImageCitenetInterface,
  ImageP101Interface,
  GifCrosslitAnalysis,
} from "../data/images"

interface StrengthsSectionProps {
  onImageClick: (imageSrc: string) => void
  onPubClick: (pubId: string) => void
}

interface SystemCarouselProps {
  systems: Array<{
    gif: string
    title: string
    venue: string
    description: string
    pubId: string
    duration: number
  }>
  onImageClick: (imageSrc: string) => void
  onPubClick: (pubId: string) => void
}

const SystemCarousel = ({ systems, onImageClick, onPubClick }: SystemCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [progress, setProgress] = useState(0)
  const [gifKey, setGifKey] = useState(0)

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === systems.length - 1 ? 0 : prev + 1))
    setProgress(0)
    setGifKey(prev => prev + 1)
  }

  const handleSegmentClick = (index: number) => {
    if (index === currentIndex) {
      // Same segment clicked - restart GIF
      setGifKey(prev => prev + 1)
      setProgress(0)
    } else {
      // Different segment clicked
      setCurrentIndex(index)
      setProgress(0)
      setGifKey(prev => prev + 1)
    }
  }

  const current = systems[currentIndex]
  const currentDuration = current.duration

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + (100 / (currentDuration * 10))
        if (newProgress >= 100) {
          goToNext()
          return 0
        }
        return newProgress
      })
    }, 100)

    return () => clearInterval(interval)
  }, [currentIndex, currentDuration])

  return (
    <div className="relative">
      <img
        src={`${current.gif}?t=${gifKey}`}
        className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
        alt={`${current.title} demo`}
        onClick={() => onImageClick(current.gif)}
      />

      {/* System Info */}
      <div className="mt-2">
        <p className="text-sm font-semibold text-gray-800 flex items-center gap-1">
          {current.title} ({current.venue})
          <button onClick={() => onPubClick(current.pubId)} className="text-gray-400 hover:text-gray-600">
            <FiExternalLink size={12} />
          </button>
        </p>
        <p className="text-xs text-gray-600 mt-1">{current.description}</p>
      </div>

      {/* Progress Segments */}
      <div className="flex justify-center gap-2 mt-3">
        {systems.map((_, index) => (
          <button
            key={index}
            onClick={() => handleSegmentClick(index)}
            className={`h-1.5 rounded-full transition-all relative overflow-hidden ${
              index === currentIndex ? 'w-16 bg-gray-300' : 'bg-gray-300 w-8'
            }`}
            aria-label={`Go to system ${index + 1}`}
          >
            {index === currentIndex && (
              <div
                className="absolute left-0 top-0 h-full bg-slate-700 transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  )
}

export const StrengthsSection = ({ onImageClick, onPubClick }: StrengthsSectionProps) => {
  const [activeTab, setActiveTab] = useState<'medical' | 'enterprise' | 'accessibility'>('medical')

  return (
    <section className="pt-3 pb-12 border-t">
      <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-gray-400 uppercase mb-8">STRENGTHS</h2>

        {/* 1:1 Layout - Mobile/xs: vertical, sm+: side by side */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {/* Left: Building Prototype Systems */}
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded">1</span>
              Building Prototype Systems
            </h3>
            <p className="text-gray-700 mb-4">
              I enjoy <strong>building systems</strong> that enable new ways of thinking, often with <strong>AI and visualizations</strong> as key enablers. Through careful analysis of user observations, I derive meaningful <strong>qualitative</strong> and <strong>quantitative</strong> insights that inform <strong>how future systems should evolve</strong> to better address real user needs.
            </p>

            {/* System GIF Carousel */}
            <SystemCarousel
              systems={[
                {
                  gif: GifCrosslit,
                  title: "CrossLit",
                  venue: "CHI 2026",
                  description: "Bidirectionally synchronized visual and text editor for literature review",
                  pubId: "pub-crosslit-2026",
                  duration: 14.9
                },
                {
                  gif: GifClvp,
                  title: "Chartvisor",
                  venue: "TVCG 2024",
                  description: "Visual question-answering interface for understanding complex charts",
                  pubId: "pub-chartvisor-2024",
                  duration: 8.0
                },
                {
                  gif: GifLitweaver,
                  title: "LitWeaver",
                  venue: "CHI EA 2024",
                  description: "Notion add-on for AI-assisted writing",
                  pubId: "pub-litweaver-2024",
                  duration: 13.56
                }
              ]}
              onImageClick={onImageClick}
              onPubClick={onPubClick}
            />
          </div>

          {/* Right: Real-World Collaborations */}
          <div>
            <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
              <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded">2</span>
              Real-World Collaborations
            </h3>
            <p className="text-gray-700 mb-4">
              <strong>Real-world work is messy, and I'm comfortable getting my hands dirty.</strong> I have collaborated with <strong>domain experts and practitioners</strong> to build meaningful products.
            </p>

            {/* Tab UI - xs/sm only */}
            <div className="md:hidden">
              {/* Tabs */}
              <div className="flex gap-1">
                <button
                  onClick={() => setActiveTab('medical')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-t-lg border border-gray-200 transition-colors ${
                    activeTab === 'medical'
                      ? 'bg-gray-50 text-gray-700 border-b-gray-50'
                      : 'bg-white text-gray-500 hover:bg-gray-50 border-b-gray-200'
                  }`}
                >
                  Medical
                </button>
                <button
                  onClick={() => setActiveTab('enterprise')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-t-lg border border-gray-200 transition-colors ${
                    activeTab === 'enterprise'
                      ? 'bg-gray-50 text-gray-700 border-b-gray-50'
                      : 'bg-white text-gray-500 hover:bg-gray-50 border-b-gray-200'
                  }`}
                >
                  Enterprise
                </button>
                <button
                  onClick={() => setActiveTab('accessibility')}
                  className={`px-3 py-1.5 text-sm font-medium rounded-t-lg border border-gray-200 transition-colors ${
                    activeTab === 'accessibility'
                      ? 'bg-gray-50 text-gray-700 border-b-gray-50'
                      : 'bg-white text-gray-500 hover:bg-gray-50 border-b-gray-200'
                  }`}
                >
                  Accessibility
                </button>
              </div>

              {/* Tab Content - attached to tabs */}
              <div className="bg-gray-50 border border-gray-200 rounded-b-lg rounded-tr-lg p-3 border-t-0">
                {activeTab === 'medical' && (
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-700">In medical domain,</strong> I collaborated with <span className="border-b border-dashed border-gray-400">Seoul National University Bundang Hospital</span>. I analyzed <strong>complex and inconsistent medical record data</strong> <button onClick={() => onPubClick('pub-medicine-2022')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(Medicine 2022)<FiExternalLink size={10} className="inline ml-0.5" /></button>, <button onClick={() => onPubClick('pub-cesarean-2022')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Perinat Med 2022)<FiExternalLink size={10} className="inline ml-0.5" /></button>; built <strong>unified data collection platform</strong> for a 10-hospital collaborative study <button onClick={() => onPubClick('pub-jmatern-2024')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Matern Fetal Neonatal Med 2024)<FiExternalLink size={10} className="inline ml-0.5" /></button>; and contributed features to a <strong>patient care application</strong> <button onClick={() => onPubClick('pub-jmir-2023')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Med Internet Res 2023)<FiExternalLink size={10} className="inline ml-0.5" /></button>.
                  </p>
                )}

                {activeTab === 'enterprise' && (
                  <p className="text-sm text-gray-600">
                    <strong className="text-gray-700">In enterprise domain,</strong> I worked on <strong>real-world data challenges</strong>: processing medical invoice pictures at <span className="border-b border-dashed border-gray-400">KYOBO Life Insurance</span> <button onClick={() => onPubClick('pub-invoice-2021')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(PacificVis 2021)<FiExternalLink size={10} className="inline ml-0.5" /></button> and building explainable data analysis systems for web search log datasets at <span className="border-b border-dashed border-gray-400">Naver Cloud</span> <button onClick={() => onPubClick('pub-tvcg-2025')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(TVCG 2025)<FiExternalLink size={10} className="inline ml-0.5" /></button>. I also investigated <strong>how AI can be integrated into real-world enterprise environments</strong> through a two-year intensive collaboration with <span className="border-b border-dashed border-gray-400">LG Electronics</span>, including contextual inquiry, AI system design and deployment, and user studies <span className="text-blue-700/70">(Working Project)</span>.
                  </p>
                )}

                {activeTab === 'accessibility' && (
                  <p className="text-sm text-gray-600">
                    In my early research experience, <strong>I worked with Korean facilities serving blind and low-vision communities to understand their diverse needs.</strong> Through collaboration with staff, teachers, and students at <span className="border-b border-dashed border-gray-400">Ilsan Professional Competency Development Center</span>, <span className="border-b border-dashed border-gray-400">Hanbitt High School</span>, and <span className="border-b border-dashed border-gray-400">Siloam Center For The Blind</span>, I developed systems that support data understanding for visually impaired users <button onClick={() => onPubClick('pub-soundglance-2019')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(CHI EA 2019)<FiExternalLink size={10} className="inline ml-0.5" /></button>, <button onClick={() => onPubClick('pub-iss-2019')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(ISS Demo 2019)<FiExternalLink size={10} className="inline ml-0.5" /></button>.
                  </p>
                )}
              </div>
            </div>

            {/* Card List - md/lg only */}
            <div className="hidden md:block space-y-3">
              {/* Medical Domain */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-700">In medical domain,</strong> I collaborated with <span className="border-b border-dashed border-gray-400">Seoul National University Bundang Hospital</span>. I analyzed <strong>complex and inconsistent medical record data</strong> <button onClick={() => onPubClick('pub-medicine-2022')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(Medicine 2022)<FiExternalLink size={10} className="inline ml-0.5" /></button>, <button onClick={() => onPubClick('pub-cesarean-2022')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Perinat Med 2022)<FiExternalLink size={10} className="inline ml-0.5" /></button>; built <strong>unified data collection platform</strong> for a 10-hospital collaborative study <button onClick={() => onPubClick('pub-jmatern-2024')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Matern Fetal Neonatal Med 2024)<FiExternalLink size={10} className="inline ml-0.5" /></button>; and contributed features to a <strong>patient care application</strong> <button onClick={() => onPubClick('pub-jmir-2023')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Med Internet Res 2023)<FiExternalLink size={10} className="inline ml-0.5" /></button>.
                </p>
              </div>

              {/* Enterprise */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  <strong className="text-gray-700">In enterprise domain,</strong> I worked on <strong>real-world data challenges</strong>: processing medical invoice pictures at <span className="border-b border-dashed border-gray-400">KYOBO Life Insurance</span> <button onClick={() => onPubClick('pub-invoice-2021')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(PacificVis 2021)<FiExternalLink size={10} className="inline ml-0.5" /></button> and building explainable data analysis systems for web search log datasets at <span className="border-b border-dashed border-gray-400">Naver Cloud</span> <button onClick={() => onPubClick('pub-tvcg-2025')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(TVCG 2025)<FiExternalLink size={10} className="inline ml-0.5" /></button>. I also investigated <strong>how AI can be integrated into real-world enterprise environments</strong> through a two-year intensive collaboration with <span className="border-b border-dashed border-gray-400">LG Electronics</span>, including contextual inquiry, AI system design and deployment, and user studies <span className="text-blue-700/70">(Working Project)</span>.
                </p>
              </div>

              {/* Accessibility */}
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-3">
                <p className="text-sm text-gray-600">
                  In my early research experience, <strong>I worked with Korean facilities serving blind and low-vision communities to understand their diverse needs.</strong> Through collaboration with staff, teachers, and students at <span className="border-b border-dashed border-gray-400">Ilsan Professional Competency Development Center</span>, <span className="border-b border-dashed border-gray-400">Hanbitt High School</span>, and <span className="border-b border-dashed border-gray-400">Siloam Center For The Blind</span>, I developed systems that support data understanding for visually impaired users <button onClick={() => onPubClick('pub-soundglance-2019')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(CHI EA 2019)<FiExternalLink size={10} className="inline ml-0.5" /></button>, <button onClick={() => onPubClick('pub-iss-2019')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(ISS Demo 2019)<FiExternalLink size={10} className="inline ml-0.5" /></button>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
