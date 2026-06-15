import { useState, useEffect } from "react"
import { NavLink } from "react-router-dom"
import { Phone, Mail, Clock, ChevronDown, Menu, X, Search } from "lucide-react"
import "./Header.css"

const NAV_LINKS = [
  { label: "Home",       to: "/" },
  { label: "Projects",   to: "/projects" },
  { label: "About Us",    to: "/about" },
  { label: "Contact Us", to: "/contact" },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header className="header">
      {/* Top info bar */}
      <div className="topbar">
        <div className="container topbar__inner">
          <NavLink className="logo" to="/">
            <img src="/images/logo.jpeg" alt="IHCC logo" />
          </NavLink>

          <div className="topbar__info">
            <div className="info-item">
              <span className="info-icon"><Phone size={18} /></span>
              <div>
                <small>Call Us:</small>
                <strong>+962 6 560 7140</strong>
              </div>
            </div>
            <div className="info-item">
              <span className="info-icon"><Mail size={18} /></span>
              <div>
                <small>Email Us:</small>
                <strong>officeeng@ihcc-jo.com</strong>
              </div>
            </div>
            <NavLink to="/contact" className="btn btn-yellow topbar__cta">
              Get A Quote
            </NavLink>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}>
        <div className="container navbar__inner">
          <button className="nav-toggle" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X size={39} /> : <Menu size={39} />}
          </button>

          <ul className={`nav-links ${open ? "nav-links--open" : ""}`}>
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <NavLink
                  to={link.to}
                  className={({ isActive }) => isActive ? "is-active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                  {["Company", "Services", "Projects"].includes(link.label) && (
                    <ChevronDown size={14} />
                  )}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="nav-search">
            <Search size={16} />
            <input type="text" placeholder="Search..." aria-label="Search" />
          </div>
        </div>
      </nav>
    </header>
  )
}