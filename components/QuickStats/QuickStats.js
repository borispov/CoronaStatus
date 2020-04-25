// Styles
import { Container } from '../S'
import { Column, InRow, Row, Percentage, Header, Number } from './QuickStats.styled'

import Spinner from '../Spinner'

// utils
import { F } from './QuickStats.utils'
import useTranslation from '../../hooks/useTranslation.js'


export default ({ loading, S, country, isHeb, yday, comparison=true}) => {

  const { t, locale } = useTranslation()

  const direction = locale === 'he' && 'rtl' || 'ltr'

  return (
    <Container >
      <Row world={country.toLowerCase() === 'world'} direction={direction}>

    {
      Object.keys(S).map((k,i) => {
        if (loading) {
          return (
            <Column key={i}>
              <Header> { t(k, 'labels') }</Header>
              <InRow>
                <Spinner size='med' />
              </InRow>
            </Column>
          )
        }
        return (
          <Column key={i} direction={direction} label={k} world={country.toLowerCase() === 'world'}>
            <Header> { t(k, 'labels') }</Header>
            <InRow>
              <Number label={k}>
                {
                  S[k] && F.formatNumber(S[k])
                }
                {
                  comparison
                    && yday
                    && country !== 'world'
                    && country !== 'World'
                    && <span>
                      {
                        direction === 'rtl'
                          ? `(${F.formatNumber(yday[k])})`
                          : `~${F.formatNumber(yday[k])}`
                      }
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
