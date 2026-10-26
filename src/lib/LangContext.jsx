import { createContext, useContext, useEffect, useState } from 'react'
import { dict } from '../i18n'

const LangContext = createContext(null)

function initialLang() {
  try {
    return localStorage.getItem('lang') || 'en'
  } catch {
    return 'en'
  }
}

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const t = (key) => dict[lang][key] ?? key
  // {en, uz} obyektidan joriy tilni tanlaydi
  const tr = (obj) => (obj ? obj[lang] ?? obj.en : '')

  return <LangContext.Provider value={{ lang, setLang, t, tr }}>{children}</LangContext.Provider>
}

export const useLang = () => useContext(LangContext)
