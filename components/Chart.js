import Bar from './Bar'
import LineChart from './LineChart'

export default (props) => {
  const { type } = props

  const rend = type === 'bar' 
    ? (<Bar {...props} />)
    : (<LineChart {...props}/>)

  return rend
}
