import styled from 'styled-components'
import { Container } from './S'

const formatNumber = x => x
  .toString()
  .split('')
  .reverse()
  .map((x,i) => i % 3 === 0 ? x + ',' : x)
  .reverse()
  .join('')
  .slice(0, -1)

const Column = styled.div`
  display: flex;
  flex-flow: column wrap;
  direction: ${props => props.ltr ? 'ltr' : 'rtl'};
  align-items: start;
  // justify-content: center;

  width: 100%;
  background: #fafafa;
  padding: 16px 3em 12px;
  border-radius: 2px;
  border-bottom: 1px solid #e4e7eb;

  @media (min-width: 660px) {
    box-shadow: none;
    border: 1px solid #e4e7eb;
    height: auto;
    flex: 1 0 ${props => props.world ? '249px' : '235px'};
  }

  &:last-child {
    border-bottom: none;
  }

`

const InRow = styled.div`
  display: flex;
  flex-flow: row wrap;
  font-weight: 700;
  color: ${props => props.theme.primaryColor};
  justify-content: ${props => props.justify || 'space-between'};
  width: 100%;
  line-height: 1.45;
`

const TheRow = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: center;
  box-shadow: ${props => props.theme.shadows[1]};
  margin-bottom: 28px;
  border-radius: 8px;
  border: 1px solid #e4e7eb;
  margin-left: auto;
  margin-right: auto;
  @media (min-width:660px) and (max-width: 920px) {
    max-width: 620px;
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    max-width: ${props => props.world ? '900px' : '620px'};
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
  @media (min-width: 1024px) {
    max-width: 1064px;
    flex-flow: ${props => props.world ? 'row wrap' : 'row wrap'};
  }
`

const Percentage = styled.h1`
  font-size: 10px;
  font-weight: 500;
  color: ${props => props.theme.text.secondary};
  align-self: flex-end;
  padding-bottom: 2px;
  border-radius: 12px;
  background: #DFF7EC;
  padding: 0.5em 1em;
  span {
    font-family: 'Verdana';
    background: #DFF7EC;
    color: ${props => props.theme.primaryLight};
  }

  @media (min-width: 350px) {
    font-size: 12px;
  }

`

const Header = styled.div`
  font-size: 20px;
  font-weight: 500;
  color: ${props => props.theme.text.primary};
  width: auto;
  letter-spacing: 0.1px;
  line-height: 1.85;

  @media (min-width:660px) and (max-width: 920px) {
    font-size: 12px;
    line-height: 1.65;
    letter-spacing: 0.025px;
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    font-size: 14px;
  }
  @media (min-width: 1024px) {
    font-size: 16x;
  }
`

const Number = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: ${props => props.theme.primaryVariant};
  letter-spacing: 1.2px;
  font-family: 'Montserrat';
  padding: 0;
  margin: 0;
  line-height: 1.65;

  span {
    font-size: 10px;
    font-family: 'Verdana';
    letter-spacing: 0px;
    color: #717171;
    margin-left: 1em;
    margin-right: 1em;
    margin-bottom: 4px;
  }

  @media (min-width:660px) and (max-width: 920px) {
    h1 {
      font-size: 14px;
      line-height: 1.65;
      letter-spacing: 0.5px;
    }
  }
  @media (min-width: 921px) and (max-width: 1023px) {
    h1 {
      font-size: 12px;
      letter-spacing: 0.8px;
    }
  }
  @media (min-width: 1024px) {
    h1 {
      font-size: 16px;
    }
  }
`


const isPercentDown = x => x < 0
const showPercent = x => x !== 0
const calcDiff = current => prev => current !== 0 ? ((current - prev) / prev * 100).toFixed(2) : 0
// Percentage of increase = |100 - 150|/100 = 50/100 = 0.5 = 50%

const labels = {
  cases: { heb: 'מאומתים', eng: 'Confirmed' },
  todayCases: { heb: 'מקרים חדשים', eng: 'New Cases'},
  deaths: { heb: 'נפטרו', eng: 'Deaths' },
  recovered: { heb: 'החלימו', eng: 'Recovered' },
  active: { heb: 'פעילים', eng: 'Active' },
  affectedCountries: { heb: 'מדינות נגועות', eng: 'Infected Countries' }
}

const engLbl = k => labels[k]['eng']
const hebLbl = k => labels[k]['heb']
const putLabel = (heb, k) => heb && hebLbl(k) || engLbl(k)

export default ({ S, country, isHeb, yday, comparison=true}) => {

  return (
    <Container>
      <TheRow world={country.toLowerCase() === 'world'}>

    {
      Object.keys(S).map((k,i) => {
        return (
          <Column key={i}>
            <Header> { putLabel(isHeb,k) }</Header>
            <InRow>
              <Number>
                {
                  S[k] && formatNumber(S[k])
                }
                <span>
                  {
                    comparison && yday && country !== 'world' && country !== 'World' && `(${formatNumber(yday[k])})`
                  }
                </span>
              </Number>
              <br />
              {
                comparison && yday && <Percentage>
                <span>{ calcDiff(S[k])(yday[k]) < 0 && "\u2B07" || '\u2B06' }</span>
                %{ Math.abs(calcDiff(S[k])(yday[k]))} 
                </Percentage>
              }
            </InRow>
          </Column>
        )
      })
    }


      </TheRow>
    </Container>
  )

}
