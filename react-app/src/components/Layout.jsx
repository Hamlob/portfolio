import { useState } from 'react'
import { Link, NavLink, Outlet } from 'react-router-dom'
import { FaInstagram, FaYoutube, FaGithub, FaSpotify, FaBars, FaTimes, FaChevronDown } from 'react-icons/fa'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const close = () => { setOpen(false); setDropdownOpen(false) }

    return (
        <nav className="navbar">
            <div className="navbar-inner">
                <Link to="/" className="navbar-logo" onClick={close}>Hamlob</Link>
                <button className="hamburger" onClick={() => setOpen(!open)} aria-label="Menu">
                    {open ? <FaTimes /> : <FaBars />}
                </button>
                <ul className={`navbar-links${open ? ' open' : ''}`}>
                    <li><NavLink to="/" end onClick={close}>About</NavLink></li>
                    <li className={`nav-dropdown${dropdownOpen ? ' open' : ''}`}>
                        <button className="nav-dropdown-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>
                            Projects <FaChevronDown size={12} />
                        </button>
                        <div className="nav-dropdown-menu">
                            <NavLink to="/electronics" onClick={close}>Electronics</NavLink>
                            <NavLink to="/software" onClick={close}>Software</NavLink>
                            <NavLink to="/music" onClick={close}>Music</NavLink>
                        </div>
                    </li>
                    <li><NavLink to="/contact" onClick={close}>Contact</NavLink></li>
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
            <p>&copy; 2025 Hamlob</p>
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
