import { PetalBlob } from './home/LandingArt'
import { IsoIcon } from './home/IsoIcon'

const exploreLinks = [
  { href: '#about', label: 'About' },
  { href: '#approach', label: 'Our Approach' },
  { href: '#results', label: 'Results' },
  { href: '#testimonials', label: 'Client Notes' },
]

const serviceLinks = [
  { href: '#approach', label: 'Clinical Skincare' },
  { href: '#approach', label: 'Nutridermatology' },
  { href: '#approach', label: 'Barrier Restoration' },
  { href: '#approach', label: 'Personalized Protocols' },
]

export function Footer() {
  return (
    <footer className="lux-footer">
      <PetalBlob className="lux-art-footer-blob" />

      <div className="home-luxury-shell lux-footer-row">
        <div>
          <a href="/" className="lux-footer-wordmark">
            <IsoIcon name="shop" size={32} />
            SkinCare by Aarzoo
          </a>
          <p className="lux-footer-blurb">
            Clinical skin health that addresses root causes, not just surface symptoms. We combine
            clinical expertise with a root-cause approach to deliver long-term skin health.
          </p>
        </div>

        <div className="lux-footer-cols">
          <div className="lux-footer-col">
            <h4>
              <IsoIcon name="home" className="lux-footer-col-iso" size={18} />
              Explore
            </h4>
            <ul>
              {exploreLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lux-footer-col">
            <h4>Services</h4>
            <ul>
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lux-footer-col">
            <h4>
              <IsoIcon name="chat-heart" className="lux-footer-col-iso" size={18} />
              Connect
            </h4>
            <ul>
              <li>
                <a href="mailto:skincare.by.aarzoo@gmail.com">skincare.by.aarzoo@gmail.com</a>
              </li>
              <li>
                <a href="tel:+919217852889">+91 92178 52889</a>
              </li>
              <li>
                <p>Available for consultations by appointment</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lux-footer-strip">
        <div className="home-luxury-shell lux-footer-strip-row">
          <span>© {new Date().getFullYear()} SkinCareByAarzoo. All rights reserved.</span>
          <span>This is not routine skincare — it's clinical skin health.</span>
        </div>
      </div>
    </footer>
  )
}
