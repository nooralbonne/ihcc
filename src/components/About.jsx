import { CheckCircle2, ArrowRight, ShieldCheck, Award, Leaf, Lightbulb, Users, HandshakeIcon } from "lucide-react"
import "./About.css"

const POINTS = [
  { label: "Safety First, Always", Icon: ShieldCheck },
  { label: "Uncompromising Quality", Icon: Award },
  { label: "Built on Integrity", Icon: CheckCircle2 },
  { label: "Collaboration & Respect", Icon: Users },
  { label: "Innovation in Construction", Icon: Lightbulb },
  { label: "Committed to Sustainability", Icon: Leaf },
]

const STATS = [
  { num: "1985", label: "Established & Trusted" },
  { num: "45+", label: "Projects Completed" },
  { num: "JD 27.6M", label: "Public Contracts Delivered" },
]

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container about__grid">
        {/* LEFT */}
        <div className="about__left">
          <p className="about__eyebrow">
            <span className="about__eyebrow-line" />
            Leading The Way In Building &amp; Civil Construction
          </p>

          <h2 className="about__title">
            Committed To Delivering High Quality Construction &amp;{" "}
            <span className="about__title-accent">Innovative Design</span>
          </h2>

          <p className="about__lead">
            Ismail Alhersh Contracting Company (IHCC) was founded in 1985 and is a trusted name in Jordanian
            construction. Holding membership ID 1482 in the Contractors Association as a first-level building
            construction and maintenance company, we have built a reputation for quality and reliability.
          </p>
          <p className="about__lead">
            From civil, mechanical and electrical works to commercial structures, schools, healthcare facilities and
            renovations, our integrated approach ensures every project is delivered with precision and care.
          </p>

          <ul className="about__points">
            {POINTS.map(({ label, Icon }) => (
              <li key={label} className="about__point">
                <span className="about__point-icon">
                  <Icon size={18} />
                </span>
                {label}
              </li>
            ))}
          </ul>

          <a href="#contact" className="about__cta">
            More About Us
            <ArrowRight size={18} />
          </a>
        </div>

        {/* RIGHT */}
        <div className="about__right">
          <div className="about__media">
            <img src="/images/about-rebar.png" alt="IHCC worker building steel reinforcement on site" />
            <div className="about__frame" aria-hidden="true" />

            <div className="about__badge">
              <span className="about__badge-num">40+</span>
              <span className="about__badge-text">
                Years of
                <br />
                Experience
              </span>
            </div>

            <div className="about__join">
              <span className="about__join-icon">
                <HandshakeIcon size={26} />
              </span>
              <p>Join Us, Be Part Of Our Team!</p>
            </div>
          </div>

          <div className="about__stats">
            {STATS.map((s) => (
              <div className="about__stat" key={s.label}>
                <span className="about__stat-num">{s.num}</span>
                <span className="about__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
