import { useState } from "react"
import { HardHat, ThumbsUp, ClipboardCheck, BadgeDollarSign, MapPin, Phone, Mail, Clock } from "lucide-react"
import "./RequestQuote.css"

const FEATURES = [
  { icon: HardHat, label: "Professional Staff" },
  { icon: ThumbsUp, label: "100% Satisfaction" },
  { icon: ClipboardCheck, label: "Accurate Testing" },
  { icon: BadgeDollarSign, label: "Transparent Pricing" },
]

const SERVICES = [
  "General Construction",
  "Civil & Infrastructure Works",
  "Mechanical & Electrical Works",
  "Renovation & Maintenance",
  "Structural & Interior Finishing",
]

export default function RequestQuote() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <section className="rq" id="contact">
      <div className="rq__top">
        <div className="container">
          <p className="rq__eyebrow">Bigger, Better, Faster And Stronger Projects</p>
          <div className="rq__top-grid">
            <h2 className="rq__title">
              Leading Way In Building <br />&amp; Civil Construction!
            </h2>
            <p className="rq__top-text">
              The world is changing faster than ever before. Yet those who embrace change are thriving — building
              bigger, better, faster &amp; stronger projects than ever before. At IHCC, we help you build on your past
              and prepare for the future.
            </p>
          </div>

          <div className="rq__features">
            {FEATURES.map(({ icon: Icon, label }, i) => (
              <div className={`rq__feature ${i === 0 ? "is-active" : ""}`} key={label}>
                <Icon size={36} strokeWidth={1.5} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container">
        <div className="rq__panel">
          <div className="rq__form-card">
            <h3>Request A Quote</h3>
            <p className="rq__form-note">
              Complete control over every project allows us to ensure our customers receive the best quality and
              service. We take great pride in everything that we do at IHCC.
            </p>

            {submitted ? (
              <div className="rq__success" role="status">
                Thank you! Your request has been received. Our team will contact you shortly.
              </div>
            ) : (
              <form className="rq__form" onSubmit={handleSubmit}>
                <div className="rq__row">
                  <input type="text" placeholder="Name" required aria-label="Name" />
                  <input type="email" placeholder="Email" required aria-label="Email" />
                </div>
                <div className="rq__row">
                  <input type="tel" placeholder="Phone" aria-label="Phone" />
                  <select defaultValue="" required aria-label="Select your service">
                    <option value="" disabled>
                      Select Your Service
                    </option>
                    {SERVICES.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
                <textarea rows="4" placeholder="Additional Details!" aria-label="Additional details" />
                <button type="submit" className="btn btn-navy rq__submit">
                  Submit Request
                </button>
              </form>
            )}
          </div>

          <aside className="rq__contact">
            <h3>Contact Info</h3>

            <div className="rq__contact-block">
              <h4>
                <MapPin size={18} /> Our Location
              </h4>
              <p>Khaleel Elsalem St., Tla'a Al-Ali, Building No. 87, 1st Floor, Office No. 15, Amman, Jordan</p>
            </div>

            <div className="rq__contact-block">
              <h4>
                <Phone size={18} /> Quick Contact
              </h4>
              <p>Email: officeeng@ihcc-jo.com</p>
              <p>Call Us: +962 6 560 7140</p>
            </div>

            <div className="rq__contact-block">
              <h4>
                <Clock size={18} /> Opening Hours
              </h4>
              <p>Sunday – Thursday</p>
              <p>08:00 AM – 05:00 PM</p>
            </div>

            <p className="rq__contact-help">Do You Have Any Questions? Just Contact Us To Get Help!!</p>
            <a href="mailto:officeeng@ihcc-jo.com" className="rq__contact-btn">
              <Mail size={16} /> Contact Us
            </a>
          </aside>
        </div>
      </div>
    </section>
  )
}