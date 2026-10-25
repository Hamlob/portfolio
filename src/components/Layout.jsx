import { useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { FaInstagram, FaYoutube, FaGithub, FaSpotify, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const close = () => { setOpen(false); setDropdownOpen(false) }
    const { pathname } = useLocation()
    const path = pathname === '/' ? '~' : `~${pathname}`

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo" onClick={close}>
                    <span className="p-user">hamlob</span><span className="p-at">@</span><span className="p-host">portfolio</span>
                    <span className="p-sep">:</span><span className="p-path">{path}</span><span className="p-sep">$</span>
                    <span className="cursor" />
                </Link>
                <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`navbar-links${open ? ' open' : ''}`}>
                    <li><NavLink to="/" end onClick={close}>./about</NavLink></li>
                    <li className={`nav-dropdown${dropdownOpen ? ' open' : ''}`}>
                        <button className="nav-dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            ./projects <FaChevronDown size={10} />
                        </button>
                        <div className="nav-dropdown-menu">
                            <NavLink to="/electronics" onClick={close}>electronics/</NavLink>
                            <NavLink to="/software" onClick={close}>software/</NavLink>
                            <NavLink to="/music" onClick={close}>music/</NavLink>
                        </div>
                    </li>
                    <li><NavLink to="/contact" onClick={close}>./contact</NavLink></li>
                </ul>
            </div>
        </nav>
    )
}

function Footer() {
    return (
        <footer className="footer">
            <ul className="footer-icons">
                <li><a href="https://www.instagram.com/hamlob" target="_blank" rel="noreferrer"><FaInstagram /></a></li>
                <li><a href="https://www.youtube.com/@hamlob" target="_blank" rel="noreferrer"><FaYoutube /></a></li>
                <li><a href="https://www.github.com/hamlob" target="_blank" rel="noreferrer"><FaGithub /></a></li>
                <li><a href="https://open.spotify.com/artist/6Dj9YTAwexydw581xzsaAN" target="_blank" rel="noreferrer"><FaSpotify /></a></li>
            </ul>
            <p className="statusline">
                <span className="sl-mode">NORMAL</span>
                <span className="sl-file">hamlob.com</span>
                <span className="sl-fill" />
                <span className="sl-pos">&copy; {new Date().getFullYear()} Hamlob</span>
            </p>
        </footer>
    )
}

export default function Layout() {
    return (
        <>
            <Navbar />
            <main><Outlet /></main>
            <Footer />
        </>
    )
}
