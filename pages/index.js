import CoronaApp from '../components/CoronaApp'

import axios from 'axios'
import { FadeIn } from '../components/S'

import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'

import Head from 'next/head'


function IndexPage({ isHeb, userLocation, yesterdayCn, yesterdayGlobal}) {
  return (
    <>
      <Head>
        <title>nCorona - Novel Coronavirus Statistics & Resources for Coping</title>
      </Head>
      <FadeIn delay="0.5s">
        <CoronaApp isHeb={isHeb} userLocation={userLocation} yesterdayCn={yesterdayCn} yesterdayGlobal={yesterdayGlobal} />
        <InfoSection />
      </FadeIn>
    </>
  )
}

IndexPage.getInitialProps = async (ctx) => {
  const { data } = await axios.get('https://corona.lmao.ninja/v2/countries/israel?yesterday=true')
  const globalData = await axios.get('https://corona.lmao.ninja/v2/all?yesterday=true')
  const yesterdayGlobal = {
    active: globalData.data.active,
    critical: globalData.data.critical,
    cases: globalData.data.cases,
    todayCases: globalData.data.todayCases,
    recovered: globalData.data.recovered,
    deaths: globalData.data.deaths,
    country: globalData.data.country,
    affectedCountries: globalData.data.affectedCountries
  }

  const yesterdayCn = {
    active: data.active,
    cases: data.cases,
    todayCases: data.todayCases,
    recovered: data.recovered,
    deaths: data.deaths,
    country: data.country
  }
  return {yesterdayCn, yesterdayGlobal }
}

export default IndexPage
