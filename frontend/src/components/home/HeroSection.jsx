import { useEffect, useId, useMemo, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import heroImage from '../../assets/hero.jpg'
import { ScriptHighlight } from './LandingArt'
import { IsoIcon } from './IsoIcon'

const tickerItems = [
  'Skin Brightening',
  'Hydration Therapy',
  'Pigmentation Correction',
  'Acne & Blemish Control',
  'Laser & RF Treatments',
]

function ArcTicker() {
  const wrapRef = useRef(null)
  const pathRef = useRef(null)
  const measureRef = useRef(null)
  const pathId = useId().replace(/:/g, '')
  const fadeId = `${pathId}-fade`
  const maskId = `${pathId}-mask`

  const [width, setWidth] = useState(1200)
  const [cycleLength, setCycleLength] = useState(0)
  const [pathLength, setPathLength] = useState(0)
  const [reduceMotion, setReduceMotion] = useState(false)

  const arcH = Math.min(40, Math.max(28, width * 0.04))
  const fontSize = Math.min(15.2, Math.max(13.12, width * 0.014))
  const textDy = Math.round(fontSize * 1.2)
  const height = Math.round(arcH + textDy + fontSize + 18)
  const yCtrl = -(arcH / 3)

  const paths = useMemo(() => {
    const curve = `M0 ${arcH} C ${width * 0.275} ${yCtrl}, ${width * 0.725} ${yCtrl}, ${width} ${arcH}`
    const fill = `${curve} L ${width} ${height} L 0 ${height} Z`
    return { curve, fill }
  }, [arcH, height, width, yCtrl])

  const cycleText = useMemo(
    () => tickerItems.map((item) => `${item}\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0✦\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0`).join(''),
    []
  )

  const copies = useMemo(() => {
    if (!cycleLength) return 6
    const travel = pathLength || width * 1.05
    return Math.max(4, Math.ceil((travel + cycleLength) / cycleLength) + 1)
  }, [cycleLength, pathLength, width])

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduceMotion(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return undefined

    const measure = () => {
      setWidth(Math.max(320, Math.round(el.getBoundingClientRect().width)))
    }

    measure()
    const observer = new ResizeObserver(measure)
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const measureText = () => {
      const length = measureRef.current?.getComputedTextLength() || 0
      if (length > 0) setCycleLength(length)
      const curveLen = pathRef.current?.getTotalLength() || 0
      if (curveLen > 0) setPathLength(curveLen)
    }

    measureText()
    document.fonts.ready.then(measureText).catch(() => {})
  }, [width, fontSize, cycleText, paths.curve])

  return (
    <div className="lux-hero-ribbon" ref={wrapRef} aria-hidden="true">
      <svg
        className="lux-ticker-svg"
        viewBox={`0 0 ${width} ${height}`}
        width="100%"
        height={height}
      >
        <defs>
          <path id={pathId} ref={pathRef} d={paths.curve} />
          <linearGradient id={fadeId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="#fff" stopOpacity="0" />
            <stop offset="0.05" stopColor="#fff" stopOpacity="1" />
            <stop offset="0.95" stopColor="#fff" stopOpacity="1" />
            <stop offset="1" stopColor="#fff" stopOpacity="0" />
          </linearGradient>
          <mask id={maskId} maskUnits="userSpaceOnUse">
            <rect width={width} height={height} fill={`url(#${fadeId})`} />
          </mask>
        </defs>

        <path d={paths.fill} fill="currentColor" />

        <text
          ref={measureRef}
          className="lux-ticker-measure"
          x="-9999"
          y="-9999"
          fontSize={fontSize}
        >
          {cycleText}
        </text>

        <text
          className="lux-ticker-arc-text"
          dy={textDy}
          fontSize={fontSize}
          mask={`url(#${maskId})`}
        >
          <textPath href={`#${pathId}`} startOffset={reduceMotion ? '8%' : '0'}>
            <tspan>{cycleText.repeat(reduceMotion ? 2 : copies)}</tspan>
            {!reduceMotion && cycleLength > 0 && (
              <animate
                attributeName="startOffset"
                from="0"
                to={String(-cycleLength)}
                dur="30s"
                repeatCount="indefinite"
              />
            )}
          </textPath>
        </text>
      </svg>
    </div>
  )
}

export function HeroSection() {
  return (
    <section id="home" className="lux-hero">
      <img
        className="lux-hero-photo"
        src={heroImage}
        alt="Close-up of glowing skin with natural freckles"
        loading="eager"
      />
      <div className="lux-hero-scrim" aria-hidden="true" />

      <div className="home-luxury-shell lux-hero-content-wrap">
        <div className="lux-hero-content">
          <h1>
            Advanced, Personalized
            <span className="lux-hero-script">
              <ScriptHighlight className="lux-hero-highlight" />
              Skin Treatments
            </span>
          </h1>
          <div className="lux-hero-actions">
            <Link to="/signup" className="lux-btn lux-btn-primary">
              Book an appointment
              <IsoIcon name="arrow-forward" className="lux-hero-cta-iso" size={18} />
            </Link>
          </div>
        </div>
      </div>

      <ArcTicker />
    </section>
  )
}
