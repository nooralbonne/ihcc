import {
  CheckCircle2,
  ShieldCheck,
  Award,
  Leaf,
  Lightbulb,
  Users,
  Handshake,
  Target,
  Compass,
  Building2,
  Layers,
  Wrench,
  HeartHandshake,
  GraduationCap,
  Landmark,
  Quote,
  BadgeCheck,
} from "lucide-react"
import "./AboutPage.css"

const VALUES = [
  { label: "Safety", Icon: ShieldCheck },
  { label: "Integrity", Icon: CheckCircle2 },
  { label: "Respect", Icon: Users },
  { label: "Quality", Icon: Award },
  { label: "Collaboration", Icon: Handshake },
  { label: "Innovation", Icon: Lightbulb },
  { label: "Sustainability", Icon: Leaf },
]

const LEADERSHIP = [
  {
    name: "Mohammad Al-Hersh",
    role: "Executive Director",
    image: "/images/team/mohammad.jpg",
  },
  {
    name: "Abed Atieh",
    role: "Projects Director",
    image: "/images/team/abed.jpg",
  },
  {
    name: "Obaida Soub",
    role: "Project Manager",
    image: "/images/team/obaida.jpg",
  },
]

const STAFF = [
  { num: "+15", label: "Office Staff", note: "Administrative, Financial & Technical" },
  { num: "+30", label: "Engineers on Sites", note: "Civil, Mechanical & Electrical" },
  { num: "+50", label: "Workforce", note: "Local & Foreign Labor" },
]

const CLASSIFICATION = [
  { rank: "First Class", label: "Building Construction", Icon: Building2 },
  { rank: "Third Class", label: "Electromechanical & Renewable Energy", Icon: Layers },
  { rank: "Fourth Class", label: "Water & Sanitation", Icon: Wrench },
]

const ISO = [
  { code: "ISO 45001", label: "Occupational Health & Safety" },
  { code: "ISO 14001", label: "Environmental Management" },
  { code: "ISO 9001", label: "Quality Management" },
]

const STATS = [
  { num: "40+", label: "Years of Experience" },
  { num: "45+", label: "Completed Projects" },
  { num: "70.9M", label: "JD in Public Contracts" },
]

const EQUIPMENT = [
  "Concrete Mixers",
  "Mobile Crane",
  "Bulldozers",
  "Tower Crane",
  "Road Rollers",
  "Excavators",
  "Loaders",
  "Bus",
  "Pick-ups",
  "Passenger Cars",
]

const CSR = [
  {
    Icon: GraduationCap,
    title: "Student Support Fund",
    text: "Donating to the Student Support Fund at Al-Balqa Applied University to help students continue their education.",
  },
  {
    Icon: Landmark,
    title: "Mosque Design Services",
    text: "Providing pro-bono design services for a mosque construction project at The Hashemite University.",
  },
]

export default function AboutPage() {
  return (
    <>
      {/* Page banner */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Ismail Alhersh Contracting Company</p>
          <h1>About Us</h1>
          <p className="page-hero__lead">
            A trusted Jordanian engineering and contracting company, building with quality and integrity since 1985.
          </p>
          <div className="page-hero__crumbs">
            <span>Home</span>
            <span aria-hidden="true">/</span>
            <span className="is-active">About Us</span>
          </div>
        </div>
      </section>

      {/* Company intro */}
      <section className="block">
        <div className="container about-intro">
          <div className="about-intro__text">
            <p className="eyebrow">Who We Are</p>
            <h2 className="section-title">A Reputable Name In Jordanian Construction</h2>
            <p className="about-intro__lead">
              Ismail Al-Hersh Contracting Company (IHCC) was established in 1985 as a company specialized in general
              maintenance services. Since then, it has evolved into a reputable engineering entity in the construction
              sector, delivering projects across local and regional markets.
            </p>
            <ul className="about-intro__list">
              <li>
                <BadgeCheck size={20} /> Member of the Jordanian Contractors Association — No. 1482
              </li>
              <li>
                <BadgeCheck size={20} /> Over 40 years of experience in local and regional markets
              </li>
              <li>
                <BadgeCheck size={20} /> Full commitment to international quality standards and public safety
              </li>
            </ul>
          </div>
          <div className="about-intro__stats">
            {STATS.map((s) => (
              <div className="stat-card" key={s.label}>
                <span className="stat-card__num">{s.num}</span>
                <span className="stat-card__label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission / Values */}
      <section className="block block--tint">
        <div className="container">
          <div className="block__head block__head--center">
            <p className="eyebrow">What Drives Us</p>
            <h2 className="section-title">Vision, Mission &amp; Values</h2>
          </div>

          <div className="vm-grid">
            <article className="vm-card">
              <span className="vm-card__icon">
                <Compass size={26} />
              </span>
              <h3>Our Vision</h3>
              <p>
                To be the most recognizable name in construction, known for quality and innovation — serving as the
                market&apos;s top contractor.
              </p>
            </article>
            <article className="vm-card vm-card--accent">
              <span className="vm-card__icon">
                <Target size={26} />
              </span>
              <h3>Our Mission</h3>
              <p>
                To build lasting relationships with clients by delivering the best construction services at
                competitive, market-driven prices.
              </p>
            </article>
            <article className="vm-card">
              <span className="vm-card__icon">
                <Award size={26} />
              </span>
              <h3>Our Values</h3>
              <p>The principles that guide every decision and every project we deliver.</p>
            </article>
          </div>

          <ul className="values-row">
            {VALUES.map(({ label, Icon }) => (
              <li className="value-chip" key={label}>
                <Icon size={18} />
                {label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CEO message */}
      <section className="block">
        <div className="container ceo">
          <div className="ceo__quote">
            <Quote size={40} className="ceo__mark" />
            <p className="ceo__headline">&ldquo;Some carry a name. I carry a legacy. — 1985&rdquo;</p>
            <p>
              When my father established this company in 1985, he built it on something simpler than strategy — he built
              it on showing up, doing the work right, and never compromising on what he promised. Forty years later,
              that principle remains the most valuable thing he passed on to me.
            </p>
            <p>
              Taking the helm of IHCC is not something I take lightly. Every project we deliver carries the weight of
              four decades of trust — trust earned by the people who came before me, and trust I consider my personal
              responsibility to honour and to grow.
            </p>
            <p>
              The strongest foundations are not made of concrete and steel alone. They are built on reputation,
              relationships, and the standards we choose never to compromise.
            </p>
            <p className="ceo__closing">
              &ldquo;The best is still ahead of us — and we intend to build it.&rdquo;
            </p>
            <div className="ceo__sign">
              <span className="ceo__sign-name">Executive Director</span>
              <span className="ceo__sign-role">IHCC</span>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="block block--tint">
        <div className="container">
          <div className="block__head block__head--center">
            <p className="eyebrow">Our People</p>
            <h2 className="section-title">Leadership &amp; Team</h2>
          </div>

          <div className="team-grid">
            {LEADERSHIP.map((m) => (
              <article className="team-card" key={m.name}>
<img
  className="team-card__avatar"
  src={m.image}
  alt={m.name}
/>
                <h3>{m.name}</h3>
                <p>{m.role}</p>
              </article>
            ))}
          </div>

          <div className="staff-grid">
            {STAFF.map((s) => (
              <div className="staff-card" key={s.label}>
                <span className="staff-card__num">{s.num}</span>
                <span className="staff-card__label">{s.label}</span>
                <span className="staff-card__note">{s.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Classification + ISO */}
      <section className="block">
        <div className="container">
          <div className="block__head block__head--center">
            <p className="eyebrow">Accredited &amp; Certified</p>
            <h2 className="section-title">Classification &amp; Certifications</h2>
          </div>

          <div className="cls-grid">
            {CLASSIFICATION.map(({ rank, label, Icon }) => (
              <article className="cls-card" key={label}>
                <span className="cls-card__icon">
                  <Icon size={26} />
                </span>
                <span className="cls-card__rank">{rank}</span>
                <p>{label}</p>
              </article>
            ))}
          </div>

          <div className="iso-row">
            {ISO.map((c) => (
              <div className="iso-card" key={c.code}>
                <ShieldCheck size={22} />
                <div>
                  <strong>{c.code}</strong>
                  <span>{c.label}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="block block--tint">
        <div className="container">
          <div className="block__head block__head--center">
            <p className="eyebrow">Our Fleet</p>
            <h2 className="section-title">Equipment &amp; Machinery</h2>
            <p className="block__sub">
              IHCC owns and operates over 24 vehicles and heavy equipment, enabling full control across every project
              stage.
            </p>
          </div>

          <ul className="equip-grid">
            {EQUIPMENT.map((e) => (
              <li className="equip-chip" key={e}>
                <Wrench size={16} />
                {e}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CSR */}
      <section className="block">
        <div className="container">
          <div className="block__head block__head--center">
            <p className="eyebrow">Giving Back</p>
            <h2 className="section-title">Corporate Social Responsibility</h2>
            <p className="block__sub">
              We are committed to giving back to the community and supporting initiatives that create lasting impact.
            </p>
          </div>

          <div className="csr-grid">
            {CSR.map(({ Icon, title, text }) => (
              <article className="csr-card" key={title}>
                <span className="csr-card__icon">
                  <Icon size={28} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="container about-cta__inner">
          <div>
            <h2>Let&apos;s Build Something That Lasts</h2>
            <p>Partner with a contractor trusted across Jordan for four decades.</p>
          </div>
          <a href="/contact" className="about-cta__btn">
            <HeartHandshake size={20} />
            Get In Touch
          </a>
        </div>
      </section>
    </>
  )
}
