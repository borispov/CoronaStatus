import { useState } from 'react'
import { withTheme } from 'styled-components'
import Select from 'react-select'

import useTime from '../hooks/useTime'
import useTodayStats from '../hooks/useTodayStats'
import useCountries from '../hooks/useCountries'
import useYday from '../hooks/useYday'
import useTranslation from '../hooks/useTranslation'

import Spinner from './Spinner'
import { Container } from './S'
import Stats from './Stats'
import Chart from './Chart'
import HeaderDescription from './HeaderDescription'

import countriesHebArray from '../assets/cns.js'

const calcDiff = current => prev => current !== 0 ? ((current - prev) / 100) * 100 : 0

const CoronaApp = ({ theme, userLocation, yesterdayC, yesterdayGlobal, worldTime }) => {

  const { t, locale } = useTranslation()
  const isHeb = locale === 'he'

  const [country, setCountry] = useState(userLocation)
  const [inputValue, setInput] = useState('')

  // new API attempt
  const url = `https://disease.sh/v3/covid-19/countries/`
  // old API
  // const url = 'https://nCorona.live/api/v1/'
  const v2 = 'https://corona.lmao.ninja/v2/countries/'

  const { countryStats, countryGraphLoading, countryGraphError } = useTime(country, theme)
  const { todayStats, countryStatLoading, countryStatError } = useTodayStats(url, country)
  const worldToday = useTodayStats(url, 'world').todayStats
  const { yesterdayCn, ydayError } = useYday(url, country)

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

  const yesterdayStatsSorted = !ydayError && yesterdayCn && {
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
  
  // THIS IS FOR ENGLISH LIST OF COUNTRIES ONLY
  const selectOptions =
    !countries
      ? { value: 'null', label: 'loading list...' }
      : countries.map(a => ({ value: a, label: a }))

  // THIS IS FOR ENG/HEB LIST OF COUNTRIES
  // const selectOptions = !countries ? { value: 'null', label: 'Loading List...' } : !isHeb
  //   ? countries.map(a => ({ value: a, label: a }))
  //   : countries
  //       .map((country, idx) => ({
  //           value: country,
  //           label: countriesHebArray[idx]
  //         }))

  return (
    <div>

      <Container>

      <form 
        style={{ maxWidth: '520px', margin: '54px auto 12px', textAlign: 'center', direction: isHeb && 'rtl'}}
        onSubmit={handleSubmit}
      >
        <label style={{fontSize: '18px', padding: '2em', fontWeight: 'bold'}}>
          {t('selectHeader', 'coronaApp')}
        </label>


        {/* value={country === 'Israel' && isHeb ? 'ישראל' : country} */}
        {/* placeholder={country && isHeb ? countryheb(country) : country} */}
        <Select
          className='react-select-container'
          classNamePrefix="react-select"
          options={selectOptions}
          value={country}
          onChange={handleChange}
          placeholder={country}
        />
      </form>

        {
          countryStatError 
            && <div> ERROR Fetching Over Time Data </div> 
            ||
            <Stats
              loading={countryStatLoading}
              cn={country || todayStats && todayStats.country}
              todayStats={todayStatsSorted}
              yesteryday={yesterdayStatsSorted}
              isHeb={isHeb}
              error={countryStatError}
              errorYday={ydayError}
            />
        }

      {
        countryGraphError && <Container style={{textAlign: 'center'}}> {countryGraphError}</Container> ||
        !countryStats 
          &&
            <Container textAlign>
              <Spinner size='big' />
            </Container>
          ||
          (
              <Chart
                loading={countryGraphLoading}
                isHeb={isHeb}
                type='line'
                labels={countryStats.labels}
                // data={countryStats.datasets.filter(a => a.label === 'cases')}
                data={countryStats.datasets}
                label={country || 'israel'}
                fill={false}
                stops={3}
                showLegend={false}
                error={countryGraphError}
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
        explanation
        secondary
        direction={locale === 'he' ? 'rtl' : 'ltr'}
        txt={'* ' + t('graphExplanation', 'coronaApp')}
      />

    {/* <Chart */}
    {/*   isHeb={isHeb} */}
    {/*   type='line' */}
    {/*   labels={worldTime.labels} */}
    {/*   data={worldTime.datasets} */}
    {/*   label={isHeb && 'עולם' || 'World'} */}
    {/*   fill={false} */}
    {/*   stops={3} */}
    {/*   showLegend={true} */}
    {/* /> */}

    </Container>

    </div>
  )
}

export default withTheme(CoronaApp)
