import { useLang } from '../lib/LangContext'
import { RESTAURANT } from '../config'

export default function Footer() {
  const { t, tr } = useLang()

  return (
    <footer className="border-t border-cream/10 bg-ink-soft">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-semibold">
            {RESTAURANT.name}
            <span className="text-gold">.</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted">{t('footer_text')}</p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">{t('footer_links')}</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            {[
              ['about', 'nav_about'],
              ['menu', 'nav_menu'],
              ['gallery', 'nav_gallery'],
              ['reservation', 'nav_book'],
            ].map(([id, key]) => (
              <li key={id}>
                <a href={`#${id}`} className="transition-colors hover:text-gold">
                  {t(key)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs uppercase tracking-widest text-gold">{t('footer_contact')}</p>
          <ul className="mt-4 space-y-2 text-sm text-cream/75">
            <li>{tr(RESTAURANT.address)}</li>
            <li>
              <a href={`tel:${RESTAURANT.phone.replace(/\s/g, '')}`} className="hover:text-gold">
                {RESTAURANT.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${RESTAURANT.email}`} className="hover:text-gold">
                {RESTAURANT.email}
              </a>
            </li>
            <li>{RESTAURANT.hours}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10 py-5 text-center text-xs text-muted">
        © {new Date().getFullYear()} {RESTAURANT.name}. {t('footer_rights')}
      </div>
    </footer>
  )
}
