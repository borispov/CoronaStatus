import styled from 'styled-components'

const Container = styled.div`
  @media (max-width: 576px) {
    max-width: 540px;
  }
  @media (max-width: 768px) {

  }

  @media (max-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  transition: all .5s cubic-bezier(.55,0,.1,1);
  width: 85%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
`

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`

const Col = styled.div`
  text-align: center;
  padding: 5px 10px;
  font-weight: 700;
  border-right-width: 1px;
  // border-top-left-radius: 5px;
  // border-bottom-left-radius: 5px;
  border-left: 1px solid #38383b;
  border-bottom: 1px solid #38383b;
  border-right-color: #38383b;
  border-top: 1px solid #38383b;
  // color: #00b065;
  color: ${props => props.theme.color};
  // background-color: #1c1c1d;
  background-color: ${props => props.theme.bgColor};
  flex: 0 0 20%;
  max-width: 20%;
  position: relative;
  width: 100%;
`

export default ({ S, country }) => {

  return (
    <Container>
      <Row>
        <Col style={{ borderLeft: '1px solid #38383b', borderTopRightRadius: '5px', borderBottomRightRadius: '5px', borderRightColor: '#38383b' }}>
          <h3>
            {country}
            <br />
            <small>מדינה</small>
        </h3>
        </Col>
        <Col>
          <h3>
            {S.cases}
            <br />
            <small>נדבקים</small>
          </h3>
        </Col>
        <Col>
          <h3>
            {S.recovered}
            <br />
            <small>החלימו</small>
          </h3>
        </Col>
        <Col>
          <h3>
            {S.deaths}
            <br />
            <small>מקרי מוות</small>
        </h3>
        </Col>
        <Col style={{ borderLeft: '1px solid #38383b', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px' }}>
          <h3>
            {S.todayCases}
            <br />
            <small>מקרים חדשים</small>
        </h3>
        </Col>
      </Row>
    </Container>
  )

}
