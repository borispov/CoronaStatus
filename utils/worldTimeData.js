import { useState, useEffect } from 'react'
import axios from 'axios'
import sortForChart from './sortForChart'

const baseURL = `https://nCorona.live/api/v1/alltime/`

function worldTimeData() {
  const [timeStats, setData] = useState();
  const [timeLoading, setLoading] = useState(false);
  const [timeError, setError] = useState(false);
  const [countries, setCountries] = useState()

  useEffect(() => {
    async function fetchData() {
      setLoading(true)
      setError()
      const data = await axios.get(baseURL)
        .then(res => res.data)
        .catch(err => setError(err))
      const sortedData = sortForChart(data);
      setData(sortedData)
      setLoading(false)
    }
    fetchData()
  }, [])

  return {
    timeStats, timeLoading, timeError, countries
  }
}

export default worldTimeData;
