import { ImageVision, ImageVision2 } from "../data/images"

export const ResearchFocusSection = () => {
  return (
    <section className="pb-12">
      <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-gray-400 uppercase mb-6">Research Focus</h2>

        {/* First Focus: Intelligent Systems */}
        <div className="mb-6">
          <div className="flex flex-col xs:flex-row gap-4 items-start xs:items-center">
            <img src={ImageVision} className="rounded flex-shrink-0 mx-auto xs:mx-0" style={{ width: '150px' }} alt="Research vision" />
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-800 mb-2">Intelligent Systems for <span className="text-blue-600">Human Visual Thinking</span></p>
              <p className="text-sm text-gray-700">
                Building <strong>interactive and intelligent systems</strong> that seamlessly support human sensemaking through <strong>visual thinking</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Second Focus: Human Authorship */}
        <div className="mb-6">
          <div className="flex flex-col xs:flex-row gap-4 items-start xs:items-center">
            <img src={ImageVision2} className="rounded flex-shrink-0 mx-auto xs:mx-0" style={{ width: '150px' }} alt="Human authorship in creative work" />
            <div className="flex-1">
              <p className="text-lg font-semibold text-gray-800 mb-2">Designing for <span className="text-blue-600">Human Authorship</span> in AI Systems</p>
              <p className="text-sm text-gray-700">
                Designing <strong>human-AI collaborative systems</strong> that preserve <strong>originality</strong>, <strong>accountability</strong>, and <strong>agency</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
