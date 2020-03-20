import styled from 'styled-components'

const descriptionTextEn = 'This website makes use of public health data, specifically www.ourworldindata.org and WHO.int'

const Text = styled.p`
  color: ${props => props.theme.categoryColor};
  font-size: 14px;
  font-family: 'Open Sans';
  line-height: 1.6;
  max-width: 520px;
`

const Wrap = styled.div`
  display: block;
  width: 620px;

  max-width: 620px;
  margin: 0 auto 24px;
`

const Href = styled.a`
  outline: none;
  text-decoration: none;
  font-weight: bold;
  color: ${props => props.theme.categoryHoverColor};
`

export default () => (
  <Wrap>
    <Text>This website makes use of public health data, specifically <Href href="https://www.ourworldindata.org">www.ourworldindata.org</Href> and <Href href="https://WHO.int">WHO.int</Href>
    </Text>
  </Wrap>
)
