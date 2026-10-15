// Decorative lotus mandala (line art in currentColor), used behind the gateway
// page's cards and in its footer.
export function Mandala({ className }: { className?: string }) {
  const angles = Array.from({ length: 24 }, (_, i) => i * 15)
  return (
    <svg viewBox="-100 -100 200 200" fill="none" stroke="currentColor" strokeWidth="0.6" className={className} aria-hidden="true">
      <circle r="98" />
      <circle r="92" strokeDasharray="1.5 3" />
      <circle r="70" />
      <circle r="44" />
      <circle r="24" strokeDasharray="1 2" />
      {angles.map((a) => (
        <ellipse key={`o${a}`} rx="11" ry="30" cy="-62" transform={`rotate(${a})`} />
      ))}
      {angles.map((a) => (
        <ellipse key={`i${a}`} rx="6" ry="15" cy="-32" transform={`rotate(${a + 7.5})`} />
      ))}
    </svg>
  )
}
