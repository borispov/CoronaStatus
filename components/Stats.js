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
  margin-top: 16px;
`

const Flex = styled.div`
  display: flex;
  justify-content: space-evenly;
  background-color: ${props => props.bg || props.theme.bgColor};
  border-radius: 12px;
  & > div {
    background-color: ${props => props.bg || props.theme.bgColor};
  }
`

export default function Stats({ cn = '', todayWorld, todayStats, isHeb }) {

  return (
    <Container>
      {
        todayStats &&
          <div style={{ border: '1px solid rgba(255, 60, 60, 0.022)', borderRadius: '6px', marginBottom: '16px' }}>
            <QuickStats country={cn} S={todayStats}/>
            {/*
            <Flex>
            <StatBlock 
              title={isHeb && 'נדבקים' || "Infected"}
              data={todayStats.cases}
            />
            <StatBlock 
              title={isHeb && 'החלימו' || "Recovered"}
              data={todayStats.recovered}
            />
            <StatBlock 
              title={isHeb && 'מקרי מוות' || "Total Deaths"}
              data={todayStats.deaths}
            />
            <StatBlock 
              title={isHeb && 'מקרים חדשים' || "New Cases Today"}
              data={todayStats.todayCases}
            />
          </Flex>
          */}
        </div>
          || todayWorld && 
            <div>
            <h1 style={{fontSize: '20px', paddingTop: '18px'}}>
              {isHeb && 'המצב ב: ' || 'Status for: '}<span style={{fontWeight: 'bold', textDecoration: 'underline'}}> {cn}</span>
            </h1>
            <Flex>

              <StatBlock 
                title={isHeb && 'נדבקים' || "Infected"}
                data={todayWorld.cases}
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
