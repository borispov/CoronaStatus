import useTodayStats from '../utils/useTodayStats'
import useTime from '../utils/useTime'
import StatBlock from './StatBlock'
import React from 'react'
import styled from 'styled-components'
import Spinner from './Spinner'
import Bar from './Bar'
import Chart from './Chart'
import QuickStats from './QuickStats'


const Container = styled.div`
  max-width: 1140px;
  margin: 24px auto 0;
  text-align: center;
  margin-top: 32px;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.bg || props.theme.bgColor};
  border-radius: 12px;
`

export default function Stats({ cn = '', todayWorld, todayStats, isHeb }) {

  return (
    <Container>
      {
        todayStats &&
          <QuickStats country={cn} S={todayStats} isHeb={isHeb}/>
          || todayWorld && 
            <div>
            <h1 style={{fontSize: '20px', paddingTop: '18px'}}>
              {isHeb && 'המצב ב: ' || 'Status for: '}<span style={{fontWeight: 'bold', textDecoration: 'underline'}}> {cn === 'World' && isHeb && 'עולם' || cn}</span>
            </h1>
            <Flex>

              <StatBlock
                title={isHeb && 'סך נדבקים' || "Total Confirmed"}
                data={todayWorld.cases}
              />
              <StatBlock
                title={isHeb && 'פעילים' || "Active"}
                data={todayWorld.active}
              />
              <StatBlock 
                title={isHeb && 'החלימו' || "Recovered"}
                data={todayWorld.recovered}
              />
              <StatBlock 
                title={isHeb && 'מקרי מוות' || "Total Deaths"}
                data={todayWorld.deaths}
              />
            </Flex>
          </div>
      }


    </Container>
  )
}
