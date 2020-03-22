import { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import sortForChart from './sortForChart'

const baseURL = `http://covid19.borisky.me:3003/api/v1/alltime/`

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'israel')
}

// function useTime(loc, url = baseURL) {
function useTime(loc) {


  const [countryStats, setCountryStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {
    async function fetchData(cn) {

      setLoading(true)
      setError()
      const country = loc || await currentCountry()
      const URL = baseURL + country
      // console.log(URL);
      const data = await axios.get(URL)
        .then(res => res.data)
        .catch(err => setError(err))
      const timeStats = sortForChart(data);
      setCountryStats(timeStats)
      setLoading(false)
    }
    fetchData(loc)

  }, [loc])

  return {
    countryStats, loading, error
  }
}

export default useTime;
