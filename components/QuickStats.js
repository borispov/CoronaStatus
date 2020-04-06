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
  font-weight: 400;
  flex: 1 1 20%;
  max-width: 20%;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${props => (props.bg && props.theme.general[props.bg]) || props.theme.primaryColor};
  color: ${props => props.theme.onPrimary};
  justify-content: center;
  @media (max-width: 768px) {
    padding: 8px 16px;
  }
`

const Country = styled.h3`
  font-size: 16px;
  font-weight: bold;
  align-self: center;
  color: ${props => props.theme.onPrimary};
  @media (max-width: 768px) {
    font-size: 12px;
  }
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
            <Country>
              {S.cases}
              <br />
              <small>{isHeb ? 'נדבקים' : 'Infected'}</small>
            </Country>
          </Col>
          <Col bg='successDefault'>
            <Country>
              {S.recovered}
              <br />
              <small>{isHeb ? 'מחלימים' : 'Recovered'}</small>
            </Country>
          </Col>
          <Col bg='error'>
            <Country>
              {S.deaths}
              <br />
              <small>{ isHeb ? 'מתים' : 'Deaths' }</small>
          </Country>
          </Col>
          <Col bg='error2' style={{ borderLeft: 'none', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
            <Country>
              {S.todayCases}
              <br />
              <small>{isHeb ? 'מקרים חדשים' : 'Today Cases'}</small>
          </Country>
          </Col>
        </Row>

      </Div>
    </Container>
  )

}
