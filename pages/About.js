import { Heading, Button, Paragraph, FadeIn, simpleWrapper, Container } from '../components/S'
import HeaderDescription from '../components/HeaderDescription'
import Head from 'next/head'

export default ({ isHeb }) => {


  const welcome = 'The goal of this project is to provide resources for people to cope with Coronavirus, be it link for online activities, important news, psychological methods to help with regulating anxiety and overwhelming emotions.'

  return (
    <div style={{ backgroundColor: '#d9d9d933' }}>
      <FadeIn duration='0.2s' delay="0.1s">
        <Container style={{ direction: 'ltr', marginBottom: '42px' }}>
          <Heading style={{ textAlign: 'center'}} > Bonjour!</Heading>
          <HeaderDescription txt={welcome} />

          <HeaderDescription txt={'This website is created by Boris Povolotsky'} />
        
        <Paragraph>
          All information provided is legal.
          The data is gathered through free sources like:<br/> <strong>WHO</strong>, <strong>worldometers</strong>, <strong>ourwourldindata</strong> and government health ministry websites.
          <br />
          Resources section is a handmade csv file shared between colleagues and people with valuable information to share. <br />If you have something valuable to contribute to this list, please let me know via <a href="mailto:boristofu@gmail.com"> email </a>
          <br />
          <br />
          If you like to contribute, say hi or leave feedback you can accomplish that either by <a href="https://ncorona.live/Coffee">Supporting</a> or email. Let me know what you like and don't like.
        You can <a href="mailto:boristofu@gmail.com"> Mail Me </a>.
        </Paragraph>
      <br />
      <br />
      <HeaderDescription txt={'A little bit about me'} />
      <Paragraph>
        When I am not practicing web development and doing geeky stuff, I am usually concerned with either work or family. I am a father of a wonderful little girl whose at the moment of writing is 1y10m old, and a Husband with a lovely, supporting and loving wife who has been a part of assembling this project from day [0]. At work, I'm practicing as a social worker in the mental health field, a place that reminds me the importance of humility.
      </Paragraph>

    </Container>

      </FadeIn>
    </div>
  )

}
