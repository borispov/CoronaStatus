import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import sortForChart from '../utils/sortForChart'
import sortExternalApi from '../utils/sortExternalApi'


// old api
// const baseURL = `https://nCorona.live/api/v1/alltime/`
const baseURL = `https://disease.sh/v3/covid-19/historical/`

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'israel')
}

// function useTime(loc, url = baseURL) {
function useTime(loc, theme = {}) {

  const [countryStats, setCountryStats] = useState();
  const [countryGraphLoading, setLoading] = useState(false);
  const [countryGraphError, setError] = useState(false);
  const [countries, setCountries] = useState()

  useEffect(() => {
    async function fetchData(cn) {

      setLoading(true)
      setError()
      const country = loc || await currentCountry()
      const URL = baseURL + country
      const data = await axios.get(URL)
        .then(res => res.data)
        .catch(err => setError(err))

      if (!data|| !data.length) {
        setError('Could Not Find Time Data For Country : ', loc)
        setLoading(false)
        return
      }

      const timeStats = sortForChart(data, theme);
      setCountryStats(timeStats)
      setLoading(false)
    }
    fetchData(loc)

  }, [loc])

  return {
    countryStats, countryGraphLoading, countryGraphError, countries
  }
}

export default useTime;
