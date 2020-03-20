import { useState, useEffect } from 'react'
import Input from './Input'
import Stats from './Stats'
import Header from './Header'
import useTime from '../utils/useTime'
import useTodayStats from '../utils/useTodayStats'
import Chart from './Chart'
import Container from './Container'
import HeaderDescription from './HeaderDescription'
import sortForChart from '../utils/sortForChart'
import mapDataForTodayGraph from '../utils/mapDataForTodayGraph'
import Button from './Button'

export default () => {
  const [showWorld, setTimeData] = useState(true)
  const [country, setCountry] = useState('')
  const [inputValue, setInput] = useState('')
  const [isWorld, setWorld] = useState(true)

  const url = 'http://covid19.borisky.me:3003/api/v1/'

  const { todayStats } = useTodayStats(url, country)
  const { timeStats, timeError, timeLoading } = useTime('world')
  const { countryStats, countryLoading, countryError } = useTime('init')

  const todayStatsSorted = todayStats && 
    {
      cases: todayStats.cases,
      todayCases: todayStats.todayCases,
      recovered: todayStats.recovered,
      deaths: todayStats.deaths
    } || ''


  const changeData = k => setTimeData(!showWorld)
  const handleChange = e => setInput(e.target.value)
  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue)
  }

  if (timeLoading || timeError) return <div> Loading....</div>
  if (timeError) return <div> We've encountered an Error. Maybe you typed wrong country</div>

  const timeChart = showWorld ? timeStats : countryStats

  console.log(`
    Suppose to showWorld: ${showWorld}
    ------------
    ${!showWorld && countryStats}
  `);

  return (
    <div>
      <Header>Covid19 Feed</Header>
      <HeaderDescription />

      <Stats
        isWorld={isWorld}
        cn={country || todayStats && todayStats.country}
        timeData={timeStats}
        todayStats={todayStatsSorted}
      />
      <Container>

      <div style={{display: 'flex', justifyContent: 'center', padding: '34px 32px'}}>
        <Button onClick={changeData}>World</Button><span> | </span>
        <Button onClick={changeData}>{country || 'Israel'}</Button>
      </div>
        {
          timeChart && (
            <Chart 
              type='line' 
              {...timeChart} 
                label='Outbreak Over Time'
              />) || <div> Loading Charts.............. </div>
        }

      </Container>

      <form 
        style={{ maxWidth: '520px', margin: '54px auto'}}
        onSubmit={handleSubmit}>

        <label style={{fontSize: '16px'}}>
          Search For Country:
        </label>

        <div style={{ display: 'flex', margin: '0 auto' }}>
          <Input type="text" value={inputValue} onChange={handleChange} />
          <Input type="submit" value="submit" btn={true}/>
        </div>
      </form>

    </div>
  )
  

}
