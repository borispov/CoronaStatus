import { useState, useEffect } from 'react'
import axios from 'axios'

const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
const parseCn = str => {
  return str === 'usa' || str === 'Usa'
    ? 'USA' 
      : str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain'
    ? 'UK' 
    : capitalize(str)
}

function getCountry(list){
  return function(queryCountry) {
    return list.reduce((a,c) => c.country === queryCountry ? c : a, {})
  }
}

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'Israel')
}

function useStats(url, country) {
  const [stats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    async function fetchData() {
      console.log('fetching data');
      setLoading(true)
      setError()
      let searchCountry = country || await currentCountry();
      const parsedCountry = parseCn(searchCountry);
      const data = await fetch(url)
          .then(res => res.json())
          .then(d => getCountry(d)(parsedCountry))
          .catch(err => setError(err))
      setStats(data)
      setLoading(false)
    }
    fetchData();
  }, [country])
  return {
    stats, loading, error
  }
}

export default useStats;
