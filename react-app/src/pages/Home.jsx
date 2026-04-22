import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <>
            <section className="section" id="about">
                <div className="section-header">
                    <h2>About</h2>
                    <p>Electrical engineer · Programmer · Musician</p>
                </div>

                <div className="about-grid">
                    <div className="about-card">
                        <h3>Education</h3>
                        <ul>
                            <li><strong>MEng Electrical and Electronics Engineering (First Class)</strong> — University of Glasgow (2018–2023)</li>
                            <li><strong>International Baccalaureate</strong> — <a href="https://www.gjh.sk/">GJH</a> (2014–2016)</li>
                        </ul>
                    </div>
                    <div className="about-card">
                        <h3>Work</h3>
                        <ul>
                            <li><strong>Technical Lead – Software Engineering</strong> — <a href="https://www.msd.com/">MSD</a> (2025–present)</li>
                            <li><strong>Analog IC Design Engineer</strong> — <a href="https://www.allegromicro.com/en/">Allegro Microsystems</a> (2022–2025)</li>
                            <li><strong>Electronic Design Engineer</strong> — <a href="https://magecontrol.com/">Mage Control Systems Ltd</a> (2021–2022)</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section className="hero hero-min">
                <h1 className="hero-title">Projects</h1>
                <div className="hero-buttons">
                    <Link to="/electronics">Electronics</Link>
                    <Link to="/software">Software</Link>
                    <Link to="/music">Music</Link>
                </div>
            </section>
        </>
    )
}
