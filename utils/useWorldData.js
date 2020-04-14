import sortForChart from './sortForChart'
import axios from 'axios'

const baseURL = `https://nCorona.live/api/v1/alltime/`

const useWorldData = async () => {
  const data = await axios.get(baseURL)
  const dataRes = await sortForChart(data.data)
  return dataRes
}

export default useWorldData
