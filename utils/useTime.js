import { useState, useEffect } from 'react'
import axios from 'axios'
import sortForChart from './sortForChart'

const baseURL = `http://46.101.156.51:3003/api/v1/alltime/`

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'Israel')
}

function useTime(url = baseURL, country = 'world') {
  const [worldStats, setData] = useState();
  const [timeLoading, setLoading] = useState(false);
  const [timeError, setError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError()

      const URL = country === 'world' ? baseURL : baseURL+country

      const data = await axios.get(URL)
        .then(res => res.data)
        .catch(err => setError(err))
      const worldStats = sortForChart(data);
      setData(worldStats)
      setLoading(false)
    }

    fetchData();
  }, [country])


  return {
    worldStats, timeLoading, timeError
  }
}

export default useTime;
