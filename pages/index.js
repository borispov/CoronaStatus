import CoronaApp from '../components/CoronaApp'

import { FadeIn } from '../components/S'

import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

import Head from 'next/head'


export default function IndexPage({ isHeb }) {

  return (
    <>
      <Head>
        <title>nCorona - Novel Coronavirus Statistics & Resources for Coping</title>
      </Head>
      <FadeIn delay="0.5s">
        <CoronaApp isHeb={isHeb} />
        <InfoSection />
      </FadeIn>
    </>
  )
}
