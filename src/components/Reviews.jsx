import { useLang } from '../lib/LangContext'
import { reviews } from '../i18n'
import { Stars } from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const { t, tr } = useLang()

  return (
    <section id="reviews" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHeading eyebrow={t('rev_eyebrow')} title={t('rev_title')} center />

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {reviews.map((r, i) => (
          <Reveal key={r.name} delay={i * 120}>
            <figure className="flex h-full flex-col rounded-3xl border border-cream/10 bg-ink-card p-7 transition-colors hover:border-gold/40">
              <Stars />
              <blockquote className="mt-4 flex-1 leading-relaxed text-cream/85">
                “{tr(r.text)}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/15 font-display text-lg text-gold">
                  {r.name[0]}
                </span>
                <span>
                  <span className="block text-sm font-semibold">{r.name}</span>
                  <span className="block text-xs text-muted">{tr(r.role)}</span>
                </span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
