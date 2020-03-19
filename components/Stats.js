import useTodayStats from '../utils/useTodayStats'
import useTime from '../utils/useTime'
import StatBlock from './StatBlock'
import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import Bar from './Bar'
import Chart from './Chart'


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

export default function Stats({ cn = '', isWorld, timeData, todayWorld, todayStats }) {

  const renderTimeGraph = timeData 
    && (<Chart type='line' {...timeData} label={isWorld && 'World' + '\'s Outbreak Over Time'} />)
    || (<div> Loading Time Graph ... </div>)

  console.log(todayStats);


  return (
    <Container>
      <h1 style={{fontSize: '20px'}}>Status for:   <span style={{fontWeight: 'bold'}}>{cn}</span></h1>
      {
        todayStats &&
          <>
          <Chart type='bar' info={todayStats} label={cn + '\'s Outbreak'} />
          <Grid>
            <StatBlock 
              title="Infected"
              data={todayStats.cases}
            />
            <StatBlock 
              title="Recovered"
              data={todayStats.recovered}
            />
            <StatBlock 
              title="Total Deaths"
              data={todayStats.deaths}
            />
            <StatBlock 
              title="New Cases Today"
              data={todayStats.todayCases}
            />
          </Grid>
        </>
      }
      {renderTimeGraph}


    </Container>
  )
}
