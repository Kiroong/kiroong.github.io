import { Carousel } from "../components/Carousel"
import {
  ImageQualLitweaver,
  ImageQualCitenet,
  ImageQuantClvp,
  ImageDsCrosslit,
  ImageDsClvp,
} from "../data/images"

interface FindingsSectionProps {
  onPubClick: (pubId: string) => void
}

export const FindingsSection = ({ onPubClick }: FindingsSectionProps) => {
  return (
    <section className="pt-8 pb-12 border-t">
      <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-blue-600 uppercase mb-8">KEY RESEARCH INSIGHTS</h2>

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
    </section>
  )
}
