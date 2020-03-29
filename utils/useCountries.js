import { useState, useEffect } from 'react'
import axios from 'axios'

const baseURL = `https://nCorona.live/api/v1/countries`

function useCountries() {
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState()

  useEffect(() => {
    async function fetchData() {
      setError()
      const { data } = await axios.get(baseURL)
      setCountries(data.data)
    }
    fetchData()
  }, [])

  return {
    countries, error
  }
}

export default useCountries;
