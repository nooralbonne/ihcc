import { ShieldCheck, Settings2, Award } from "lucide-react"
import "./WhyUs.css"

const FEATURES = [
  { icon: ShieldCheck, title: "Powerful Product Strategy" },
  { icon: Settings2, title: "Quality Control System" },
  { icon: Award, title: "Award Winning Projects" },
]

export default function WhyUs() {
  return (
    <section className="why section" id="why">
      <div className="container why__grid">
        <div className="why__media">
          <img src="/images/worker-feature.png" alt="IHCC engineer inspecting work on a construction site" />
        </div>

        <div className="why__content">
          <h2 className="why__title">We Help You Build On Our Past And Prepare For Your Future.</h2>
          <p className="why__text">
            As a first-level building construction and maintenance company, IHCC is recognized for its civil,
            mechanical and electrical works on schools, healthcare facilities, government buildings and
            infrastructure projects across Jordan.
          </p>

          <div className="why__features">
            {FEATURES.map(({ icon: Icon, title }) => (
              <div className="why-feature" key={title}>
                <span className="why-feature__icon">
                  <Icon size={26} />
                </span>
                <p>{title}</p>
              </div>
            ))}
          </div>

          <p className="why__note">
            Since 1985, we have grown into an established and renowned company across all areas of the construction
            sector. We help you build on our experience and prepare for what comes next.
          </p>

          <p className="why__sign">Eng. Ismail Al-Hersh — Chairman &amp; Managing Director</p>
        </div>
      </div>
    </section>
  )
}