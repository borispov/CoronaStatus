import { useState } from 'react'
import { withTheme } from 'styled-components'
import Select from 'react-select'

import useTime from '../utils/useTime'
import useTodayStats from '../utils/useTodayStats'
import useCountries from '../utils/useCountries'
import useYday from '../utils/useYday'

import { Container } from './S'
import Stats from './Stats'
import Chart from './Chart'
import HeaderDescription from './HeaderDescription'
import CaseChart from './CaseChart'

import countriesHebArray from '../assets/cns.js'

const calcDiff = current => prev => current !== 0 ? ((current - prev) / 100) * 100 : 0

const CoronaApp = ({ isHeb, theme, userLocation, yesterdayC, yesterdayGlobal, worldTime }) => {

  // const [hebCountry, setHebCountry] = useState(countryheb(country))
  const [showWorld, setShowWorld] = useState(true)
  const [country, setCountry] = useState(userLocation)
  const [inputValue, setInput] = useState('')

  const url = 'https://nCorona.live/api/v1/'
  const worldUrl = 'https://corona.lmao.ninja/all'
  const v2 = 'https://corona.lmao.ninja/v2/countries/'
  const { countryStats } = useTime(country, theme)
  const { todayStats } = useTodayStats(url, country)
  const worldToday = useTodayStats(url, 'world').todayStats
  const { yesterdayCn } = useYday(v2, country)

  const { countries } = useCountries()


  const worldTodaySorted = worldToday &&
    {
      cases: worldToday.cases,
      active: worldToday.active,
      recovered: worldToday.recovered,
      deaths: worldToday.deaths,
      todayCases: worldToday.todayCases,
      affectedCountries: yesterdayGlobal.affectedCountries
    } || ''

  const yesterdayStatsSorted = yesterdayCn && {
    cases: yesterdayCn.cases,
    todayCases: yesterdayCn.todayCases,
    recovered: yesterdayCn.recovered,
    deaths: yesterdayCn.deaths,
  } || ''

  const yesterdayGlobalSorted = yesterdayGlobal && {
    cases: yesterdayGlobal.cases,
    active: yesterdayGlobal.active,
    deaths: yesterdayGlobal.deaths,
    todayCases: yesterdayGlobal.todayCases,
    recovered: yesterdayGlobal.recovered,
    affectedCountries: yesterdayGlobal.affectedCountries
  } || ''

  const todayStatsSorted = todayStats && 
    {
      cases: todayStats.cases,
      todayCases: todayStats.todayCases,
      recovered: todayStats.recovered,
      deaths: todayStats.deaths,
    } || ''

  const handleChange = selected => {
    // setHebCountry(countryheb(selected.value))
    setCountry(selected.value)
  }
  const handleSubmit = e => {
    e.preventDefault();
    setCountry(inputValue)
  }

  const countryheb = country => {
    if (countries) {
      let lowerCased = countries.map(a => a.toLowerCase())
      let engIndex = lowerCased.indexOf(country)
      return countriesHebArray[engIndex]
    }
    return country
  }

  // const selectOptions = countries && countries.map(a => ({ value: a, label: a }))
  const selectOptions = !countries ? { value: 'null', label: 'Loading List...' } : !isHeb
    ? countries.map(a => ({ value: a, label: a }))
    : countries
        .map((country, idx) => ({
            value: country,
            label: countriesHebArray[idx]
          }))

  return (
    <div>

      <Container>

      <form 
        style={{ maxWidth: '520px', margin: '54px auto 12px', textAlign: 'center'}}
        onSubmit={handleSubmit}
      >
        <label style={{fontSize: '16px', fontWeight: 'bold'}}>
          { isHeb ? `נתונים לפי מדינה` : `Data For Country:` }
        </label>


        <Select
          className={'Select'}
          options={selectOptions}
          value={country === 'Israel' && isHeb ? 'ישראל' : country}
          onChange={handleChange}
          placeholder={country && countryheb(country) || country}
        />
      </form>

    <Stats
      cn={country || todayStats && todayStats.country}
      todayStats={todayStatsSorted}
      yesteryday={yesterdayStatsSorted}
      isHeb={isHeb}
    />

    {/*
      <iframe 
        style={{  width: "100%", height:"420px" }}
        src="https://coronavirus.app/map?embed=true" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
      />
    */}
      {
        countryStats &&
          (
              <Chart
                isHeb={isHeb}
                type='line'
                labels={countryStats.labels}
                // data={countryStats.datasets.filter(a => a.label === 'cases')}
                data={countryStats.datasets}
                label={country || 'israel'}
                fill={false}
                stops={3}
                showLegend={false}
              />
          )
      }

      <Stats
        cn={'World'}
        todayWorld={worldTodaySorted}
        yesteryday={yesterdayGlobalSorted}
        isHeb={isHeb}
      />

      <HeaderDescription 
        txt='* גרפים המציגים את שיעור הצמיחה של נגיף הקורונה,
        אינם מתעדכנים בזמן אמת ולכן אינם משקפים את היום הנוכחי. בדרך-כלל מתקיים פער של יום,
        לכל היותר שלושה ימים. הנתונים המוצגים מחוץ לגרפים משקפים את הזמן הנתון ברגע הנוכחי ומתעדכנים בערך אחת לחצי שעה.'
      />

    <Chart
      isHeb={isHeb}
      type='line'
      labels={worldTime.labels}
      data={worldTime.datasets}
      label={isHeb && 'עולם' || 'World'}
      fill={false}
      stops={3}
      showLegend={true}
    />

    </Container>

    </div>
  )
}

export default withTheme(CoronaApp)
