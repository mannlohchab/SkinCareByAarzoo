import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.jpg'

const floatingHighlights = [
  'Skin nutrition',
  'Lifestyle guidance',
]

export function HeroSection() {
  return (
    <section id="home" className="lux-hero">
      <div className="lux-hero-media" aria-hidden="true">
        <img src={heroImage} alt="" loading="eager" />
      </div>

      <div className="lux-hero-overlay" aria-hidden="true" />

      <div className="home-luxury-shell lux-hero-content" data-reveal>
        <span className="lux-kicker lux-kicker-light">Skin Consultant</span>
        <h1>Skin health that lasts.</h1>
        <p>
          I combine topical skincare with skin nutrition and lifestyle guidance to support
          long-term skin health — addressing the everyday habits that show up on your skin,
          not just the surface routine.
        </p>

        <div className="lux-hero-actions">
          <Link to="/signup" className="lux-btn lux-btn-primary">
            Begin Your Program
          </Link>
          <a href="#approach" className="lux-btn lux-btn-secondary">
            How It Works
          </a>
        </div>
      </div>

      <div className="lux-floating-wrap" aria-hidden="true">
        {floatingHighlights.map((item, index) => (
          <div key={item} className={`lux-floating-card card-${index + 1}`}>
            {item}
          </div>
        ))}
      </div>
    </section>
  )
}
