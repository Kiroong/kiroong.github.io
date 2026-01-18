import { PublicationItem } from "../components/PublicationItem"
import {
  workingProjects,
  publications2026,
  publications2025,
  publications2024,
  publications2023,
  publications2022,
  publications2021,
  publications2019
} from "../data/publications"

interface PublicationsSectionProps {
  highlightedPub: string | null
}

export const PublicationsSection = ({ highlightedPub }: PublicationsSectionProps) => {
  return (
    <section className="py-12 border-t">
      <div className="max-w-full xs:max-w-container-xs sm:max-w-container-sm md:max-w-container-md lg:max-w-container-lg mx-auto px-5">
        <h2 className="text-xl font-bold tracking-tight text-gray-400 uppercase mb-8">PUBLICATIONS</h2>
        <div className="space-y-4">
          {/* Working Projects */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">Working Projects</p>
            <div className="space-y-7">
              {workingProjects.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2026 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2026</p>
            <div className="space-y-7">
              {publications2026.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2025 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2025</p>
            <div className="space-y-7">
              {publications2025.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2024 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2024</p>
            <div className="space-y-7">
              {publications2024.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2023 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2023</p>
            <div className="space-y-7">
              {publications2023.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2022 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2022</p>
            <div className="space-y-7">
              {publications2022.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2021 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2021</p>
            <div className="space-y-7">
              {publications2021.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>

          {/* 2019 */}
          <div>
            <p className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">2019</p>
            <div className="space-y-7">
              {publications2019.map((pub, idx) => (
                <PublicationItem
                  key={idx}
                  {...pub}
                  highlightedPub={highlightedPub}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
