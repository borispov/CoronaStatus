import React from 'react'
import Button from './Button'
import axios from 'axios'
import sortForChart from '../utils/sortForChart'
import Chart from './Chart'
import Container from './Container'
import Spinner from './Spinner'

const baseURL = `https://nCorona.live/api/v1/alltime/`

const worldTimeData = async () => {
  const data = await axios.get(baseURL)
  const dataRes = await sortForChart(data.data)
  console.log(dataRes);
  return dataRes
}

class CaseChart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      dataToPresent: 'worldCases',
      worldData: [],
      worldLabels: [],
      worldCases: [],
      deathCases: [],
      newCases: [],
      showWorld: true,
      loading: false
    }
  }

  present = val => this.setState({dataToPresent: val})

  async componentDidMount() {
    this.setState({ loading: true })

    try {
      const timeStats = await worldTimeData()
      const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases')
      const deathCases = timeStats && timeStats.datasets.filter(a => a.label === 'deaths')
      const newCases = timeStats && timeStats.datasets.filter(a => a.label === 'new cases')
      const worldLabels = timeStats && timeStats.labels



      this.setState({
        worldData: timeStats,
        worldCases,
        deathCases,
        newCases,
        worldLabels,
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
      return <Container><h1>{' error occured:' + this.state.error}</h1></Container>
    }

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
