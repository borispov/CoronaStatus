import sortForChart from '../utils/sortForChart'
import axios from 'axios'

const baseURL = `https://nCorona.live/api/v1/alltime/world`

const useWorldData = async () => {
  const data = await axios.get(baseURL)
  const dataRes = await sortForChart(data.data)
  return dataRes
}

(async () => await axios.get(baseURL))()

export default useWorldData
