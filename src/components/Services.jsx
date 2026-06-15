"use client"

import { useState } from "react"
import { Landmark, Building2, Network, Factory, Hammer, Cable } from "lucide-react"
import "./Services.css"

const SCOPE = [
  {
    icon: Landmark,
    title: "Government Building Construction Projects",
    text: "Public buildings, ministries and institutional facilities delivered to national standards and on schedule.",
  },
  {
    icon: Building2,
    title: "Private Sector Building Construction Projects",
    text: "Turnkey construction for private clients, from concept and planning through to final handover.",
  },
  {
    icon: Network,
    title: "Infrastructure Development Projects",
    text: "Roads, utilities, foundations and heavy civil works engineered for durability and long-term safety.",
  },
  {
    icon: Factory,
    title: "Commercial and Industrial Buildings",
    text: "Warehouses, factories and commercial complexes built for performance, efficiency and scale.",
  },
  {
    icon: Hammer,
    title: "Renovation and Rehabilitation Projects",
    text: "Reinforcement, restoration and modernization that extend the life and value of existing structures.",
  },
  {
    icon: Cable,
    title: "Mechanical, Electrical, and Plumbing (MEP) Works",
    text: "Complete MEP installation executed with precision as an integrated part of every project we deliver.",
  },
]

const PER_PAGE = 3

export default function Services() {
  const [page, setPage] = useState(0)
  const pageCount = Math.ceil(SCOPE.length / PER_PAGE)

  return (
    <section className="services section" id="services">
      <div className="container">
        <div className="services__head">
          <p className="eyebrow">Scope of Work </p>
          <h2 className="section-title">What We Build &amp; Deliver</h2>
        </div>

        <div className="services__viewport">
          <div
            className="services__track"
            style={{ transform: `translateX(-${page * 100}%)` }}
          >
            {Array.from({ length: pageCount }).map((_, p) => (
              <div className="services__page" key={p} aria-hidden={p !== page}>
                {SCOPE.slice(p * PER_PAGE, p * PER_PAGE + PER_PAGE).map(
                  ({ icon: Icon, title, text }) => (
                    <article className="service-card" key={title}>
                      <span className="service-card__icon">
                        <Icon size={30} />
                      </span>
                      <h3>{title}</h3>
                      <p>{text}</p>
                    </article>
                  ),
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="services__dots" role="tablist" aria-label="Scope of work pages">
          {Array.from({ length: pageCount }).map((_, i) => (
            <button
              key={i}
              role="tab"
              aria-selected={i === page}
              aria-label={`Show projects group ${i + 1}`}
              className={`services__dot${i === page ? " is-active" : ""}`}
              onClick={() => setPage(i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
