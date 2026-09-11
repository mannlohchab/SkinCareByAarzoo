import featureImageOne from '../../assets/feature1.jpeg'
import featureImageTwo from '../../assets/feature2.jpeg'
import featureImageThree from '../../assets/feature3.jpeg'
import featureImageFour from '../../assets/feature4.jpeg'

const features = [
  {
    title: 'Acne-prone skin',
    description:
      'Support for recurring breakouts through topical routine, nutrition, and the daily habits that keep inflammation cycling.',
    image: featureImageOne,
  },
  {
    title: 'Rosacea-prone skin',
    description:
      'A calmer, barrier-aware approach for redness-prone skin — focused on triggers, comfort, and long-term stability.',
    image: featureImageTwo,
  },
  {
    title: 'Pigmentation concerns',
    description:
      'Guidance for uneven tone that looks beyond a single serum — routine, lifestyle, and consistency over quick correction.',
    image: featureImageThree,
  },
  {
    title: 'Barrier & skin longevity',
    description:
      'For compromised barriers and anyone focused on resilient, long-term skin health rather than a short-term glow.',
    image: featureImageFour,
  },
]

export function FeatureGrid() {
  return (
    <section id="clients" className="lux-section lux-feature-section">
      <div className="home-luxury-shell">
        <header className="lux-feature-header" data-reveal>
          <div>
            <span className="lux-kicker">Who I Work With</span>
            <h2>Skin concerns I support, without a one-size routine.</h2>
          </div>
          <p>
            I support clients navigating acne-prone skin, rosacea-prone skin, pigmentation
            concerns, compromised skin barriers, and those focused on long-term skin longevity.
          </p>
        </header>

        <div className="lux-feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="lux-feature-card">
              <div className="lux-feature-media">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="lux-feature-copy">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
