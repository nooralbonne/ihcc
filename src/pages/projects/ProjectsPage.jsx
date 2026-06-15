import { Building2, MapPin, Calendar, FileText, Clock, Wallet, Ruler, UserCheck, HardHat, CheckCircle2 } from "lucide-react"
import { COMPLETED_PROJECTS, COMPLETED_RECORD, UNDER_CONSTRUCTION } from "../../data/projects.js"
import { ProjectCarousel } from "../../components/GalleryVariants.jsx"
import "./ProjectsPage.css"

export default function ProjectsPage() {
  return (
    <>
      {/* Page banner */}
      <section className="page-hero">
        <div className="container page-hero__inner">
          <p className="eyebrow">Ismail Alhersh Contracting Company</p>
          <h1>Our Projects</h1>
          <p className="page-hero__lead">
            More than 45 projects delivered across Jordan&apos;s governorates since 1985, with public-sector contracts
            valued up to JD 27.6 million.
          </p>
          <div className="page-hero__crumbs">
            <span>Home</span>
            <span aria-hidden="true">/</span>
            <span className="is-active">Projects</span>
          </div>
        </div>
      </section>

{/* UNDER CONSTRUCTION — with image carousels */}
      <section className="block block--construction">
        <div className="container">
          <div className="block__head">
            <div>
              <p className="eyebrow">Currently On Site</p>
              <h2 className="section-title">Projects Under Construction</h2>
            </div>
            <span className="block__badge block__badge--live">
              <HardHat size={18} /> In Progress
            </span>
          </div>

          <p className="style-note">
            Each project below has 2–4 site photos. Use the carousel arrows or dots to browse, and click any photo to
            enlarge it. The slots are empty placeholders — drop in real photos later.
          </p>

          <div className="uc-grid">
            {UNDER_CONSTRUCTION.map((p) => (
              <article className="uc-card" key={p.id}>
                {p.images ? <ProjectCarousel project={p} /> : null}

                <div className="uc-card__head">
                  <span className="uc-card__icon">
                    <Building2 size={22} />
                  </span>
                  <h3>{p.title}</h3>
                </div>
                <p className="uc-card__about">{p.about}</p>

                <dl className="uc-card__facts">
                  <Fact icon={UserCheck} label="Client" value={p.client} />
                  <Fact icon={FileText} label="Consultant" value={p.consultant} />
                  <Fact icon={FileText} label="Tender Ref." value={p.tenderRef} />
                  <Fact icon={Wallet} label="Value" value={p.value} />
                  <Fact icon={Clock} label="Duration" value={p.duration} />
                  <Fact icon={MapPin} label="Location" value={p.location} />
                  <Fact icon={Ruler} label="Total Area" value={p.area} />
                  <Fact icon={Calendar} label="Start Date" value={p.start} />
                </dl>

                {p.scope && (
                  <div className="uc-card__scope">
                    <h4>Scope of Work</h4>
                    <ul>
                      {p.scope.map((s) => (
                        <li key={s}>
                          <CheckCircle2 size={15} /> {s}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
      
      {/* COMPLETED PROJECTS — info only */}
      <section className="block block--completed">
        <div className="container">
          <div className="block__head">
            <div>
              <p className="eyebrow">A Track Record You Can Trust</p>
              <h2 className="section-title">Previous Completed Projects</h2>
            </div>
            <span className="block__badge">
              <CheckCircle2 size={18} /> 45+ Delivered
            </span>
          </div>

          <div className="done-grid">
            {COMPLETED_PROJECTS.map((p) => (
              <article className="done-card" key={p.id}>
                <span className="done-card__icon">
                  <CheckCircle2 size={20} />
                </span>
                <h3>{p.title}</h3>
                <p className="done-card__client">{p.client}</p>
                <dl className="done-card__facts">
                  <div className="fact">
                    <dt>
                      <Wallet size={15} /> Value
                    </dt>
                    <dd>{p.value}</dd>
                  </div>
                  <div className="fact">
                    <dt>
                      <MapPin size={15} /> Location
                    </dt>
                    <dd>{p.location}</dd>
                  </div>
                  <div className="fact">
                    <dt>
                      <Calendar size={15} /> Year
                    </dt>
                    <dd>{p.year}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          {/* Full record table */}
          <h3 className="record__title">Full Project Record</h3>
          <div className="record">
            <table>
              <thead>
                <tr>
                  <th>Project Name</th>
                  <th>Client</th>
                  <th>Tender Ref.</th>
                  <th>Tender Value</th>
                  <th>Start Date</th>
                </tr>
              </thead>
              <tbody>
                {COMPLETED_RECORD.map((row) => (
                  <tr key={row[0]}>
                    <td data-label="Project">{row[0]}</td>
                    <td data-label="Client">{row[1]}</td>
                    <td data-label="Tender Ref.">{row[2]}</td>
                    <td data-label="Value">{row[3]}</td>
                    <td data-label="Start">{row[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      
    </>
  )
}

function Fact({ icon: Icon, label, value }) {
  if (!value || value === "—") return null
  return (
    <div className="fact">
      <dt>
        <Icon size={15} /> {label}
      </dt>
      <dd>{value}</dd>
    </div>
  )
}
