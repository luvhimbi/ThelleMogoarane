import { Link } from 'react-router-dom'
import './Footer.css'

const footerLinks = {
  foundation: [
    { label: 'About Us', to: '/#about' },
    { label: 'Memorial & Legacy', to: '/memorial' },
    { label: 'Vision & Mission', to: '/#about' },
  ],
  programs: [
    { label: 'Education & Bursaries', to: '/#programs' },
    { label: 'Entrepreneurship', to: '/#programs' },
    { label: 'Civic Education', to: '/#programs' },
    { label: 'Our Philosophy', to: '/#philosophy' },
    { label: 'Our Values', to: '/#values' },
  ],
  getInvolved: [
    { label: 'Donate', to: '/donate' },
    { label: 'Partner With Us', to: '/#contact' },
    { label: 'Volunteer', to: '/#contact' },
    { label: 'Events', to: '/#events' },
    { label: 'Contact Us', to: '/#contact' },
  ],
}

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer__accent" aria-hidden="true" />

      <div className="container">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__logo-row">
              <Link to="/">
                <img
                  src="/Capture.webp"
                  alt="Thelle Mogoerane Foundation"
                  className="footer__logo-img"
                />
              </Link>
              <span className="footer__npc" style={{ display: 'block', marginTop: '0.25rem', marginBottom: 0 }}>
                NPC No. 2024/208474/08
              </span>
            </div>
            <p className="footer__description">
              Keeping alive the revolutionary spirit of the cadres who sacrificed their
              lives for the freedom of South Africans, regardless of race, gender, creed
              or beliefs.
            </p>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Foundation</h3>
            <ul className="footer__links">
              {footerLinks.foundation.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Our Work</h3>
            <ul className="footer__links">
              {footerLinks.programs.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column">
            <h3 className="footer__heading">Get Involved</h3>
            <ul className="footer__links">
              {footerLinks.getInvolved.map((link) => (
                <li key={link.label}>
                  <Link to={link.to} className="footer__link">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer__column footer__contact">
            <h3 className="footer__heading">Contact</h3>
            <address className="footer__address">
              <p>25 Fairy Glen Avenue</p>
              <p>Klippoortjie, Boksburg 1459</p>
              <p>
                <a href="mailto:info@thellemogoeranefoundation.org.za">
                  info@thellemogoeranefoundation.org.za
                </a>
              </p>
              <p>
                <a href="tel:+27617875679">061 787 5679</a>
              </p>
            </address>
          </div>
        </div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {currentYear} Thelle Mogoerane Foundation. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/popi-act">POPI Act</Link>
            <Link to="/paia-manual">PAIA Manual</Link>
            <Link to="/dmca">DMCA</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
