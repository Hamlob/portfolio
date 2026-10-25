import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import { TermWindow, Typewriter } from '../components/Terminal'

const dirs = [
    { to: '/electronics', name: 'electronics', desc: 'circuits, synths & eurorack', accent: 'green' },
    { to: '/software', name: 'software', desc: 'web, embedded & hacks', accent: 'cyan' },
    { to: '/music', name: 'music', desc: 'albums & releases', accent: 'magenta' },
]

export default function Home() {
    const [typed, setTyped] = useState(false)
    const onDone = useCallback(() => setTyped(true), [])

    return (
        <>
            <section className="hero">
                <TermWindow title="hamlob — zsh — 80×24" className="hero-window">
                    <p className="term-line">
                        <span className="p-sep">$</span> <Typewriter text="whoami" onDone={onDone} />
                        {!typed && <span className="cursor" />}
                    </p>
                    <div className={`hero-output${typed ? ' show' : ''}`}>
                        <pre className="ascii-name" aria-label="Hamlob">{String.raw`
 _                     _       _
| |__   __ _ _ __ ___ | | ___ | |__
| '_ \ / _' | '_ ' _ \| |/ _ \| '_ \
| | | | (_| | | | | | | | (_) | |_) |
|_| |_|\__,_|_| |_| |_|_|\___/|_.__/`}</pre>
                        <p className="hero-tags">
                            <span className="tag tag-green">electrical engineer</span>
                            <span className="tag tag-cyan">programmer</span>
                            <span className="tag tag-magenta">musician</span>
                        </p>
                        <p className="term-line"><span className="p-sep">$</span> <span className="cursor" /></p>
                    </div>
                </TermWindow>
            </section>

            <section className="section" id="about">
                <div className="about-grid">
                    <TermWindow title="education.log" accent="amber" className="about-card">
                        <p className="term-cmd"><span className="p-sep">$</span> cat education.log</p>
                        <ul>
                            <li><span className="li-date">2018–2023</span><strong>MEng Electrical and Electronics Engineering (First Class)</strong> — University of Glasgow</li>
                            <li><span className="li-date">2014–2016</span><strong>International Baccalaureate</strong> — <a href="https://www.gjh.sk/">GJH</a></li>
                        </ul>
                    </TermWindow>
                    <TermWindow title="work.log" accent="cyan" className="about-card">
                        <p className="term-cmd"><span className="p-sep">$</span> cat work.log</p>
                        <ul>
                            <li><span className="li-date">2025–now</span><strong>Technical Lead – Software Engineering</strong> — <a href="https://www.msd.com/">MSD</a></li>
                            <li><span className="li-date">2022–2025</span><strong>Analog IC Design Engineer</strong> — <a href="https://www.allegromicro.com/en/">Allegro Microsystems</a></li>
                            <li><span className="li-date">2021–2022</span><strong>Electronic Design Engineer</strong> — <a href="https://magecontrol.com/">Mage Control Systems Ltd</a></li>
                        </ul>
                    </TermWindow>
                </div>
            </section>

            <section className="section">
                <p className="prompt-line"><span className="p-sep">$</span> ls ~/projects</p>
                <div className="dir-grid">
                    {dirs.map(d => (
                        <Link key={d.to} to={d.to} className="dir-link" style={{ '--dir-accent': `var(--${d.accent})` }}>
                            <span className="dir-perm">drwxr-xr-x</span>
                            <span className="dir-name">{d.name}/</span>
                            <span className="dir-desc"># {d.desc}</span>
                            <span className="dir-arrow" aria-hidden="true">→</span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    )
}
