import { useState, useEffect } from 'react'
import { Heading, Button, Paragraph, FadeIn, simpleWrapper, Container } from '../components/S'
import styled, { withTheme } from 'styled-components'
import Link from 'next/link'

const paypalMe = 'https://paypal.me/BPov/'
const paypalDonate = 'https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=boristofu%40gmail.com&item_name=donations+for+maintaining+informational+website+regarding+Coronavirus&currency_code=USD&source=url&amount='
const koFi = 'https://ko-fi.com/borispov/'

const Message = styled(Heading)`
  font-size: 16px;
  background: ${props => props.theme.primaryLight};
  color: ${props => props.theme.onPrimary};
  width: fit-content;
  margin: 0 auto;
  padding: 6px 12px;
  border-radius: 8px;
  margin-top: 28px;
`

const Text = styled.p`
  text-align: start;
  padding: 4px;
  font-size: 12px;
  color: ${props => props.theme.text.secondary};
  margin-top 16px;
  line-height: 1.65;
  li {
    padding: 6px;
  }
`

const Heading2 = styled(Heading)`
  margin-top: 14px;
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

const BoxButtons = styled.div`
  // direction: ltr;
  margin: 6px;
  padding: 8px;
  > button {
    margin-left: 12px;
  }
`

const Flex = styled.div`
  display: flex;
`

const BoxFlex = styled(Flex)`
  margin-top: 24px;
  flex-direction: column;
  justify-content: space-between;
  margin-left: auto;
  margin-right: auto;
  > div {
    margin: 6px;
  }

  > div > button {
    margin: 4px 18px;
  }

  @media (min-width: 660px) {
    justify-content: space-around;
  }
`


const BoxCount = styled.div`
  display: inline-block;
  vertical-align: middle;
  padding: 16px;
  text-align: center;
  font-size: 22px;
  font-weight: 500;
  margin-left: 18px;
  margin-right: 18px;
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
  text-shadow: 0px 1px 3px rgba(0,0,0,0.16) 1px 2px 4px rgba(0,0,0,0.26);
`

const ErrorText = styled.h2`
  font-size: 16px;
  font-weigth: 600;
  font-family: monospace;
  padding: 2px 4px;
  color: ${props => props.theme.color};
  transition: all 0.3s ease-in-out;
`


const hebText = 'שלום ותודה רבה לכם על כך שהנכם שוקלים לבצע תרומה עבור החזקת האתר הזה. אתר זה חינמי ופתוח לשימוש כלל הציבור. היני מודה לכם על זמנכם.'
const engText = 'Hello and thank you for considering purchasing me a coffee in such unpleasant times. This website is free for all. As time allows, I\'ll keep updating and adding features.'
const farewellEng = 'Take care of yourself and your beloved ones.'
const farewellHeb = 'שמרו על עצמכם ועל אהובכם'


export default withTheme(({ isHeb, theme }) => {
  const [counter, setCounter] = useState(2)
  const [error, setError] = useState(false)

  const errorHeb = 'אפילו זוג כפפות עולה יותר מדולר'
  const errorEng = 'C\'mon Even a pair of gloves cost more than 1$...'

  const instructionsEng = [
    ' via ko-fi.com, you can donate in 2$ increments and leave a message ( Feedback, Suggestions, Feature Request... ). ATTENTION: You can tip without registration to PayPal. Even if you are prompted with Sign up message instead of Pay with Credit Card, just click on sign up and it\'ll first let you to complete the transaction. ' ]

  const instructionsHeb = [
    'תרומה דרך ממשק של ko-fi.com. הנכם תהיו מועברים לדף ה״קופי״ שלי, דרכו תוכלו להשאיר טיפ עם הודעה. שימו לב, ניתן לתרום ללא הרשמה! כשתועברו לדף של פייפאל ותתבקשו להירשם, ליחצו על כפתור ההרשמה - אתם תועברו לדף של ביצוע תשלום.',
    'העברת טיפ ישירות דרך paypal. תוכלו לבחור כל סכום, אך ללא הודעה. \n* אני ממליץ להשתמש בממשק ko-fi.com. אפשרות התרומה דרך פייפאל מוצגת כאן עבור אלו שאינם מסתדרים עם תשלום דרך ko-fi.com',
  ]

  const instructions = (ins) => {
    return (
      <>
        <ol>
          {
            ins.map((opt, index) => <li key={ index + 'instruction'}>{opt}</li>)
          }
        </ol>
      </>
    )
  }

  const instructionToRender = isHeb && instructions(instructionsHeb) || instructions(instructionsEng)

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
    <simpleWrapper>
      <Container textAlign>
        <FadeIn duration="0.5s" delay="0.1s">
          <Heading>{ isHeb && 'תודה רבה' || 'Thank You!' }</Heading>
          <Paragraph color={theme.color}>
            { isHeb ? hebText : engText }
          </Paragraph>
          <Heading2>{isHeb ? farewellHeb : farewellEng}</Heading2>
          <Box>
            <BoxButtons>
              <Button bg='transparent' btnColor='onBg' outline onClick={() => handleClick('plus')} radius='8px' bold link bgColor='#218838' color='white'>+</Button>
              <Button bg='transparent' btnColor='onBg' outline onClick={() => handleClick('minus')} radius='8px' bold link bgColor='#DC3545' color='white'>-</Button>
              <BoxCount>{ counter }$</BoxCount>
            </BoxButtons>

            <ErrorText>{error ? (isHeb && errorHeb || errorEng) : ''}</ErrorText>

          {/*
            <Message fontSize='18px'>{!isHeb ? 'Minimum 2$ Coffee' : 'מינימום 2$ קפה שחור'}</Message>
          */}
          </Box>
          <BoxButtons>

            <BoxFlex>
              <div>
                  <a style={{cursor: 'pointer', padding: 'inherit', margin:'inherit', textDecoration: 'none', color: 'inherit' }} href={paypalDonate + counter} target="_blank">
                    <Button pointer link hoverUp hoverColor='primaryLight' bg='primaryColor'>
                      {isHeb ? 'עם ko-fi' : 'via ko-fi.com (recommended)'}
                    </Button>
                  </a>

                  <a style={{cursor: 'pointer', padding: 'inherit', margin:'inherit', textDecoration: 'none', color: 'inherit' }} href={koFi + counter} target="_blank">
                    <Button link pointer bg='primaryVariant' hoverUp hoverColor='primaryLight' >
                      {isHeb ? 'עם PayPal' : 'PayPal Donate'}
                    </Button>
                  </a>

              </div>

              <div>
              <Button pointer bg='grey'>
                <Link href="/">
                  <a style={{textDecoration: 'none', color: '#797979', marginTop: '32px'}}>
                  { isHeb ? 'חזור' : 'Back' }
                </a>
                </Link>
              </Button>
            </div>

            </BoxFlex>
          </BoxButtons>

          <Text>{ instructionToRender }</Text>

        </FadeIn>

          {/* */}
      </Container>
    </simpleWrapper>
  )
})
