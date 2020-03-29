import { useState, useEffect } from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
import styled, { withTheme } from 'styled-components'
import Link from 'next/link'

const Wrapper = styled.div`
  background: ${props => props.theme.bgColor};
  color: ${props => props.theme.color};
  direction: ltr;
`

const Heading = styled.h1`
  font-size: 4.5rem;
  color: ${props => props.theme.color};
  font-family: 'Montserrat';
  line-height: 1.5;
`

const Paragraph = styled.p`
  font-size: 16px;
  max-width: 480px;
  margin: 0 auto;
  line-height: 1.5;
  padding: 2px;
  color: ${props => props.theme.lightColor};
`

const Heading2 = styled(Heading)`
  margin-top: 8px;
  font-size: 1.6rem;
  color: ${props => props.theme.color};
`

const Box = styled.div`
  max-width: 620px;
  width: 100%;
  padding: 12px;
  height: auto;
  margin: 0 auto;
  background: ${props => props.theme.bgColor}DD;
`

const BoxTitle = styled(Heading)`
  font-size: 18px;
  line-height: 1.2;
`
const BoxButtons = styled.div`
  margin: 6px;
  padding: 8px;
  > button {
    margin-left: 12px;
  }
`

const BoxCount = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 16px;
  text-align: center;
  font-size: 16px;
  font-weight: 400;
  margin-left: 12px;
  margin-right: 12px;
  width: 80px;
  height: 64px;
  // border-radius: 16px;
  border: 1px solid ${props => props.theme.color};
  background: ${props => props.theme.bgColor};
  border-radius: 4px;
  color: ${props => props.theme.color};
  border-bottom: 4px solid gray;
  border-top: 4px solid gray;
  border-right: 1px solid gray;
  border-left: 1px solid gray;
  position: relative;
`

const ErrorText = styled.h2`
  font-size: 16px;
  font-weigth: 600;
  font-family: monospace;
  padding: 2px 4px;
  color: ${props => props.theme.color};
`


const hebText = 'שלום ותודה רבה לכם על כך שהנכם שוקלים לבצע תרומה עבור החזקת האתר הזה. אתר זה חינמי ופתוח לשימוש כלל הציבור. היני מודה לכם על זמנכם.'
const engText = 'Hello and thank you for considering purchasing me a coffee in such unpleasant times. This website is free for all. As time allows, I\'ll keep updating and adding features.'
const farewellEng = 'Take care of yourself and your beloved ones.'
const farewellHeb = 'שמרו על עצמכם ועל אהובכם'

export default withTheme(({ isHeb }) => {
  const [counter, setCounter] = useState(2);
  const [error, setError] = useState(false)

  const errorHeb = 'אפילו זוג כפפות עולה יותר מדולר'
  const errorEng = 'C\'mon Even a pair of gloves cost more than 1$...'

  const handlePlusClick = c => {
    setCounter(c + 1)
    setError()
  }

  const handleClick = op => {
    const isPlus = op === 'plus'
    const count = counter

    isPlus && handlePlusClick(count)
    if (!isPlus && counter === 2) {
      setError(true)
      return
    }
    !isPlus && setCounter(count -1)
  }

  return (
    <Wrapper>
      <Container>
        <Heading>{ isHeb && 'תודה רבה' || 'Thank You!' }</Heading>
        <Paragraph>
          { isHeb ? hebText : engText }
        </Paragraph>
        <Heading2>{isHeb ? farewellHeb : farewellEng}</Heading2>
        <Box>
          <BoxTitle>{!isHeb ? 'Minimum 2$ Coffee' : 'מינימום 2$ קפה שחור'}</BoxTitle>
          <BoxButtons>
            <Button onClick={() => handleClick('plus')} radius='8px' bold link bgColor='#218838' color='white'>+</Button>
            <Button onClick={() => handleClick('minus')} radius='8px' bold link bgColor='#DC3545' color='white'>-</Button>
            <BoxCount>{ counter }$</BoxCount>
          </BoxButtons>
          <ErrorText>{error ? (isHeb &&errorHeb || errorEng) : ''}</ErrorText>
        </Box>
        <BoxButtons>
          <Button pointer bgColor='#218838'>
            <a style={{textDecoration: 'none', color: 'inherit' }} href={'https://paypal.me/BPov/' + counter} target="_blank">{isHeb ? 'המשך' : 'Support'}</a>
          </Button>
          <Button pointer bgColor='#a1a1a1'>
            <Link href="/">
              <a style={{textDecoration: 'none', color: 'inherit' }}>
              { isHeb ? 'חזור לאתר' : 'Back' }
            </a>
            </Link>
          </Button>
        </BoxButtons>

        {/* */}
      </Container>
    </Wrapper>
  )
})
