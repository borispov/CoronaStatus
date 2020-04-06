import styled from 'styled-components'

const descriptionTextEn = 'This website makes use of public health data, specifically www.ourworldindata.org and WHO.int'

const Text = styled.p`
  color: ${props => props.theme.text.primary};
  font-size: 14px;
  font-family: 'Open Sans';
  line-height: 1.5;
  max-width: 520px;
  text-align: center;
  margin: 0 auto;
  @media (max-width: 768px) {
    max-width: 380px;
  }

  @media (max-width: 350px) {
    max-width: fit-content;
  }

`

const Wrap = styled.div`
  z-index: 9999;
  position: relative;
  display: block;
  width: 620px;
  max-width: 620px;
  margin: 0 auto 24px;
  @media (max-width: 768px) {
    width: 100%;
    max-width: 380px;
  }

  @media (max-width: 320px) {
    // max-width: fit-content;
  }

`

const Href = styled.a`
  outline: none;
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.primaryVariant};
`

export default ({ txt }) => {
  const toShow = txt ? <Text secondary>{txt}</Text> :
  <Text>This website makes use of public health data, specifically <Href href="https://www.ourworldindata.org">www.ourworldindata.org</Href> and <Href href="https://WHO.int">WHO.int</Href>
  </Text>
  return (
  <Wrap>
    { toShow }
  </Wrap>
  )
}
