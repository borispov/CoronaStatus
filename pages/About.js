import { Heading, Button, Paragraph, FadeIn, simpleWrapper, Container } from '../components/S'
import HeaderDescription from '../components/HeaderDescription'
import Head from 'next/head'

import useTranslation from '../hooks/useTranslation'


export default () => {

  const { t, locale } = useTranslation()

  const overview = {
    dangerouslySetInnerHTML: { __html: t('overview', 'aboutPage') },
  }
  const bio = {
    dangerouslySetInnerHTML: { __html: t('bio', 'aboutPage') },
  }

  const contact = {

    dangerouslySetInnerHTML: { __html: t('contact', 'aboutPage') },
  }
  return (
    <div>
      <FadeIn duration='0.2s' delay="0.1s">
        <Container style={{ marginBottom: '62px' }}>
          <Heading style={{ textAlign: 'center'}} > Bonjour!</Heading>

        <Paragraph mw='720px' style={{ margin: '32px auto 0'}} direction={locale === 'he' ? 'rtl' : 'ltr'}>
          <div>{t('welcome', 'aboutPage')}</div>
          <br />
          <div {...overview}></div>
          <div {...contact}></div>
          <br />
          <h1 style={{ textAlign: 'center' }} > nCorona's BIO</h1>
          <div className="bio" {...bio}></div>
          </Paragraph>
          <br />


    </Container>

        <HeaderDescription secondary txt={'This website is created by Boris Povolotsky'} />
      </FadeIn>
    </div>
  )

}
