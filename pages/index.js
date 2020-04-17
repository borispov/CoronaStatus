import axios from 'axios'
import Head from 'next/head'
import { useEffect, useContext } from 'react'

import CoronaApp from '../components/CoronaApp'
import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'
import { FadeIn } from '../components/S'
import useWorldData from '../hooks/useWorldData'

import { ProxyContext } from '../context/proxy-context'
import { LocaleContext } from '../context/LocaleContext'
import { getInitialLocale } from '../locales/getInitialLocale'


function IndexPage({ isHeb, worldTime, yesterdayGlobal}) {

  const [proxy]  = useContext(ProxyContext)

  return (
    <>
      <Head>
        <title>nCorona - Novel Coronavirus Statistics & Resources for Coping</title>
      </Head>
      <FadeIn delay="0.5s">
       <CoronaApp isHeb={isHeb} userLocation={proxy.countryName} worldTime={worldTime} yesterdayGlobal={yesterdayGlobal} />
        <InfoSection />
      </FadeIn>
    </>
  )
}

IndexPage.getInitialProps = async (ctx) => {

  const worldTime = await useWorldData()
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

  return {yesterdayGlobal, worldTime}
}

export default IndexPage
