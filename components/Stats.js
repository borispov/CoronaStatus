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

const Flex = styled.div`
  margin-top: 32px;
  display: flex;
  justify-content: space-evenly;
`

export default function Stats({ cn = '', isWorld, timeData, todayWorld, todayStats }) {

  return (
    <Container>
      <h1 style={{fontSize: '20px'}}>Status for:   <span style={{fontWeight: 'bold'}}>{cn}</span></h1>
      {
        todayStats &&
          <div style={{ border: '1px solid rgba(255, 60, 60, 0.12)', borderRadius: '6px', marginBottom: '16px' }}>
          <Chart type='bar' info={todayStats} label={cn + '\'s Outbreak'} />
          <Flex>
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
          </Flex>
        </div>
      }


    </Container>
  )
}
