import { TAGLINE_LEAD, TAGLINE_TOPICS } from '@/lib/site'

// The site tagline, with each topic in shimmering gold (.tagline-topic).
export function Tagline({ className }: { className?: string }) {
  return (
    <p className={className}>
      {TAGLINE_LEAD}{' '}
      {TAGLINE_TOPICS.map((topic, i) => (
        <span key={topic}>
          {i === TAGLINE_TOPICS.length - 1 ? 'and ' : ''}
          <span className="tagline-topic">{topic}</span>
          {i === TAGLINE_TOPICS.length - 1 ? '.' : ', '}
        </span>
      ))}
    </p>
  )
}
