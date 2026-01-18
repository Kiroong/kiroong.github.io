import { FiExternalLink } from "react-icons/fi"
import { Carousel } from "../components/Carousel"
import {
  GifCrosslit,
  GifClvp,
  GifLitweaver,
  ImageCitenetInterface,
  ImageP101Interface,
  GifCrosslitAnalysis,
  ImageQualLitweaver,
  ImageQualCitenet,
  ImageQuantClvp,
  ImageQuantCrosslit,
  ImageDsCrosslit,
  ImageDsClvp
} from "../data/images"

interface StrengthsSectionProps {
  onImageClick: (imageSrc: string) => void
  onPubClick: (pubId: string) => void
}

export const StrengthsSection = ({ onImageClick, onPubClick }: StrengthsSectionProps) => {
  return (
    <section className="py-12 border-t">
      <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-gray-400 uppercase mb-8">STRENGTHS</h2>

        {/* (1) Prototype Systems */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded">1</span>
            Building Prototype Systems
          </h3>
          <p className="text-gray-700 mb-4">
            I enjoy building systems that enable new ways of thinking, often with AI as a key enabler.
          </p>

          <div className="flex flex-wrap justify-center gap-6">
            <div className="max-w-[256px]">
              <img
                src={GifCrosslit}
                className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                alt="CrossLit demo"
                onClick={() => onImageClick(GifCrosslit)}
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-gray-800 flex items-center justify-center gap-1">
                  CrossLit (CHI 2026)
                  <button onClick={() => onPubClick('pub-crosslit-2026')} className="text-gray-400 hover:text-gray-600">
                    <FiExternalLink size={12} />
                  </button>
                </p>
                <p className="text-xs text-gray-600 mt-1">Bidirectionally synchronized visual and text editor for literature review</p>
              </div>
            </div>

            <div className="max-w-[256px]">
              <img
                src={GifClvp}
                className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                alt="Chartvisor demo"
                onClick={() => onImageClick(GifClvp)}
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-gray-800 flex items-center justify-center gap-1">
                  Chartvisor (TVCG 2024)
                  <button onClick={() => onPubClick('pub-chartvisor-2024')} className="text-gray-400 hover:text-gray-600">
                    <FiExternalLink size={12} />
                  </button>
                </p>
                <p className="text-xs text-gray-600 mt-1">Visual question-answering interface for understanding complex charts</p>
              </div>
            </div>

            <div className="max-w-[256px]">
              <img
                src={GifLitweaver}
                className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                alt="LitWeaver demo"
                onClick={() => onImageClick(GifLitweaver)}
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-gray-800 flex items-center justify-center gap-1">
                  LitWeaver (CHI EA 2024)
                  <button onClick={() => onPubClick('pub-litweaver-2024')} className="text-gray-400 hover:text-gray-600">
                    <FiExternalLink size={12} />
                  </button>
                </p>
                <p className="text-xs text-gray-600 mt-1">Notion add-on for AI-assisted writing</p>
              </div>
            </div>

            <div className="max-w-[256px]">
              <img
                src={ImageCitenetInterface}
                className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                alt="Citation Network Explorer demo"
                onClick={() => onImageClick(ImageCitenetInterface)}
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-gray-800 flex items-center justify-center gap-1">
                  Citation Browser (VIS 2024)
                  <button onClick={() => onPubClick('pub-citenet-2024')} className="text-gray-400 hover:text-gray-600">
                    <FiExternalLink size={12} />
                  </button>
                </p>
                <p className="text-xs text-gray-600 mt-1">Interactive visualization for exploring academic citation networks</p>
              </div>
            </div>

            <div className="max-w-[256px]">
              <img
                src={ImageP101Interface}
                className="w-full rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
                alt="Papers101 demo"
                onClick={() => onImageClick(ImageP101Interface)}
              />
              <div className="mt-2 text-center">
                <p className="text-sm font-semibold text-gray-800 flex items-center justify-center gap-1">
                  Papers101 (PacificVis 2021)
                  <button onClick={() => onPubClick('pub-papers101-2021')} className="text-gray-400 hover:text-gray-600">
                    <FiExternalLink size={12} />
                  </button>
                </p>
                <p className="text-xs text-gray-600 mt-1">Visual analytics system for paper search</p>
              </div>
            </div>
          </div>
        </div>

        {/* (2) Understanding User Behaviors */}
        <div className="mb-10">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded">2</span>
            Understanding User Behaviors
          </h3>
          <p className="text-gray-700 mb-4">
            I seek to understand how people use systems in realistic work settings.
          </p>

          <div className="flex justify-center mb-6">
            <div className="max-w-[512px]">
              <img src={GifCrosslitAnalysis} className="w-full rounded-lg shadow-md" alt="CrossLit study analysis" />
              <p className="text-xs text-gray-600 mt-2 text-center">
                For example, CrossLit study employed think-aloud protocol with extensive video analysis
              </p>
            </div>
          </div>

          <p className="text-gray-700 mb-8">
            Careful analysis of these observations yields meaningful <strong>qualitative</strong> and <strong>quantitative</strong> insights, which inform <strong>how future systems should evolve</strong> to better address real user needs.
          </p>

          <Carousel
            cards={[
              {
                title: "AI Performance Isn't Everything?",
                source: "LitWeaver; CHI EA 2024",
                image: ImageQualLitweaver,
                content: "Users respond differently to AI systems. Even when AI did not meet expectations a participant compensated by taking initiative which ultimately increased their confidence.",
                pubId: "pub-litweaver-2024"
              },
              {
                title: "Visuals and Text\nWork Best Together",
                source: "CrossLit; CHI 2026",
                // image: ImageQuantCrosslit,
                image: ImageDsCrosslit,
                content: "By statistically analyzing user behavior, we found that people move through different stages. Sometimes they rely on visuals, sometimes on text, and sometimes on both.",
                pubId: "pub-crosslit-2026"
              },
              {
                title: "AI Can Reduce User Engagement!",
                source: "Chartvisor; TVCG 2024",
                image: ImageQuantClvp,
                content: "With AI help, people felt more successful reading complex charts, but found fewer insights along the way.",
                pubId: "pub-chartvisor-2024"
              },
              {
                title: "Visual Communication\nIs Key for Engagement",
                source: "Chartvisor; TVCG 2024",
                image: ImageDsClvp,
                content: "While AI reduced user engagement, visual communication features brought users back to directly examine charts and data.",
                pubId: "pub-chartvisor-2024"
              },
              {
                title: "How do Researchers\nExplore Papers?",
                source: "Citation Browser; VIS 2024 Short",
                image: ImageQualCitenet,
                content: "Visualizing citation networks may look cool, but how useful are they really? Deployment of a citation network browser revealed patterns in what researchers truly care about.",
                pubId: "pub-citenet-2024"
              },
            ]}
            onPubClick={onPubClick}
          />
        </div>

        {/* (3) Domain Expert Collaboration */}
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2 flex items-center gap-2">
            <span className="bg-gray-200 text-gray-700 text-sm px-2 py-0.5 rounded">3</span>
            Domain Expert Collaboration
          </h3>
          <p className="text-gray-700 mb-4">
            Real-world work is messy, and I'm comfortable getting my hands dirty. I collaborate with domain experts and practitioners to build meaningful products.
          </p>

          <div className="space-y-4">
            {/* Medical Domain */}
            <p className="text-gray-700">
              <strong>In medical domain,</strong> I collaborated with <span className="border-b border-dashed border-gray-400">Seoul National University Bundang Hospital</span>. I <strong>analyzed complex and inconsistent medical record data</strong> <button onClick={() => onPubClick('pub-medicine-2022')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(Medicine 2022<FiExternalLink size={10} className="inline ml-0.5" /></button>, <button onClick={() => onPubClick('pub-cesarean-2022')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">J Perinat Med 2022)<FiExternalLink size={10} className="inline ml-0.5" /></button>; built <strong>unified data collection platform</strong> for a 10-hospital collaborative study <button onClick={() => onPubClick('pub-jmatern-2024')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Matern Fetal Neonatal Med 2024)<FiExternalLink size={10} className="inline ml-0.5" /></button>; and contributed features to a <strong>patient care application</strong> <button onClick={() => onPubClick('pub-jmir-2023')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(J Med Internet Res 2023)<FiExternalLink size={10} className="inline ml-0.5" /></button>.
            </p>

            {/* Enterprise */}
            <p className="text-gray-700">
              <strong>In enterprise domain,</strong> I worked on <strong>real-world data challenges</strong>: processing medical invoice pictures at <span className="border-b border-dashed border-gray-400">KYOBO Life Insurance</span> <button onClick={() => onPubClick('pub-invoice-2021')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(PacificVis 2021)<FiExternalLink size={10} className="inline ml-0.5" /></button> and building explainable data analysis systems for web search log datasets at <span className="border-b border-dashed border-gray-400">Naver Cloud</span> <button onClick={() => onPubClick('pub-tvcg-2025')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(TVCG 2025)<FiExternalLink size={10} className="inline ml-0.5" /></button>. I also investigated <strong>how AI can be integrated into real-world enterprise environments</strong> through a two-year intensive collaboration with <span className="border-b border-dashed border-gray-400">LG Electronics</span>, including contextual inquiry, AI system design and deployment, and user studies <span className="text-blue-700/70">(Working Project)</span>.
            </p>

            {/* Early Research */}
            <p className="text-gray-700">
              In my early research experience, <strong>I worked with Korean facilities serving blind and low-vision communities to understand their diverse needs.</strong> Through collaboration with staff, teachers, and students at <span className="border-b border-dashed border-gray-400">Ilsan Professional Competency Development Center</span>, <span className="border-b border-dashed border-gray-400">Hanbitt High School</span>, and <span className="border-b border-dashed border-gray-400">Siloam Center For The Blind</span>, I developed systems that support data understanding for visually impaired users <button onClick={() => onPubClick('pub-soundglance-2019')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">(CHI EA 2019<FiExternalLink size={10} className="inline ml-0.5" /></button>, <button onClick={() => onPubClick('pub-iss-2019')} className="inline-flex items-center gap-0.5 text-blue-700/70 hover:text-blue-900 transition-colors">ISS Demo 2019)<FiExternalLink size={10} className="inline ml-0.5" /></button>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
