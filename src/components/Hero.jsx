import { useLang } from '../lib/LangContext'
import { IMAGES } from '../config'
import Img from './Img'

export default function Hero() {
  const { t } = useLang()

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <Img src={IMAGES.hero} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-gradient-to-r from-ink/70 to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-5 pb-24 pt-32 sm:px-8">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gold sm:text-sm">
          {t('hero_eyebrow')}
        </p>
        <h1 className="mt-6 max-w-3xl font-display text-4xl font-semibold leading-[1.1] sm:text-6xl lg:text-7xl">
          {t('hero_title_1')}
          <br />
          <span className="italic text-gold">{t('hero_title_2')}</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-cream/75 sm:text-lg">
          {t('hero_text')}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#reservation"
            className="rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:bg-gold-soft"
          >
            {t('hero_cta_1')}
          </a>
          <a
            href="#menu"
            className="rounded-full border border-cream/30 px-8 py-3.5 text-sm font-medium transition-colors hover:border-gold hover:text-gold"
          >
            {t('hero_cta_2')}
          </a>
        </div>

        <dl className="mt-16 grid max-w-xl grid-cols-3 gap-6 border-t border-cream/15 pt-8">
          {[
            ['15+', 'stat_1'],
            ['60+', 'stat_2'],
            ['25k', 'stat_3'],
          ].map(([num, key]) => (
            <div key={key}>
              <dt className="font-display text-3xl font-semibold text-gold sm:text-4xl">{num}</dt>
              <dd className="mt-1 text-xs leading-snug text-muted sm:text-sm">{t(key)}</dd>
            </div>
          ))}
        </dl>
      </div>

      <a
        href="#about"
        aria-label={t('scroll')}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-widest text-muted sm:flex"
      >
        {t('scroll')}
        <span className="animate-float-y block h-8 w-px bg-gold" />
      </a>
    </section>
  )
}
