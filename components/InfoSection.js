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
  margin-left: 8px;
  margin-right: 8px;
  margin-top: 16px;
  margin-bottom: 16px;

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
  margin-bottom: 8px;
  border-bottom: 1px solid black;
`

const Link = styled.a`
  text-decoration: none;
  color: ${props => props.theme.statColor};
  font-weight: 700;
  font-size: 18px;
  line-height: 1.5;
  padding: 6px 4px 2px 4px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`

const Desc = styled.p`
  font-size: 16px;
  line-height: 1.3;
  color: ${props => props.theme.color};
  padding: 0 4px;
  padding-bottom: 12px;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

const Title = styled.h1`
  font-size: 28px;
  margin: 36px auto;
  text-shadow: 0 2px 6px rgba(0,0,0,0.16);
  text-align: center;
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

        const { data } = await axios.get('https://nCorona.live/api/data/resources')

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
      <Title>Resources</Title>
      <Wrapper>
        { data && renderSection(data) }
      </Wrapper>
    </>
  )

}
