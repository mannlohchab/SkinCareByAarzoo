import { useState } from 'react'
import { LuxuryNavbar } from '../components/home/LuxuryNavbar'
import { HeroSection } from '../components/home/HeroSection'
import { FeatureGrid } from '../components/home/FeatureGrid'
import { Footer } from '../components/Footer'
import '../style/Home.css'

const credentials = [
  'Certified Skin Aesthetician (CIDESCO, UK)',
  'Certified Skin Nutritionist',
  'NutriDermatology Specialist — SNI, UK',
]

const enrollNotes = [
  {
    label: 'Sessions',
    copy: 'Video call sessions. Missed appointments without prior notice cannot be rescheduled or refunded.',
  },
  {
    label: 'Consistency matters',
    copy: 'Regular attendance at follow-ups is key to results.',
  },
  {
    label: 'Rescheduling',
    copy: 'Sessions can be rescheduled if you inform us 24 hours before the appointment.',
  },
  {
    label: 'Pricing',
    copy: 'Reflects current rates and may change for future bookings.',
  },
  {
    label: 'Not medical care',
    copy: 'This is skin aesthetician and nutrition guidance — not a substitute for medical diagnosis or treatment. Please consult a dermatologist for diagnosed conditions.',
  },
  {
    label: 'Results vary',
    copy: 'Outcomes depend on individual skin, consistency, and adherence to the plan, and cannot be guaranteed.',
  },
  {
    label: 'Refunds',
    copy: 'As this is a personalized, proprietary service, refunds are not offered once enrolled.',
  },
]

const faqs = [
  {
    question: 'What is SkinCare by Aarzoo?',
    answer:
      'A personalized skin consulting practice combining topical skincare, skin nutrition, and lifestyle guidance to support long-term skin health.',
  },
  {
    question: 'What concerns do you work with?',
    answer:
      'Acne-prone skin, rosacea-prone skin, pigmentation, compromised skin barrier, and skin longevity goals.',
  },
  {
    question: 'How is this different from a dermatologist?',
    answer:
      'We focus on nutrition, lifestyle, and topical routine guidance as a wellness approach — not medical diagnosis or treatment. If you have a diagnosed skin condition, we recommend working with a dermatologist alongside this program.',
  },
  {
    question: 'Do I need to buy specific products?',
    answer:
      'Products are recommended based on your skin needs, along with purchase links where available in your region.',
  },
  {
    question: 'What results can I expect?',
    answer:
      "Results vary by individual and depend on consistency. We don't guarantee specific outcomes — the program is a structured, sustainable approach rather than a quick fix.",
  },
  {
    question: 'Who is this program NOT for?',
    answer:
      "This program is not a substitute for medical care. It's not suitable for individuals with severe or unmanaged medical conditions — such as cancer, cardiac conditions, diabetes — without their doctor's guidance and approval alongside this program. If you have a diagnosed medical condition, please consult your physician before enrolling, and inform us during intake so we can guide you appropriately.",
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Pre-Consultation Form',
    copy: 'Share your skin concerns, history, and goals through a short intake form.',
  },
  {
    step: '02',
    title: 'Discovery Call',
    copy: 'A 20–30 minute call to understand your skin and see if the program is the right fit for you.',
  },
  {
    step: '03',
    title: 'Personalized 3-Month Program',
    copy: 'Receive a plan combining skincare and skin nutrition — or a topical-only routine, whichever suits you best — with video call check-ins every 15 days to track progress and adjust your plan.',
  },
]

function Home() {
  const [openFaq, setOpenFaq] = useState(0)

  return (
    <>
      <LuxuryNavbar />
      <main className="home-luxury-page">
        <HeroSection />

        <section id="about" className="lux-section lux-about">
          <div className="home-luxury-shell lux-about-grid">
            <div className="lux-about-copy">
              <span className="lux-kicker">About</span>
              <h2>Arzoo Minocha</h2>
              <p className="lux-role">
                Skin Consultant | Certified Skin Aesthetician & Skin Nutritionist
              </p>
              <p>
                I combine topical skincare with skin nutrition and lifestyle guidance to
                support long-term skin health — addressing the everyday habits that show
                up on your skin, not just the surface routine.
              </p>
            </div>

            <div className="lux-about-panel">
              <article className="lux-principle-item">
                <span className="lux-kicker">Credentials & Training</span>
                <ul className="lux-credential-list">
                  {credentials.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section className="lux-section lux-story">
          <div className="home-luxury-shell lux-story-grid">
            <article className="lux-story-card">
              <span className="lux-kicker">My Story</span>
              <h2>The combination of care that actually lasts.</h2>
              <p>
                For over eight years, I struggled with acne — trying product after product,
                hoping the next one would finally work. It wasn't until I started making
                real changes to my nutrition and lifestyle, alongside a consistent skincare
                routine, that I saw lasting improvement. That experience is why I built this
                practice: to help others find the same combination of care that actually lasts.
              </p>
            </article>

            <div className="lux-story-aside">
              <article className="lux-note-card">
                <span className="lux-kicker">A Note Before You Begin</span>
                <h3>Educational guidance, not medical care.</h3>
                <p>
                  This is educational and wellness guidance — not a substitute for medical
                  diagnosis or treatment. If you have a diagnosed skin condition, please
                  consult a dermatologist alongside this program.
                </p>
              </article>

              <article className="lux-note-card lux-note-card-accent">
                <span className="lux-kicker">Is This For You?</span>
                <h3>Ready for a few months of consistent care.</h3>
                <p>
                  If you've tried product after product without lasting change, and you're
                  ready to commit a few months to a consistent, holistic approach —
                  combining skincare, nutrition, and lifestyle — this program is built for you.
                </p>
              </article>
            </div>
          </div>
        </section>

        <FeatureGrid />

        <section id="approach" className="lux-section lux-process">
          <div className="home-luxury-shell">
            <header className="lux-process-header">
              <span className="lux-kicker">How It Works</span>
              <h2>A clear path from intake to a 3-month plan.</h2>
            </header>

            <div className="lux-process-grid">
              {howItWorks.map((item) => (
                <article key={item.step} className="lux-process-card">
                  <span className="lux-kicker">{`Step ${item.step}`}</span>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="lux-section lux-faq">
          <div className="home-luxury-shell lux-faq-layout">
            <header className="lux-faq-header">
              <span className="lux-kicker">Questions</span>
              <h2>What to know before you enroll.</h2>
              <p>
                A few straight answers about the practice, who it supports, and how it
                differs from medical care.
              </p>
            </header>

            <div className="lux-faq-list">
              {faqs.map((item, index) => {
                const isOpen = openFaq === index
                return (
                  <article key={item.question} className={`lux-faq-item ${isOpen ? 'is-open' : ''}`}>
                    <button
                      type="button"
                      className="lux-faq-trigger"
                      aria-expanded={isOpen}
                      onClick={() => setOpenFaq(isOpen ? -1 : index)}
                    >
                      <h3>{item.question}</h3>
                      <span aria-hidden="true">{isOpen ? '–' : '+'}</span>
                    </button>
                    {isOpen ? <p>{item.answer}</p> : null}
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="enroll" className="lux-section lux-enroll">
          <div className="home-luxury-shell">
            <header className="lux-enroll-header">
              <span className="lux-kicker">Before You Enroll</span>
              <h2>A few things to know before starting your program.</h2>
              <p>Please read these notes before beginning your program with SkinCare by Aarzoo.</p>
            </header>

            <div className="lux-enroll-grid">
              {enrollNotes.map((item) => (
                <article key={item.label} className="lux-enroll-card">
                  <span className="lux-kicker">{item.label}</span>
                  <p>{item.copy}</p>
                </article>
              ))}

              <article className="lux-enroll-card lux-enroll-card-cta">
                <span className="lux-kicker">Questions?</span>
                <p>
                  Email{' '}
                  <a href="mailto:skincare.by.aarzoo@gmail.com">
                    skincare.by.aarzoo@gmail.com
                  </a>{' '}
                  with your order number.
                </p>
              </article>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Home
