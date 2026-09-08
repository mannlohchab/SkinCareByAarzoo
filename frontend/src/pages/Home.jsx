import { LuxuryNavbar } from '../components/home/LuxuryNavbar'
import { HeroSection } from '../components/home/HeroSection'
import { SolutionsCarousel } from '../components/home/SolutionsCarousel'
import { Footer } from '../components/Footer'
import { IsoIcon } from '../components/home/IsoIcon'
import { PetalBlob } from '../components/home/LandingArt'
import philosophyImage from '../assets/pic.png'
import '../style/Home.css'

const principles = [
  {
    label: 'Barrier-first planning',
    copy: 'Every protocol starts by protecting skin function before active escalation.',
    icon: 'shield',
  },
  {
    label: 'Clinical personalization',
    copy: 'We adapt texture, timing, and ingredient loads to your skin behavior and lifestyle.',
    icon: 'user',
  },
]

const outcomes = [
  {
    value: '12+ Weeks',
    title: 'Consistency Window',
    detail: 'Structured care cycles designed for measurable skin resilience, not quick spikes.',
    icon: 'time',
  },
  {
    value: '1:1',
    title: 'Protocol Precision',
    detail: 'A routine mapped to your triggers, sensitivity profile, and recovery speed.',
    icon: 'user',
  },
  {
    value: '360°',
    title: 'Whole-Skin Method',
    detail: 'Topical, habit, and clinical decisions aligned into a single long-term strategy.',
    icon: 'chart',
  },
]

const testimonials = [
  {
    quote:
      'My routine finally feels calm and intentional. The plan was simple to follow, and my skin stopped reacting to every change.',
    name: 'Riya M.',
    detail: 'Sensitive skin protocol',
  },
  {
    quote:
      'The consultation helped me understand what my skin actually needed instead of buying another random product.',
    name: 'Ananya S.',
    detail: 'Barrier repair plan',
  },
  {
    quote:
      'I liked how minimal the routine was. It felt premium, personal, and realistic for everyday life.',
    name: 'Mehak K.',
    detail: 'Personalized skincare plan',
  },
]

function Home() {
  return (
    <>
      <LuxuryNavbar />
      <main className="home-luxury-page">
        <HeroSection />

        <section className="lux-section lux-pullquote">
          <div className="home-luxury-shell lux-pullquote-shell">
            <span className="lux-pullquote-eyebrow">Effortless Beauty, Elevated</span>
            <p className="lux-pullquote-line">
              Where potent actives meet <QuoteIcon name="wand" /> minimalist rituals luxury{' '}
              <QuoteIcon name="star" /> skincare redefined <QuoteIcon name="heart" /> for the modern
              glow.
            </p>
          </div>
        </section>

        <SolutionsCarousel />

        <section id="about" className="lux-section lux-about">
          <div className="home-luxury-shell lux-about-grid">
            <div className="lux-about-media">
              <img src={philosophyImage} alt="Skincare ritual, warm still life" />
              <span className="lux-about-iso-badge" aria-hidden="true">
                <IsoIcon name="photo" size={36} />
              </span>
              <PetalBlob className="lux-art-about-blob" />
            </div>

            <div className="lux-about-copy">
              <span className="lux-kicker">Editorial Precision</span>
              <h2>Luxury skincare that is intentional, measured, and built to last.</h2>
              <p>
                We replace trial-and-error routines with a calm clinical framework. Every step is
                selected to support healthy skin architecture over time, so your glow is not
                temporary.
              </p>

              <div className="lux-principle-list">
                {principles.map((item) => (
                  <article key={item.label} className="lux-principle-item">
                    <span className="lux-principle-icon">
                      <IsoIcon name={item.icon} size={26} />
                    </span>
                    <div>
                      <h3>{item.label}</h3>
                      <p>{item.copy}</p>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="results" className="lux-results">
          <div className="home-luxury-shell">
            <header className="lux-results-header">
              <IsoIcon name="award" className="lux-art-results-sparkles" size={48} />
              <span className="lux-kicker">Results</span>
              <h2>Skin confidence built through method, not guesswork.</h2>
            </header>

            <div className="lux-results-grid">
              {outcomes.map((item) => (
                <article key={item.title} className="lux-result-card">
                  <IsoIcon name={item.icon} className="lux-result-iso" size={40} />
                  <p className="lux-result-value">{item.value}</p>
                  <h3>{item.title}</h3>
                  <p>{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="testimonials" className="lux-section lux-testimonials">
          <div className="home-luxury-shell">
            <header className="lux-testimonials-header">
              <IsoIcon name="face-smile" className="lux-testimonials-iso" size={40} />
              <span className="lux-kicker">Client Notes</span>
              <h2>Small routines. Clearer skin stories.</h2>
            </header>

            <div className="lux-testimonial-grid">
              {testimonials.map((item) => (
                <article key={item.name} className="lux-testimonial-card">
                  <IsoIcon name="quote" className="lux-testimonial-iso" size={32} />
                  <p className="lux-testimonial-quote">&ldquo;{item.quote}&rdquo;</p>
                  <div className="lux-testimonial-byline">
                    <span className="lux-testimonial-avatar" aria-hidden="true">
                      {item.name.charAt(0)}
                    </span>
                    <div>
                      <h3>{item.name}</h3>
                      <p>{item.detail}</p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function QuoteIcon({ name }) {
  return (
    <span className="lux-pullquote-icon" aria-hidden="true">
      <IsoIcon name={name} size={22} />
    </span>
  )
}

export default Home
