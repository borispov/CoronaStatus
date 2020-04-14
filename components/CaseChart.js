import React from 'react'
import { Button, Container, Paragraph } from './S'
import axios from 'axios'
import sortForChart from '../utils/sortForChart'
import Chart from './Chart'

const baseURL = `https://nCorona.live/api/v1/alltime/`

const worldTimeData = async (theme) => {
  const data = await axios.get(baseURL)
  const dataRes = await sortForChart(data.data, theme)
  return dataRes
}

class CaseChart extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      active: 'worldCases',
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

  present = val => {
    this.setState({dataToPresent: val, active: val})
  }

  async componentDidMount() {
    this.setState({ loading: true })

    try {
      const timeStats = await worldTimeData(this.props.theme)
      const worldCases = timeStats && timeStats.datasets.filter(a => a.label === 'cases')
      const deathCases = timeStats && timeStats.datasets.filter(a => a.label === 'deaths')
      const newCases = timeStats && timeStats.datasets.filter(a => a.label === 'new cases')
      const worldLabels = timeStats && timeStats.labels

      this.setState({
        worldData: timeStats,
        worldCases,
        deathCases,
        newCases,
        timeStats,
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
      <>
          <Paragraph mw='auto' center secondary>
          {this.props.isHeb &&
            'להלן: שיעור התפשטות הנגיף בעולם לפי: מקרי מוות ומסרים מקרים חדשים ליום'
                || 'Growth Rate of the virus in the world, including deaths and new cases'}
          </Paragraph>

        <div style={{display: 'flex', justifyContent: 'space-evenly', padding: '34px 32px 8px 32px'}}>

        </div>
        {
          this.state.worldData &&
            <Chart 
              legend={false}
              type='line'
              labels={this.state.worldLabels}
              // data={this.state[this.state.dataToPresent]}
              data={[...this.state.worldCases, ...this.state.deathCases, ...this.state.newCases]}
              label={this.props.isHeb ? 'נתונים מהעולם' : 'Global'}
              theme={this.props.theme}
            /> || <div> Loading Charts ... </div>
        }
      </>
    )
  }

}

export default CaseChart
