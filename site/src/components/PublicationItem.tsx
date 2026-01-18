import { FiExternalLink, FiFileText, FiCode, FiMonitor, FiVideo, FiPlay, FiImage, FiUpload, FiGlobe } from "react-icons/fi"

interface LinkItem {
  url: string
  label?: string
  type: 'paper' | 'pdf' | 'code' | 'demo' | 'video' | 'presentation' | 'poster' | 'slides' | 'website'
  isPrimary?: boolean
}

interface PublicationItemProps {
  title: string
  authors: string
  venue?: string
  doi?: string
  pdf?: string
  code?: string
  demo?: string
  video?: string
  thumbnail?: string
  id?: string
  highlightedPub?: string | null
  links?: LinkItem[]
}

export const PublicationItem = ({
  title,
  authors,
  venue,
  doi,
  pdf,
  code,
  demo,
  video,
  thumbnail,
  id,
  highlightedPub,
  links
}: PublicationItemProps) => {
  // Bold "Kiroong Choe" in authors list
  const formattedAuthors = authors.replace(/Kiroong Choe/g, '<strong>Kiroong Choe</strong>')

  const isHighlighted = id && highlightedPub === id

  // Helper function to get icon and default label for each link type
  const getLinkIcon = (type: LinkItem['type']) => {
    switch (type) {
      case 'paper':
        return { icon: FiExternalLink, defaultLabel: 'Paper' }
      case 'pdf':
        return { icon: FiFileText, defaultLabel: 'PDF' }
      case 'code':
        return { icon: FiCode, defaultLabel: 'Code' }
      case 'demo':
        return { icon: FiMonitor, defaultLabel: 'Try it' }
      case 'video':
        return { icon: FiVideo, defaultLabel: 'Video' }
      case 'presentation':
        return { icon: FiPlay, defaultLabel: 'Presentation' }
      case 'poster':
        return { icon: FiImage, defaultLabel: 'Poster' }
      case 'slides':
        return { icon: FiUpload, defaultLabel: 'Slides' }
      case 'website':
        return { icon: FiGlobe, defaultLabel: 'Website' }
    }
  }

  // Render links: use new links array if available, otherwise fall back to legacy fields
  const renderLinks = () => {
    if (links && links.length > 0) {
      return links.map((link, idx) => {
        const config = getLinkIcon(link.type)
        const Icon = config.icon
        const label = link.label || config.defaultLabel

        // Determine if primary: use override if specified, otherwise use default
        const isPrimary = link.isPrimary !== undefined
          ? link.isPrimary
          : (link.type === 'paper' || link.type === 'pdf' || link.type === 'video' || link.type === 'presentation')

        const className = isPrimary
          ? 'bg-gray-200 text-gray-700 hover:bg-gray-300'  // Primary: darker
          : 'bg-gray-100 text-gray-500 hover:bg-gray-200'  // Secondary: lighter

        return (
          <a
            key={idx}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-flex items-center gap-1 px-2 py-1 rounded text-xs transition-colors ${className}`}
          >
            <Icon size={10} /> {label}
          </a>
        )
      })
    }

    // Legacy fallback
    return (
      <>
        {doi && (
          <a href={doi} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors">
            <FiExternalLink size={10} /> Paper
          </a>
        )}
        {pdf && (
          <a href={pdf} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors">
            <FiFileText size={10} /> PDF
          </a>
        )}
        {code && (
          <a href={code} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors">
            <FiCode size={10} /> Code
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors">
            <FiMonitor size={10} /> Try it
          </a>
        )}
        {video && (
          <a href={video} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs hover:bg-gray-200 transition-colors">
            <FiVideo size={10} /> Video
          </a>
        )}
      </>
    )
  }

  const hasLinks = links?.length || doi || pdf || code || demo || video

  return (
    <div
      id={id}
      className={`transition-colors duration-500 ${isHighlighted ? 'bg-yellow-200' : ''} flex gap-4 items-start`}
    >
      {thumbnail && (
        <div className="flex-shrink-0">
          <img
            src={thumbnail}
            alt={title}
            className="w-24 h-24 object-cover rounded"
          />
        </div>
      )}
      <div className="flex-1 min-w-0 -mt-1">
        <p className="font-medium text-gray-800 leading-none m-0 p-0">{title}</p>
        <p className="text-gray-500 text-sm mt-0.5" dangerouslySetInnerHTML={{ __html: formattedAuthors }} />
        {venue && <p className="text-sm text-gray-500 mt-1" dangerouslySetInnerHTML={{ __html: venue }} />}
        {hasLinks && (
          <div className="flex items-center gap-2 mt-2 flex-wrap">
            {renderLinks()}
          </div>
        )}
      </div>
    </div>
  )
}
