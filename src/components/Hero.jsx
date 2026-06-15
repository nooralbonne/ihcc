import { useState, useEffect, useCallback } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import "./Hero.css"

const SLIDES = [
  {
    image: "/images/hero-construction.png",
    title: "Building Jordan\nSince 1985",
    text: "A first-level building construction and maintenance company, trusted by government ministries, universities, and public institutions across Jordan for four decades.",
  },
  {
    image: "/images/about-rebar.png",
    title: "Building The\nFuture Together",
    text: "From foundations to finishing, Ismail Alhersh Contracting Company delivers quality construction with safety, precision and on-time handover.",
  },
  {
    image: "/images/worker-feature.png",
    title: "Engineered For\nExcellence",
    text: "Our skilled engineers and workers bring decades of combined experience to civil, mechanical, and electrical works on every project.",
  },
]

export default function Hero() {
  const [index, setIndex] = useState(0)

  const next = useCallback(() => setIndex((i) => (i + 1) % SLIDES.length), [])
  const prev = () => setIndex((i) => (i - 1 + SLIDES.length) % SLIDES.length)

  useEffect(() => {
    const id = setInterval(next, 6000)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="hero" id="home">
      {SLIDES.map((slide, i) => (
        <div
          key={i}
          className={`hero__slide ${i === index ? "hero__slide--active" : ""}`}
          style={{ backgroundImage: `url(${slide.image})` }}
          aria-hidden={i !== index}
        />
      ))}
      <div className="hero__overlay" />

      <div className="container hero__content">
        <p className="hero__eyebrow">Ismail Alhersh Contracting Company</p>
        <h1 className="hero__title">
          {SLIDES[index].title.split("\n").map((line, i) => (
            <span key={i}>{line}</span>
          ))}
        </h1>
        <p className="hero__text">{SLIDES[index].text}</p>
        <div className="hero__actions">
          <a href="#about" className="btn btn-yellow">
            More About Us
          </a>
          <a href="#services" className="btn btn-outline">
            Our Services
          </a>
        </div>
      </div>

      <button className="hero__arrow hero__arrow--left" onClick={prev} aria-label="Previous slide">
        <ArrowLeft size={20} />
      </button>
      <button className="hero__arrow hero__arrow--right" onClick={next} aria-label="Next slide">
        <ArrowRight size={20} />
      </button>

      <div className="hero__dots">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === index ? "hero__dot--active" : ""}`}
            onClick={() => setIndex(i)}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  )
}