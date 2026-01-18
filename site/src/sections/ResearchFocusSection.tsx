import { ImageVision, ImageVision2 } from "../data/images"

export const ResearchFocusSection = () => {
  return (
    <section className="py-12 border-t">
      <div className="max-w-full md:max-w-3xl lg:max-w-4xl mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-gray-400 uppercase mb-8">Research Focus</h2>

        {/* First Focus: Intelligent Systems */}
        <div className="mb-12">
          <p className="text-2xl font-semibold text-gray-800 mb-6">Intelligent Systems for <br className="md:hidden" /><span className="text-blue-600">Human Visual Thinking</span></p>
          <img src={ImageVision} className="w-1/2 mx-auto rounded mb-6" alt="Research vision" />
          <p className="text-gray-700">
            <strong>Human thought is free, flexible, and intuitive</strong>—yet rigid data structures often fail to capture it. My research focuses on building <strong>interactive and intelligent systems</strong> that seamlessly support human sensemaking. I focus primarily on supporting <strong>visual thinking</strong>, a way of understanding deeply natural to humans.
          </p>
        </div>

        {/* Second Focus: Human Authorship */}
        <div className="mb-6">
          <p className="text-2xl font-semibold text-gray-800 mb-6 text-center md:text-left">
            <span className="md:inline">Designing for</span><br className="md:hidden" />
            <span className="text-blue-600"> Human Authorship</span><span className="md:inline"> in AI Systems</span>
          </p>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <img src={ImageVision2} className="rounded flex-shrink-0 mx-auto md:mx-0" style={{ width: '150px' }} alt="Human authorship in creative work" />
            <p className="text-gray-700 flex-1">
              Authorship is increasingly at stake as AI systems participate in intellectual work. My research designs <strong>human-AI collaborative systems</strong> that support human sensemaking while preserving <strong>originality</strong>, <strong>accountability</strong>, and <strong>agency</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
