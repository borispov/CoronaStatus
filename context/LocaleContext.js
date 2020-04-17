import {
  useState,
  useEffect,
  useRef,
  createContext
} from 'react'

export const LocaleContext = createContext()

export const LocaleProvider = (props) => {
  // Default Setting
  const initialState = 'he'

  const [ locale, setLocale ] = useState(initialState)
  const prev = useRef()

  useEffect(() => {

    if (prev.current === undefined && locale === 'he') {
      const readLocal = localStorage.getItem('locale')
      if (readLocal !== 'he') { setLocale(readLocal) }
      else { 
        localStorage.setItem('locale', locale) 
        setLocale(readLocal) 
      }
    } else {
      localStorage.setItem('locale', locale)
      prev.current = locale
    }
  }, [locale])

  return (
    <LocaleContext.Provider value={{ locale, setLocale }} >
      {props.children}
    </LocaleContext.Provider>
  )
}
