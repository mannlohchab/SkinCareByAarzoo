import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { IsoIcon } from './IsoIcon'

const navLinks = [
  { href: '#home', label: 'Home' },
  {
    href: '#approach',
    label: 'Services',
    children: [
      { href: '#approach', label: 'Laser & RF Treatments' },
      { href: '#approach', label: 'Skin Brightening' },
      { href: '#approach', label: 'Acne & Blemish Control' },
      { href: '#approach', label: 'Hydration Therapy' },
      { href: '#approach', label: 'Pigmentation Correction' },
    ],
  },
  { href: '#about', label: 'About' },
  { href: '#results', label: 'Results' },
  { href: '#testimonials', label: 'Reviews' },
]

export function LuxuryNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 22)
    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isMenuOpen])

  const closeMenu = () => {
    setIsMenuOpen(false)
    setOpenDropdown(null)
  }

  return (
    <header className={`lux-navbar ${isScrolled ? 'is-scrolled' : ''}`}>
      <div className="home-luxury-shell lux-navbar-inner">
        <Link to="/" className="lux-brand" aria-label="SkinCare by Aarzoo home" onClick={closeMenu}>
          <span className="lux-brand-title">
            <span className="lux-brand-word">SkinCare</span>
            <span className="lux-brand-accent">Aarzoo</span>
          </span>
        </Link>

        <button
          type="button"
          className="lux-nav-toggle"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          {isMenuOpen ? 'Close' : 'Menu'}
        </button>

        <div className={`lux-nav-center-pill ${isMenuOpen ? 'open' : ''}`}>
          <nav className="lux-nav-links" aria-label="Home sections">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.label}
                  className={`lux-nav-item ${openDropdown === link.label ? 'is-open' : ''}`}
                  onMouseEnter={() => setOpenDropdown(link.label)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <button
                    type="button"
                    className="lux-nav-link lux-nav-link-btn"
                    aria-expanded={openDropdown === link.label}
                    aria-haspopup="true"
                    onClick={() =>
                      setOpenDropdown((current) => (current === link.label ? null : link.label))
                    }
                  >
                    {link.label}
                    <span className="lux-nav-caret" aria-hidden="true" />
                  </button>
                  <div className="lux-nav-dropdown">
                    {link.children.map((child) => (
                      <a key={child.label} href={child.href} onClick={closeMenu}>
                        {child.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a key={link.href} href={link.href} className="lux-nav-link" onClick={closeMenu}>
                  {link.label}
                </a>
              )
            )}
          </nav>
          <Link to="/signup" className="lux-nav-cta lux-nav-cta-mobile" onClick={closeMenu}>
            Book Now
          </Link>
        </div>

        <div className="lux-nav-actions">
          <Link to="/signup" className="lux-nav-cta" onClick={closeMenu}>
            Book Now
          </Link>
          <Link to="/signup" className="lux-nav-bag" aria-label="Book a consultation" onClick={closeMenu}>
            <IsoIcon name="bag" size={20} />
          </Link>
        </div>
      </div>

      <button
        type="button"
        className={`lux-nav-backdrop ${isMenuOpen ? 'open' : ''}`}
        aria-label="Close navigation menu"
        onClick={closeMenu}
      />
    </header>
  )
}
