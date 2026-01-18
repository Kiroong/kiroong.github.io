import { useRef, useEffect } from "react"
import { FiExternalLink } from "react-icons/fi"

interface CarouselCard {
  title: string
  source: string
  image: string
  content: string
  pubId?: string
}

interface CarouselProps {
  cards: CarouselCard[]
  onPubClick?: (pubId: string) => void
}

export const Carousel = ({ cards, onPubClick }: CarouselProps) => {
  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollTimeoutRef = useRef<number>()

  const CARD_WIDTH = 240
  const GAP = 12
  const CARD_TOTAL = CARD_WIDTH + GAP

  // Create enough copies for seamless infinite scroll
  const repeatedCards = [...cards, ...cards, ...cards, ...cards, ...cards]

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Start at middle position
    const startPosition = cards.length * 2 * CARD_TOTAL
    container.scrollLeft = startPosition

    const handleScroll = () => {
      // Clear existing timeout
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }

      // Wait for scroll to finish before checking position
      scrollTimeoutRef.current = setTimeout(() => {
        if (!container) return

        const scrollLeft = container.scrollLeft
        const singleSetWidth = cards.length * CARD_TOTAL
        const scrollWidth = container.scrollWidth
        const clientWidth = container.clientWidth

        // Seamlessly loop: when near end, jump to equivalent position at start
        if (scrollLeft >= scrollWidth - clientWidth - singleSetWidth) {
          container.scrollLeft = scrollLeft - singleSetWidth * 2
        }
        // When near start, jump to equivalent position at end
        else if (scrollLeft <= singleSetWidth) {
          container.scrollLeft = scrollLeft + singleSetWidth * 2
        }
      }, 100)
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    return () => {
      container.removeEventListener('scroll', handleScroll)
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current)
      }
    }
  }, [cards.length, CARD_TOTAL])

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return

    scrollRef.current.scrollBy({
      left: direction === 'left' ? -CARD_TOTAL : CARD_TOTAL,
      behavior: 'smooth'
    })
  }

  return (
    <div className="relative max-w-full">
      {/* Header */}
      <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">Example Findings From Studies</h4>

      {/* Navigation buttons */}
      <button
        onClick={() => scroll('left')}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors text-xl"
        aria-label="Previous"
      >
        ‹
      </button>
      <button
        onClick={() => scroll('right')}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 bg-white hover:bg-gray-50 border border-gray-300 rounded-full shadow-md flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors text-xl"
        aria-label="Next"
      >
        ›
      </button>

      {/* Carousel container - shows peek on both sides */}
      <div
        ref={scrollRef}
        className="flex gap-3 overflow-x-scroll scrollbar-hide pb-2 px-[calc(50%-120px)]"
        style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory'
        }}
      >
        {repeatedCards.map((card, idx) => (
          <div
            key={`card-${idx}`}
            className="flex-shrink-0 w-[240px] scroll-snap-align-center border border-gray-300 bg-white hover:shadow-sm transition-shadow p-3"
            style={{ scrollSnapAlign: 'center' }}
          >
            {/* Newspaper-style header */}
            <div className="border-b border-gray-300 pb-2 mb-2">
              <h4 className="text-[11px] font-bold text-gray-500 leading-tight mb-1 uppercase tracking-wide whitespace-pre-line text-center">
                {card.title}
              </h4>
              <p className="text-[9px] text-gray-500 italic flex items-center justify-center gap-1">
                Findings from {card.source}
                {card.pubId && onPubClick && (
                  <button
                    onClick={() => onPubClick(card.pubId!)}
                    className="text-gray-400 hover:text-gray-600 inline-flex"
                  >
                    <FiExternalLink size={10} />
                  </button>
                )}
              </p>
            </div>

            {/* Image */}
            <img
              src={card.image}
              className="w-full my-2"
              alt={card.title}
            />

            {/* Body text - newspaper column style */}
            <p className="text-[10px] text-gray-600 leading-relaxed font-serif">
              {card.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
