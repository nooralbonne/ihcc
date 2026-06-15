import { Phone, Mail, Clock, Paintbrush, ArrowRight, Building2 } from "lucide-react"
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Footer.css"

const LINKS = ["About Us", "Our Projects", "Contacts"]
const BOTTOM_LINKS = []

export default function Footer() {
  return (
    <footer className="footer">
      {/* Top contact bar */}
      <div className="footer__topbar">
        <div className="container footer__topbar-inner">
          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <Phone size={18} />
            </span>
            <div>
              <small>Call Us:</small>
              <strong>+962 6 560 7140</strong>
            </div>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <Mail size={18} />
            </span>
            <div>
              <small>Email Us:</small>
              <strong>officeeng@ihcc-jo.com</strong>
            </div>
          </div>
          <div className="footer__contact-item">
            <span className="footer__contact-icon">
              <Clock size={18} />
            </span>
            <div>
              <small>Opening Hours:</small>
              <strong>Sun–Thu: 8am – 5pm</strong>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          <div className="footer__signup">
            <Paintbrush size={40} strokeWidth={1.5} />
            <h3>
              Sign Up For Industry <br />
              Alerts, News &amp; Insights
            </h3>
            <form
              className="footer__signup-form"
              onSubmit={(e) => {
                e.preventDefault()
                e.currentTarget.reset()
              }}
            >
              <input type="email" placeholder="Your Email Address" aria-label="Your email address" required />
              <button type="submit">Subscribe</button>
            </form>
          </div>

          <div className="footer__col footer__about-col">
            <h4>Ismail Alhersh Contracting Co.</h4>
            <p>
              A first-level building construction and maintenance company founded in 1985. Member of the Jordanian
              Contractors Association (ID 1482), with over 45 completed projects across Jordan's governorates.
            </p>
            <a href="#contact" className="footer__quote">
              <span className="footer__quote-icon">
                <ArrowRight size={16} />
              </span>
              Request A Quote
            </a>
          </div>

          <div className="footer__col">
            <h4>Links</h4>
            <ul>
              {LINKS.map((l) => (
                <li key={l}>
                  <a href="#">
                    <ArrowRight size={14} /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Contact</h4>
            <p className="footer__address">
              Khaleel Elsalem St., Tla'a Al-Ali, Building No. 87, 1st Floor, Office No. 15, Amman, Jordan.
            </p>
            <p className="footer__address">If you have any questions or need help, feel free to contact our team.</p>
            <a href="tel:+96265607140" className="footer__phone">
              <Phone size={18} /> +962 6 560 7140
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container footer__bottom-inner">
          <div className="footer__bottom-left">
          <p>© {new Date().getFullYear()} Ismail Alhersh Contracting Company. All Rights Reserved.</p>
        
          </div>

          <div className="footer__socials">
            <a href="#" aria-label="Facebook">
              <FaFacebook size={16} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={16} />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter size={16} />
            </a>
          </div>
        </div>
       
      </div>
    </footer>
  )
}