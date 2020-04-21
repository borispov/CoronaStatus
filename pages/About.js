import styled, { withTheme, keyframes, css } from 'styled-components'

import { Heading, FadeIn, Paragraph, Container } from '../components/S'
import HeaderDescription from '../components/HeaderDescription'
import Head from 'next/head'

import useTranslation from '../hooks/useTranslation'

const Wrapper = styled.article`
  direction: ${({ dir }) => dir || 'inherit'};
  margin-left: 3%;
  margin-right: 3%;
`

const Grid = styled.section`
  display: grid;
  // grid-template-columns: 2em 1fr 1fr 2em;
  // grid-template-rows: auto 35vh 1em auto auto;

  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-gap: 5px;

  grid-template-areas: 
    "title title title"
    "header header header"
    "image image image"
    "msg msg msg"
    "line line line"
    "list list list"
    "contact contact contact";

  @media (min-width: 768px) and (max-width: 1123px) {
    grid-template-columns: 6em 1fr 6em;
    grid-template-areas:
      ". title ."
      ". header ."
      ". image ."
      "msg msg msg"
      "line line line"
      "list list list"
      "contact contact contact";
  }
  @media (min-width: 1124px) {
    grid-template-columns: 4em 1fr 3em 1fr 4em;
    grid-template-areas:
      ". title title title ."
      ". header header header ."
      "image image image image image"
      ". msg . list ."
      "line line line line line"
      ". contact contact contact .";
  }
`

const Line = styled.hr`
  grid-area: line;
  border-radius: 12px;
  margin: 1em 0;
  color: rgba(0,0,0,0.45);
`

const Welcome = styled.p`
  grid-area: header;
  color: ${({ theme }) => theme.text.primary};
  font-size: 1.18rem;
  line-height: 1.85;
  margin-bottom: 2em;
  text-align: center;
  margin: 0 auto;
  word-spacing: 2.5px;
  margin-bottom: 1em;

  @media (min-width: 1123px) {
    max-width: 70ch;
  }

`

const WelcomeImage = styled.div`
  grid-area: image;
  width: 100%;
  border: 1px solid ${props => props.theme.primaryVariant + '99'};
  border-radius: 14px;
  padding: 0.125em;
  max-height: 480px;
  img {
    width: 100%;
    height: 100%;
    box-shadow: ${props => props.theme.shadows[2]};
    border-radius: 9px;
  }

  margin-bottom: 2.25em;

`

const Title = styled(Heading)`
  grid-area: title;
  font-weight: 700;
  font-family: 'Rubik';
  letter-spacing: 1.4px;
  word-spacing: 4px;
  direction: ltr;
  line-height: 1.15;
  color: #121212;
  text-align: ${({ dir }) => dir === 'ltr' ? 'left': 'center'};
  margin-bottom: .725em;
  @media (min-width: 1124px) {
    text-align: center;
    margin: 0 auto;
    margin-bottom: .625em;
  }
`

const Message = styled.div`
  grid-area: msg;
  line-height: 1.65;
  color: ${({ theme }) => theme.text.secondary};
  font-size: 1.15rem;
  a {
    color: ${({ theme }) => theme.error2};
    text-decoration: none;
    font-weight: 500;
    letter-spacing;
    border-bottom: 2px solid ${({ theme }) => theme.error2};
    &:hover {
      color: ${({ theme }) => theme.error};
    }
  }
  @media (min-width: 1123px) {
    max-width: 40ch;
  }
`

const Contact = styled.section`
  grid-area: contact;

  margin-top: 2em;
  text-align: center;
  grid-row: -1;
  font-size: .915rem;
  word-spacing: 5px;
  font-weight: 500;
  a {
    font-style: italic;
    text-decoration: none;
    font-weight: 700;
    color: ${({ theme }) => theme.primaryColor};
    border-bottom: 2px solid ${({ theme }) => theme.primaryColor};
  }
`

const List = styled.ol`
  grid-area: list;
  padding: 0.2em;
`
const Item = styled.li`
  font-size: 1rem;
  line-height: 1.85;
  font-weight: 400;
  font-family: monospace;
  padding: 0.175em 0.225em;
  a {
    text-decoration: none;
    font-weight: 700;
    border-bottom: 1px solid ${props => props.theme.error2};
  }
`

export default withTheme(() => {

  const { t, locale } = useTranslation()

  const contact = { dangerouslySetInnerHTML: { __html: t('contact', 'aboutPage')}}
  const welcomeMsg = { dangerouslySetInnerHTML: { __html: t('welcome', 'aboutPage')}}
  const contributeMsg = { dangerouslySetInnerHTML: { __html: t('contributeMsg', 'aboutPage')}}
  const contributeList = t('contributeList', 'aboutPage')

  const dir = locale === 'he' ? 'rtl' : 'ltr'

  return (
    <Wrapper dir={dir} style={{marginLeft: '3%', marginRight: '3%'}}>
      <FadeIn duration='0.2s' delay="0.1s">
        <Container style={{ marginBottom: '62px', marginTop: '10em' }}>

          <Grid>
            <Title dir={dir} >Alone, <br/> But Together</Title>
            <Welcome{ ...welcomeMsg }></Welcome>
            <WelcomeImage>
              <img src="./hands.jpg" />
            </WelcomeImage>
            <Line />
            <Message { ...contributeMsg}></Message>

              <List>
                <h2>What We Need:</h2>
                {
                  contributeList
                    .map((item, i) => {
                      let content = item.includes(' <') 
                        ? { dangerouslySetInnerHTML: { __html: item }}
                        : null
                      return (
                        <Item {...content} key={i}>{ content ? null : item }</Item>
                      )
                    })
                }
              </List>
              <Contact {...contact}></Contact>
          </Grid>
        </Container>

        <HeaderDescription secondary txt={'This website is created by Boris Povolotsky'} />
      </FadeIn>
    </Wrapper>
  )

})
