import { useState, useEffect } from 'react'
import axios from 'axios'

const isUSA = s => s === 'usa' || s === 'Usa' || s === 'United States'
const isUK = str => str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain'
const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
const parseCountry = country => isUSA(country) ? 'USA' : isUK(country) ? 'UK' : country

export default function useYday(url, country) {

  const [yesterdayCn, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [ydayError, setError] = useState(false);
  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError()
      const URL = url + parseCountry(country).toLowerCase()
      try {
        const { data } = await axios.get(URL + '?yesterday=true')
        const yesterdayCn = {
          active: data.active,
          cases: data.cases,
          todayCases: data.todayCases,
          recovered: data.recovered,
          deaths: data.deaths,
          country: data.country
        }
        setStats(yesterdayCn)
        setLoading(false)
       } catch(e) {
        setError(e)
      }
    }
    fetchData();
  }, [country])
  return {
    yesterdayCn, loading, ydayError
  }
}
