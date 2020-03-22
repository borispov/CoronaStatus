import React from 'react'
import Button from './Button'
import axios from 'axios'
import useTime from '../utils/useTime'
import sortForChart from '../utils/sortForChart'
import Chart from './Chart'
import Container from './Container'
import styled from 'styled-components'

const baseURL = `http://covid19.borisky.me:3003/api/v1/alltime/`

const countryTimeData = async (cn) => {
  console.log('fetchinGGGGG');
  const loc = cn || await currentCountry()
  const data = await axios.get(baseURL+loc)
  const dataRes = await sortForChart(data.data)
  return dataRes
}

const worldTimeData = async () => {
  const data = await axios.get(baseURL)
  const dataRes = await sortForChart(data.data)
  return dataRes
}

async function currentCountry(){
  return await axios
    .get('https://extreme-ip-lookup.com/json/')
    .then(res => res.data.country)
    .catch(e => 'israel')
}


class CaseChart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      dataToPresent: 'worldCases',
      worldData: [],
      countryData: [],
      worldLabels: [],
      countryLabels: [],
      worldCases: [],
      deathCases: [],
      newCases: [],
      countryCases: [],
      showWorld: true,
      loading: false
    }
  }

  present = val => this.setState({dataToPresent: val})

  async componentDidMount() {
    this.setState({ loading: true })
    console.log(this.props);

    try {
      const timeStats = await worldTimeData()
      const countryStats = await countryTimeData(this.props.country)

      const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases')
      const deathCases = timeStats && timeStats.datasets.filter(a => a.label === 'deaths')
      const newCases = timeStats && timeStats.datasets.filter(a => a.label === 'new cases')

      const countryCases = countryStats && countryStats.datasets.filter(a => a.label === 'cases')
      const countryLabels = countryStats && countryStats.labels
      const worldLabels = timeStats && timeStats.labels
      const worldDeaths = timeStats && timeStats.datasets.filter(a => a.label === 'deaths')


      this.setState({
        worldData: timeStats,
        countryData: countryStats,
        worldCases,
        deathCases,
        newCases,
        countryCases,
        worldLabels,
        countryLabels,
        loading: false
      })
    } catch(err) {
      this.setState({ loading: false, error: err })
    }


  }

  render() {

    if (this.state.loading) {
      return <Container><h1>Loading Data . . .</h1></Container>
    }
    if (this.state.error) {
      return <Container><h1>{this.state.error}</h1></Container>
    }

    // console.log(this.state.worldCases);
    return (
      <Container >
        <p style={{margin: '82px 0 0 0'}}>
          {this.props.isHeb &&
              'שיעור התפשטות הנגיף בעולם, מקרי מוות ומסרים מקרים חדשים ליום'
                || 'Growth Rate of the virus in the world, including deaths and new cases'}
        </p>
        {
          this.state.worldData &&
            <Chart 
              type='line'
              labels={this.state.worldLabels}
              data={this.state[this.state.dataToPresent]}
              label='Global Statistics'
              theme={this.props.theme}
            /> || <div> Loading Charts ... </div>
        }
        <div style={{display: 'flex', justifyContent: 'space-around', padding: '34px 32px'}}>
          <Button onClick={() => this.present('worldCases')}>{this.props.isHeb && 'נדבקים' || 'Cases'}</Button>
          <Button onClick={() => this.present('deathCases')}>{this.props.isHeb && 'מקרי מוות' || 'Deaths'}</Button>
          <Button onClick={() => this.present('newCases')}>{this.props.isHeb && 'מקרים חדשים' || 'New cases'}</Button>
        </div>
      </Container>
    )
  }

}

export default CaseChart
