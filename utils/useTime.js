import { useState, useEffect } from 'react'
import axios from 'axios'
import sortForChart from './sortForChart'

const baseURL = `http://46.101.156.51:3003/api/v1/alltime/`

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'israel')
}

function useTime(country = 'world', url = baseURL) {
  const [timeStats, setData] = useState();
  const [timeLoading, setLoading] = useState(false);
  const [timeError, setError] = useState(false);

  useEffect(() => {
    console.log('use time triggered');
    async function fetchData() {
      setLoading(true)
      setError()

      const URL = country === 'init' 
        ? baseURL + await currentCountry() 
        : country !== 'world' 
          ? baseURL+country 
          : baseURL

      const data = await axios.get(URL)
        .then(res => res.data)
        .catch(err => setError(err))
      const timeStats = sortForChart(data);
      setData(timeStats)
      setLoading(false)
    }

    fetchData();
  }, [country])

  if ( country !== 'world' ) {
    const countryStats = timeStats
    const countryLoading = timeLoading
    const countryError = timeError
    return { countryStats, countryLoading, countryError }
  }

  return {
    timeStats, timeLoading, timeError
  }
}

export default useTime;
