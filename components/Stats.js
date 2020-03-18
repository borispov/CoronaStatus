import useTodayStats from '../utils/useTodayStats'
import useTime from '../utils/useTime'
import StatBlock from './StatBlock'
import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import Bar from './Bar'
import LineChart from './LineChart'
import Chart from './Chart'

const vocab = {
  'cases': 'infected',
  'recovered': 'recovered',
  'country': 'country',
  'deaths': 'deaths',
  'todayCases': 'new today',
}
const prop = o => k => o[k]
const switchToVocab = word => vocab[word]

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`

const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`

export default function Stats({ url, cn = '', search }) {

  const { todayStats, error, loading } = useTodayStats(url, cn);
  const { worldStats } = useTime()

  if (error) return <div> We've encountered an Error. Maybe you typed wrong country</div>
  if (!todayStats) return <div><Spinner /></div>

  const {
    country,
    cases,
    recovered,
    deaths,
    todayCases,
  } = todayStats

  const o = {
    cases, todayCases, recovered, deaths
  }

  const organizeData = d => {
    const mapToKeyword = (k) => ({[switchToVocab(k)]: prop(d)(k)})
    return Object.keys(d).map(mapToKeyword)
  }
  const organizedData = organizeData(o)

  return (
    <Container>

      <h1 style={{fontSize: '20px'}}>Status for:   <span style={{fontWeight: 'bold'}}>{country}</span></h1>

      <Chart type='bar' info={organizedData} label={country + '\'s Outbreak'} />

      <Grid>
        <StatBlock 
          title="Infected"
          data={cases}
        />
        <StatBlock 
          title="Recovered"
          data={recovered}
        />
        <StatBlock 
          title="Total Deaths"
          data={deaths}
        />
        <StatBlock 
          title="New Cases Today"
          data={todayCases}
        />
      </Grid>

    </Container>
  )
}
