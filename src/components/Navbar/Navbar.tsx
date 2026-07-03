import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import './Navbar.css'

const navLinks = [
  { label: 'Home', to: '/#home' },
  { label: 'About', to: '/#about' },
  { label: 'Legacy', to: '/memorial' },
  { label: 'Programmes & Events', to: '/#programs' },
  { label: 'Contact', to: '/#contact' },
]

function lockBodyScroll() {
  document.body.classList.add('nav-menu-open')
  document.documentElement.style.overflow = 'hidden'
}

function unlockBodyScroll() {
  document.body.classList.remove('nav-menu-open')
  document.documentElement.style.overflow = ''
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const toggleRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (menuOpen) {
      lockBodyScroll()
    } else {
      unlockBodyScroll()
    }

    return () => {
      if (document.body.classList.contains('nav-menu-open')) {
        unlockBodyScroll()
      }
    }
  }, [menuOpen])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape' && menuOpen) {
        setMenuOpen(false)
        toggleRef.current?.focus({ preventScroll: true })
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [menuOpen])

  function closeMenu() {
    setMenuOpen(false)
  }

  const mobileMenu = menuOpen
    ? createPortal(
        <>
          <button
            type="button"
            className="navbar__backdrop"
            aria-label="Close menu"
            onClick={closeMenu}
            tabIndex={-1}
          />
          <nav
            className="navbar__overlay navbar__overlay--open"
            aria-label="Mobile navigation"
            id="mobile-navigation"
          >
            <ul className="navbar__links navbar__links--mobile">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="navbar__link" onClick={closeMenu}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link
              to="/donate"
              className="btn btn-secondary navbar__cta navbar__cta--mobile"
              onClick={closeMenu}
            >
              Donate
            </Link>
          </nav>
        </>,
        document.body,
      )
    : null

  return (
    <>
      <header className={`navbar ${menuOpen ? 'navbar--open' : ''}`}>
        <div className="navbar__bar">
          <div className="container navbar__inner">
            <Link to="/" className="navbar__brand" onClick={closeMenu}>
              <img
                src="/Capture.webp"
                alt="Thelle Mogoerane Foundation logo"
                className="navbar__logo-img"
              />
              <span className="navbar__npc">NPC No. 2024/208474/08</span>
            </Link>

            <nav className="navbar__nav navbar__nav--desktop" aria-label="Main navigation">
              <ul className="navbar__links">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link to={link.to} className="navbar__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="navbar__actions">
              <Link
                to="/donate"
                className="btn btn-secondary navbar__cta"
              >
                Donate
              </Link>
              <button
                ref={toggleRef}
                type="button"
                className={`navbar__toggle ${menuOpen ? 'navbar__toggle--open' : ''}`}
                onClick={() => setMenuOpen((open) => !open)}
                aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={menuOpen}
                aria-controls="mobile-navigation"
              >
                <span />
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </header>
      {mobileMenu}
    </>
  )
}
