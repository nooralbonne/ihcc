import { useState, useEffect, useCallback } from "react"
import { ImageIcon, ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react"

/* A single empty photo slot — drop a real image in later. */
function PhotoSlot({ index, label, src }) {
  return (
    <div className="slot" aria-label={src ? `${label} photo ${index + 1}` : `${label} photo ${index + 1} placeholder`}>
      {src ? (
        <img src={src} alt={`${label} photo ${index + 1}`} />
      ) : (
        <>
          <ImageIcon size={26} strokeWidth={1.5} />
          <span>Photo {index + 1}</span>
        </>
      )}
    </div>
  )
}


/* ------------------------------------------------------------------ */
/* Carousel per project (arrows + dots) with click-to-zoom lightbox    */
/* ------------------------------------------------------------------ */
export function ProjectCarousel({ project }) {
  const imagePaths = project.imagePaths || []
  const count = Math.max(project.images || 0, imagePaths.length)
  const [active, setActive] = useState(0)
  const [zoomAt, setZoomAt] = useState(null)

  const go = useCallback((i) => setActive((i + count) % count), [count])
  const closeZoom = useCallback(() => setZoomAt(null), [])
  const nextZoom = useCallback(() => setZoomAt((i) => (i + 1) % count), [count])
  const prevZoom = useCallback(() => setZoomAt((i) => (i - 1 + count) % count), [count])

  useEffect(() => {
    if (zoomAt === null) return
    const onKey = (e) => {
      if (e.key === "Escape") closeZoom()
      if (e.key === "ArrowRight") nextZoom()
      if (e.key === "ArrowLeft") prevZoom()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [zoomAt, closeZoom, nextZoom, prevZoom])

  return (
    <div className="carousel">
      <div className="carousel__viewport">
        <div className="carousel__track" style={{ transform: `translateX(-${active * 100}%)` }}>
          {Array.from({ length: count }).map((_, i) => (
            <button
              type="button"
              className="carousel__slide"
              key={i}
              onClick={() => setZoomAt(i)}
              aria-label={`Enlarge ${project.title} photo ${i + 1}`}
            >
              <PhotoSlot index={i} label={project.title} src={imagePaths[i]} />
              <span className="carousel__zoom" aria-hidden="true">
                <ZoomIn size={16} /> Click to enlarge
              </span>
            </button>
          ))}
        </div>
      </div>

      <button
        className="carousel__arrow carousel__arrow--prev"
        onClick={() => go(active - 1)}
        aria-label="Previous"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        className="carousel__arrow carousel__arrow--next"
        onClick={() => go(active + 1)}
        aria-label="Next"
      >
        <ChevronRight size={20} />
      </button>

      <div className="carousel__dots">
        {Array.from({ length: count }).map((_, i) => (
          <button
            key={i}
            className={i === active ? "is-active" : ""}
            onClick={() => go(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>

      {/* Lightbox / zoom */}
      {zoomAt !== null && (
        <div className="lightbox" role="dialog" aria-modal="true" onClick={closeZoom}>
          <button className="lightbox__close" onClick={closeZoom} aria-label="Close gallery">
            <X size={22} />
          </button>
          <button
            className="lightbox__nav lightbox__nav--prev"
            onClick={(e) => {
              e.stopPropagation()
              prevZoom()
            }}
            aria-label="Previous"
          >
            <ChevronLeft size={26} />
          </button>
          <div className="lightbox__stage" onClick={(e) => e.stopPropagation()}>
            <PhotoSlot index={zoomAt} label={project.title} src={imagePaths[zoomAt]} />
            <p className="lightbox__caption">
              {project.title} — Photo {zoomAt + 1} of {count}
            </p>
          </div>
          <button
            className="lightbox__nav lightbox__nav--next"
            onClick={(e) => {
              e.stopPropagation()
              nextZoom()
            }}
            aria-label="Next"
          >
            <ChevronRight size={26} />
          </button>
        </div>
      )}
    </div>
  )
}
