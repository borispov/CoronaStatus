import SearchCountry from '../components/SearchCountry'
import styled from 'styled-components'
import GlobalStyle from './Global'
import { useState, useEffect } from 'react'

// Seems like it's not UP TO DATE
// fetch('https://covid19.mathdro.id/api/countries/Italy')

// const url = 'https://corona.lmao.ninja/countries'

const Container = styled.div`
  max-width: 760px;
  margin: 0 auto;
  text-align: center;
`

const Grid = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1.5rem;
`

export default function IndexPage() {
  return (
    <Container>
      <GlobalStyle />
      <SearchCountry />
    </Container>
  )
}
