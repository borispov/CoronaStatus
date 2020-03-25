import { useState, useEffect } from 'react'
import axios from 'axios'
import Container from './Container'
import styled from 'styled-components'

const Wrapper = styled.div`
  text-align: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-left: 15px;
  margin-right: 15px;
  margin-bottom: 32px;
@media (max-width: 768px) {
  flex-direction: column;
  align-content: center;
}
`

const Section = styled.div`
  border-radius: 4px;
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  flex: 0 0 50%;
  max-width: 33%;
  position: relative;
  width: 100%;
  border: 1px solid;
  border-color: ${props => props.theme.statColor};
  margin: 2px;
  @media (max-width: 768px) {
    flex-direction: column;
    flex: 0 0 100%;
    max-width: 85%;
  }
`

const SectionTitle = styled.h2`
  color: ${props => props.theme.btnColor};
  background: ${props => props.theme.boxBg};
  font-size: 20px;
  padding: 4px 8px;
  border-bottom: 1px solid black;
`

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.statColor};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  padding: 0 4px;
`

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.22;
  color: ${props => props.theme.color};
  padding: 0 4px;
`

const reduceToCat = (a, { category, ...x}) => ({ category, data: a['data'].concat(x) })
const init = { category: '', data: [] }

// RENDERING functions
const mapDataToSection = (item, idx) => {
  return (
    <div key={idx}>
      <Link href={item.link}>{item.subject}</Link>
      <Desc>{item.description}</Desc>
    </div>
  )
}

const renderSection = secData => {
  return secData.map((it, ix) => (
    <Section key={ix}>
      <SectionTitle>
        {it.category}
      </SectionTitle>
      {it.data.map(mapDataToSection)}
    </Section>
  ))
}

export default () => {

  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    async function fetchData() {
      setError()
      try {

        const { data } = await axios.get('https://covid19.borisky.me/api/data/resources')

        const datakeys = [...new Set(data.map(i => i.category))]
        const d = datakeys
            .map(key => data.filter(i => i.category === key))
            .map(each => each.reduce(reduceToCat, init))

        setData(d)
      } catch(e) {
        setError(e)
      }
    }
    fetchData()
  }, [])


  if (error) {
    return <div> Received Error Fetching Information ... Let Me Know About This: boristofu@gmail.com</div>
  }

  return (
    <>
      <h1 style={{marginBot: '12px', fontSize: '24px', textAlign: 'center'}}>Useful Information For All</h1>

      <Wrapper>

        {
          data && renderSection(data)
        }

      </Wrapper>

    </>
  )

}
