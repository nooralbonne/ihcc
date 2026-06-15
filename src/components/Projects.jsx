import { useState } from "react"
import { ArrowRight } from "lucide-react"
import "./Projects.css"

const FILTERS = ["All Works", "Construction", "Building"]

const PROJECTS = [
  {
    image: "/images/project-tower.png",
    title: "Al-Risha Power Station",
    cat: "Al-Mafraq, NEPCO",
    group: "Construction",
  },
  {
    image: "/images/project-industrial.png",
    title: "Ajloun University College - BAU",
    cat: "Ajloun, Al-Balqa Applied University",
    group: "Building",
  },
  {
    image: "/images/project-residential.png",
    title: "Al-Marj Primary School",
    cat: "Al-Karak, Ministry of Public Works",
    group: "Building",
  },
  {
    image: "/images/project-infrastructure.png",
    title: "Aqaba Comprehensive Health Center",
    cat: "Aqaba, Ministry of Public Works",
    group: "Construction",
  },
]

const CLIENTS = [
  { name: "National Electric Power Co.", logo: "/images/clients/nepco.png" },
  { name: "Al-Balqa Applied University", logo: "/images/clients/balqa.png" },
  { name: "Arab Potash Company", logo: "/images/clients/arab-potash.png" },
  { name: "Al-Qaser Housing Co.", logo: "/images/clients/al-qaser.png" },
  { name: "The Hashemite University", logo: "/images/clients/hashemite.png" },
  { name: "Civil Defense Directorate", logo: "/images/clients/civil-defense.png" },
  { name: "Cities & Villages Development Bank", logo: "/images/clients/cvdb.png" },
  { name: "Ministry of Public Works and Housing", logo: "/images/clients/mopwh.png" },
  { name: "Ministry of Agriculture", logo: "/images/clients/agriculture.png" },
  { name: "Ministry of Health", logo: "/images/clients/health.png" },
  { name: "Aqaba Development Corporation", logo: "/images/clients/adc.png" },
]

export default function Projects() {
  const [active, setActive] = useState("All Works")
  const [page, setPage] = useState(0)

  const visible = active === "All Works" ? PROJECTS : PROJECTS.filter((p) => p.group === active)

  // Two pages: the first row of cards, then slide to reveal the rest.
  const pages = visible.length > 3 ? 2 : 1

  const handleFilter = (f) => {
    setActive(f)
    setPage(0)
  }

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="projects__head">
          <div>
            <p className="eyebrow">We Work With Global Industries!</p>
            <h2 className="section-title">Featured Projects</h2>
          </div>
          <ul className="projects__filters">
            {FILTERS.map((f) => (
              <li key={f}>
                <button className={active === f ? "is-active" : ""} onClick={() => handleFilter(f)}>
                  {f === "All Works" ? "ALL Works" : f}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Carousel viewport: aligned to container on the left, bleeds off the right edge */}
        <div className="projects__viewport">
          <div
            className="projects__track"
            style={{ transform: `translateX(calc(${page} * -2 * (var(--card-w) + var(--card-gap))))` }}
          >
            {visible.map((p) => (
              <article className="project-card" key={p.title}>
                <img src={p.image || "/placeholder.svg"} alt={p.title} />
                <div className="project-card__overlay" />
                <div className="project-card__info">
                  <h3>{p.title}</h3>
                  <small>{p.cat}</small>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="projects__footer">
          <div className="projects__dots">
            {Array.from({ length: pages }).map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                className={page === i ? "is-active" : ""}
                onClick={() => setPage(i)}
              />
            ))}
          </div>
          <a href="#projects" className="projects__explore">
            Explore All Projects
            <span className="projects__explore-icon">
              <ArrowRight size={16} />
            </span>
          </a>
        </div>

        <div className="clients">
          <div className="clients__head">
            <p className="eyebrow">Trusted By Leading Organizations</p>
            <h3 className="clients__title">Our Clients &amp; Partners</h3>
          </div>
          <div className="clients__grid">
            {CLIENTS.map(({ name, logo }) => (
              <div className="clients__item" key={name} title={name}>
                <img src={logo || "/placeholder.svg"} alt={name} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
