import { useLang } from '../lib/LangContext'
import { IMAGES } from '../config'
import Img from './Img'
import Icon from './Icon'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

const FEATURES = [
  ['about_f1_t', 'about_f1_d', 'leaf'],
  ['about_f2_t', 'about_f2_d', 'flame'],
  ['about_f3_t', 'about_f3_d', 'cup'],
]

export default function About() {
  const { t } = useLang()

  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading eyebrow={t('about_eyebrow')} title={t('about_title')} />
          <Reveal delay={100}>
            <p className="mt-8 leading-relaxed text-cream/75">{t('about_p1')}</p>
            <p className="mt-4 leading-relaxed text-cream/75">{t('about_p2')}</p>
          </Reveal>

          <div className="mt-10 grid gap-5 sm:grid-cols-3">
            {FEATURES.map(([title, desc, icon], i) => (
              <Reveal key={title} delay={150 + i * 100}>
                <div className="h-full rounded-2xl border border-cream/10 bg-ink-card p-5 transition-colors hover:border-gold/40">
                  <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold">
                    <Icon name={icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-3 font-display text-lg font-semibold">{t(title)}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{t(desc)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={150}>
          <div className="relative mx-auto max-w-md lg:max-w-none">
            <Img
              src={IMAGES.about1}
              alt="Restaurant interior"
              className="aspect-[4/5] w-4/5 rounded-3xl object-cover shadow-2xl shadow-black/50"
            />
            <Img
              src={IMAGES.about2}
              alt="Dining hall"
              className="absolute -bottom-10 right-0 aspect-square w-1/2 rounded-3xl border-4 border-ink object-cover shadow-2xl shadow-black/50"
            />
            <div className="absolute -left-3 top-8 rounded-2xl bg-gold px-5 py-4 text-ink shadow-xl sm:-left-6">
              <p className="font-display text-3xl font-bold leading-none">15+</p>
              <p className="mt-1 text-xs font-medium">{t('stat_1')}</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
