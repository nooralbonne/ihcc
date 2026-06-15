import { useState } from "react"
import { ArrowLeft, ArrowRight, Quote } from "lucide-react"
import "./Testimonials.css"

const REVIEWS = [
  {
    text: "Since 1985, our priority has been delivering civil construction services to individuals, institutions and property management organizations across Jordan with quality and reliability.",
    name: "IHCC",
    role: "Established 1985",
  },
  {
    text: "We hold membership ID 1482 in the Jordanian Contractors Association as a first-level building construction and maintenance company, with experience spanning commercial structures, renovations, healthcare and education facilities.",
    name: "IHCC",
    role: "First-Level Contractor",
  },
  {
    text: "We have proudly contributed to more than 45 projects across Jordan's governorates, completing public sector contracts with a total value of up to JD 27.6 million.",
    name: "IHCC",
    role: "45+ Projects Completed",
  },
]

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const review = REVIEWS[index]

  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)

  return (
    <section className="testimonials section">
      <div className="container testimonials__inner">
        <p className="eyebrow testimonials__eyebrow">About IHCC</p>

        <Quote className="testimonials__quote-mark" size={64} aria-hidden="true" />

        <p className="testimonials__text">{review.text}</p>

        <div className="testimonials__author">
          <h4>{review.name}</h4>
          <span>{review.role}</span>
        </div>

        <div className="testimonials__nav">
          <button onClick={prev} aria-label="Previous testimonial">
            <ArrowLeft size={16} /> Prev
          </button>

          <div className="testimonials__dots">
            {REVIEWS.map((_, i) => (
              <button
                key={i}
                className={i === index ? "is-active" : ""}
                onClick={() => setIndex(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button onClick={next} aria-label="Next testimonial">
            Next <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}