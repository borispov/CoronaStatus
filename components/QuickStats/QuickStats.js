// Styles
import { Container } from '../S'
import { Column, InRow, Row, Percentage, Header, Number } from './QuickStats.styled'


// utils
import { F } from './QuickStats.utils'
import useTranslation from '../../hooks/useTranslation.js'


export default ({ S, country, isHeb, yday, comparison=true}) => {

  const { t } = useTranslation()

  return (
    <Container>
      <Row world={country.toLowerCase() === 'world'}>

    {
      Object.keys(S).map((k,i) => {
        return (
          <Column key={i}>
            <Header> { t(k, 'labels') }</Header>
            <InRow>
              <Number>
                {
                  S[k] && F.formatNumber(S[k])
                }
                {
                  comparison  
                    && yday 
                    && country !== 'world' 
                    && country !== 'World' 
                    && <span>
                        ({F.formatNumber(yday[k])})
                       </span>
                }
              </Number>
              <br />
              {
                comparison && yday && <Percentage>
                <span>{ F.calcDiff(S[k])(yday[k]) < 0 && "\u2B07" || '\u2B06' }</span>
                %{ Math.abs(F.calcDiff(S[k])(yday[k]))} 
                </Percentage>
              }
            </InRow>
          </Column>
        )
      })
    }


      </Row>
    </Container>
  )

}
