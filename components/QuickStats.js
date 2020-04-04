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
  flex: 0 0 20%;
  max-width: 20%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => (props.bg && props.theme[props.bg]) || props.theme.primaryColor};
  color: ${props => props.theme.onPrimary};
  justify-content: center;
`

const Country = styled.h3`
  font-size: 18px;
  font-weight: bold;
  align-self: center;
  color: ${props => props.theme.onPrimary};
`

const Div = styled.div`
  box-shadow: ${props => props.theme.shadows[2]};
  border-radius: 6px;
  margin-bottom: 16px;
`

export default ({ S, country, isHeb}) => {

  return (
    <Container>
      <Div>
        <Row>
          <Col style={{ borderRight: 'none', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }}>
            <Country> {country} </Country>
          </Col>
          <Col bg='primaryVariant' >
            <h3>
              {S.cases}
              <br />
              <small>{isHeb ? 'נדבקים' : 'Infected'}</small>
            </h3>
          </Col>
          <Col bg='successDefault'>
            <h3>
              {S.recovered}
              <br />
              <small>{isHeb ? 'החלימו' : 'Recovered'}</small>
            </h3>
          </Col>
          <Col bg='error'>
            <h3>
              {S.deaths}
              <br />
              <small>{ isHeb ? 'מקרי מוות' : 'Deaths' }</small>
          </h3>
          </Col>
          <Col bg='error2' style={{ borderLeft: 'none', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
            <h3>
              {S.todayCases}
              <br />
              <small>{isHeb ? 'מקרים חדשים' : 'Today Cases'}</small>
          </h3>
          </Col>
        </Row>

      </Div>
    </Container>
  )

}
