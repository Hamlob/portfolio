const projects = [
    {
        title: 'Urban Dictionary',
        description: 'Slang dictionary website for Slovak language',
        image: '/images/urbandictionary.png',
        link: 'https://urbandictionary.sk',
    },
    {
        title: 'Wake-O-Matic',
        description: 'Sleep detection and prevention for drivers using Raspberry Pi.',
        image: '/images/wakeomatic.svg',
        link: 'https://github.com/Hamlob/wake-o-matic',
    },
    {
        title: 'Open Day Badge',
        description: 'A name badge with visual effects to represent the discipline, built-in snake game and NFC communication to share one\'s details. It was done as a university team project.',
        youtube: 'https://www.youtube.com/embed/-_bDtoWxqG0?si=aKbM_4RCFimkPa7n',
        link: 'https://github.com/Hamlob/TDP4',
    },
]

export default function Software() {
    return (
        <section className="section">
            <div className="section-header">
                <h2>Software</h2>
            </div>
            <div className="projects-grid">
                {projects.map((p) => (
                    <div className="project-card" key={p.title}>
                        {p.youtube
                            ? <iframe src={p.youtube} title={p.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
                            : <img src={p.image} alt={p.title} />
                        }
                        <div className="project-card-body">
                            <h3>{p.title}</h3>
                            <p>{p.description}</p>
                            <a href={p.link} className="btn-sm" target="_blank" rel="noreferrer">Learn More</a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
