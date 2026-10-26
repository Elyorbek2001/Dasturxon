import { useEffect, useState } from 'react'
import { useLang } from '../lib/LangContext'
import { RESTAURANT } from '../config'

const LINKS = [
  ['about', 'nav_about'],
  ['menu', 'nav_menu'],
  ['gallery', 'nav_gallery'],
  ['reviews', 'nav_reviews'],
]

export default function Navbar() {
  const { lang, setLang, t } = useLang()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'bg-ink/90 shadow-lg shadow-black/30 backdrop-blur-md' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#home" onClick={close} className="font-display text-2xl font-semibold tracking-wide">
          {RESTAURANT.name}
          <span className="text-gold">.</span>
        </a>

        <ul className="hidden items-center gap-9 lg:flex">
          {LINKS.map(([id, key]) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className="text-sm text-cream/80 transition-colors hover:text-gold"
              >
                {t(key)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="flex overflow-hidden rounded-full border border-cream/20 text-xs font-medium">
            {['uz', 'en'].map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                aria-pressed={lang === l}
                className={`px-3 py-1.5 uppercase transition-colors ${
                  lang === l ? 'bg-gold text-ink' : 'text-cream/70 hover:text-cream'
                }`}
              >
                {l}
              </button>
            ))}
          </div>

          <a
            href="#reservation"
            className="hidden rounded-full bg-gold px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-gold-soft sm:inline-block"
          >
            {t('nav_book')}
          </a>

          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            aria-expanded={open}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 lg:hidden"
          >
            <span className={`h-0.5 w-6 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-6 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-6 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
        </div>
      </nav>

      <div
        className={`overflow-hidden transition-all duration-300 lg:hidden ${
          open ? 'max-h-96 border-t border-cream/10' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-4">
          {LINKS.map(([id, key]) => (
            <li key={id}>
              <a href={`#${id}`} onClick={close} className="block py-3 text-cream/90">
                {t(key)}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#reservation"
              onClick={close}
              className="mt-2 block rounded-full bg-gold py-3 text-center font-semibold text-ink"
            >
              {t('nav_book')}
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
