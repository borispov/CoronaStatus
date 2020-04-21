const defaultLocale = 'he'

import { useContext } from 'react'
import { LocaleContext } from '../context/LocaleContext'
import { strings } from '../locales/translations'

export default function useTranslation() {
  const { locale } = useContext(LocaleContext)

  const t = (key, key2) => {

    if (!key2) {
      if (!strings[locale][key]) {
        console.warn(`Translation '${key}' for locale '${locale}' not found.`)
        return
      }
      return strings[locale][key] || strings[defaultLocale][key] || ''
    }

    if (!strings[locale][key2][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`)
    }

    return strings[locale][key2][key] || strings[defaultLocale][key2][key] || ''
  }

  return {
    t,
    locale
  }
}
