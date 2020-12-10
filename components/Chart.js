import Bar from './Bar'
import LineChart from './LineChart'

function Chart(props) {
  const { type } = props

  const rend = type === 'bar' 
    ? (<Bar {...props} />)
    : (<LineChart {...props}/>)

  return rend
}

export default Chart
