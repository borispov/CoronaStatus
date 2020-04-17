import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import sortForChart from '../utils/sortForChart'
import sortExternalApi from '../utils/sortExternalApi'


const baseURL = `https://nCorona.live/api/v1/alltime/`
const baseURLv2 = 'https://pomber.github.io/covid19/timeseries.json'

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'israel')
}

// function useTime(loc, url = baseURL) {
function useTime(loc, theme = {}) {

  const [countryStats, setCountryStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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

      // const data = await axios.get(baseURLv2)
      //   .then(res => res.data[country])
      //   .catch(err => setError(err))

      // const timeStats = sortExternalApi(data);
      const timeStats = sortForChart(data, theme);
      setCountryStats(timeStats)
      setLoading(false)
    }
    fetchData(loc)

  }, [loc])

  return {
    countryStats, loading, error, countries
  }
}

export default useTime;
