// Thick gold rim along the bottom of the home page's heading band (.hero-band in
// index.css). It traces the upper arc of the ellipse cx=50 cy=100 rx=62 ry=100
// between the screen edges — the same ellipse the band's CSS mask cuts out, so
// the rim sits exactly on the band's curved edge. Same as sastranidhi.org,
// Paripraśna and Viśleṣaka's heading partition.
export function HeroDome() {
  return (
    <svg className="hero-dome" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
      <defs>
        <linearGradient id="heroDomeGold" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0" stopColor="#b8860b" />
          <stop offset="0.3" stopColor="#e8c34a" />
          <stop offset="0.5" stopColor="#fff6d6" />
          <stop offset="0.7" stopColor="#e8c34a" />
          <stop offset="1" stopColor="#b8860b" />
        </linearGradient>
      </defs>
      <path
        d="M0 40.87 A62 100 0 0 1 100 40.87"
        fill="none"
        stroke="url(#heroDomeGold)"
        strokeWidth="6"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}
