import { useState, useEffect } from 'react'
import axios from 'axios'

const capitalize = str => str.charAt(0).toUpperCase() + str.toLowerCase().slice(1)
const parseCn = str => {
  return str === 'usa' || str === 'Usa'
    ? 'USA' 
      : str === 'Uk' || str === 'England' || str === 'United Kingdom' || str == 'great britain'
    ? 'UK' 
    : str.toLowerCase();
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
    .catch(e => 'israel')
}

function useTodayStats(url, country) {
  const [todayStats, setStats] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {

    async function fetchData() {
      console.log('fetching data');
      setLoading(true)
      setError()
      let searchCountry = country || await currentCountry();

      const parsedCountry = parseCn(searchCountry);
      const URL = url + 'today/' + searchCountry.toLowerCase()
      console.log(URL);
      const data = await fetch(URL)
          .then(res => res.json())
          .catch(err => setError(err))
      console.log(data);
      const relevant = {
        cases: data.cases,
        todayCases: data.todayCases,
        recovered: data.recovered,
        deaths: data.deaths,
        country: data.country
      }
      setStats(relevant)
      setLoading(false)
    }
    fetchData();
  }, [country])
  return {
    todayStats, loading, error
  }
}

export default useTodayStats;
