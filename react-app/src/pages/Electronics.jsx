import { Link } from 'react-router-dom'

const projects = [
    {
        title: 'Analog Lobster',
        description: 'Eurorack modules',
        image: '/images/analog_lobster.png',
        link: 'https://analoglobster.com',
    },
    {
        title: 'Monotron CV Mod',
        description: 'A modification of Korg\'s Monotron Delay that allows controlling the Monotron with standard Eurorack CV voltages. Includes an option to power the Monotron with regular 5V USB instead of just the batteries.',
        youtube: 'https://www.youtube.com/embed/febEYCqoS6c?si=cgRe54yxFnyYFoPS',
        link: 'https://github.com/Hamlob/Monotron_CV_mod',
    },
    {
        title: 'Stub Tuning Calculator',
        description: 'Calculates the length and the distance of the short-circuit and open-circuit stubs required for RF impedance matching.',
        image: '/images/stubSchem.png',
        to: '/stub-tuning-calculator',
    },
    {
        title: 'Digital Synthesiser',
        description: 'A simple square-wave synthesiser with 16-step sequencer.',
        youtube: 'https://www.youtube.com/embed/kAlFlVL6nRY?si=KgUHdgFAkAp2gSdC',
        link: 'https://github.com/Hamlob/Sequencer_synth',
    },
    {
        title: 'EHX Pitchfork Eurorack Mod',
        description: 'Modification of the effect that turns it into a eurorack module.',
        image: '/images/ehx_mod/front.png',
        to: '/ehx-pitchfork-mod',
    },
]

export default function Electronics() {
    return (
        <section className="section">
            <div className="section-header">
                <h2>Electronics</h2>
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
                            {p.to
                                ? <Link to={p.to} className="btn-sm">Learn More</Link>
                                : <a href={p.link} className="btn-sm" target="_blank" rel="noreferrer">Learn More</a>
                            }
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}
