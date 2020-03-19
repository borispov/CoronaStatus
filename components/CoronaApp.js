import { useState, useEffect } from 'react'
import Input from './Input'
import Stats from './Stats'
import Header from './Header'
import useTime from '../utils/useTime'
import useTodayStats from '../utils/useTodayStats'
import Chart from './Chart'
import Container from './Container'
import sortForChart from '../utils/sortForChart'
import mapDataForTodayGraph from '../utils/mapDataForTodayGraph'


export default () => {
  const [country, setCountry] = useState('')
  const [inputValue, setInput] = useState('')
  const url = 'http://covid19.borisky.me:3003/api/v1/'

  const { todayStats } = useTodayStats(url, country)
  const { worldStats, timeError, timeLoading } = useTime()

  // const todayStatsSorted = todayStats && 
  //   mapDataForTodayGraph({
  //     cases: todayStats.cases,
  //     todayCases: todayStats.todayCases,
  //     recovered: todayStats.recovered,
  //     deaths: todayStats.deaths
  //   }) || ''

  const todayStatsSorted = todayStats && 
    {
      cases: todayStats.cases,
      todayCases: todayStats.todayCases,
      recovered: todayStats.recovered,
      deaths: todayStats.deaths
    } || ''


  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue)
  }

  console.log(todayStats);
  if (timeLoading || timeError) return <div> Loading....</div>
  if (timeError) return <div> We've encountered an Error. Maybe you typed wrong country</div>

  return (
    <div>
      <Header>Covid19 Feed</Header>

      <Stats 
        isWorld={true}
        cn={country || todayStats && todayStats.country}
        timeData={worldStats}
        todayStats={todayStatsSorted}
      />

      <form 
        style={{
          width: '100%',
          margin: '54px 0 auto',
          display: 'flex',
          justifyContent: 'center'

        }}
        onSubmit={handleSubmit}>
        <label style={{fontSize: '16px'}}>
          Search For Country:
          <Input type="text" value={inputValue} onChange={handleChange} />
        </label>
        <input type="submit" value="submit" />
      </form>

    </div>
  )
  

}
