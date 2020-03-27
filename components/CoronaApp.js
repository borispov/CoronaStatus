import { useState, useEffect } from 'react'
import Input from './Input'
import Stats from './Stats'
import useTime from '../utils/useTime'
import useTodayStats from '../utils/useTodayStats'
import useCountries from '../utils/useCountries'
import Chart from './Chart'
import Container from './Container'
import HeaderDescription from './HeaderDescription'
import CaseChart from './CaseChart'
import styled from 'styled-components'
import Select from 'react-select'


export default ({ theme, lang}) => {

  const [showWorld, setShowWorld] = useState(true)
  const [country, setCountry] = useState('')
  const [inputValue, setInput] = useState('')

  const url = 'https://covid19.borisky.me/api/v1/'

  const { countryStats } = useTime(country)
  const { todayStats } = useTodayStats(url, country)
  const worldToday = useTodayStats(url, 'world').todayStats

  const { countries } = useCountries()

  const worldTodaySorted = worldToday &&
    {
      cases: worldToday.cases,
      todayCases: worldToday.todayCases,
      recovered: worldToday.recovered,
      deaths: worldToday.deaths
    } || ''

  const todayStatsSorted = todayStats && 
    {
      cases: todayStats.cases,
      todayCases: todayStats.todayCases,
      recovered: todayStats.recovered,
      deaths: todayStats.deaths
    } || ''

  const handleChange = selected => {
    setCountry(selected.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue)
  }

  const selectOptions = countries && countries.map(a => ({ value: a, label: a }))

  return (
    <div>
      <HeaderDescription />

      <Container>

      {
        countryStats &&
          (
              <Chart
                isHeb={lang === 'heb'}
                type='line'
                labels={countryStats.labels}
                data={countryStats.datasets.filter(a => a.label === 'cases')}
                label={country || 'israel'}
                theme={theme}
                fill={false}
                stops={3}
                showLegend={false}
              />
          )
      }
      <Stats
        cn={country || todayStats && todayStats.country}
        todayStats={todayStatsSorted}
        isHeb={lang === 'heb'}
      />

      <form 
        style={{ maxWidth: '520px', margin: '54px auto'}}
        onSubmit={handleSubmit}>
        <label style={{fontSize: '16px'}}>
          {
            lang === 'eng'
            ? `Data For Country:`
            : `נתונים לפי מדינה`
          }
        </label>

        <Select
          className={'Select'}
          options={selectOptions}
          value={country}
          onChange={handleChange}
          placeholder={country || 'Get Country Stats'}
        />
      </form>

      <Stats
        cn={'World'}
        todayWorld={worldTodaySorted}
        isHeb={lang==='heb'}
      />

      <CaseChart
        showWorld={showWorld} 
        theme={theme}
        country={country}
        isHeb={lang === 'heb'}
      />

    </Container>

    </div>
  )
  

}
