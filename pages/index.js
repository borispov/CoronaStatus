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

const getCountryFromData = response => response.data.country
const currentCountry = async (url) => await axios.get(url).then(getCountryFromData).catch(e => 'israel')

function IndexPage({ worldTime, yesterdayGlobal, newProxy }) {

  const [proxy, setProxy]  = useContext(ProxyContext)

  useEffect(() => {
    let ignore = false
    if (newProxy && !ignore) {
      setProxy(newProxy)
    }
    return () => { ignore: true }
  }, [newProxy])

  return (
    <>
      <Head>
        <title>nCorona - Novel Coronavirus Statistics & Resources for Coping</title>
      </Head>
      <FadeIn delay="0.5s">
       <CoronaApp userLocation={proxy.countryName} worldTime={worldTime} yesterdayGlobal={yesterdayGlobal} />
        <InfoSection />
      </FadeIn>
    </>
  )
}

IndexPage.getInitialProps = async ({ req }) => {

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

  if (req) {
      const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress
      const localAddresses = ['::1', '127.0.0.1', 'localhost']
      // Construct URL with IP ADDRESS
      const proxyUrl = !localAddresses.includes(ipAddress) && `https://extreme-ip-lookup.com/json/${ipAddress}` || null

    try {
      const countryName = await currentCountry('')
      const newProxy = { countryName, ipAddress }
      return { newProxy,  worldTime, yesterdayGlobal }
    } catch(e) {
      return { errorCode: e.code, errorMessage: e.message, yesterdayGlobal, worldTime }
    }
  }

  console.log('WE ARE ALSOOOOOOOOOOO HERE');

  return {yesterdayGlobal, worldTime, newProxy: null}
}

export default IndexPage
