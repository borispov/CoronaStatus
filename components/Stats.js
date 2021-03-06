import styled from 'styled-components'
import QuickStats from './QuickStats/QuickStats'

const Container = styled.div`
  max-width: 1140px;
  margin: 8px auto 0;
  text-align: center;
`

export default function Stats({ cn = '', todayWorld, todayStats, isHeb, yesteryday, loading, error, errorYday }) {

  return (
    <Container>
      {
        todayWorld && 
        <>
          <h1 style={{fontSize: '20px', paddingTop: '18px'}}>
            {isHeb && 'המצב הנוכחי ב' || 'Status for: '}<span>{cn === 'World' && isHeb && 'עולם' || cn}</span>
          </h1>
          <QuickStats loading={loading} country={cn} yday={yesteryday} S={todayWorld} isHeb={isHeb} />
        </>
      }
      {
        !error && !errorYday &&
        todayStats &&
          <QuickStats loading={loading} country={cn} yday={yesteryday} S={todayStats} isHeb={isHeb}/>
      }
    </Container>
  )
}
