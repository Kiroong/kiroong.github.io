interface ImageModalProps {
  imageSrc: string | null
  onClose: () => void
}

export const ImageModal = ({ imageSrc, onClose }: ImageModalProps) => {
  if (!imageSrc) return null

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="relative max-w-7xl max-h-full">
        <img
          src={imageSrc}
          alt="Enlarged view"
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          onClick={(e) => e.stopPropagation()}
        />
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center hover:bg-opacity-70 transition-colors"
        >
          ✕
        </button>
      </div>
    </div>
  )
}
