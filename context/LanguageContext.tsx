'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { translations, type Language, type TranslationSchema } from '@/data/translations'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: TranslationSchema
}

const LanguageContext = createContext<LanguageContextType>({
  lang: 'es',
  setLang: () => {},
  t: translations.es,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>('es')

  useEffect(() => {
    const saved = localStorage.getItem('kodigosat_lang') as Language | null
    if (saved === 'es' || saved === 'en') {
      setLangState(saved)
    } else {
      // Auto-detect browser language
      const browserLang = navigator.language.slice(0, 2).toLowerCase()
      if (browserLang === 'en') {
        setLangState('en')
      }
    }
  }, [])

  const setLang = (newLang: Language) => {
    setLangState(newLang)
    localStorage.setItem('kodigosat_lang', newLang)
  }

  const t = translations[lang]

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}
