const defaultLocale = 'he'

import { ProxyContext } from '../context/proxy-context'

const isLocale = str => ['he', 'en'].some(locale => str === locale)

export function getInitialLocale(c){
  // preference from the previous session
  const localSetting = localStorage.getItem('locale')
  if (localSetting && isLocale(localSetting)) {
    return localSetting
  }

  const country = c
  console.log(country);
  if (country === 'israel') {
    return 'he'
  }

  // the language setting of the browser
  const [browserSetting] = navigator.language.split('-')
  if (isLocale(browserSetting)) {
    return browserSetting
  }

  return defaultLocale
}
