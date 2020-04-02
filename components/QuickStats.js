import styled from 'styled-components'
import { Container } from './S'


const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Col = styled.div`
  text-align: center;
  padding: 8px 10px;
  font-weight: 700;
  border-right-width: 1px;
  // border-top-left-radius: 5px;
  // border-bottom-left-radius: 5px;
  border-left: 2px solid #38383b;
  border-bottom: 2px solid #38383b;
  border-right-color: 2px solid #38383b;
  border-top: 2px solid #38383b;
  // color: #00b065;
  color: ${props => props.theme.statColor};
  // background-color: #1c1c1d;
  background-color: ${props => props.theme.bgColor};
  flex: 0 0 20%;
  max-width: 20%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Country = styled.h3`
  font-size: 18px;
  font-weight: bold;
  align-self: center;
`

export default ({ S, country, isHeb}) => {

  return (
    <Container>
      <Row>
        <Col style={{ borderRight: '2px solid #38383b', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>
          <Country> {country} </Country>
        </Col>
        <Col>
          <h3>
            {S.cases}
            <br />
            <small>{isHeb ? 'נדבקים' : 'Infected'}</small>
          </h3>
        </Col>
        <Col>
          <h3>
            {S.recovered}
            <br />
            <small>{isHeb ? 'החלימו': 'Recovered'}</small>
          </h3>
        </Col>
        <Col>
          <h3>
            {S.deaths}
            <br />
            <small>{ isHeb ? 'מקרי מוות' : 'Deaths' }</small>
        </h3>
        </Col>
        <Col style={{ borderLeft: '2px solid #38383b', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
          <h3>
            {S.todayCases}
            <br />
            <small>{isHeb ? 'מקרים חדשים' : 'Today Cases'}</small>
        </h3>
        </Col>
      </Row>
    </Container>
  )

}
