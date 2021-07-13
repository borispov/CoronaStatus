import { useState, useEffect } from 'react'
import axios from 'axios'

// const baseURL = `https://nCorona.live/api/v1/countries`
const baseURL = "https://disease.sh/v3/covid-19/countries"

function useCountries() {
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState()

  useEffect(() => {
    (async () => {
      setError()
      const { data } = await axios.get(baseURL);
      const countries = data.map(country => country.country);
      // const { countries } = data
      setCountries(countries)
    })()
  }, [])

  return {
    countries, error
  }
}

export default useCountries;
