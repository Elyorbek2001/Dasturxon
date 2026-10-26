import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      <p className="text-xs font-medium uppercase tracking-[0.3em] text-gold">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl font-semibold leading-tight sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`mt-5 h-px w-16 bg-gold/70 ${center ? 'mx-auto' : ''}`} />
    </Reveal>
  )
}
