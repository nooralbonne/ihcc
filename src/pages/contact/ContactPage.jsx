import { useState } from "react"
import { Phone, Mail, MapPin, Clock, Send, User, MessageSquare, CheckCircle2 } from "lucide-react"
import "./ContactPage.css"

const DETAILS = [
  {
    Icon: Phone,
    title: "Call Us",
    lines: ["+962 7 9533 5224", "+962 6 560 7140"],
    links: ["tel:+962795335224", "tel:+96265607140"],
  },
  {
    Icon: Mail,
    title: "Email Us",
    lines: ["eng@ihcc-jo.com", "officeeng@ihcc-jo.com"],
    links: ["mailto:eng@ihcc-jo.com", "mailto:officeeng@ihcc-jo.com"],
  },
  {
    Icon: MapPin,
    title: "Visit Us",
    lines: ["Khaleel Elsalem St., Tla'a Al-Ali", "Building 87, 1st Floor, Office 15", "Amman, Jordan"],
  },
  {
    Icon: Clock,
    title: "Working Hours",
    lines: ["Sun – Thu: 8:30 – 17:00", "Friday & Saturday: Closed"],
  },
]

const SUBJECTS = [
  "General Inquiry",
  "Request a Quote",
  "Project Partnership",
  "Careers",
  "Other",
]

export default function ContactPage() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSent(true)
    e.target.reset()
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <>
      {/* Page banner */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Ismail Alhersh Contracting Company</p>
          <h1>Contact Us</h1>
          <p className="page-hero__lead">
            Have a project in mind or a question for our team? We&apos;d be glad to hear from you.
          </p>
          <div className="page-hero__crumbs">
            <span>Home</span>
            <span aria-hidden="true">/</span>
            <span className="is-active">Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact detail cards */}
      <section className="block">
        <div className="container">
          <div className="contact-cards">
            {DETAILS.map(({ Icon, title, lines, links }) => (
              <article className="contact-card" key={title}>
                <span className="contact-card__icon">
                  <Icon size={24} />
                </span>
                <h3>{title}</h3>
                <div className="contact-card__lines">
                  {lines.map((line, i) =>
                    links && links[i] ? (
                      <a href={links[i]} key={line}>
                        {line}
                      </a>
                    ) : (
                      <span key={line}>{line}</span>
                    ),
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Form + map */}
      <section className="block block--tint">
        <div className="container contact-main">
          {/* Form */}
          <div className="contact-form-wrap">
            <p className="eyebrow">Send A Message</p>
            <h2 className="section-title">Let&apos;s Talk About Your Project</h2>
            <p className="contact-form-wrap__sub">
              Fill out the form and our team will get back to you as soon as possible.
            </p>

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Full Name</label>
                <div className="field__input">
                  <User size={18} />
                  <input id="name" name="name" type="text" placeholder="Your name" required />
                </div>
              </div>

              <div className="field-row">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <div className="field__input">
                    <Mail size={18} />
                    <input id="email" name="email" type="email" placeholder="you@email.com" required />
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <div className="field__input">
                    <Phone size={18} />
                    <input id="phone" name="phone" type="tel" placeholder="+962 ..." />
                  </div>
                </div>
              </div>

              <div className="field">
                <label htmlFor="subject">Subject</label>
                <div className="field__input">
                  <select id="subject" name="subject" defaultValue="">
                    <option value="" disabled>
                      Choose a subject
                    </option>
                    {SUBJECTS.map((s) => (
                      <option key={s} value={s}>
                        {s}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="field">
                <label htmlFor="message">Message</label>
                <div className="field__input field__input--area">
                  <MessageSquare size={18} />
                  <textarea id="message" name="message" rows={5} placeholder="Tell us about your project..." required />
                </div>
              </div>

              <button type="submit" className="contact-form__btn">
                <Send size={18} />
                Send Message
              </button>

              {sent && (
                <p className="contact-form__success">
                  <CheckCircle2 size={18} /> Thank you! Your message has been sent.
                </p>
              )}
            </form>
          </div>

          {/* Map */}
          <div className="contact-map">
            <iframe
              title="IHCC office location on map"
              src="https://www.google.com/maps?q=Tla'a+Al-Ali,+Amman,+Jordan&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="contact-map__card">
              <span className="contact-map__icon">
                <MapPin size={20} />
              </span>
              <div>
                <strong>Our Office</strong>
                <span>Khaleel Elsalem St., Tla&apos;a Al-Ali, Building 87, Amman</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
