import { useState } from 'react'
import { useLang } from '../lib/LangContext'
import { CATEGORIES, MENU } from '../data/menu'
import { IMAGES, RESTAURANT } from '../config'
import Img from './Img'
import Reveal from './Reveal'
import SectionHeading from './SectionHeading'

export default function Menu() {
  const { t, tr } = useLang()
  const [active, setActive] = useState(CATEGORIES[0])

  return (
    <section id="menu" className="bg-ink-soft py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t('menu_eyebrow')} title={t('menu_title')} center />

        <Reveal delay={100} className="mt-10">
          <div
            role="tablist"
            className="mx-auto flex max-w-full gap-2 overflow-x-auto pb-2 sm:justify-center"
          >
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={active === c}
                onClick={() => setActive(c)}
                className={`shrink-0 rounded-full border px-5 py-2.5 text-sm font-medium transition-all ${
                  active === c
                    ? 'border-gold bg-gold text-ink'
                    : 'border-cream/15 text-cream/75 hover:border-gold/60 hover:text-gold'
                }`}
              >
                {t(`cat_${c}`)}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-12 grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
          <div className="lg:col-span-2">
            <Img
              key={active}
              src={IMAGES.categories[active]}
              alt={t(`cat_${active}`)}
              className="aspect-[4/3] w-full rounded-3xl object-cover shadow-2xl shadow-black/50 lg:sticky lg:top-28 lg:aspect-[4/5]"
            />
          </div>

          <ul key={active} className="space-y-7 lg:col-span-3">
            {MENU[active].map((item, i) => (
              <Reveal key={item.name.en} delay={i * 80}>
                <li className="group">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-xl font-semibold transition-colors group-hover:text-gold sm:text-2xl">
                      {tr(item.name)}
                    </h3>
                    <span className="mb-1 flex-1 border-b border-dotted border-cream/25" />
                    <span className="font-display text-xl font-semibold text-gold sm:text-2xl">
                      {RESTAURANT.currency}
                      {item.price}
                    </span>
                  </div>
                  <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
                    {tr(item.desc)}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>

        <p className="mt-14 text-center text-sm text-muted">{t('menu_note')}</p>
      </div>
    </section>
  )
}
