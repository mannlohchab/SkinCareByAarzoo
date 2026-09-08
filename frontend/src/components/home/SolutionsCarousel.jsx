import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { IsoIcon } from './IsoIcon'
import laserImage from '../../assets/solutions/laser.jpg'
import brighteningImage from '../../assets/solutions/brightening.jpg'
import hydrationImage from '../../assets/solutions/hydration.jpg'
import pigmentImage from '../../assets/solutions/pigment.jpg'
import acneImage from '../../assets/solutions/acne.jpg'

const cards = [
  { image: laserImage, title: 'Laser & RF Treatments' },
  { image: brighteningImage, title: 'Skin Brightening' },
  { image: acneImage, title: 'Acne & Blemish Control', featured: true },
  { image: hydrationImage, title: 'Hydration Therapy' },
  { image: pigmentImage, title: 'Pigmentation Correction' },
]

export function SolutionsCarousel() {
  const trackRef = useRef(null)

  const scrollByCard = (direction) => {
    const track = trackRef.current
    if (!track) return
    const card = track.querySelector('.lux-solution-card')
    const step = card ? card.getBoundingClientRect().width + 22 : track.clientWidth * 0.8
    track.scrollBy({ left: direction * step, behavior: 'smooth' })
  }

  return (
    <section id="approach" className="lux-section lux-solutions-section">
      <div className="home-luxury-shell">
        <header className="lux-solutions-header">
          <IsoIcon name="crown" className="lux-solutions-iso" size={44} />
          <h2>
            Our Signature <em>Skin Solutions</em>
          </h2>
          <p>
            Personalized, high-performance treatments designed to restore balance, refine texture,
            and bring back a calm, modern glow.
          </p>
        </header>

        <div className="lux-solutions-track" ref={trackRef}>
          {cards.map((card) => (
            <article key={card.title} className="lux-solution-card">
              <div className="lux-solution-frame">
                <img src={card.image} alt="" loading="lazy" />
                {card.featured ? (
                  <Link to="/signup" className="lux-solution-orb">
                    <IsoIcon name="calendar" size={22} />
                    <span>Book an Appointment</span>
                  </Link>
                ) : null}
              </div>
              <h3>{card.title}</h3>
            </article>
          ))}
        </div>

        <div className="lux-solutions-nav">
          <button
            type="button"
            className="lux-carousel-btn"
            onClick={() => scrollByCard(-1)}
            aria-label="Scroll solutions left"
          >
            <IsoIcon name="arrow-backward" size={20} />
          </button>
          <button
            type="button"
            className="lux-carousel-btn"
            onClick={() => scrollByCard(1)}
            aria-label="Scroll solutions right"
          >
            <IsoIcon name="arrow-forward" size={20} />
          </button>
        </div>
      </div>
    </section>
  )
}
