import { useState } from "react"
import { FiChevronDown, FiChevronRight, FiExternalLink, FiFileText } from "react-icons/fi"

interface ToggleCardProps {
  title: string
  venue: string
  highlight: string
  children: React.ReactNode
  doi?: string
  pdf?: string
}

export const ToggleCard = ({
  title,
  venue,
  highlight,
  children,
  doi,
  pdf
}: ToggleCardProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-l-2 border-gray-200 pl-4 py-2 hover:border-gray-400 transition-colors">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full text-left flex items-start gap-2"
      >
        <span className="mt-1 text-gray-400">
          {isOpen ? <FiChevronDown size={14} /> : <FiChevronRight size={14} />}
        </span>
        <div className="flex-1">
          <p className="text-xs font-medium text-gray-700">{title}</p>
          <p className="text-xs text-gray-400">{venue}</p>
          <p className="text-xs text-gray-600 mt-1">{highlight}</p>
        </div>
      </button>

      {isOpen && (
        <div className="mt-3 ml-6 space-y-3">
          {children}
          {(doi || pdf) && (
            <div className="flex gap-3 text-xs text-gray-400">
              {doi && (
                <a href={doi} className="flex items-center gap-1 hover:text-gray-600">
                  <FiExternalLink size={12} /> DOI
                </a>
              )}
              {pdf && (
                <a href={pdf} className="flex items-center gap-1 hover:text-gray-600">
                  <FiFileText size={12} /> PDF
                </a>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
