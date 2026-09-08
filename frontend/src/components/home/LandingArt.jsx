/*
 * Decorative SVG artwork for the landing page — soft, organic marks that
 * echo the editorial-beauty reference boards (warm portrait photography,
 * rounded pill CTAs, a single flower/blob accent). Everything here is
 * purely ornamental, so each piece is aria-hidden and non-focusable.
 */

/* Four-point sparkle — used as a small inline accent between phrases
   and along the services ticker. */
export function Sparkle({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 0c1.1 8.2 3.8 10.9 12 12-8.2 1.1-10.9 3.8-12 12-1.1-8.2-3.8-10.9-12-12C8.2 10.9 10.9 8.2 12 0Z"
        fill="currentColor"
      />
    </svg>
  )
}

/* Four-petal bloom used in the services ticker and pull-quote. */
export function FlowerMark({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="6.2" r="4.1" fill="currentColor" />
      <circle cx="17.8" cy="12" r="4.1" fill="currentColor" />
      <circle cx="12" cy="17.8" r="4.1" fill="currentColor" />
      <circle cx="6.2" cy="12" r="4.1" fill="currentColor" />
      <circle cx="12" cy="12" r="2.4" fill="currentColor" />
    </svg>
  )
}

/* Radiating sunburst used as an inline phrase mark. */
export function SunMark({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
      {[0, 45, 90, 135, 180, 225, 270, 315].map((deg) => (
        <rect
          key={deg}
          x="11.15"
          y="1.2"
          width="1.7"
          height="4.4"
          rx="0.85"
          fill="currentColor"
          transform={`rotate(${deg} 12 12)`}
        />
      ))}
    </svg>
  )
}

/* Abstract leaf used as an inline phrase accent. */
export function LeafMark({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M12 21.2C6.4 16.8 4.2 10.2 12 3.2c7.8 7 5.6 13.6 0 18Z"
        fill="currentColor"
      />
      <path
        d="M12 19.4V7.1"
        fill="none"
        stroke="#fffdf8"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
      <path
        d="M12 11.2c1.7-.9 3.1-2.4 4-4.2M12 13.8c-1.6-.8-2.9-2.1-3.7-3.8"
        fill="none"
        stroke="#fffdf8"
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  )
}

/* A loose scatter of three sparkles at different scales — a warm,
   honest stand-in for "social proof" that doesn't invent client photos. */
export function SparkleCluster({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 96 64"
      aria-hidden="true"
      focusable="false"
    >
      <g transform="translate(6 8) scale(1.15)">
        <Sparkle />
      </g>
      <g transform="translate(34 26) scale(0.7)">
        <Sparkle />
      </g>
      <g transform="translate(58 4) scale(0.85)">
        <Sparkle />
      </g>
    </svg>
  )
}

/* Soft organic blob built from overlapping circles — reads as an
   abstracted flower/petal cluster without copying any specific
   reference illustration. */
export function PetalBlob({ className = '' }) {
  const petals = 6
  const ringRadius = 27
  const petalRadius = 30

  const points = Array.from({ length: petals }, (_, index) => {
    const angle = (360 / petals) * index - 90
    const rad = (angle * Math.PI) / 180
    return {
      cx: 60 + ringRadius * Math.cos(rad),
      cy: 60 + ringRadius * Math.sin(rad),
    }
  })

  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
    >
      {points.map(({ cx, cy }, index) => (
        <circle key={index} cx={cx.toFixed(2)} cy={cy.toFixed(2)} r={petalRadius} fill="currentColor" />
      ))}
      <circle cx="60" cy="60" r="22" fill="currentColor" />
    </svg>
  )
}

/* Marker-pen swipe behind the hero script line. */
export function ScriptHighlight({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 320 36"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path
        fill="currentColor"
        d="M3.8 21.2C26.4 8.6 61.2 28.4 96.8 16.8 129.4 6.2 157.6 29.8 196.2 18.4 230.4 8.2 266.6 26.4 315.6 14.2c2.8-.7 5.8 1.6 5.5 4.5l-2.2 13.8c-.4 2.4-2.8 3.9-5.1 3.4-43.2-8.4-78.8 8.8-117.4 2.1-36.8-6.4-65.2-18.2-103.6-6.8C55.8 35.4 29.6 40.2 7.4 31.2 4.4 29.9 2.6 26.8 3 23.5l.8-2.3Z"
      />
    </svg>
  )
}

/* Shallow dome used to lift a light band up into the section above it
   (the hero photo, in practice) without a hard straight seam. */
export function ArcDivider({ className = '' }) {
  return (
    <svg
      className={`lux-art ${className}`}
      viewBox="0 0 200 24"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M0,24 C55,-8 145,-8 200,24 Z" fill="currentColor" />
    </svg>
  )
}
