import GlobalStyle from './Global'
import { themes } from '../utils/themes'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import CoronaApp from '../components/CoronaApp'

import { FadeIn } from '../components/S'

import InfoSection from '../components/InfoSection'
import Footer from '../components/Footer'


export default function IndexPage({ isHeb }) {

  return (
    <>
      <FadeIn delay="0.5s">
        <CoronaApp isHeb={isHeb} />
        <InfoSection />
      </FadeIn>
    </>
  )
}
