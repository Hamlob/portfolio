import { Link } from 'react-router-dom'

const ACCENTS = ['green', 'cyan', 'magenta', 'amber', 'red']

const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')

export default function ProjectGrid({ projects }) {
    return (
        <div className="projects-grid">
            {projects.map((p, i) => (
                <article className="project-card" key={p.title} style={{ '--card-accent': `var(--${ACCENTS[i % ACCENTS.length]})` }}>
                    <div className="term-titlebar">
                        <span className="term-dots"><i /><i /><i /></span>
                        <span className="term-title">~/{slug(p.title)}</span>
                    </div>
                    <div className="project-media">
                        {p.youtube
                            ? <iframe src={p.youtube} title={p.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            : <img src={p.image} alt={p.title} loading="lazy" />
                        }
                    </div>
                    <div className="project-card-body">
                        <h3>{p.title}</h3>
                        <p>{p.description}</p>
                        {p.to
                            ? <Link to={p.to} className="btn-sm">./open <span aria-hidden="true">→</span></Link>
                            : <a href={p.link} className="btn-sm" target="_blank" rel="noreferrer">./open <span aria-hidden="true">↗</span></a>
                        }
                    </div>
                </article>
            ))}
        </div>
    )
}
